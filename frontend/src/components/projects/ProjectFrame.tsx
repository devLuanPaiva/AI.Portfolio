export function ProjectFrame(props: Readonly<{ frame: React.ReactNode }>) {
	return (
		<section className="my-10 w-full flex items-center justify-center">
			{props.frame}
		</section>
	)
}
