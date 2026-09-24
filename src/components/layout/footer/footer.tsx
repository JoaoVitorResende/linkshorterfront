import Link from "next/link"

export const Footer = () =>{
    return(
        <footer className="w-full border-b bg-gray-800 bg-background/95 backdrop-blur supports-backdrop-filters:bg-background/60">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between md:flex-row gap-8 py-8">
                    <h2 className="text-white">Link Shorter</h2>
                    <nav className="flex flex-col md:flex-row items-center gap-4 text-sm text-blue-100">
                        <Link href='/termos-de-uso' className="hover:text-blue-200">Use terms</Link>
                        <Link href='/Go' className="hover:text-blue-200">Made with Next and GoLang</Link>
                    </nav>
                </div>
            </div>
        </footer>
    )
}