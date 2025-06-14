import Link from "next/link"
import Logo from "../shared/Logo"
import Container from "./Container"
import Menu from "../shared/Menu"

export function Header() {
	return (
		<header className="flex  items-center min-h-16  py-1 bg-gradient-to-b from-black to-transparent  z-50 relative w-full">
			<Container classStyle="flex items-center justify-between">
				<div className="flex items-center gap-6">
					<Logo />
					<Menu />
				</div>
				<Link
					href={"https://www.linkedin.com/in/devluanpaiva/"}
					target="_blank"
					className="hidden sm:block bg-red-500 hover:opacity-75 rounded-2xl px-7 py-1 font-bold text-sm"
				>
					Perfil
				</Link>
			</Container>
		</header>
	)
}
