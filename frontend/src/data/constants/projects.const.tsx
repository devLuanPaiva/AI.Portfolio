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
			"https://ik.imagekit.io/p0mm3nebo/gameStore/image4?updatedAt=1746629521891",
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
		frame: (
			<div className="w-full max-w-4xl aspect-video rounded-[10px] overflow-hidden shadow-lg">
				<iframe
					src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7261373571556368386?compact=1"
					title="GameStore"
					className="w-full h-full border-0"
					allowFullScreen
				></iframe>
			</div>
		),
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
		frame: (
			<div className="w-full max-w-4xl aspect-video rounded-[10px] overflow-hidden shadow-lg">
				<iframe
					src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7288970793143730176?compact=1"
					className="w-full h-full border-0"
					allowFullScreen
					title="ConviteDigital"
				></iframe>
			</div>
		),
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
		frame: (
			<div className="w-full max-w-4xl aspect-video rounded-[10px] overflow-hidden shadow-lg">
				<iframe
					src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7222963038549659648?compact=1"
					className="w-full h-full border-0"
					allowFullScreen
					title="Barba Brutal"
				></iframe>
			</div>
		),
	},
	{
		id: 3,
		name: "Trackllo",
		description:
			"Trackllo é um gerenciador de quadros Kanban moderno e intuitivo, criado para ajudar equipes a acompanhar o progresso de tarefas e manter todos sempre alinhados.",
		images: [
			"https://ik.imagekit.io/p0mm3nebo/trackllo/woman-board.jpg?updatedAt=1746727536822",
			"https://ik.imagekit.io/p0mm3nebo/trackllo/Facebook%20cover%20-%203.jpg?updatedAt=1746790954172",
			"https://ik.imagekit.io/p0mm3nebo/trackllo/Facebook%20cover%20-%204.jpg?updatedAt=1746790954118",
		],
		level: Level.INTERMEDIARY,
		type: Type.WEB,
		highlighted: true,
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
		],
		frame: (
			<div className="w-full max-w-4xl aspect-video rounded-[10px] overflow-hidden shadow-lg">
				<iframe
					src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7326987145645064192?compact=1"
					className="w-full h-full border-0"
					allowFullScreen
					title="Trackllo"
				></iframe>
			</div>
		),
	},
	{
		id: 4,
		name: "Space Quiz",
		description:
			"Space Quiz é um aplicativo de perguntas e respostas sobre o espaço desenvolvido com React Native. O objetivo do aplicativo é testar seus conhecimentos sobre o cosmos com um quiz de 10 questões. No final, você verá a porcentagem de acertos para avaliar o seu desempenho.",
		images: [
			"https://ik.imagekit.io/p0mm3nebo/spaceQuiz/Captura%20de%20tela%202025-05-09%20073850.png?updatedAt=1746788660802",
			"https://ik.imagekit.io/p0mm3nebo/spaceQuiz/Facebook%20cover%20-%202.jpg?updatedAt=1746788626422",
			"https://ik.imagekit.io/p0mm3nebo/spaceQuiz/Facebook%20cover%20-%201.jpg?updatedAt=1746788626456",
		],
		level: Level.BEGINNER,
		type: Type.MOBILE,
		highlighted: false,
		repository: "https://github.com/devLuanPaiva/Space-Quiz",
		technologies: [
			technologies[5],
			technologies[8],
			technologies[16],
			technologies[20],
		],
	},
	{
		id: 5,
		name: "Pokédex",
		description:
			"Pokédex é uma aplicação web que funciona como uma Pokédex, permitindo aos usuários pesquisar, visualizar e filtrar informações sobre os Pokémon. A aplicação utiliza a PokeAPI para obter dados sobre os Pokémon.",
		images: [
			"https://ik.imagekit.io/p0mm3nebo/pokedex/Group%208.jpg?updatedAt=1746794533522",
			"https://ik.imagekit.io/p0mm3nebo/pokedex/Facebook%20cover%20-%205.jpg?updatedAt=1746794346157",
			"https://ik.imagekit.io/p0mm3nebo/pokedex/Facebook%20cover%20-%206.jpg?updatedAt=1746794345893",
		],
		level: Level.BEGINNER,
		type: Type.MOBILE,
		highlighted: false,
		repository: "https://github.com/devLuanPaiva/pokedex",
		technologies: [technologies[24], technologies[20]],
		frame: (
			<div className="w-full max-w-4xl aspect-video rounded-[10px] overflow-hidden shadow-lg">
				<iframe
					src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7247644353030967296?compact=1"
					className="w-full h-full border-0"
					allowFullScreen
					title="Pokedex"
				></iframe>
			</div>
		),
	},
	{
		id: 7,
		name: "Travel Advisor",
		description:
			"Travel Advisor é um aplicativo de turismo que permite aos usuários pesquisar e encontrar informações sobre destinos turísticos, incluindo hotéis, restaurantes e atrações. O aplicativo utiliza a API do TripAdvisor para obter dados sobre os destinos.",
		images: [
			"https://ik.imagekit.io/p0mm3nebo/travelAdvisor/capa?updatedAt=1749904281573",
			"https://ik.imagekit.io/p0mm3nebo/travelAdvisor/Group%208.jpg?updatedAt=1749772746299",
			"https://ik.imagekit.io/p0mm3nebo/travelAdvisor/Group%2012.jpg?updatedAt=1749772746345",
			"https://ik.imagekit.io/p0mm3nebo/travelAdvisor/Group%209.jpg?updatedAt=1749772746254",
			"https://ik.imagekit.io/p0mm3nebo/travelAdvisor/Group%2011.jpg?updatedAt=1749772746205",
			"https://ik.imagekit.io/p0mm3nebo/travelAdvisor/Group%2013.jpg?updatedAt=1749772746279"
		],
		level: Level.EXPERT,
		type: Type.WEB,
		highlighted: true,
		repository: "https://github.com/devLuanPaiva/TravelAdvisor",
		technologies: [
			technologies[5],
			technologies[8],
			technologies[9],
			technologies[12],
			technologies[13],
			technologies[14],
			technologies[15],
			technologies[16],
			technologies[19],
			technologies[25],
			technologies[26],
			technologies[27],
			technologies[28],
		]
	}
]
