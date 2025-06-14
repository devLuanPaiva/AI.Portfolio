"use client"
import Link from "next/link"
import Logo from "../shared/Logo"
import {
	IconBrandWhatsapp,
	IconMail,
	IconBrandInstagram,
	IconBrandGoogle,
	IconBrandLinkedin,
	IconBrandGithub,
} from "@tabler/icons-react"
import { useState } from "react"

export function Contacts() {
	const [name, setName] = useState("")
	const [email, setEmail] = useState("")
	const [message, setMessage] = useState("")

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault()
		const phoneNumber = "+55084996322535"
		const text = `Olá, meu nome é ${name}.\n Email: ${email}\n${message}`
		const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`
		window.open(url, "_blank")
	}
	return (
		<footer className="bg-zinc-950 text-zinc-100 w-full px-6 sm:px-20 py-16 rounded-2xl shadow-2xl border-t-2 border-zinc-800 space-y-14">
			<div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
				<Logo />
				<h2 className="text-4xl font-extrabold text-red-500 tracking-tight">
					Fale comigo
				</h2>
			</div>

			<div className="grid grid-cols-1 md:grid-cols-2 gap-12">
				<div className="space-y-8">
					<div>
						<h4 className="text-lg font-semibold uppercase text-zinc-300 mb-2">
							Endereços
						</h4>
						<address className="flex flex-col gap-3 text-sm not-italic text-zinc-400">
							<Link
								href="mailto:devluanpaiva@gmail.com"
								className="flex items-center gap-2 hover:text-red-400 transition-colors"
							>
								<IconMail size={20} /> devluanpaiva@gmail.com
							</Link>
							<Link
								href="tel:+55084996322535"
								className="flex items-center gap-2 hover:text-red-400 transition-colors"
							>
								<IconBrandWhatsapp size={20} /> (84) 99632-2535
							</Link>
						</address>
					</div>

					<div>
						<h4 className="text-lg font-semibold uppercase text-zinc-300 mb-2">
							Siga-me
						</h4>
						<nav className="flex gap-5">
							<Link
								href="https://www.linkedin.com/in/devluanpaiva/"
								target="_blank"
								aria-label="LinkedIn"
							>
								<IconBrandLinkedin
									size={22}
									className="hover:text-red-400 transition-colors"
								/>
							</Link>
							<Link
								href="https://www.instagram.com/devluanpaiva/"
								target="_blank"
								aria-label="Instagram"
							>
								<IconBrandInstagram
									size={22}
									className="hover:text-red-400 transition-colors"
								/>
							</Link>
							<Link
								href="https://github.com/devLuanPaiva"
								target="_blank"
								aria-label="GitHub"
							>
								<IconBrandGithub
									size={22}
									className="hover:text-red-400 transition-colors"
								/>
							</Link>
							<Link href="mailto:devluanpaiva@gmail.com" aria-label="Gmail">
								<IconBrandGoogle
									size={22}
									className="hover:text-red-400 transition-colors"
								/>
							</Link>
						</nav>
					</div>
				</div>

				<form className="space-y-6" onSubmit={handleSubmit}>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
						<div className="flex flex-col">
							<label
								htmlFor="name"
								className="text-sm font-medium text-zinc-400 mb-1"
							>
								Nome
							</label>
							<input
								id="name"
								name="name"
								type="text"
								required
								placeholder="Seu nome"
								value={name}
								onChange={(e) => setName(e.target.value)}
								className="px-4 py-2 rounded-lg bg-zinc-800 border border-zinc-700 text-zinc-100 placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-red-500"
							/>
						</div>
						<div className="flex flex-col">
							<label
								htmlFor="email"
								className="text-sm font-medium text-zinc-400 mb-1"
							>
								Email
							</label>
							<input
								id="email"
								name="email"
								type="email"
								required
								placeholder="seu@email.com"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								className="px-4 py-2 rounded-lg bg-zinc-800 border border-zinc-700 text-zinc-100 placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-red-500"
							/>
						</div>
					</div>
					<div className="flex flex-col">
						<label
							htmlFor="message"
							className="text-sm font-medium text-zinc-400 mb-1"
						>
							Mensagem
						</label>
						<textarea
							id="message"
							name="message"
							rows={5}
							placeholder="Escreva sua mensagem..."
							required
							value={message}
							onChange={(e) => setMessage(e.target.value)}
							className="px-4 py-2 rounded-lg bg-zinc-800 border border-zinc-700 text-zinc-100 placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-red-500"
						></textarea>
					</div>
					<div className="flex justify-end">
						<button
							type="submit"
							className="bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-2 rounded-lg transition-colors"
						>
							Enviar
						</button>
					</div>
				</form>
			</div>
		</footer>
	)
}
