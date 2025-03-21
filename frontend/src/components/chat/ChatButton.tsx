import Image from "next/image";
import chatImage from '@/assets/chat.svg'
export default function ChatButton() {
    return (
        <button className="fixed bottom-5 right-5 cursor-pointer">
            <Image src={chatImage} alt="ilustração de um chat" width={50} height={50} />
        </button>
    )
}