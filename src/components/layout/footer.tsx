import Image from "next/image";
import {Tooltip, TooltipContent, TooltipTrigger} from "@/components/ui/tooltip";
import Link from "next/link";

export default function Footer() {
    return (
        <footer
            className="w-full border-t border-muted-foreground/20 bg-muted/20 mt-10 py-6 px-4 text-sm text-muted-foreground">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
                {/* Left: Company Info */}
                <div className="flex flex-col items-center md:items-start text-center md:text-left gap-1">
                    <span className="font-semibold">Duhitta <span className="text-muted-foreground/50">| v0.1.0</span></span>
                    <span>© 2025 Duhitta</span>
                    <span>All rights reserved.</span>
                    <span className="text-xs">
                        In front of nagreshwer mangalkaraylya,<br/> Mangalwar Peth, Solapur, Maharashtra 413002
                      </span>
                    <span className="text-xs">
                        Email: <a className="underline" href="mailto:info@duhitta.com">info@duhitta.com</a> | Phone: <a
                                    className="underline" href="tel:+919022878685">+91 90228 78685</a>
                      </span>
                </div>

                {/* Right: Developer Info */}
                <div className="flex flex-col items-center gap-2 text-center bg-muted-foreground/20 rounded-lg p-6 px-12">
                    <span className="text-xs">Developed & maintained by</span>
                    <div className="flex flex-col items-center">
                        <Link
                            href="https://corsw.vercel.app/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2"
                        >
                            <Image
                                src="/CORSW_BG_LIGHT_64x64.png" // use a neutral or default logo for static rendering
                                alt="Corner Softwares"
                                width={48}
                                height={48}
                                priority
                                className="block dark:hidden"
                            />
                            <Image
                                src="/CORSW_BG_DARK_64x64.png" // use a neutral or default logo for static rendering
                                alt="Corner Softwares"
                                width={48}
                                height={48}
                                priority
                                className="hidden dark:block"
                            />
                        </Link>
                        <Tooltip>
                            <TooltipTrigger className="mt-2">
                                <Link
                                    href="https://corsw.vercel.app/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="underline font-semibold text-foreground"
                                >
                                    Corner Softwares
                                </Link>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>We don’t just build. We architect.</p>
                            </TooltipContent>
                        </Tooltip>
                        <a
                            className="font-extralight"
                            href="mailto:trichup20@gmail.com"
                        >
                            Contact Developer
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}