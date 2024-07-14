import { MapPin, Calendar, ArrowRight, UserRoundPlus, Settings2} from 'lucide-react';
import { useState } from 'react';
export function App() { //export antes de function + chamando daquela forma no main evita erros de importação por nome incorreto
  const[isGuestsInputOpen,setIsGuestsInputOpen] = useState(false);

  function openGuestsInput() {
    setIsGuestsInputOpen(true);
  }

  function closeGuestsInput() {
    setIsGuestsInputOpen(false);
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
          <MapPin className='size-5 text-xl text-zinc-400'/>
          <input disabled= {isGuestsInputOpen} className="bg-transparent text-xl placeholder-zinc-400 outline-none flex-1" type="text" placeholder="Para onde você vai?"/>
          </div>

          <div className='flex items-center gap-2'>
          <Calendar className='size-5 text-xl text-zinc-400'/>
          <input disabled= {isGuestsInputOpen} className="bg-transparent text-xl placeholder-zinc-400 w-32 outline-none" type="text" placeholder="Quando?"/>
          </div>

          <div className='w-px h-6 bg-zinc-800'></div>

        {isGuestsInputOpen ? (
          <button onClick={closeGuestsInput} className="text-xl font-medium rounded-lg bg-zinc-800 text-zinc-200 px-5 py-2 flex items-center gap-2 hover:bg-zinc-700">Alterar local/data <Settings2 className='size-5'/></button>
        ) : (
          <button onClick={openGuestsInput} className="text-xl font-medium rounded-lg bg-lime-300 text-lime-950 px-5 py-2 flex items-center gap-2 hover:bg-lime-400">Continuar <ArrowRight className='size-5'/></button>
        )}
        </div>

        {isGuestsInputOpen && (
                  <div className="w-full flex justify-center bg-zinc-900 px-4 h-16 rounded-xl items-center shadow-shape gap-3">

                  <div className='flex items-center gap-2 flex-1'>
                  <UserRoundPlus className='size-5 text-xl text-zinc-400'/>
                  <input className="bg-transparent text-xl placeholder-zinc-400 outline-none flex-1" type="text" placeholder="Quem estará na viagem?"/>
                  </div>
        
                  <div className='w-px h-6 bg-zinc-800'></div>
        
                  <button className="text-xl font-medium rounded-lg bg-lime-300 text-lime-950 px-5 py-2 flex items-center gap-2 hover:bg-lime-400">Confirmar Viagem <ArrowRight className='size-5'/></button>
        
                </div>
        ) }
        </div>

        <p className="text-sm text-zinc-500 text-center">Ao planejar sua viagem pela plann.er você automaticamente concorda <br />
        com nossos <a className="text-zinc-300 underline" href="#">termos de uso</a> e <a className="text-zinc-300 underline" href="#">políticas de privacidade</a>.</p>

      </div>
    </div>
  )
}
