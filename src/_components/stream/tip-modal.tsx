"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Bitcoin, Heart } from "lucide-react";
import { request } from "@stacks/connect";

interface TipModalProps {
    streamerName: string;
}

export function TipModal({ streamerName }: TipModalProps) {
    const [tipAmount, setTipAmount] = useState("");
    const [isOpen, setIsOpen] = useState(false);

    const handleSendTip = async () => {
        // Placeholder for tip sending logic
        const response = await request("stx_transferStx", {
            amount: 10 * 1_000_000,
            recipient: "ST1S5ZGRZV5K4S9205RWPRTX9RGS9JV40KQMR4G1J",
            network: "testnet",
            memo: "Keep Up the good work man",
        });
        console.log(response);
        setIsOpen(false);
        setTipAmount("");
    };

    const quickAmounts = ["0.001", "0.005", "0.01", "0.05"];

    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
                <Button className="bg-orange-500 hover:bg-orange-600">
                    <Bitcoin className="h-4 w-4 mr-2" />
                    Tip
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
                <DialogHeader>
                    <DialogTitle className="flex items-center gap-2">
                        <Heart className="h-5 w-5 text-red-500" />
                        Tip {streamerName}
                    </DialogTitle>
                    <DialogDescription>
                        Send STX instantly. Your tip will appear in chat and
                        support the creator.
                    </DialogDescription>
                </DialogHeader>

                <div className="space-y-4">
                    <div className="space-y-2">
                        <Label htmlFor="tip-amount">Amount (STX)</Label>
                        <div className="relative">
                            <Bitcoin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-orange-500" />
                            <Input
                                id="tip-amount"
                                placeholder="0.001"
                                value={tipAmount}
                                onChange={(e) => setTipAmount(e.target.value)}
                                className="pl-10"
                                type="number"
                                step="0.001"
                                min="0.001"
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <Label>Quick amounts</Label>
                        <div className="grid grid-cols-4 gap-2">
                            {quickAmounts.map((amount) => (
                                <Button
                                    key={amount}
                                    variant="outline"
                                    size="sm"
                                    onClick={() => setTipAmount(amount)}
                                    className="text-xs"
                                >
                                    ₿{amount}
                                </Button>
                            ))}
                        </div>
                    </div>

                    {tipAmount && (
                        <div className="bg-muted p-3 rounded-lg">
                            <div className="flex justify-between text-sm">
                                <span>Amount:</span>
                                <span className="font-semibold">
                                    ₿{tipAmount}
                                </span>
                            </div>
                            <div className="flex justify-between text-sm text-muted-foreground">
                                <span>Network fee:</span>
                                <span>~₿0.0001</span>
                            </div>
                            <div className="border-t mt-2 pt-2 flex justify-between font-semibold">
                                <span>Total:</span>
                                <span>
                                    ₿
                                    {(parseFloat(tipAmount) + 0.0001).toFixed(
                                        4,
                                    )}
                                </span>
                            </div>
                        </div>
                    )}
                </div>

                <DialogFooter>
                    <Button variant="outline" onClick={() => setIsOpen(false)}>
                        Cancel
                    </Button>
                    <Button
                        onClick={handleSendTip}
                        disabled={!tipAmount || parseFloat(tipAmount) < 0.001}
                        className="bg-orange-500 hover:bg-orange-600"
                    >
                        <Bitcoin className="h-4 w-4 mr-2" />
                        Send Tip
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}
