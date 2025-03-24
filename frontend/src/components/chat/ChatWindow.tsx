"use client"
import { ChangeEvent, KeyboardEvent, useEffect, useRef, useState } from "react"
import { IconMessages, IconReload, IconSend } from "@tabler/icons-react"
import useChat from "@/data/hooks/useChat"
import MessageBubble from "./MessageBubble"
import thinkingImg from "@/assets/pensando.gif"
import Image from "next/image"

export default function ChatWindow() {
	const { addMessage, messages, thinking, clearMessages } = useChat()
	const [text, setText] = useState("")
	const endChatRef = useRef<HTMLDivElement>(null)

	const sendMessage = () => {
		addMessage(text)
		setText("")
	}
	useEffect(
		() => endChatRef.current?.scrollIntoView({ behavior: "smooth" }),
		[messages]
	)
	return (
		<aside className="flex flex-col bg-zinc-300 rounded-2xl text-black overflow-hidden">
			<header className="flex justify-between items-center bg-white p-4">
				<h2 className="text-xl font-bold">Olá Visitante!</h2>
				<IconReload
					size={24}
					className="text-black cursor-pointer"
					onClick={clearMessages}
				/>
			</header>
			{messages.length === 0 ? (
				<div className="flex flex-col justify-center items-center min-h-[70%] sm:min-h-[400px]">
					<IconMessages size={230} stroke={0.2} className="text-black/30" />
					<span>Vamos conversar?</span>
				</div>
			) : (
				<div className="flex flex-col p-2 gap-2 min-h-[70%] sm:min-h-[300px] max-h-[80%] sm:max-h-[400px] overflow-y-scroll">
					{messages.map((message, i) => {
						const sameAuthor =
							i > 0 && messages[i - 1].author === message.author
						return (
							<MessageBubble
								key={message.id}
								message={message}
								omitAuthor={sameAuthor}
							/>
						)
					})}
					{thinking && (
						<Image src={thinkingImg} alt="Pensando" width={50} height={50} />
					)}
					<div ref={endChatRef}></div>
				</div>
			)}
			<div className="h-px bg-zinc-400 mt-4" />
			<section className="flex items-center gap-2 p-1 m-4 rounded-full h-10 bg-white ">
				<input
					type="text"
					value={text}
					className="flex-1 bg-transparent h-8 outline-none pl-3"
					onChange={(e: ChangeEvent<HTMLInputElement>) => {
						setText(e.target.value)
					}}
					onKeyDown={(e: KeyboardEvent<HTMLInputElement>) => {
						if (e.key === "Enter") sendMessage()
					}}
				/>
				<button
					className="flex justify-center items-center min-h-8 min-w-8 rounded-full bg-red-500 cursor-pointer hover:opacity-90"
					onClick={sendMessage}
				>
					<IconSend className="text-white" size={18} />
				</button>
			</section>
		</aside>
	)
}
