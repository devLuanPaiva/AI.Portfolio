import { Level, Project, Type } from "@core"
import { technologies } from "./technologies.const"

export const projects: Project[] = [
	{
		id: 0,
		name: "Gam3r Store",
		description:
			"Um e-commerce de tecnologia que oferece uma ampla variedade de produtos, desde gadgets e acessórios até equipamentos de alta performance para gamers. Ideal para quem busca inovação e qualidade",
		images: [
			"https://ik.imagekit.io/p0mm3nebo/gameStore/image5.jp4?updatedAt=1746704038397",
			"https://ik.imagekit.io/p0mm3nebo/gameStore/image5.jp4?updatedAt=1746704038397",
			"https://ik.imagekit.io/p0mm3nebo/gameStore/image7.jpg?updatedAt=1746704038738",
			"https://ik.imagekit.io/p0mm3nebo/gameStore/image2?updatedAt=1746629495638",
			"https://ik.imagekit.io/p0mm3nebo/gameStore/image3?updatedAt=1746629508767",
			"https://ik.imagekit.io/p0mm3nebo/gameStore/image4?updatedAt=1746629521891"
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
			"https://ik.imagekit.io/p0mm3nebo/evento/image1.jpg?updatedAt=1746727301093",
			"https://ik.imagekit.io/p0mm3nebo/evento/image2.jpg?updatedAt=1746727301238",
			"https://ik.imagekit.io/p0mm3nebo/evento/image3.jpg?updatedAt=1746727301963",
			"https://ik.imagekit.io/p0mm3nebo/evento/image3.jpg?updatedAt=1746727301963",
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
			"https://ik.imagekit.io/p0mm3nebo/barbaBrutal/image1.png?updatedAt=1746727798240",
			"https://ik.imagekit.io/p0mm3nebo/barbaBrutal/image2.png?updatedAt=1746727826238",
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
	{
		id: 3,
		name: "Trackllo",
		description: "Trackllo é um gerenciador de quadros Kanban moderno e intuitivo, criado para ajudar equipes a acompanhar o progresso de tarefas e manter todos sempre alinhados.",
		images: ["https://ik.imagekit.io/p0mm3nebo/trackllo/woman-board.jpg?updatedAt=1746727536822", "https://ik.imagekit.io/p0mm3nebo/trackllo/image2.png?updatedAt=1746727430472", "https://ik.imagekit.io/p0mm3nebo/trackllo/image1.png?updatedAt=1746727430287", "https://ik.imagekit.io/p0mm3nebo/trackllo/image4.png?updatedAt=1746727430758"],
		level: Level.INTERMEDIARY,
		type: Type.WEB,
		highlighted: false,
		repository: "https://github.com/devLuanPaiva/Trackllo",
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
		]
	}
]
