import { ArrowRight, Calendar, MapPin, Settings2 } from "lucide-react";

interface LocalizationDateStepProps {
    isGuestsInputOpen: boolean;
    closeGuestsInput: () => void;
    openGuestsInput: () => void;
}

export function LocalizationDateStep({
    isGuestsInputOpen,
    closeGuestsInput,
    openGuestsInput
}: LocalizationDateStepProps){
    return (
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
    )
}
