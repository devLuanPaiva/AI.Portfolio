import ChatButton from "@/components/chat/ChatButton";
import Header from "@/components/template/Header";

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <main>
            <Header/>
            {children}
            <ChatButton />
        </main>
    );
}
