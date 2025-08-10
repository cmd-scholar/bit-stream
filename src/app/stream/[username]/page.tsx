"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
    Heart,
    Users,
    Radio,
    Power,
    Save,
    Upload,
    Settings,
    Eye,
    EyeOff,
    ChevronDown,
    ChevronUp,
} from "lucide-react";
import { ChatBox } from "@/_components/stream/chat-box";
import { TipModal } from "@/_components/stream/tip-modal";

interface StreamPageProps {
    params: {
        username: string;
    };
}

export default function StreamPage({ params }: StreamPageProps) {
    const { username } = params;

    // TODO: Replace with actual authentication check
    const [isCreator, setIsCreator] = useState(false); // Toggle for demo purposes

    // Creator streaming state
    const [isLive, setIsLive] = useState(false);
    const [streamTitle, setStreamTitle] = useState(
        "Bitcoin Trading Strategies Live",
    );
    const [tempTitle, setTempTitle] = useState(streamTitle);
    const [viewerCount, setViewerCount] = useState(1234);
    const [isChatCollapsed, setIsChatCollapsed] = useState(false);

    // Mock stream data
    const streamData = {
        title: streamTitle,
        streamer: {
            username: username,
            displayName: "CryptoMaster",
            avatar: "/placeholder.svg?height=100&width=100",
            followers: 15420,
        },
        viewers: viewerCount,
        category: "Finance",
        isLive: isLive,
    };

    const handleGoLive = () => {
        setIsLive(!isLive);
        // TODO: Integrate with actual streaming service (WebRTC/OBS)
        if (!isLive) {
            console.log("Starting stream...");
            setViewerCount(1);
        } else {
            console.log("Ending stream...");
            setViewerCount(0);
        }
    };

    const handleSaveTitle = () => {
        setStreamTitle(tempTitle);
        // TODO: Save title to backend/database
        console.log("Saving title:", tempTitle);
    };

    const handleUploadRecording = () => {
        // TODO: Implement recording upload functionality
        console.log("Uploading recording...");
    };

    // Creator View
    if (isCreator) {
        return (
            <div className="container mx-auto px-4 py-6">
                {/* Demo Toggle */}
                <div className="mb-4 p-2 bg-muted rounded-lg">
                    <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setIsCreator(!isCreator)}
                    >
                        Switch to {isCreator ? "Viewer" : "Creator"} View
                    </Button>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                    {/* Main Creator Content */}
                    <div className="lg:col-span-3">
                        {/* Stream Controls Header */}
                        <Card className="mb-4">
                            <CardHeader className="pb-3">
                                <div className="flex items-center justify-between">
                                    <CardTitle className="flex items-center gap-2">
                                        <Settings className="h-5 w-5" />
                                        Stream Controls
                                    </CardTitle>
                                    <div className="flex items-center gap-2">
                                        {isLive ? (
                                            <Badge
                                                variant="destructive"
                                                className="bg-red-500 animate-pulse"
                                            >
                                                <div className="w-2 h-2 bg-white rounded-full mr-2"></div>
                                                LIVE
                                            </Badge>
                                        ) : (
                                            <Badge variant="secondary">
                                                <Power className="w-3 h-3 mr-1" />
                                                OFFLINE
                                            </Badge>
                                        )}
                                    </div>
                                </div>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                {/* Stream Title Input */}
                                <div className="flex gap-2">
                                    <Input
                                        value={tempTitle}
                                        onChange={(e) =>
                                            setTempTitle(e.target.value)
                                        }
                                        placeholder="Enter stream title..."
                                        className="flex-1"
                                    />
                                    <Button
                                        onClick={handleSaveTitle}
                                        variant="outline"
                                        disabled={tempTitle === streamTitle}
                                    >
                                        <Save className="h-4 w-4 mr-2" />
                                        Save
                                    </Button>
                                </div>

                                {/* Action Buttons */}
                                <div className="flex flex-wrap gap-2">
                                    <Button
                                        onClick={handleGoLive}
                                        className={
                                            isLive
                                                ? "bg-red-500 hover:bg-red-600"
                                                : "bg-green-500 hover:bg-green-600"
                                        }
                                        size="lg"
                                    >
                                        {isLive ? (
                                            <>
                                                <Power className="h-4 w-4 mr-2" />
                                                End Stream
                                            </>
                                        ) : (
                                            <>
                                                <Radio className="h-4 w-4 mr-2" />
                                                Go Live
                                            </>
                                        )}
                                    </Button>

                                    <Button
                                        onClick={handleUploadRecording}
                                        variant="outline"
                                        disabled={isLive}
                                    >
                                        <Upload className="h-4 w-4 mr-2" />
                                        Upload Recording
                                    </Button>

                                    <div className="flex items-center gap-2 ml-auto">
                                        <Users className="h-4 w-4 text-muted-foreground" />
                                        <span className="font-semibold">
                                            {viewerCount.toLocaleString()}
                                        </span>
                                        <span className="text-sm text-muted-foreground">
                                            viewers
                                        </span>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Live Video Preview */}
                        <Card>
                            <CardContent className="p-0">
                                <div className="aspect-video bg-black rounded-lg flex items-center justify-center relative">
                                    {isLive ? (
                                        <div className="text-center text-white">
                                            <div className="text-6xl mb-4">
                                                📹
                                            </div>
                                            <p className="text-xl">
                                                Live Stream Preview
                                            </p>
                                            <p className="text-sm text-gray-400 mt-2">
                                                Your stream is broadcasting
                                            </p>
                                            <div className="absolute top-4 left-4">
                                                <Badge
                                                    variant="destructive"
                                                    className="bg-red-500"
                                                >
                                                    <div className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></div>
                                                    LIVE
                                                </Badge>
                                            </div>
                                        </div>
                                    ) : (
                                        <div className="text-center text-gray-400">
                                            <div className="text-6xl mb-4">
                                                📺
                                            </div>
                                            <p className="text-xl">
                                                Stream Preview
                                            </p>
                                            <p className="text-sm mt-2">
                                                Click "Go Live" to start
                                                broadcasting
                                            </p>
                                        </div>
                                    )}
                                    {/* TODO: Replace with actual video preview from WebRTC/camera feed */}
                                </div>
                            </CardContent>
                        </Card>

                        {/* Mobile Chat Toggle */}
                        <div className="lg:hidden mt-4">
                            <Button
                                variant="outline"
                                onClick={() =>
                                    setIsChatCollapsed(!isChatCollapsed)
                                }
                                className="w-full"
                            >
                                {isChatCollapsed ? (
                                    <>
                                        <Eye className="h-4 w-4 mr-2" />
                                        Show Chat
                                    </>
                                ) : (
                                    <>
                                        <EyeOff className="h-4 w-4 mr-2" />
                                        Hide Chat
                                    </>
                                )}
                                {isChatCollapsed ? (
                                    <ChevronDown className="h-4 w-4 ml-2" />
                                ) : (
                                    <ChevronUp className="h-4 w-4 ml-2" />
                                )}
                            </Button>
                        </div>
                    </div>

                    {/* Chat Sidebar - Desktop */}
                    <div className="lg:col-span-1 hidden lg:block">
                        <ChatBox />
                    </div>

                    {/* Chat Panel - Mobile (Collapsible) */}
                    {!isChatCollapsed && (
                        <div className="lg:hidden">
                            <ChatBox />
                        </div>
                    )}
                </div>
            </div>
        );
    }

    // Viewer View (Original)
    return (
        <div className="container mx-auto px-4 py-6">
            {/* Demo Toggle */}
            <div className="mb-4 p-2 bg-muted rounded-lg">
                <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setIsCreator(!isCreator)}
                >
                    Switch to {isCreator ? "Viewer" : "Creator"} View
                </Button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                {/* Main Content */}
                <div className="lg:col-span-3">
                    {/* Video Player Placeholder */}
                    <div className="aspect-video bg-black rounded-lg mb-4 flex items-center justify-center">
                        <div className="text-center text-white">
                            <div className="text-6xl mb-4">📹</div>
                            <p className="text-xl">Video Player Placeholder</p>
                            <p className="text-sm text-gray-400 mt-2">
                                WebRTC/OBS integration coming soon
                            </p>
                        </div>
                    </div>

                    {/* Stream Info */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-2">
                            <h1 className="text-2xl font-bold">
                                {streamData.title}
                            </h1>
                            {streamData.isLive && (
                                <Badge
                                    variant="destructive"
                                    className="bg-red-500"
                                >
                                    LIVE
                                </Badge>
                            )}
                        </div>

                        {/* Streamer Info */}
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4">
                                <Avatar className="h-12 w-12">
                                    <AvatarImage
                                        src={
                                            streamData.streamer.avatar ||
                                            "/placeholder.svg"
                                        }
                                    />
                                    <AvatarFallback>
                                        {streamData.streamer.displayName[0]}
                                    </AvatarFallback>
                                </Avatar>
                                <div>
                                    <h3 className="font-semibold">
                                        {streamData.streamer.displayName}
                                    </h3>
                                    <p className="text-sm text-muted-foreground">
                                        {streamData.streamer.followers.toLocaleString()}{" "}
                                        followers
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <Button variant="outline" size="sm">
                                    <Heart className="h-4 w-4 mr-2" />
                                    Follow
                                </Button>
                                <TipModal
                                    streamerName={
                                        streamData.streamer.displayName
                                    }
                                />
                            </div>
                        </div>

                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <div className="flex items-center gap-1">
                                <Users className="h-4 w-4" />
                                {streamData.viewers.toLocaleString()} viewers
                            </div>
                            <Badge variant="secondary">
                                {streamData.category}
                            </Badge>
                        </div>
                    </div>
                </div>

                {/* Chat Sidebar */}
                <div className="lg:col-span-1">
                    <ChatBox />
                </div>
            </div>
        </div>
    );
}
