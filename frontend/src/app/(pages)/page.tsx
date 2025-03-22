'use client'
import Curriculum from "@/components/document/Curriculum";
import Landing from "@/components/Landing/Landing";
import { useTechnologies } from "@/data/hooks/useTechnologies";
import { Suspense } from "react";

export default function Home() {
  const { technologies, loading } = useTechnologies()
  if (loading) return
  
  return (
    <Suspense fallback={<p>carregando...</p>} >
      <Landing />
      <Curriculum technologies={technologies} />
    </Suspense>
  );
}
