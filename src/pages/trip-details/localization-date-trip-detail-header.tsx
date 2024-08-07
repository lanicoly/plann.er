import { MapPin, Calendar, Settings2 } from "lucide-react";
import { Button } from "../../components/button";

export function LocalizationDateHeader() {
    return(
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


            {/* passando dentro do componente global 'Button' todo o conteudo que eu quero que fique dentro */}
            <Button variant="secondary"> 
                Alterar local/data 
                <Settings2 className='size-5' />
            </Button>

        </div>
    </div>
    )
}