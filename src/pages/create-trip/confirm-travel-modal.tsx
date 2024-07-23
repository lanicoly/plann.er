import { Mail, User, X } from "lucide-react";
import { FormEvent } from "react";
import { Button } from "../../components/button";

interface ConfirmTravelModalProps {
    closeTravelModal: () => void ;
    createTrip: (event: FormEvent<HTMLFormElement>) => void;
    setOwnerName: (ownerName: string) => void;
    setOwnerEmail: (ownerEmail: string) => void;
}

export function ConfirmTravelModal({
    closeTravelModal,
    createTrip,
    setOwnerEmail,
    setOwnerName
}: ConfirmTravelModalProps) {
    return (
        
        <div className='fixed inset-0 bg-black/60 flex justify-center items-center'>

        <div className='w-[640px] bg-zinc-900 rounded-xl px-6 py-5 shadow-shape space-y-5'>

            <div className='space-y-3'>
                <div className='flex justify-between items-center'>
                    <h1 className='text-white text-xl font-semibold'>Confirmar criação da viagem</h1>
                    <button onClick={closeTravelModal} type="button">
                        <X className='text-zinc-400' />
                    </button>
                </div>
                <p className='text-zinc-400 text-[16px]'>Para concluir a criação da viagem para <span className='font-semibold text-zinc-100'>Florianópolis, Brasil</span> nas datas de <span className='font-semibold text-zinc-100'>16 a 27 de Agosto de 2024</span> preencha seus dados abaixo:</p>
            </div>

            <form onSubmit={createTrip} className='space-y-4' >

                <div className='space-y-2'>

                    <div className='bg-zinc-950 w-full rounded-lg flex items-center gap-3 h-14 px-4'>
                        <User className='text-zinc-400 text-xl' />
                        <input className='placeholder-zinc-400 text-xl bg-transparent outline-none flex-1' name='name' placeholder='Seu nome completo'
                        onChange={event => setOwnerName(event.target.value)}
                        />
                    </div>

                    <div className='bg-zinc-950 w-full rounded-lg flex items-center gap-3 h-14 px-4'>
                        <Mail className='text-zinc-400 text-xl' />
                        <input className='placeholder-zinc-400 text-xl bg-transparent outline-none flex-1' type='email' name='email' placeholder='Seu e-mail pessoal' 
                        onChange={event => setOwnerEmail(event.target.value)}
                        />
                    </div>

                </div>

                <Button variant="primary" size='full'> 
                    Confirmar criação da viagem
                </Button>

            </form>

        </div>
    </div>
    )
}