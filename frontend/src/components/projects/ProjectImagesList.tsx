'use client'
import { cn } from "@/lib/utils";
import { useScrollerAnimation } from "@/data/hooks/useScrollerAnimation";
import Image from "next/image";

interface ImageListsProps {
    images: string[] | undefined
}
export default function ProjectImagesList(props: Readonly<ImageListsProps>) {
    const { containerRef, scrollerRef, start } = useScrollerAnimation()
    return (
        <section>
            <div ref={containerRef}
                className={cn(
                    "scroller relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]"
                )}>
                <ul ref={scrollerRef}
                    className={cn(
                        "flex w-max min-w-full shrink-0 flex-nowrap gap-4 py-4",
                        start && "animate-scroll", "hover:[animation-play-state:paused]",
                    )}>
                    {props?.images?.map((image) => (
                        <figure key={image} className="relative h-96 w-full">
                            <Image src={image} alt="Imagem do projeto" fill className="object-cover" />
                        </figure>
                    ))}
                </ul>
            </div>
        </section>
    )
}