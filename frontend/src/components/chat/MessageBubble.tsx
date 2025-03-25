import { Message } from "@/data/interfaces"
import Image from "next/image"
import chatImage from "@/assets/chat.svg"
import ContentMD from "../shared/ContentMD"

interface MessageBubbleProps {
	message: Message
	omitAuthor?: boolean
}

export default function MessageBubble(props: Readonly<MessageBubbleProps>) {
	return props.message.side === "left" ? (
		<LeftBallon {...props} />
	) : (
		<RightBallon {...props} />
	)
}
function LeftBallon(props: Readonly<MessageBubbleProps>) {
	return (
		<div className="flex gap-4">
			{!props.omitAuthor && (
				<Image src={chatImage} alt="Assistente" width={40} height={40} />
			)}
			<div className={`flex flex-col ${props.omitAuthor && "pl-16"}`}>
				{!props.omitAuthor && (
					<span className="text-xs text-zinc-600">{props.message.author}</span>
				)}
				<div className="bg-black text-white px-7 py-4 sm:w-80 rounded-r-3xl rounded-bl-3xl">
					<ContentMD markdown={props.message.text} />
				</div>
			</div>
		</div>
	)
}
function RightBallon(props: Readonly<MessageBubbleProps>) {
	return (
		<div className={`flex flex-col items-end ${props.omitAuthor && "pr-2"}`}>
			{!props.omitAuthor && (
				<span className="text-xs text-zinc-600">{props.message.author}</span>
			)}
			<div className="bg-red-700 text-white px-7 py-4 sm:w-80 rounded-l-3xl rounded-br-3xl">
				<ContentMD markdown={props.message.text} />
			</div>
		</div>
	)
}
