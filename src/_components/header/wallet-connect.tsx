"use client";

import { Button } from "@/components/ui/button";
import { useAuth } from "@/context/AuthContext";
import { truncateString } from "@/lib/utils";
import { Loader, Wallet2 } from "lucide-react";

export default function ConnectWallet() {
    const {
        isConnecting,
        isConnected,
        walletAddress,
        handleConnect,
        handleDisconnect,
    } = useAuth();

    return (
        <>
            {isConnected ? (
                <Button
                    variant={"outline"}
                    onClick={handleDisconnect}
                    disabled={isConnecting}
                >
                    <span>{truncateString(walletAddress)}</span>
                    Disconnect
                </Button>
            ) : (
                <Button
                    variant={"outline"}
                    onClick={handleConnect}
                    disabled={isConnecting}
                >
                    {isConnecting ? (
                        <Loader className="size-4 mr-1 animate-spin" />
                    ) : (
                        <Wallet2 className="size-4 mr-1" />
                    )}
                    {isConnecting ? "Connecting ..." : "Connect wallet"}
                </Button>
            )}
        </>
    );
}
