import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Users, Clock } from "lucide-react";
import Image from "next/image";

interface Stream {
    id: string;
    title: string;
    streamer: string;
    viewers: number;
    thumbnail: string;
    category: string;
    isLive: boolean;
    date?: string;
    duration?: string;
}

interface StreamCardProps {
    stream: Stream;
}

export function StreamCard({ stream }: StreamCardProps) {
    return (
        <Link href={`/stream/${stream.streamer.toLowerCase()}`}>
            <Card className="group hover:shadow-lg transition-all duration-200 hover:scale-[1.02] cursor-pointer">
                <CardContent className="p-0">
                    <div className="relative">
                        <div className="aspect-video relative overflow-hidden rounded-t-lg">
                            <Image
                                src={stream.thumbnail || "/placeholder.svg"}
                                alt={stream.title}
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-200"
                            />
                            {stream.isLive && (
                                <Badge className="absolute top-2 left-2 bg-red-500 hover:bg-red-500">
                                    LIVE
                                </Badge>
                            )}
                            {!stream.isLive && stream.duration && (
                                <Badge className="absolute bottom-2 right-2 bg-black/80 text-white">
                                    {stream.duration}
                                </Badge>
                            )}
                            <div className="absolute bottom-2 left-2 flex items-center gap-1 bg-black/80 text-white text-xs px-2 py-1 rounded">
                                <Users className="h-3 w-3" />
                                {stream.viewers.toLocaleString()}
                            </div>
                        </div>
                    </div>

                    <div className="p-4 space-y-3">
                        <h3 className="font-semibold line-clamp-2 group-hover:text-orange-500 transition-colors">
                            {stream.title}
                        </h3>

                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <Avatar className="h-6 w-6">
                                    <AvatarImage
                                        src={`/placeholder.svg?height=24&width=24&query=${stream.streamer}+avatar`}
                                    />
                                    <AvatarFallback className="text-xs">
                                        {stream.streamer[0]}
                                    </AvatarFallback>
                                </Avatar>
                                <span className="text-sm text-muted-foreground">
                                    {stream.streamer}
                                </span>
                            </div>
                            <Badge variant="secondary" className="text-xs">
                                {stream.category}
                            </Badge>
                        </div>

                        {stream.date && (
                            <div className="flex items-center gap-1 text-xs text-muted-foreground">
                                <Clock className="h-3 w-3" />
                                {new Date(stream.date).toLocaleDateString()}
                            </div>
                        )}
                    </div>
                </CardContent>
            </Card>
        </Link>
    );
}
