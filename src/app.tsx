import { MapPin, Calendar, ArrowRight, UserRoundPlus, Settings2, X, AtSign, Plus } from 'lucide-react';
import { FormEvent, useState } from 'react';
export function App() { //export antes de function + chamando daquela forma no main evita erros de importação por nome incorreto
  const [isGuestsInputOpen, setIsGuestsInputOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [emailsToInvite, setEmailsToInvite] = useState<string[]>([]);

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

          {isGuestsInputOpen && (
            <div className="w-full flex justify-center bg-zinc-900 px-4 h-16 rounded-xl items-center shadow-shape gap-3">

              <button type='button' onClick={openModal} className='flex items-center gap-2 flex-1'>
                <UserRoundPlus className='size-5 text-xl text-zinc-400' />
                <span className="bg-transparent text-xl text-zinc-400 flex-1 text-left">Quem estará na viagem?</span>
              </button>

              <div className='w-px h-6 bg-zinc-800'></div>

              <button className="text-xl font-medium rounded-lg bg-lime-300 text-lime-950 px-5 py-2 flex items-center gap-2 hover:bg-lime-400">Confirmar Viagem <ArrowRight className='size-5' /></button>

            </div>
          )}
        </div>

        <p className="text-sm text-zinc-500 text-center">Ao planejar sua viagem pela plann.er você automaticamente concorda <br />
          com nossos <a className="text-zinc-300 underline" href="#">termos de uso</a> e <a className="text-zinc-300 underline" href="#">políticas de privacidade</a>.</p>

      </div>
      {isModalOpen && (
        <div className='fixed inset-0 bg-black/60 flex justify-center items-center'>

          <div className='w-[640px] bg-zinc-900 rounded-xl px-6 py-5 shadow-shape'>

            <div className='space-y-2'>
              <div className='flex justify-between items-center'>
                <h1 className='text-white text-xl font-semibold'>Selecionar convidados</h1>
                <button onClick={closeModal} type="button">
                  <X className='text-zinc-400' />
                </button>
              </div>
              <p className='text-zinc-400 text-[16px]'>Os convidados irão receber e-mails para confirmar a participação na viagem.</p>
            </div>

            <div className='flex items-center gap-2 flex-wrap py-4'>

              {emailsToInvite.map(email => {
                if (emailsToInvite.length > 0) {
                  return (
                    <div key={email} className='bg-zinc-800 py-1.5 px-2.5 rounded-md gap-2 flex items-center' >
                      <div className='text-zinc-300' >{email}</div>
                      <button onClick={() => removeEmailInvite(email)}>
                        <X className='text-zinc-400 size-4' />
                      </button>
                    </div>
                  )
                }
              }
              )}

            </div>

            <div className='h-px w-full bg-zinc-800 my-5'>
            </div>

            <form onSubmit={emailInvite} className='bg-zinc-950 w-full rounded-lg flex items-center gap-2 py-3 px-4'>
              <AtSign className='text-zinc-400 text-xl' />
              <input className='placeholder-zinc-400 text-xl bg-transparent outline-none flex-1' type='email' name='email' placeholder='Digite o e-mail do convidado' />

              <button type='submit' className='bg-lime-300 text-lime-950 text-xl font-medium flex items-center justify-center gap-2 rounded-lg py-2 px-5 hover:bg-lime-400'>Convidar <Plus className='text-xl' /></button>
            </form>

          </div>

        </div>

      )}
    </div>


  )
}
