export async function fetchReadme(url: string) {
    const repo = url.split("github.com/")[1];
    if (!repo) return "Repositório inválido";

    try {
        const response = await fetch(`https://raw.githubusercontent.com/${repo}/master/README.md`);
        if (!response.ok) throw new Error("Erro ao buscar README");
        return await response.text();
    } catch (error) {
        console.error(error);
        return "Não foi possível carregar o README.";

    }
}