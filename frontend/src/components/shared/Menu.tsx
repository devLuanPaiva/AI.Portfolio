import Link from "next/link";

export default function Menu() {
    return (
        <nav className="flex items-center gap-6">
            <Item href="/" selected >Início</Item>
            <Item href="/project/1" >Projetos</Item>
            <Item href="https://api.whatsapp.com/send?phone=5584996322535&text=Ol%C3%A1,%20Luan" newTab >Contato</Item>
        </nav>
    )
}

const Item = (props: Readonly<{
    href: string;
    children: React.ReactNode
    selected?: boolean
    newTab?: boolean
}>) => {
    return (
        <Link href={props.href} target={props.newTab ? "_blank" : "_self"} className={`flex items-center gap-2 text-sm border-red-600 ${props.selected ? 'border-b-2 text-white' : ' text-zinc-400 hover:text-white'
            }`}>
            {props.children}
        </Link>
    )
}