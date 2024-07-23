import { ComponentProps, ReactNode } from "react";
import { tv, VariantProps } from 'tailwind-variants'

const buttonVariants = tv({
    base: 'font-medium rounded-lg px-5 flex items-center gap-2 justify-center',

    variants: {
        variant: {
            primary: 'bg-lime-300 text-lime-950 hover:bg-lime-400',
            secondary: 'bg-zinc-800 text-zinc-200 hover:bg-zinc-700',
        },
        size: {
            default: 'py-2',
            full: 'h-11 w-full'
        }
    },

    defaultVariants: {
        variant: 'primary',
        size: 'default'
    }
})


// esse extends vai puxar todas os eventos que um componente html button pode desencadear
interface ButtonProps extends ComponentProps<'button'>, VariantProps<typeof buttonVariants>{
    // essa parte serve para pegar o conteudo que será inserido dentro do componente Button que foi passado na página que o requisita
    children: ReactNode //ReactNode serve para inserir qualquer tipo de conteudo repassado (icones, texto, imagem, etc)
}

//essa parte '...props' serve para passar como parametro a lista de todas as ações que podem ser feitas com esse botão
export function Button({children, variant, size, ...props} : ButtonProps) {
    return (
        <button {...props} className={buttonVariants({ variant, size })}>
            {children}
        </button>
    )
}