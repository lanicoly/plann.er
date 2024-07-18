import { FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { InviteGuestsModal } from './invite-guests-modal';
import { ConfirmTravelModal } from './confirm-travel-modal';
import { LocalizationDateStep } from './steps/localization-date-step';
import { GuestInviteStep } from './steps/guest-invite-step';

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

function createTrip(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
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

                <LocalizationDateStep
                    isGuestsInputOpen={isGuestsInputOpen}
                    closeGuestsInput={closeGuestsInput}
                    openGuestsInput={openGuestsInput}
                />


                {isGuestsInputOpen && (
                    <GuestInviteStep
                        openModal={openModal}
                        emailsToInvite={emailsToInvite}
                        openTravelModal={openTravelModal}
                    />

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
            <ConfirmTravelModal
            closeTravelModal= {closeTravelModal}
            createTrip={createTrip}
            />
        )}

    </div>

)}