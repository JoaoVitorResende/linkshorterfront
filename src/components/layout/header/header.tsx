import Link from "next/link"

export const Header = () =>{
     return (
        <header className="fixed top-0 z-50 w-full border-b bg-gray-800 bg-background/95 backdrop-blur supports-backdrop-filters:bg-background/60">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 ls:px-8">
                <div className="flex h-16 items-center justify-between">
                    <h2 className="text-white">Link Shorter</h2>
                    <nav className="flex items-center gap-6">
                        <Link href="/" className=" text-white hover:text-blue-200">Start</Link>
                    </nav>
                </div>
            </div>
        </header>
    )
}