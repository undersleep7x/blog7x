import {Github, Linkedin, Mail} from 'lucide-react'

const Footer = () => {
    const socials = [
        {
            href: 'https://github.com/undersleep7x',
            icon: <Github size={16} />,
            hover: 'hover:text-pink-500',
        },
        {
            href: 'https://linkedin.com/in/edurojaiye',
            icon: <Linkedin size={16} />,
            hover: 'hover:text-blue-500',
        },
        {
            href: 'mailto:me@undersleep7x.dev',
            icon: <Mail size={16} />,
            hover: 'hover:text-green-400',
        },
    ]

    return (
        <footer className="px-3 md:pt-4 flex-col flex items-center md:flex-row md:justify-between">
            <div className="w-full pt-1 flex justify-center md:w-auto">
                <div className="flex gap-4 sm:gap-5 flex-nowrap">
                    {socials.map(({href, icon, hover}) => (
                        <a
                            key={href}
                            href={href}
                            target={href.startsWith('mailto:') ? undefined : '_blank'}
                            rel={href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                            className={`${hover} transition-colors`}
                        >
                            <span className="inline-block gap-8">{icon}</span>
                        </a>
                    ))}
                </div>
            </div>
            <div className="w-full flex justify-center md:w-auto">
                <p className="text-xs font-mono md:text-sm font-thin pb-2 md:pb-0 text-secondary">
                    &copy; {new Date().getFullYear()} undersleep7x. all rights reserved.
                </p>
            </div>
        </footer>
    )
}

export default Footer
