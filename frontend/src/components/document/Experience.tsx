export default function Experience() {
	return (
		<article className="flex flex-col sm:flex-row lg:flex-col items-center p-6 justify-around gap-2 bg-black border-zinc-500 shadow border-2 rounded-2xl">
			<Item main="+30" label="projetos" />
			<Item main="+300" label="pull requests" />
			<Item main="+3.2k" label="commits" />
		</article>
	)
}
function Item(props: Readonly<{ main: string; label: string }>) {
	return (
		<div className="flex flex-col items-center gap-1">
			<span className="text-red-500 text-xl sm:text-2xl md:text-3xl font-bold leading-6 text-center">
				{props.main}
			</span>
			<span className="text-sm text-center text-zinc-400">{props.label}</span>
		</div>
	)
}
