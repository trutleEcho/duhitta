'use client';

import Image from "next/image";
import {Facebook, Instagram, Youtube} from "lucide-react";
import {Button} from "@/components/ui/button";
import {motion} from "framer-motion";
import Link from "next/link";

export default function Header() {

    return (
        <motion.header
            className="w-full flex justify-center"
            initial={{opacity: 0, y: -20}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.6, ease: "easeOut"}}
        >
            <section className="flex w-full flex-row justify-between items-center p-5">
                {/* Contact Info */}
                <motion.div
                    className="hidden md:flex gap-1 flex-col w-1/3"
                    initial={{opacity: 0, x: -40}}
                    animate={{opacity: 1, x: 0}}
                    transition={{delay: 0.2, duration: 0.6}}
                >
                    <span className="font-thin text-sm text-black/50">
                        info@duhitta.com
                    </span>
                    <span className="font-semibold text-sm text-black/50">
                        (+91) 90228 78685
                    </span>
                </motion.div>

                {/* Logo */}
                {/* Logo that slides to the right */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                >
                    <Image
                        src="/icons/duhitta_logo.png"
                        alt="logo"
                        width={180}
                        height={80}
                    />
                </motion.div>


                {/* Socials */}
                <motion.div
                    className="flex flex-row justify-end gap-2 items-center w-full md:w-1/3"
                    initial="hidden"
                    animate="visible"
                    variants={{
                        hidden: {},
                        visible: {
                            transition: {
                                staggerChildren: 0.15,
                                delayChildren: 0.6,
                            },
                        },
                    }}
                >
                    {[Instagram, Facebook, Youtube].map((Icon, i) => (
                        <motion.div
                            key={i}
                            variants={{
                                hidden: {opacity: 0, x: 20},
                                visible: {opacity: 1, x: 0},
                            }}
                        >
                            <Link href="https://www.instagram.com/duhitta?igsh=a3E4em00b2dpdmt4" target="_blank">
                                <Button variant="outline" size="icon" className="rounded-full">
                                    <Icon className="text-primary"/>
                                </Button>
                            </Link>
                        </motion.div>
                    ))}

                    <motion.span
                        className="font-semibold text-primary hidden md:block"
                        initial={{opacity: 0, x: 20}}
                        animate={{opacity: 1, x: 0}}
                        transition={{delay: 1.1, duration: 0.5}}
                    >
                        Follow us
                    </motion.span>
                </motion.div>
            </section>
        </motion.header>
    );
}
