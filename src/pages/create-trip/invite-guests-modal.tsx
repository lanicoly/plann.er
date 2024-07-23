import { AtSign, Plus, X } from "lucide-react"
import { FormEvent} from 'react';
import { Button } from "../../components/button";

interface InviteGuestsModalProps {
    closeModal: () => void;
    emailsToInvite: string[];
    emailInvite: (event: FormEvent<HTMLFormElement>) => void;
    removeEmailInvite: (email:string) => void
    
}

export function InviteGuestsModal({
    closeModal,
    emailInvite,
    emailsToInvite,
    removeEmailInvite
}: InviteGuestsModalProps) {
    return (
        <div className='fixed inset-0 bg-black/60 flex justify-center items-center'>

                <div className='w-[640px] bg-zinc-900 rounded-xl px-6 py-5 shadow-shape'>

                    <div className='space-y-2'>
                        <div className='flex justify-between items-center'>
                            <h1 className='text-white text-xl font-semibold'>Selecionar convidados</h1>
                            <button onClick={closeModal} type="button">
                                <X className='text-zinc-400' />
                            </button>
                        </div>
                        <p className='text-zinc-400 text-[16px]'>Os convidados irão receber e-mails para confirmar a participação na viagem.</p>
                    </div>

                    <div className='flex items-center gap-2 flex-wrap py-4'>

                        {emailsToInvite.map(email => {
                            if (emailsToInvite.length > 0) {
                                return (
                                    <div key={email} className='bg-zinc-800 py-1.5 px-2.5 rounded-md gap-2 flex items-center' >
                                        <div className='text-zinc-300' >{email}</div>
                                        <button onClick={() => removeEmailInvite(email)}>
                                            <X className='text-zinc-400 size-4' />
                                        </button>
                                    </div>
                                )
                            }
                        }
                        )}

                    </div>

                    <div className='h-px w-full bg-zinc-800 my-5'>
                    </div>

                    <form onSubmit={emailInvite} className='bg-zinc-950 w-full rounded-lg flex items-center gap-2 py-3 px-4'>
                        <AtSign className='text-zinc-400 text-xl' />
                        <input className='placeholder-zinc-400 text-xl bg-transparent outline-none flex-1' type='email' name='email' placeholder='Digite o e-mail do convidado' />

                        <Button variant="primary"> 
                            Convidar
                            <Plus className='text-xl' />
                        </Button>
                        
                    </form>

                </div>
            </div>
    )
}