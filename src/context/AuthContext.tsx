"use client";
import {
    createContext,
    useCallback,
    useContext,
    useEffect,
    useState,
    type ReactNode,
} from "react";
import { disconnect } from "@stacks/connect";
import { toast } from "sonner";
import {
    connectWallet,
    disconnectWallet,
    getWalletAddress,
} from "@/lib/wallet";

interface ConnectUserContextType {
    isConnected: boolean;
    isConnecting: boolean;
    walletAddress?: string;
    handleConnect: () => Promise<void>;
    handleDisconnect: () => Promise<void>;
}

const AuthContext = createContext<ConnectUserContextType | undefined>(
    undefined,
);

export const AuthContextProvider = ({ children }: { children: ReactNode }) => {
    const [isConnected, setIsConnected] = useState(false);
    const [walletAddress, setWalletAddress] = useState<string>();
    const [isConnecting, setIsConnecting] = useState(false);

    const checkConnection = useCallback(async () => {
        const address = getWalletAddress();

        if (!address) {
            disconnect();
            setIsConnected(false);
            setWalletAddress(undefined);
            return;
        }

        setWalletAddress(address);
        setIsConnected(true);
    }, []);

    useEffect(() => {
        checkConnection();
    }, [checkConnection]);

    const handleConnect = useCallback(async () => {
        setIsConnecting(true);
        try {
            const address = await connectWallet();
            if (!address)
                throw new Error("No address returned from connectWallet");

            await checkConnection();
            toast.success("Wallet connected successfully!");
        } catch (error) {
            toast.error("Something went wrong, try again later.");
            console.error("Error connecting wallet:", error);
        }
        setIsConnecting(false);
    }, [checkConnection]);

    const handleDisconnect = useCallback(async () => {
        setIsConnecting(true);
        try {
            disconnectWallet();
            toast.info("Wallet disconnected successfully.");
            setIsConnected(false);
            setWalletAddress(undefined);
        } catch (error) {
            console.error(error);
            toast.error("Failed to disconnect wallet. Please try again.");
        }
        setIsConnecting(false);
    }, []);

    return (
        <AuthContext.Provider
            value={{
                isConnected,
                isConnecting,
                walletAddress,
                handleConnect,
                handleDisconnect,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context)
        throw new Error(
            "useConnectUser must be used within a ConnectUserProvider",
        );
    return context;
};
