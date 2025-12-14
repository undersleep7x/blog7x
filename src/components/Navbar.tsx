import {GitBranch, Search, Sun, Moon, LightbulbOff} from 'lucide-react'
import {useTheme} from './ThemeProvider'

interface NavBarProps {
    onToggleSidebar: () => void
    sidebarOpen: boolean
    onOpenSearch: () => void
}

export default function Navbar({onToggleSidebar, sidebarOpen, onOpenSearch}: NavBarProps) {
    const {setTheme} = useTheme()
    return (
        <div className="h-16 bg-secondary border-b border-theme flex items-center">
            <div className="border-r mx-auto hidden md:flex border-theme w-48 h-full">
                <button
                    onClick={onToggleSidebar}
                    className="font-mono text-primary text-sm hover:bg-tertiary px-4 rounded"
                >
                    Project {sidebarOpen ? '▼' : '▶'}
                </button>
            </div>
            <div className="flex-1 flex px-3 items-center gap-4 text-primary">
                <a href={'/'} className="flex items-center gap-4">
                    <img
                        src="/logo.png"
                        alt="Logo"
                        width="48"
                        height="48"
                        className="object-contain"
                    />
                    <span className="font-bold font-mono sm:text-sm md:text-xl -ml-4">
                        sleepDeprived
                    </span>
                </a>
                <button
                    className="hover:underline hidden md:block"
                    onClick={() =>
                        window.open(
                            'https://github.com/undersleep7x/blog7x',
                            '_blank',
                            'noopener,noreferrer',
                        )
                    }
                >
                    <div className="flex ml-2 items-center gap-1">
                        <GitBranch className="w-4 h-4 text-secondary" />
                        <span className="font-mono sm:text-xs text-sm text-secondary">main</span>
                    </div>
                </button>
            </div>
            <div className="flex text-primary">
                <div className="flex items-center gap-0 mr-2">
                    <button
                        className="px-2 py-1 rounded text-sm hover:bg-tertiary text-primary transition-colors"
                        onClick={onOpenSearch}
                    >
                        <Search className="w-5 h-5 text-secondary" />
                    </button>
                    <button
                        onClick={() => setTheme('light')}
                        className="px-2 py-1 rounded hover:bg-tertiary text-sm text-primary transition-colors"
                    >
                        <Sun className="w-5 h-5 text-secondary" />
                    </button>
                    <button
                        onClick={() => setTheme('dark')}
                        className="px-2 py-1 rounded text-sm hover:bg-tertiary text-primary transition-colors"
                    >
                        <Moon className="w-5 h-5 text-secondary" />
                    </button>

                    {/* black mode for selenized color scheme 
                    <button
                        onclick={() => settheme('black')}
                        classname="px-2 py-1 rounded text-sm text-primary transition-colors"
                        onmouseenter={(e) =>
                            (e.currenttarget.style.backgroundcolor = 'var(--bg-tertiary)')
                        }
                        onmouseleave={(e) =>
                            (e.currenttarget.style.backgroundcolor = 'transparent')
                        }
                    >
                        <lightbulboff classname="w-5 h-5 text-secondary" />
                    </button> */}
                </div>
            </div>
        </div>
    )
}
