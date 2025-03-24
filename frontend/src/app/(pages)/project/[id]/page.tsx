"use client";
import ProjectImagesList from "@/components/projects/ProjectImagesList";
import Readme from "@/components/projects/Readme";
import Technologies from "@/components/technologies/Technologies";
import Container from "@/components/template/Container";
import { fetchReadme } from "@/data/functions/fetchReadme";
import { useProjectId } from "@/data/hooks/useProjects";
import { useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";

export default function PageProject() {
    const searchParams = useSearchParams();
    const [id, setId] = useState<string | null>(null);
    const [readme, setReadme] = useState<string>("");

    useEffect(() => {
        const paramId = searchParams.get('id');
        if (paramId) {
            setId(paramId);
        }
    }, [searchParams]);

    const { loading, project } = useProjectId(id ?? '3');

    useEffect(() => {
        if (project?.repository) {
            fetchReadme(project.repository).then(setReadme).catch(() => setReadme("Erro ao carregar README"));
        }
    }, [project?.repository]);


    if (loading) return <p>Carregando...</p>;

    return (
        <Suspense fallback={<p>Carregando...</p>}>
            <section>
                <Container classStyle="py-7 flex flex-col items-center gap-10">
                    <h1 className="text-3xl font-bold self-start">{project?.name ?? "Não encontrado"}</h1>

                    <ProjectImagesList images={project?.images?.slice(1) ?? []} />
                    <Technologies smallerSize technologies={project?.technologies ?? []} />
                   <Readme markdown={readme}/>
                </Container>
            </section>
        </Suspense>
    );
}
