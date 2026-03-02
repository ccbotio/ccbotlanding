import { NextResponse } from "next/server";

const CACHE_DURATION = 60_000; // 1 minute
let cache: { data: PriceData | null; timestamp: number } = { data: null, timestamp: 0 };

type PriceData = {
  price: number;
  change24h: number;
  sparkline: number[];
};

export async function GET() {
  try {
    const now = Date.now();
    if (cache.data && now - cache.timestamp < CACHE_DURATION) {
      return NextResponse.json(cache.data);
    }

    const [priceRes, chartRes] = await Promise.all([
      fetch(
        "https://api.coingecko.com/api/v3/simple/price?ids=canton-network&vs_currencies=usd&include_24hr_change=true",
        { next: { revalidate: 60 } }
      ),
      fetch(
        "https://api.coingecko.com/api/v3/coins/canton-network/market_chart?vs_currency=usd&days=7",
        { next: { revalidate: 300 } }
      ),
    ]);

    if (!priceRes.ok) throw new Error("CoinGecko API error");

    const priceData = await priceRes.json();
    const cc = priceData["canton-network"];

    let sparkline: number[] = [];
    if (chartRes.ok) {
      const chartData = await chartRes.json();
      const prices: [number, number][] = chartData.prices ?? [];
      // Sample ~30 points for sparkline
      const step = Math.max(1, Math.floor(prices.length / 30));
      sparkline = prices.filter((_, i) => i % step === 0).map(([, p]) => p);
    }

    const result: PriceData = {
      price: cc?.usd ?? 0,
      change24h: cc?.usd_24h_change ?? 0,
      sparkline,
    };

    cache = { data: result, timestamp: now };
    return NextResponse.json(result);
  } catch {
    if (cache.data) {
      return NextResponse.json(cache.data);
    }
    return NextResponse.json({ price: 0, change24h: 0, sparkline: [] }, { status: 500 });
  }
}
