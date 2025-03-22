'use client'
import Curriculum from "@/components/document/Curriculum";
import Landing from "@/components/Landing/Landing";
import Container from "@/components/template/Container";
import { useTechnologies } from "@/data/hooks/useTechnologies";
import { Suspense } from "react";

export default function Home() {
  const { technologies, highlightedTechnologies, loading } = useTechnologies()
  if (loading) return

  return (
    <Suspense fallback={<p>carregando...</p>} >
      <Landing technologies={highlightedTechnologies} />
      <Container classStyle="py-20">
        <Curriculum technologies={technologies} />
      </Container>
    </Suspense>
  );
}
