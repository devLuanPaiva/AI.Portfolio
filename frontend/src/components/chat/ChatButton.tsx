import Image from "next/image"
import chatImage from "@/assets/chat.svg"
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover"
import ChatWindow from "./ChatWindow"
export default function ChatButton() {
	return (
		<Popover>
			<PopoverTrigger asChild>
				<div className="fixed bottom-5 right-5 cursor-pointer">
					<Image
						src={chatImage}
						alt="ilustração de um chat"
						width={50}
						height={50}
					/>
				</div>
			</PopoverTrigger>
			<PopoverContent
				side="top"
				align="end"
				sideOffset={5}
				className="w-[80%] sm:w-[500px] h-[70%]"
				style={{ backgroundColor: "transparent", border: "none" }}
			>
				<ChatWindow />
			</PopoverContent>
		</Popover>
	)
}
