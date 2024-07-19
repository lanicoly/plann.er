import { Link2, Plus } from "lucide-react";

export function ImportantLinks(){
    return(
        
        <div className="space-y-6">
            <h2 className="font-semibold text-zinc-50 text-left text-lg">Links Importantes</h2>

            <div className="space-y-5">
                <div className="flex items-center">
                    <div className="w-60 flex flex-col">
                        <span className=" text-zinc-100">Reserva do AirBnb</span>
                        <a className="truncate block text-zinc-400 text-xs hover:text-zinc-300" href="#">https://www.airbnb.com.br/rooms/1047000111132142143</a>
                    </div>
                    <Link2 className="ml-auto size-5 text-zinc-400"/>
                </div>
                <div className="flex items-center">
                    <div className="w-60 flex flex-col">
                        <span className=" text-zinc-100">Reserva do AirBnb</span>
                        <a className="truncate block text-zinc-400 text-xs hover:text-zinc-300" href="#">https://www.airbnb.com.br/rooms/1047000111132142143</a>
                    </div>
                    <Link2 className="ml-auto size-5 text-zinc-400"/>
                </div>
            </div>

            <button className="font-normal  w-full rounded-lg bg-zinc-800 text-zinc-200 px-5 py-2 flex items-center justify-center gap-2 hover:bg-zinc-700"><Plus className='size-5' />Cadastrar novo link </button>
        </div>

    )
}