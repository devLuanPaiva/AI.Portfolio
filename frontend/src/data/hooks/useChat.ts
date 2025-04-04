'use client'
import { Id } from "@core";
import useSessionStorage from "./useSessionStorage";
import { Message } from "../interfaces";
import { useState } from "react";
import toTalk from "../functions/toTalk";

export default function useChat() {
    const [chatId] = useSessionStorage<string>("chatId", Id.toGenerate())
    const [messages, setMessages] = useSessionStorage<Message[]>("messages", [])
    const [thinking, setThinking] = useState(false)

    const addMessage = async (text: string) => {
        try {
            setThinking(true)
            const newMessage: Message = {
                id: Id.toGenerate(),
                text,
                author: "Visitante",
                side: "right"
            }
            setMessages([...messages, newMessage])
            const response = await toTalk(chatId, newMessage)
            if (!response) return
            const responseMessage: Message = {
                id: Id.toGenerate(),
                text,
                author: "Assistente",
                side: "left"
            }
            setMessages([...messages, responseMessage])
        } finally {
            setThinking(false)
        }
    }
    const clearMessages = () => {
        setMessages([])
    }

    return {
        chatId, messages, thinking, addMessage, clearMessages
    }
}