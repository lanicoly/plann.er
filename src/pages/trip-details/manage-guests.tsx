import { CircleDashed, UserCog } from "lucide-react";

export function ManageGuests(){
    return (

        <div className="space-y-6">
            <h2 className="font-semibold text-zinc-50 text-left text-lg">Convidados</h2>

            <div className="space-y-5">

                <div className="flex items-center">
                    <div className="w-60 flex flex-col">
                        <span className=" text-zinc-100">Jessica White</span>
                        <span className="truncate block text-zinc-400 text-sm">jessica.white44@yahoo.com</span>
                    </div>
                    <CircleDashed className="ml-auto size-5 text-zinc-400"/>
                </div>

                    <div className="flex items-center">
                    <div className="w-60 flex flex-col">
                        <span className=" text-zinc-100">Jessica White</span>
                        <span className="truncate block text-zinc-400 text-sm">jessica.white44@yahoo.com</span>
                    </div>
                    <CircleDashed className="ml-auto size-5 text-zinc-400"/>
                </div>

            </div>

                <button className=" font-normal w-full rounded-lg bg-zinc-800 text-zinc-200 px-5 py-2 flex items-center justify-center gap-2 hover:bg-zinc-700"><UserCog className='size-5' />Gerenciar convidados </button>
        </div>

    )
}