'use client'
import { IconCode, IconRocket } from "@tabler/icons-react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Logo() {
  return (
    <motion.div
      className="hidden sm:flex items-center gap-2 p-4 "
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="p-1 bg-white rounded-full shadow-md"
        whileHover={{ rotate: 360 }}
        transition={{ duration: 0.6 }}
      >
        <IconCode className="text-red-500 w-8 h-8" />
      </motion.div>
      <Link  href="/" className="text-xl font-bold tracking-wide inline">
        <span className="text-sm">Desenvolvedor</span> <br /> 
        <span className="-mt-2 flex items-start">
          Luan Paiva
          <motion.div
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3, yoyo: Infinity }}
            className="inline-block"
          >
            <IconRocket className=" w-7 h-7 text-yellow-400" />
          </motion.div>
        </span>
      </Link>

    </motion.div>
  );
}
