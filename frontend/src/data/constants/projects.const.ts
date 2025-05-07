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
]
