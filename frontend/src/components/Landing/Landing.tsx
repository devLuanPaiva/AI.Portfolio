import { TechnologiesProps } from "@/data/interfaces"
import { Technologies } from "../technologies/Technologies"

export function Landing(props: Readonly<TechnologiesProps>) {
	return (
		<section className="bg-[url(/bg.jpg)] w-full bg-cover bg-center h-[600px] -mt-[100px] pt-[100px] z-0 flex flex-col  items-center justify-center gap-5 ">
			<div className="flex flex-col items-center gap-1">
				<h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center">
					Luan Alves de Paiva
				</h1>
				<h2 className="text-zinc-500  sm:text-xl md:text-2xl text-center">
					Desenvolvedor Front-end
				</h2>
			</div>
			<Technologies technologies={props.technologies} />
		</section>
	)
}
