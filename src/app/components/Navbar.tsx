import Image from 'next/image'
import {GitBranch, Search, Sun, Moon, LightbulbOff} from 'lucide-react'
import {useTheme} from './ThemeProvider'

interface NavBarProps {
    onToggleSidebar: () => void
    sidebarOpen: boolean
}

export default function Navbar({onToggleSidebar, sidebarOpen}: NavBarProps) {
    const {setTheme} = useTheme()
    return (
        <div className="h-16 bg-secondary border-b border-theme flex items-center">
            <div className="border-r border-theme w-48 h-full flex">
                <button
                    onClick={onToggleSidebar}
                    className="text-primary text-sm hover:bg-tertiary px-4 rounded"
                >
                    Project {sidebarOpen ? '▼' : '▶'}
                </button>
            </div>
            <div className="flex-1 flex px-3 items-center gap-4 text-primary">
                <Image src="/logo.png" alt="Logo" width="48" height="48" className="mt-1"/>
                <span className="font-bold text-xl -ml-4">sleepDeprived</span>
                <div className="flex ml-8 items-center gap-1">
                    <GitBranch className="w-4 h-4 text-secondary"/>
                    <span className="text-sm text-secondary">
                        main
                    </span>
                </div>
            </div>
            <div className="flex gap-4 text-primary">
                <button
                    className="px-2 py-1 rounded text-sm text-primary transition-colors"
                    onMouseEnter={(e) =>
                        e.currentTarget.style.backgroundColor = 'var(--bg-tertiary)'}
                    onMouseLeave={(e) =>
                        e.currentTarget.style.backgroundColor = 'transparent'}
                >
                    <Search className="w-5 h-5 text-secondary"/>
                </button>
                <div className="flex items-center gap-1 mr-4">
                    <button
                        onClick={() => setTheme('light')}
                        className="px-2 py-1 rounded text-sm text-primary transition-colors"
                        onMouseEnter={(e) =>
                            e.currentTarget.style.backgroundColor = 'var(--bg-tertiary)'}
                        onMouseLeave={(e) =>
                            e.currentTarget.style.backgroundColor = 'transparent'}
                    >
                        <Sun className="w-5 h-5 text-secondary"/>
                    </button>
                    <button
                        onClick={() => setTheme('dark')}
                        className="px-2 py-1 rounded text-sm text-primary transition-colors"
                        onMouseEnter={(e) =>
                            e.currentTarget.style.backgroundColor = 'var(--bg-tertiary)'}
                        onMouseLeave={(e) =>
                            e.currentTarget.style.backgroundColor = 'transparent'}
                    >
                        <Moon className="w-5 h-5 text-secondary"/>
                    </button>
                    <button
                        onClick={() => setTheme('black')}
                        className="px-2 py-1 rounded text-sm text-primary transition-colors"
                        onMouseEnter={(e) =>
                            e.currentTarget.style.backgroundColor = 'var(--bg-tertiary)'}
                        onMouseLeave={(e) =>
                            e.currentTarget.style.backgroundColor = 'transparent'}
                    >
                        <LightbulbOff className="w-5 h-5 text-secondary"/>
                    </button>
                </div>
            </div>
        </div>
    );
}