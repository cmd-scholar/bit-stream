import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Send, Bitcoin } from "lucide-react";

const mockMessages = [
    {
        id: "1",
        username: "BTCFan123",
        message: "Great analysis! Thanks for the insights 🚀",
        timestamp: "2m ago",
        isTip: false,
    },
    {
        id: "2",
        username: "CryptoNewbie",
        message: "Tipped ₿0.001",
        timestamp: "3m ago",
        isTip: true,
    },
    {
        id: "3",
        username: "TraderPro",
        message: "What do you think about the current market conditions?",
        timestamp: "5m ago",
        isTip: false,
    },
    {
        id: "4",
        username: "HODLer2024",
        message: "This stream is amazing! Keep it up 💪",
        timestamp: "7m ago",
        isTip: false,
    },
    {
        id: "5",
        username: "SatoshiFan",
        message: "Tipped ₿0.005",
        timestamp: "8m ago",
        isTip: true,
    },
];

export function ChatBox() {
    return (
        <Card className="h-[600px] flex flex-col">
            <CardHeader className="pb-3">
                <CardTitle className="text-lg">Live Chat</CardTitle>
            </CardHeader>

            <CardContent className="flex-1 flex flex-col p-0">
                {/* Messages */}
                <div className="flex-1 overflow-y-auto px-4 space-y-3">
                    {mockMessages.map((msg) => (
                        <div key={msg.id} className="flex items-start gap-2">
                            <Avatar className="h-6 w-6">
                                <AvatarImage
                                    src={`/placeholder.svg?height=24&width=24&query=${msg.username}+avatar`}
                                />
                                <AvatarFallback className="text-xs">
                                    {msg.username[0]}
                                </AvatarFallback>
                            </Avatar>
                            <div className="flex-1 min-w-0">
                                <div className="flex items-center gap-2 mb-1">
                                    <span className="text-sm font-semibold text-orange-500">
                                        {msg.username}
                                    </span>
                                    <span className="text-xs text-muted-foreground">
                                        {msg.timestamp}
                                    </span>
                                    {msg.isTip && (
                                        <Badge
                                            variant="secondary"
                                            className="text-xs"
                                        >
                                            <Bitcoin className="h-3 w-3 mr-1" />
                                            Tip
                                        </Badge>
                                    )}
                                </div>
                                <p
                                    className={`text-sm break-words ${msg.isTip ? "text-orange-500 font-semibold" : ""}`}
                                >
                                    {msg.message}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Chat Input */}
                <div className="border-t p-4">
                    <div className="flex gap-2">
                        <Input
                            placeholder="Type a message..."
                            className="flex-1"
                        />
                        <Button size="sm">
                            <Send className="h-4 w-4" />
                        </Button>
                    </div>
                    <p className="text-xs text-muted-foreground mt-2">
                        Chat integration coming soon
                    </p>
                </div>
            </CardContent>
        </Card>
    );
}
