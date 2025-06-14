import { Id } from "@core";
import toTalk from "../src/data/functions/toTalk";
global.fetch = jest.fn();

describe("toTalk function", () => {
    it('should return response message when webhookUrl is provided', async () => {
        const mockResponse = { response: 'Message received' };
        (fetch as jest.Mock).mockResolvedValueOnce({
            ok: true,
            json: jest.fn().mockResolvedValueOnce(mockResponse),
        });

        process.env.CHAT_WEBHOOK = 'https://example.com/webhook';
        const result = await toTalk('chatId123', {
            text: 'Hello',
            id: Id.toGenerate(),
            author: '',
            side: 'right'
        });

        expect(result).toBe('Message received');
    });
    it('should return null when webhookUrl is not defined', async () => {
        process.env.CHAT_WEBHOOK = undefined;

        const result = await toTalk('chatId123', {
            text: 'Hello',
            id: Id.toGenerate(),
            author: '',
            side: 'right'
        });

        expect(result).toBeNull();
    });
})