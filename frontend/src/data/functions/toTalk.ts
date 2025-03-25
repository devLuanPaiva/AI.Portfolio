"use server";
import { Message } from "../interfaces";

export default async function toTalk(chatId: string, message: Message): Promise<string | null> {
    const webhookUrl = process.env.CHAT_WEBHOOK;
    if (!webhookUrl) return null;

    try {
        const response = await fetch(webhookUrl, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                chatId,
                messagem: message.text,
            }),
        });

        if (!response.ok) {
            return null;
        }

        const msg = await response.json();
        return msg.response;
    } catch (error) {
        console.error(error);
        return null;
    }
}
