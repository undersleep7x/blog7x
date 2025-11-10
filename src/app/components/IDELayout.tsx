'use client'

import { ReactNode, useState } from 'react';
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import Sidebar from "@/app/components/Sidebar";

interface IDELayoutProps {
    children: ReactNode;
    posts: any[];
}

export default function IDELayout({ children, posts }: IDELayoutProps) {
    const [sidebarOpen, setSidebarOpen] = useState(true);

    return (
        <div className="h-screen flex flex-col">
            {/* top nav bar */}
            <Navbar sidebarOpen={sidebarOpen} onToggleSidebar={() => setSidebarOpen(!sidebarOpen)} />

            <div className="flex-1 flex overflow-hidden">
                <Sidebar isOpen={sidebarOpen} posts={posts} />
                <div className="flex-1 overflow-y-auto bg-primary text-primary p-8">
                    {children}
                </div>
            </div>

            <Footer />
        </div>
    )
}