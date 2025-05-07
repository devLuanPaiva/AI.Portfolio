import { Level, Project, Type } from "@core"
import { technologies } from "./technologies.const"

export const projects: Project[] = [
	{
		id: 0,
		name: "Gam3r Store",
		description:
			"Um e-commerce de tecnologia que oferece uma ampla variedade de produtos, desde gadgets e acessórios até equipamentos de alta performance para gamers. Ideal para quem busca inovação e qualidade",
		images: [
			"https://github.com/portfolio-projetos-dev/gam3r-store/raw/main/.gitassets/1.jpg",
			"https://github.com/portfolio-projetos-dev/gam3r-store/raw/main/.gitassets/2.jpg",
			"https://github.com/portfolio-projetos-dev/gam3r-store/raw/main/.gitassets/3.jpg",
			"https://github.com/portfolio-projetos-dev/gam3r-store/raw/main/.gitassets/4.jpg",
		],
		level: Level.EXPERT,
		type: Type.WEB,
		highlighted: true,
		repository: "https://github.com/devLuanPaiva/Gam3rStore",
		technologies: [
			technologies[0],
			technologies[5],
			technologies[9],
			technologies[11],
			technologies[14],
			technologies[19],
			technologies[20],
		],
	},
	{
		id: 1,
		name: "Convite Digital",
		description:
			"O Convite Digital é uma plataforma desenvolvida para facilitar a gestão e envio de convites digitais. Ele permite a criação, personalização e distribuição de convites para eventos de forma rápida e eficiente.",
		images: [
			"https://github.com/portfolio-projetos-dev/convit3-digital/raw/main/.gitassets/1.jpg",
			"https://github.com/portfolio-projetos-dev/convit3-digital/raw/main/.gitassets/2.jpg",
			"https://github.com/portfolio-projetos-dev/convit3-digital/raw/main/.gitassets/3.jpg",
			"https://github.com/portfolio-projetos-dev/convit3-digital/raw/main/.gitassets/4.jpg",
		],
		level: Level.AVANCED,
		type: Type.WEB,
		highlighted: false,
		repository: "https://github.com/devLuanPaiva/ConviteDigital",
		technologies: [
			technologies[0],
			technologies[5],
			technologies[9],
			technologies[11],
			technologies[14],
			technologies[19],
			technologies[20],
		],
	},
	{
		id: 2,
		name: "Barba Brutal",
		description:
			"Aplicação para agendamento e gerenciamento de horários em uma barbearia. Desenvolvido com NestJS no backend e Next.js com TypeScript no frontend.",
		images: [
			"https://github.com/portfolio-projetos-dev/barba-brutal/raw/main/.gitassets/1.jpg",
			"https://github.com/portfolio-projetos-dev/barba-brutal/raw/main/.gitassets/2.jpg",
		],
		level: Level.AVANCED,
		type: Type.MOBILE,
		highlighted: true,
		repository: "https://github.com/devLuanPaiva/Barba-brutal",
		technologies: [
			technologies[5],
			technologies[9],
			technologies[11],
            technologies[12],
			technologies[14],
            technologies[15],
            technologies[16],
			technologies[19],
			technologies[20],
        ],
	},
]
