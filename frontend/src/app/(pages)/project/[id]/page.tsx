"use client";
import ProjectImagesList from "@/components/projects/ProjectImagesList";
import Technologies from "@/components/technologies/Technologies";
import Container from "@/components/template/Container";
import { fetchReadme } from "@/data/hooks/useGithub";
import { useProjectId } from "@/data/hooks/useProjects";
import { useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";

export default function PageProject() {
    const searchParams = useSearchParams();
    const [id, setId] = useState<string | null>(null);

    useEffect(() => {
        const paramId = searchParams.get('id');
        if (paramId) {
            setId(paramId);
        }
    }, [searchParams]);
    const { loading, project } = useProjectId(id ?? '3');
    const readme = fetchReadme(project?.repository ?? '')

    if (loading) return <p>Carregando...</p>;

    return (
        <Suspense fallback={<p>Carregando...</p>}>
            <section>
                <Container classStyle="py-7 flex flex-col items-center gap-10">
                    <h1 className="text-3xl font-bold self-start">{project?.name ?? "Não encontrado"}</h1>
                    
                        <ProjectImagesList images={project?.images?.slice(1) ?? []} />
                        <Technologies smallerSize technologies={project?.technologies ?? []} />
                        <div className="text-sm text-gray-500 self-start">
                            {readme ?? "Nenhum README encontrado."}
                        </div>
                </Container>
            </section>
        </Suspense>
    );
}
