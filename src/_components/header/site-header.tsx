"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Bitcoin, Menu, X } from "lucide-react";
import { useState } from "react";
import ConnectWallet from "./wallet-connect";

export default function SiteHeader() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-16">
                    <Link href="/" className="flex items-center space-x-2">
                        <Bitcoin className="h-8 w-8 text-orange-500" />
                        <span className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-yellow-500 bg-clip-text text-transparent">
                            BitStream
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-6">
                        <Link
                            href="/browse"
                            className="text-foreground hover:text-orange-500 transition-colors"
                        >
                            Browse
                        </Link>
                        <Link
                            href="/profile"
                            className="text-foreground hover:text-orange-500 transition-colors"
                        >
                            Profile
                        </Link>
                    </div>

                    {/* Desktop Actions */}
                    <div className="hidden md:flex items-center space-x-4">
                        <Link href="/go-live">
                            <Button className="bg-orange-500 hover:bg-orange-600">
                                Go Live
                            </Button>
                        </Link>
                        <ConnectWallet />
                        {/*<ModeToggle />*/}
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center space-x-2">
                        {/*<ModeToggle />*/}
                        <Button
                            variant="ghost"
                            size="sm"
                            onClick={() =>
                                setIsMobileMenuOpen(!isMobileMenuOpen)
                            }
                        >
                            {isMobileMenuOpen ? (
                                <X className="h-5 w-5" />
                            ) : (
                                <Menu className="h-5 w-5" />
                            )}
                        </Button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div className="md:hidden border-t py-4 space-y-4">
                        <Link
                            href="/browse"
                            className="block text-foreground hover:text-orange-500 transition-colors"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Browse
                        </Link>
                        <Link
                            href="/profile"
                            className="block text-foreground hover:text-orange-500 transition-colors"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Profile
                        </Link>
                        <div className="flex flex-col space-y-2 pt-2">
                            <Link
                                href="/go-live"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                <Button className="w-full bg-orange-500 hover:bg-orange-600">
                                    Go Live
                                </Button>
                            </Link>
                            <ConnectWallet />
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}
