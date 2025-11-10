import FileTree from "@/app/components/FileTree";

interface SidebarProps {
    isOpen: boolean;
    posts: any[];
}

export default function Sidebar({ isOpen, posts }: SidebarProps) {
    if (!isOpen) return null;

    return (
        <div className="w-48 bg-secondary border-r border-theme overflow-y-auto">
            <div className="p-2">
                <div className="text-primary">
                    <FileTree posts={posts} />
                </div>
            </div>
        </div>
    );
}