import { X, Tag, Clock } from "lucide-react";

interface CreateActivitieModalProps {
    closeCreateActivieModal: () => void;
}

export function CreateActivitieModal({
    closeCreateActivieModal
} : CreateActivitieModalProps){
    return (
        <div className='fixed inset-0 bg-black/60 flex justify-center items-center'>

                <div className='w-[640px] bg-zinc-900 rounded-xl px-6 py-5 shadow-shape space-y-5'>
        
                    <div className='space-y-3'>
                        <div className='flex justify-between items-center'>
                            <h1 className='text-white text-xl font-semibold'>Cadastrar atividade</h1>
                            <button onClick={closeCreateActivieModal} type="button">
                                <X className='text-zinc-400' />
                            </button>
                        </div>
                        <p className='text-zinc-400 text-[16px]'>Todos convidados podem visualizar as atividades.</p>
                    </div>
        
                    <form className='space-y-4' >
        
                        <div className='space-y-2'>
        
                            <div className='bg-zinc-950 w-full rounded-lg flex items-center gap-3 h-14 px-4'>
                                <Tag className='text-zinc-400 text-xl' />
                                <input className='placeholder-zinc-400 text-xl bg-transparent outline-none flex-1' name='activitie' placeholder='Qual a atividade?' />
                            </div>
        
                            <div className='bg-zinc-950 w-full rounded-lg flex items-center gap-3 h-14 px-4'>
                                <Clock className='text-zinc-400 text-xl' />
                                <input type="datetime-local" className='placeholder-zinc-400 text-xl bg-transparent outline-none flex-1'  name='datetime' placeholder='Data e horário da atividade' />
                            </div>
        
                        </div>
        
                        <button type='submit' className='bg-lime-300 text-lime-950 text-lg font-medium flex items-center justify-center rounded-lg h-11 py-2 px-5 w-full hover:bg-lime-400'>Salvar atividade</button>
                        
                    </form>
                </div>

            </div>

)
}