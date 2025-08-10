import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Upload, Key, Radio } from "lucide-react";

export default function GoLivePage() {
    return (
        <div className="container mx-auto px-4 py-8 max-w-4xl">
            <h1 className="text-4xl font-bold mb-8">Go Live</h1>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Stream Setup Form */}
                <Card>
                    <CardHeader>
                        <CardTitle>Stream Setup</CardTitle>
                        <CardDescription>
                            Configure your stream settings
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        <div className="space-y-2">
                            <Label htmlFor="title">Stream Title</Label>
                            <Input
                                id="title"
                                placeholder="Enter your stream title..."
                                className="w-full"
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="description">
                                Description (Optional)
                            </Label>
                            <Textarea
                                id="description"
                                placeholder="Tell viewers what your stream is about..."
                                className="w-full"
                                rows={3}
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="category">Category</Label>
                            <Select>
                                <SelectTrigger>
                                    <SelectValue placeholder="Select a category" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="finance">
                                        Finance
                                    </SelectItem>
                                    <SelectItem value="education">
                                        Education
                                    </SelectItem>
                                    <SelectItem value="technology">
                                        Technology
                                    </SelectItem>
                                    <SelectItem value="news">News</SelectItem>
                                    <SelectItem value="art">Art</SelectItem>
                                    <SelectItem value="gaming">
                                        Gaming
                                    </SelectItem>
                                    <SelectItem value="music">Music</SelectItem>
                                    <SelectItem value="other">Other</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="thumbnail">Thumbnail</Label>
                            <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-8 text-center">
                                <Upload className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
                                <p className="text-sm text-muted-foreground mb-2">
                                    Click to upload or drag and drop
                                </p>
                                <p className="text-xs text-muted-foreground">
                                    PNG, JPG up to 10MB (1920x1080 recommended)
                                </p>
                                <Button
                                    variant="outline"
                                    size="sm"
                                    className="mt-4"
                                >
                                    Choose File
                                </Button>
                            </div>
                        </div>

                        <Button className="w-full" size="lg">
                            <Radio className="h-4 w-4 mr-2" />
                            Start Stream
                        </Button>
                    </CardContent>
                </Card>

                {/* Stream Configuration */}
                <Card>
                    <CardHeader>
                        <CardTitle>Stream Configuration</CardTitle>
                        <CardDescription>
                            Your streaming credentials and settings
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        <div className="space-y-2">
                            <Label htmlFor="rtmp-url">RTMP URL</Label>
                            <div className="flex">
                                <Input
                                    id="rtmp-url"
                                    value="rtmp://ingest.bitstream.live/live"
                                    readOnly
                                    className="font-mono text-sm"
                                />
                                <Button
                                    variant="outline"
                                    size="sm"
                                    className="ml-2"
                                >
                                    Copy
                                </Button>
                            </div>
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="stream-key">Stream Key</Label>
                            <div className="flex">
                                <Input
                                    id="stream-key"
                                    value="sk_live_xxxxxxxxxxxxxxxxxxxxxxxx"
                                    readOnly
                                    type="password"
                                    className="font-mono text-sm"
                                />
                                <Button
                                    variant="outline"
                                    size="sm"
                                    className="ml-2"
                                >
                                    <Key className="h-4 w-4" />
                                </Button>
                            </div>
                            <p className="text-xs text-muted-foreground">
                                Keep your stream key private. Anyone with this
                                key can stream to your channel.
                            </p>
                        </div>

                        <div className="bg-muted/50 p-4 rounded-lg">
                            <h4 className="font-semibold mb-2 flex items-center">
                                <Radio className="h-4 w-4 mr-2" />
                                OBS Studio Setup
                            </h4>
                            <ol className="text-sm space-y-1 text-muted-foreground">
                                <li>1. Open OBS Studio</li>
                                <li>2. Go to Settings → Stream</li>
                                <li>3. Set Service to "Custom"</li>
                                <li>4. Copy the RTMP URL above</li>
                                <li>5. Copy the Stream Key above</li>
                                <li>6. Click "Start Streaming"</li>
                            </ol>
                        </div>

                        <div className="bg-blue-500/10 border border-blue-500/20 p-4 rounded-lg">
                            <p className="text-sm text-blue-400">
                                <strong>Note:</strong> We will integrate WebRTC
                                for browser-based streaming in a future update.
                                For now, please use OBS Studio or similar
                                streaming software.
                            </p>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
