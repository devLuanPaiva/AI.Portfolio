import { fetchReadme } from '../src/data/functions/fetchReadme';

global.fetch = jest.fn();

describe('fetchReadme function', () => {
    it('should return the contents of the README when the URL is valid', async () => {
        const mockText = 'Conteúdo do README';
        (fetch as jest.Mock).mockResolvedValueOnce({
            ok: true,
            text: jest.fn().mockResolvedValueOnce(mockText),
        });

        const result = await fetchReadme('https://github.com/usuario/repositorio');

        expect(result).toBe(mockText);
    });
    it('should return "Invalid repository" when the URL is not valid', async () => {
        const result = await fetchReadme('https://google.com');

        expect(result).toBe('Repositório inválido');
    });

})