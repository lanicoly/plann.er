import { ArrowRight, Calendar, MapPin, Settings2, X } from "lucide-react";
import { Button } from "../../../components/button";
import { useState } from "react";
import { DateRange, DayPicker } from "react-day-picker";
import "react-day-picker/style.css";
import 'tailwindcss/tailwind.css';
import { format } from 'date-fns'

interface LocalizationDateStepProps {
    isGuestsInputOpen: boolean;
    closeGuestsInput: () => void;
    openGuestsInput: () => void;
    setDestination: (destination: string) => void;
    setEventStartAndEndDates: (dates:DateRange | undefined) => void;
    eventStartAndEndDates: DateRange | undefined
}

export function LocalizationDateStep({
    isGuestsInputOpen,
    closeGuestsInput,
    openGuestsInput,
    setDestination,
    setEventStartAndEndDates,
    eventStartAndEndDates
}: LocalizationDateStepProps){

    const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);

    function openDatePicker() {
        setIsDatePickerOpen(true)
    }

    function closeDatePicker() {
        setIsDatePickerOpen(false)
    }

    const displayedDate = eventStartAndEndDates && eventStartAndEndDates.from && eventStartAndEndDates.to ? format(eventStartAndEndDates.from, "d ' de ' LLL").concat(' até ').concat(format(eventStartAndEndDates.to, "d ' de ' LLL")) : null

    return (
        <div className="w-full flex justify-center bg-zinc-900 px-4 h-16 rounded-xl items-center shadow-shape gap-3">

            <div className='flex items-center gap-2 flex-1'>
                <MapPin className='size-5 text-xl text-zinc-400' />
                <input disabled={isGuestsInputOpen} className="bg-transparent text-xl placeholder-zinc-400 outline-none flex-1" type="text" placeholder="Para onde você vai?"
                onChange={event => setDestination(event.target.value)}
                />
            </div>

            <button onClick={openDatePicker} disabled={isGuestsInputOpen} className='flex items-center gap-2'>
                <Calendar className='size-5 text-xl text-zinc-400' />
                <span className="text-left text-lg text-zinc-400 flex-1">
                    {displayedDate || 'Quando?'}
                </span>
            </button>

            {isDatePickerOpen && (
                <div className='fixed inset-0 bg-black/60 flex justify-center items-center'>

                <div className='w-[360px] bg-zinc-900 rounded-xl px-6 py-5 shadow-shape space-y-5'>

                    <div className='space-y-3'>
                        <div className='flex justify-between items-center'>
                            <h1 className='text-white text-xl font-semibold'>Selecione a data</h1>
                            <button onClick={closeDatePicker} type="button">
                                <X className='text-zinc-400' />
                            </button>
                        </div>
                    </div>

                    <DayPicker mode="range" selected={eventStartAndEndDates} onSelect={setEventStartAndEndDates}
                        classNames={{
                            today: 'border-lime-500',
                            selected: 'bg-lime-800 border-lime-300 text-white',
                        }}
                    />

                </div>

            </div>
            )}

            <div className='w-px h-6 bg-zinc-800'></div>

            {isGuestsInputOpen ? (

                <Button onClick={closeGuestsInput} variant="secondary"> 
                    Alterar local/data
                    <Settings2 className='size-5' />
                </Button>

            ) : (

                <Button onClick={openGuestsInput} variant="primary"> 
                    Continuar 
                    <ArrowRight className='size-5' />
                </Button>

            )}

        </div>
    )
}
