"use client"
import { motion } from "framer-motion"
import logo from "@/assets/logo.png"
import Link from "next/link"
import Image from "next/image"

export function Logo() {
	return (
		<motion.div
			className="hidden sm:flex items-center gap-2 p-4 "
			initial={{ opacity: 0, scale: 0.8 }}
			animate={{ opacity: 1, scale: 1 }}
			transition={{ duration: 0.5 }}
		>
			<Link href="/" className="text-xl font-bold tracking-wide inline">
				<Image src={logo} alt="Minha Logomarca" width={50} height={50} />
			</Link>
		</motion.div>
	)
}
