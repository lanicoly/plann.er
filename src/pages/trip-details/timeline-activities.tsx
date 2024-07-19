import { CircleCheck, Plus } from "lucide-react";

interface TimelineActivitiesProps {
    openCreateActivitieModal: () => void;
}

export function TimelineActivities({
    openCreateActivitieModal
}: TimelineActivitiesProps){
    return(

        <div className="flex flex-col px-6 space-y-6 flex-1">
            <div className="flex items-center justify-between gap-6">

                <h2 className="font-semibold text-4xl">Atividades</h2>

                <button onClick={openCreateActivitieModal} className="text-xl font-medium rounded-lg bg-lime-300 text-lime-950 px-5 py-2 flex items-center gap-2 hover:bg-lime-400"> <Plus className='size-5' />Cadastrar atividade</button>
            </div>


            <div className="space-y-8 ">
                <div className="flex flex-col gap-3">
                    <div className="flex items-baseline justify-start gap-2">
                        <span className="font-semibold text-zinc-300 text-2xl">Dia 17</span>
                        <span className="text-zinc-500">Sábado</span>
                    </div>
                    <span className="text-zinc-500 text-sm">Nenhuma atividade cadastrada nessa data.</span>
                </div>

                <div className="space-y-3">

                    <div className="flex items-baseline justify-start gap-2">
                        <span className="font-semibold text-zinc-300 text-2xl">Dia 18</span>
                        <span className="text-zinc-500">Domingo</span>
                    </div>
                    
                    <div className="h-10 rounded-xl shadow-shape px-4 flex items-center gap-3 bg-zinc-900 ">
                        <CircleCheck className="text-lime-300 size-5"/>
                        <span className="text-zinc-100 ">Corrida de Kart</span>
                        <span className="ml-auto text-zinc-400">14:00h</span>
                    </div>

                    <div className="h-10 rounded-xl shadow-shape px-4 flex items-center gap-3 bg-zinc-900 flex-1">
                        <CircleCheck className="text-lime-300 size-5"/>
                        <span className="text-zinc-100 ">Corrida de Kart</span>
                        <span className="ml-auto text-zinc-400">14:00h</span>
                    </div>
                    <div className="h-10 rounded-xl shadow-shape px-4 flex items-center gap-3 bg-zinc-900 flex-1">
                        <CircleCheck className="text-lime-300 size-5"/>
                        <span className="text-zinc-100 ">Corrida de Kart</span>
                        <span className="ml-auto text-zinc-400">14:00h</span>
                    </div>

                </div>
            </div>

        </div>

    )
}