import { StreamCard } from "@/_components/stream/stream-card";
import { Input } from "@/components/ui/input";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Search } from "lucide-react";

const allStreams = [
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
    {
        id: "5",
        title: "NFT Art Creation Process",
        streamer: "DigitalArtist",
        viewers: 445,
        thumbnail: "/placeholder.svg?height=200&width=300",
        category: "Art",
        isLive: true,
    },
    {
        id: "6",
        title: "Crypto Gaming Tournament",
        streamer: "GameMaster",
        viewers: 1876,
        thumbnail: "/placeholder.svg?height=200&width=300",
        category: "Gaming",
        isLive: true,
    },
];

export default function BrowsePage() {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold mb-8">Browse Live Streams</h1>

            {/* Search and Filters */}
            <div className="flex flex-col md:flex-row gap-4 mb-8">
                <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                    <Input placeholder="Search streams..." className="pl-10" />
                </div>
                <Select>
                    <SelectTrigger className="w-full md:w-48">
                        <SelectValue placeholder="Category" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="all">All Categories</SelectItem>
                        <SelectItem value="finance">Finance</SelectItem>
                        <SelectItem value="education">Education</SelectItem>
                        <SelectItem value="technology">Technology</SelectItem>
                        <SelectItem value="news">News</SelectItem>
                        <SelectItem value="art">Art</SelectItem>
                        <SelectItem value="gaming">Gaming</SelectItem>
                    </SelectContent>
                </Select>
            </div>

            {/* Streams Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {allStreams.map((stream) => (
                    <StreamCard key={stream.id} stream={stream} />
                ))}
            </div>
        </div>
    );
}
