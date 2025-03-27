import { IconLoader } from "@tabler/icons-react";

export default function Loading() {
    return (
        <figure className="flex flex-col items-center justify-center min-h-screen">
            <IconLoader className="animate-spin text-red-500" size={48} />
            <p className="text-brown-700 mt-2">Carregando...</p>
        </figure>
    )
}