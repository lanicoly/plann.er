import { MapPin, Calendar, ArrowRight, UserRoundPlus, Settings2, X, User, Mail } from 'lucide-react';
import { FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { InviteGuestsModal } from './invite-guests-modal';

export function CreateTripPage() {

const [isGuestsInputOpen, setIsGuestsInputOpen] = useState(false); //const [a variável que recebe o estado, a função que muda o estado] = estado inicial
const [isModalOpen, setIsModalOpen] = useState(false);
const [emailsToInvite, setEmailsToInvite] = useState<string[]>([]); //convertendo para um array de string
const [isTravelModalOpen, setIsTravelModalOpen] = useState(false);

const navigate = useNavigate();

//abrir o input para adicionar convidados se a pessoa confirmar local e data
function openGuestsInput() {
    setIsGuestsInputOpen(true);
}

function closeGuestsInput() {
    setIsGuestsInputOpen(false);
}

function openModal() {
    setIsModalOpen(true);
}

function closeModal() {
    setIsModalOpen(false);
}

function emailInvite(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    
    const data = new FormData(event.currentTarget);
    const email = data.get('email')?.toString()
    
    if (!email) {
        return
    }
    
    if (emailsToInvite.includes(email)) {
        return
    }
    
    setEmailsToInvite([
        ...emailsToInvite,
        email
    ])
    
    event.currentTarget.reset();
}

function removeEmailInvite(emailToRemove: string) {
    const newEmailList = emailsToInvite.filter(email => email !== emailToRemove)
    setEmailsToInvite(newEmailList);
}

function openTravelModal() {
    setIsTravelModalOpen(true);
}

function closeTravelModal() {
    setIsTravelModalOpen(false);
}

function createTrip() {
    navigate('/trips/123');
}

return (

    <div className="flex justify-center items-center bg-pattern h-screen w-screen bg-no-repeat bg-center">

        <div className="max-w-3xl w-full text-center space-y-10">

            <div className='flex flex-col gap-2 items-center'>
                <img src="/Logo.svg" alt="plann.er" />
                <p className="text-zinc-300 text-lg">Convide seus amigos e planeje sua próxima viagem!</p>
            </div>

            <div className='space-y-4'>

                <div className="w-full flex justify-center bg-zinc-900 px-4 h-16 rounded-xl items-center shadow-shape gap-3">

                    <div className='flex items-center gap-2 flex-1'>
                        <MapPin className='size-5 text-xl text-zinc-400' />
                        <input disabled={isGuestsInputOpen} className="bg-transparent text-xl placeholder-zinc-400 outline-none flex-1" type="text" placeholder="Para onde você vai?" />
                    </div>

                    <div className='flex items-center gap-2'>
                        <Calendar className='size-5 text-xl text-zinc-400' />
                        <input disabled={isGuestsInputOpen} className="bg-transparent text-xl placeholder-zinc-400 w-32 outline-none" type="text" placeholder="Quando?" />
                    </div>

                    <div className='w-px h-6 bg-zinc-800'></div>

                    {isGuestsInputOpen ? (
                        <button onClick={closeGuestsInput} className="text-xl font-medium rounded-lg bg-zinc-800 text-zinc-200 px-5 py-2 flex items-center gap-2 hover:bg-zinc-700">Alterar local/data <Settings2 className='size-5' /></button>
                    ) : (
                        <button onClick={openGuestsInput} className="text-xl font-medium rounded-lg bg-lime-300 text-lime-950 px-5 py-2 flex items-center gap-2 hover:bg-lime-400">Continuar <ArrowRight className='size-5' /></button>
                    )}
                </div>

                {isGuestsInputOpen && (
                    <div className="w-full flex justify-center bg-zinc-900 px-4 h-16 rounded-xl items-center shadow-shape gap-3">

                        <button type='button' onClick={openModal} className='flex items-center gap-2 flex-1'>
                            <UserRoundPlus className='size-5 text-xl text-zinc-400' />

                            {emailsToInvite.length > 0 ? (
                                <span className="bg-transparent text-xl text-zinc-400 flex-1 text-left">{emailsToInvite.length} pessoa(s) convidada(s)</span>
                            ) :
                                (<span className="bg-transparent text-xl text-zinc-400 flex-1 text-left">Quem estará na viagem?</span>)
                            }
                        </button>

                        <div className='w-px h-6 bg-zinc-800'></div>

                        <button onClick={openTravelModal} className="text-xl font-medium rounded-lg bg-lime-300 text-lime-950 px-5 py-2 flex items-center gap-2 hover:bg-lime-400">Confirmar Viagem <ArrowRight className='size-5' /></button>

                    </div>
                )}
            </div>

            <p className="text-sm text-zinc-500 text-center">Ao planejar sua viagem pela plann.er você automaticamente concorda <br />
                com nossos <a className="text-zinc-300 underline" href="#">termos de uso</a> e <a className="text-zinc-300 underline" href="#">políticas de privacidade</a>.</p>

        </div>
        {isModalOpen && (
            <InviteGuestsModal
                emailsToInvite={emailsToInvite}
                emailInvite={emailInvite}
                closeModal={closeModal}
                removeEmailInvite={removeEmailInvite}

            />
        )}

        {isTravelModalOpen && (

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

                    <form onSubmit={emailInvite} className='space-y-4' >

                        <div className='space-y-2'>

                            <div className='bg-zinc-950 w-full rounded-lg flex items-center gap-3 h-14 px-4'>
                                <User className='text-zinc-400 text-xl' />
                                <input className='placeholder-zinc-400 text-xl bg-transparent outline-none flex-1' name='name' placeholder='Seu nome completo' />
                            </div>

                            <div className='bg-zinc-950 w-full rounded-lg flex items-center gap-3 h-14 px-4'>
                                <Mail className='text-zinc-400 text-xl' />
                                <input className='placeholder-zinc-400 text-xl bg-transparent outline-none flex-1' type='email' name='email' placeholder='Seu e-mail pessoal' />
                            </div>

                        </div>

                        <button onClick={createTrip} type='submit' className='bg-lime-300 text-lime-950 text-lg font-medium flex items-center justify-center rounded-lg h-11 py-2 px-5 w-full hover:bg-lime-400'>Confirmar criação da viagem</button>
                    </form>

                </div>
            </div>
        )}


    </div>

)
}