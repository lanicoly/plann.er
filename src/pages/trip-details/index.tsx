import { useState } from "react"
import { CreateActivitieModal } from "./create-activitie-modal";
import { LocalizationDateHeader } from "./localization-date-trip-detail-header";
import { TimelineActivities } from "./timeline-activities";
import { ImportantLinks } from "./important-links";
import { ManageGuests } from "./manage-guests";


export function TripDetailsPage() {

const [isCreateActivitieModalOpen, setIsCreateActivitieModalOpen] = useState(false);

function openCreateActivitieModal() {
    setIsCreateActivitieModalOpen(true);
}

function closeCreateActivieModal() {
    setIsCreateActivitieModalOpen(false);
}
    return(
        <div className="max-w-[1100px] mx-auto">

            <LocalizationDateHeader/>

            <main className="flex gap-16">

                <TimelineActivities
                    openCreateActivitieModal={openCreateActivitieModal}
                />
                
                <div className="w-80 space-y-6">

                    <ImportantLinks/>
                    
                    <div className='h-px w-full bg-zinc-800 my-5'>
                    </div>

                    <ManageGuests/>

                </div>

                {isCreateActivitieModalOpen && (
                     <CreateActivitieModal
                        closeCreateActivieModal={closeCreateActivieModal}
                     />
                )}

            </main>

        </div>
    )
}