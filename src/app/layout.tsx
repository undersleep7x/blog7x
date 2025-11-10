import type { Metadata } from "next";
import "./globals.scss";
import IDELayout from "@/app/components/IDELayout";
import {getAllPosts} from "@/lib/posts";
import { ThemeProvider } from '../app/components/ThemeProvider';

export const metadata: Metadata = {
  title: "sleep_deprived",
  description: "tech talk from undersleep7x as he tries to learn everything",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    const posts = getAllPosts();
    return (
        <html lang="en" className="theme-light">
            <body>
                <ThemeProvider>
                    <IDELayout posts={posts}>{children}</IDELayout>
                </ThemeProvider>
            </body>
        </html>
  );
}
