'use client'
import ProjectImagesList from "@/components/projects/ProjectImagesList";
import Container from "@/components/template/Container";
import { useProjectId } from "@/data/hooks/useProjects";

export default function PageProject(props: Readonly<{
    params: { id: string };
}>) {
    const { id } = props.params;
    const { loading, project } = useProjectId(id);

    if (loading) return <p>Carregando...</p>;
    return (
        <section >
            <Container classStyle="py-7 flex flex-col gap-10">
                <h1 className="text-3xl font-bold"> {project?.name ?? 'não deu certo'} </h1>
                <ProjectImagesList images={project?.images.slice(1)}/>
            </Container>
        </section>
    )
}
