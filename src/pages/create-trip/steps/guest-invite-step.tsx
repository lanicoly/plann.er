import { ArrowRight, UserRoundPlus } from "lucide-react";
import { Button } from "../../../components/button";

interface GuestInviteStepProps {
    openModal: () => void;
    emailsToInvite: string[]
    openTravelModal: () => void
}

export function GuestInviteStep({
    openModal,
    emailsToInvite,
    openTravelModal
}: GuestInviteStepProps){
    return (
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

            <Button onClick={openTravelModal} variant="primary"> 
                Confirmar Viagem
                <ArrowRight className='size-5' />
            </Button>

        </div>
    )
}