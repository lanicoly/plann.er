import { Calendar, CircleCheck, Link2, MapPin, Plus, Settings2 } from "lucide-react"

export function TripDetailsPage() {
    return(
        <div className="max-w-[1100px] mx-auto">

            <div className=" h-16 flex items-center justify-between shadow-shape px-6 bg-zinc-900 rounded-xl my-10">

                <div className="flex items-center gap-2 flex-1">
                    <MapPin className="size-5 text-zinc-400"/>
                    <span className="text-zinc-100 text-lg">Florianópolis, Brasil</span>
                </div>

                <div className="flex items-center gap-5">
                    <div className="flex items-center gap-2">
                        <Calendar className="size-5 text-zinc-400"/>
                        <span className="text-zinc-100">17 a 23 de Agosto</span>
                    </div>

                    <div className='w-px h-6 bg-zinc-800'></div>

                    <button className="text-xl font-medium rounded-lg bg-zinc-800 text-zinc-200 px-5 py-2 flex items-center gap-2 hover:bg-zinc-700">Alterar local/data <Settings2 className='size-5' /></button>
                </div>
            </div>

            <main className="flex gap-16">
                <div className="flex flex-col px-6 space-y-6 flex-1">
                    <div className="flex items-center justify-between gap-6">

                        <h2 className="font-semibold text-4xl">Atividades</h2>

                        <button className="text-xl font-medium rounded-lg bg-lime-300 text-lime-950 px-5 py-2 flex items-center gap-2 hover:bg-lime-400"> <Plus className='size-5' />Cadastrar atividade</button>
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

                <div className="w-80 space-y-6">
                    <div className="space-y-6">
                        <h2 className="font-semibold text-zinc-50 text-left">Links Importantes</h2>

                        <div className="space-y-5">
                            <div className="flex items-center">
                                <div className="w-60 flex flex-col">
                                    <span className="text-lg text-zinc-100">Reserva do AirBnb</span>
                                    <a className="truncate block text-zinc-400 text-xs hover:text-zinc-300" href="#">https://www.airbnb.com.br/rooms/1047000111132142143</a>
                                </div>
                                <Link2 className="ml-auto size-5 text-zinc-400"/>
                            </div>
                            <div className="flex items-center">
                                <div className="w-60 flex flex-col">
                                    <span className="text-lg text-zinc-100">Reserva do AirBnb</span>
                                    <a className="truncate block text-zinc-400 text-xs hover:text-zinc-300" href="#">https://www.airbnb.com.br/rooms/1047000111132142143</a>
                                </div>
                                <Link2 className="ml-auto size-5 text-zinc-400"/>
                            </div>
                        </div>

                        <button className="text-lg font-normal  w-full rounded-lg bg-zinc-800 text-zinc-200 px-5 py-2 flex items-center justify-center gap-2 hover:bg-zinc-700"><Plus className='size-5' />Cadastrar novo link </button>
                    </div>

                    <div></div>

                </div>
            </main>
        </div>
    )
}