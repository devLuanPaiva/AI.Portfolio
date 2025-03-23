"use client";
import ProjectImagesList from "@/components/projects/ProjectImagesList";
import Container from "@/components/template/Container";
import { useProjectId } from "@/data/hooks/useProjects";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

export default function PageProject() {
    const searchParams = useSearchParams();
    const id = searchParams.get('id');
    const { loading, project } = useProjectId(id ?? '1');

    if (loading) return <p>Carregando...</p>;

    return (
        <Suspense fallback={<p>Carregando...</p>}>
            <section>
                <Container classStyle="py-7 flex flex-col gap-10">
                    <h1 className="text-3xl font-bold">{project?.name ?? "Não deu certo"}</h1>
                    <ProjectImagesList images={project?.images?.slice(1)} />
                </Container>
            </section>
        </Suspense>
    );
}
