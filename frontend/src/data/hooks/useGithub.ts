export async function fetchReadme(url: string) {
	const repo = url.split("github.com/")[1]
	const response = await fetch(
		`https://raw.githubusercontent.com/${repo}/master/README.md`
	)
	const readme = await response.text()
	return readme
}
