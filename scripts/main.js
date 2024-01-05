import { DockList } from "./docks.js"
import { haulerList } from "./haulers.js"
import { shipList } from "./ships.js"

const dockHTML = document.querySelector(".dock")

dockHTML.innerHTML = DockList()

const haulerHTML = document.querySelector(".hauler")

haulerHTML.innerHTML = haulerList()

const shipHTML = document.querySelector(".ship")

shipHTML.innerHTML = shipList()


// document.addEventListener(
//     "click",
//     (clickEvent) => {
//         const itemClicked = clickEvent.target

//         if (itemClicked.dataset.type === "dock") {
//             // The Shanghai, China dock is currently unloading Boaty McBoatface
//             // If there is no hauler at the dock, present the following message.
//             const dockId = itemClicked.dataset.id
//             const dockName = itemClicked.dataset.name
//             const haulers = getHaulers()
//             let dockedHaulers = []
//             for (const hauler of haulers) {
//                 // Does the haulerId foreign key match the id of the current hauler?
//                 if(parseInt(dockId) === hauler.dockId){
//                     dockedHaulers.push(hauler.haulerName)
//                 }
//             }
//             window.alert(`The ${itemClicked.dataset.name} dock is currently unloading ${dockedHaulers}`)
//         }    
//     }
// )