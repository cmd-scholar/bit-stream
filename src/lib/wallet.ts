import { connect, disconnect, getLocalStorage } from "@stacks/connect";

export const isConnected = async (): Promise<boolean> => {
	return isConnected();
};

export const getWalletAddress = () => {
	const data = getLocalStorage();
	return data?.addresses.stx[0].address;
};

export const connectWallet = async () => {
	try {
		const response = await connect({ network: "testnet" });
		return response.addresses[2].address;
	} catch (error) {
		console.error("Error connecting wallet:", error);
		throw error;
	}
};

export const disconnectWallet = () => {
	try {
		disconnect();
	} catch (error) {
		console.error("Error disconnecting wallet:", error);
		throw error;
	}
};
