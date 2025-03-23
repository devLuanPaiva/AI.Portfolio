import perfil from '@/assets/perfil.png'
import Image from 'next/image'
export default function MinCV(){
    return(
        <article className='flex-1 flex flex-col-reverse sm:flex-row lg:flex-col-reverse xl:flex-row bg-black border-zinc-500 shadow border-2 rounded-2xl gap-5 px-6 pt-6'>
            <figure className='relative min-w-64 h-60 self-center'>
                <Image src={perfil} alt='Foto de perfil de Luan Alves de Paiva' fill />
            </figure>
            <div className='flex flex-col gap-5 self-center py-6 items-center sm:items-start lg:items-center xl:items-start'>
                <div className='flex flex-col items-center sm:items-start lg:items-center xl:items-start'>
                    <h2 className='bg-gradient-to-r from-red-500 via-red-200 to-zinc-300 text-transparent bg-clip-text text-2xl font-bold'>Luan Alves de Paiva</h2>
                    <h4>Desenvolvedor Front-end</h4>
                </div>
                <p className='text-sm text-center sm:text-left lg:text-center xl:text-left'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate debitis consequatur repudiandae distinctio, aliquid temporibus reprehenderit ad illo consectetur corrupti, voluptates aliquam a fugit obcaecati sunt accusantium omnis aut tenetur?</p>
            </div>
        </article>
    )
}