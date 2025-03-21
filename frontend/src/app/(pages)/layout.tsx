import ChatButton from "@/components/chat/ChatButton";

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <main>
            {children}
            <ChatButton />
        </main>
    );
}
