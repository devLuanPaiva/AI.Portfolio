import perfil from "@/assets/perfil.png"
import Image from "next/image"
export default function MinCV() {
	return (
		<article className="flex-1 flex flex-col-reverse sm:flex-row lg:flex-col-reverse xl:flex-row bg-black border-zinc-500 shadow border-2 rounded-2xl gap-5 px-6 pt-6">
			<figure className="relative min-w-64 h-64 self-center overflow-hidden rounded-2xl">
				<Image src={perfil} alt="Foto de perfil de Luan Alves de Paiva" fill />
			</figure>
			<div className="flex flex-col gap-5 self-center py-6 items-center sm:items-start lg:items-center xl:items-start">
				<div className="flex flex-col items-center sm:items-start lg:items-center xl:items-start">
					<h2 className="bg-gradient-to-r text-center from-red-500 via-red-200 to-red-100 text-transparent bg-clip-text text-2xl font-bold">
						Luan Alves de Paiva
					</h2>
					<h4>Desenvolvedor Front-end</h4>
				</div>
				<p className="text-[10px] sm:text-xs md:text-sm text-center sm:text-left lg:text-center xl:text-left">
					Sou um{" "}
					<strong className="text-red-500">Desenvolvedor Front-end</strong> com
					mais de{" "}
					<strong className="text-red-500"> 4 anos de experiência</strong>{" "}
					criando interfaces web e mobile de alto desempenho. Especialista em{" "}
					<strong className="text-red-500">
						React.js, Next.js, Angular e React Native
					</strong>
					, minha missão é transformar ideias em experiências fluidas e
					intuitivas. Valorizo boas práticas de código, testes automatizados e
					arquitetura escalável, sempre buscando inovação e aprimoramento
					contínuo. Procuro desafios em empresas que incentivem{" "}
					<strong className="text-red-500">criatividade, adaptação ágil</strong>{" "}
					e um ambiente de{" "}
					<strong className="text-red-500">evolução constante</strong>.
				</p>
			</div>
		</article>
	)
}
