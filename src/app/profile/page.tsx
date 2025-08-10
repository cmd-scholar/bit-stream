import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Upload, Bitcoin } from "lucide-react";
import { StreamCard } from "@/_components/stream/stream-card";

const pastStreams = [
    {
        id: "1",
        title: "Bitcoin Trading Strategies",
        streamer: "You",
        viewers: 1234,
        thumbnail: "/placeholder.svg?height=200&width=300",
        category: "Finance",
        isLive: false,
        date: "2024-01-15",
        duration: "2h 34m",
    },
    {
        id: "2",
        title: "Market Analysis Deep Dive",
        streamer: "You",
        viewers: 856,
        thumbnail: "/placeholder.svg?height=200&width=300",
        category: "Finance",
        isLive: false,
        date: "2024-01-12",
        duration: "1h 45m",
    },
];

export default function ProfilePage() {
    return (
        <div className="container mx-auto px-4 py-8 max-w-6xl">
            <h1 className="text-4xl font-bold mb-8">Profile</h1>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Profile Settings */}
                <div className="lg:col-span-2 space-y-6">
                    <Card>
                        <CardHeader>
                            <CardTitle>Profile Information</CardTitle>
                            <CardDescription>
                                Update your public profile details
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            {/* Avatar Upload */}
                            <div className="flex items-center gap-6">
                                <Avatar className="h-24 w-24">
                                    <AvatarImage src="/placeholder.svg?height=100&width=100" />
                                    <AvatarFallback>CM</AvatarFallback>
                                </Avatar>
                                <div>
                                    <Button variant="outline" size="sm">
                                        <Upload className="h-4 w-4 mr-2" />
                                        Change Avatar
                                    </Button>
                                    <p className="text-xs text-muted-foreground mt-2">
                                        JPG, PNG up to 5MB (400x400 recommended)
                                    </p>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <Label htmlFor="display-name">
                                        Display Name
                                    </Label>
                                    <Input
                                        id="display-name"
                                        defaultValue="CryptoMaster"
                                        placeholder="Your display name"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="username">Username</Label>
                                    <Input
                                        id="username"
                                        defaultValue="cryptomaster"
                                        placeholder="Your username"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="bio">Bio</Label>
                                <Textarea
                                    id="bio"
                                    defaultValue="Bitcoin trader and educator. Sharing strategies and market insights daily."
                                    placeholder="Tell people about yourself..."
                                    rows={4}
                                />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="website">
                                    Website (Optional)
                                </Label>
                                <Input
                                    id="website"
                                    placeholder="https://your-website.com"
                                />
                            </div>

                            <Button>Save Changes</Button>
                        </CardContent>
                    </Card>

                    {/* Past Streams */}
                    <Card>
                        <CardHeader>
                            <CardTitle>Stream History</CardTitle>
                            <CardDescription>
                                Your past broadcasts
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {pastStreams.map((stream) => (
                                    <div key={stream.id} className="relative">
                                        <StreamCard stream={stream} />
                                        <div className="absolute top-2 right-2 bg-black/80 text-white text-xs px-2 py-1 rounded">
                                            {stream.duration}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Stats Sidebar */}
                <div className="space-y-6">
                    <Card>
                        <CardHeader>
                            <CardTitle>Statistics</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="flex items-center justify-between">
                                <span className="text-sm text-muted-foreground">
                                    Total Followers
                                </span>
                                <span className="font-semibold">15,420</span>
                            </div>
                            <div className="flex items-center justify-between">
                                <span className="text-sm text-muted-foreground">
                                    Total Views
                                </span>
                                <span className="font-semibold">234,567</span>
                            </div>
                            <div className="flex items-center justify-between">
                                <span className="text-sm text-muted-foreground">
                                    Streams
                                </span>
                                <span className="font-semibold">47</span>
                            </div>
                            <div className="flex items-center justify-between">
                                <span className="text-sm text-muted-foreground">
                                    Avg. Viewers
                                </span>
                                <span className="font-semibold">1,045</span>
                            </div>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center">
                                <Bitcoin className="h-5 w-5 mr-2 text-orange-500" />
                                Earnings
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="text-center">
                                <div className="text-3xl font-bold text-orange-500">
                                    ₿0.0234
                                </div>
                                <p className="text-sm text-muted-foreground">
                                    Total Tips Received
                                </p>
                            </div>
                            <div className="space-y-2">
                                <div className="flex items-center justify-between text-sm">
                                    <span className="text-muted-foreground">
                                        This Month
                                    </span>
                                    <span className="font-semibold">
                                        ₿0.0089
                                    </span>
                                </div>
                                <div className="flex items-center justify-between text-sm">
                                    <span className="text-muted-foreground">
                                        Last Month
                                    </span>
                                    <span className="font-semibold">
                                        ₿0.0145
                                    </span>
                                </div>
                            </div>
                            <Button variant="outline" className="w-full">
                                Withdraw Earnings
                            </Button>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>Recent Activity</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-3">
                            <div className="flex items-center gap-3 text-sm">
                                <div className="h-2 w-2 bg-green-500 rounded-full"></div>
                                <span className="text-muted-foreground">
                                    New follower: @btcfan123
                                </span>
                            </div>
                            <div className="flex items-center gap-3 text-sm">
                                <div className="h-2 w-2 bg-orange-500 rounded-full"></div>
                                <span className="text-muted-foreground">
                                    Tip received: ₿0.001
                                </span>
                            </div>
                            <div className="flex items-center gap-3 text-sm">
                                <div className="h-2 w-2 bg-blue-500 rounded-full"></div>
                                <span className="text-muted-foreground">
                                    Stream ended: 2h 34m
                                </span>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}
