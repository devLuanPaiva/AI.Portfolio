import Link from "next/link"

export default function MyJob() {
	return (
		<section className="px-6 py-10 bg-black text-white w-full  shadow-lg rounded-2xl">
			<h2 className="text-3xl font-extrabold text-center bg-gradient-to-r from-red-600 via-white to-red-600 text-transparent bg-clip-text mb-10">
				Experiências
			</h2>

			<div className="flex w-full flex-wrap gap-10 justify-center items-start">
				<article className="bg-zinc-900 p-6 rounded-2xl border border-red-600 hover:shadow-red-700/40 hover:shadow-xl transition-shadow duration-300 w-full sm:max-w-[500px]">
					<h3 className="text-red-500 text-2xl font-semibold mb-2">
						Desenvolvedor Front-end – Nosso Atacarejo
					</h3>
					<p className="text-gray-400 text-sm mb-4">
						COMÉRCIO DE GÊNEROS ALIMENTÍCIOS LTDA • Dezembro de 2024 – Atual
					</p>
					<div className="space-y-4 text-gray-200 text-base leading-relaxed">
						<p>
							Desenvolvo interfaces modernas e responsivas com base em
							protótipos visuais. Participo ativamente de projetos em Next.js e
							Angular, priorizando performance, acessibilidade e boas práticas.
						</p>
						<p>
							Implemento testes automatizados para garantir a qualidade do
							código, e estou constantemente aprendendo novas tecnologias para
							aprimorar meu trabalho.
						</p>
						<Link
							href="https://nossoatacarejo.com.br/"
							target="_blank"
							className="inline-block mt-2 text-red-400 hover:text-white underline underline-offset-4 transition-colors"
						>
							Acesse o site do Nosso Atacarejo
						</Link>
					</div>
				</article>
			</div>
		</section>
	)
}
