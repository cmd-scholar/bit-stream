import { StreamCard } from "@/_components/stream/stream-card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const featuredStreams = [
    {
        id: "1",
        title: "Bitcoin Trading Strategies Live",
        streamer: "CryptoMaster",
        viewers: 1234,
        thumbnail: "/placeholder.svg?height=200&width=300",
        category: "Finance",
        isLive: true,
    },
    {
        id: "2",
        title: "Building DeFi Apps Tutorial",
        streamer: "DevGuru",
        viewers: 856,
        thumbnail: "/placeholder.svg?height=200&width=300",
        category: "Education",
        isLive: true,
    },
    {
        id: "3",
        title: "Lightning Network Deep Dive",
        streamer: "BTCExplorer",
        viewers: 642,
        thumbnail: "/placeholder.svg?height=200&width=300",
        category: "Technology",
        isLive: true,
    },
    {
        id: "4",
        title: "Market Analysis & News",
        streamer: "MarketWatch",
        viewers: 2103,
        thumbnail: "/placeholder.svg?height=200&width=300",
        category: "News",
        isLive: true,
    },
];

export default function HomePage() {
    return (
        <div className="container mx-auto px-4 py-8">
            {/* Hero Section */}
            <section className="text-center py-16 mb-16">
                <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-yellow-500 bg-clip-text text-transparent">
                    Stream. Earn. Instantly.
                </h1>
                <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-foreground">
                    in Bitcoin.
                </h2>
                <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                    Tip your favorite creators instantly in BTC via sBTC. Join
                    the future of content monetization.
                </p>
                <Link href="/go-live">
                    <Button
                        size="lg"
                        className="text-lg px-8 py-6 bg-orange-500 hover:bg-orange-600"
                    >
                        Start Streaming
                    </Button>
                </Link>
            </section>

            {/* Featured Streams */}
            <section>
                <div className="flex justify-between items-center mb-8">
                    <h3 className="text-3xl font-bold">
                        Featured Live Streams
                    </h3>
                    <Link href="/browse">
                        <Button variant="outline">View All</Button>
                    </Link>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {featuredStreams.map((stream) => (
                        <StreamCard key={stream.id} stream={stream} />
                    ))}
                </div>
            </section>
        </div>
    );
}
