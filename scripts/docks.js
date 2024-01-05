import { getDocks, getHaulingShips } from "./database.js"


export const DockList = () => {
    const docks = getDocks()

    //sort alphabetically
    docks.sort((a, b) => a.location.localeCompare(b.location));

    let docksHTML = "<ul>"

    for (const dock of docks) {
        // Convert each dock object to an <li> and append to the docksHTML string
        docksHTML += `<li data-id="${dock.id}"
                          data-location="${dock.location}"
                          data-type="dock">
                          ${dock.location} can hold ${dock.volume} million tons of cargo
                      </li>`
    }

    docksHTML += "</ul>"

    return docksHTML
}

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        // Was a dock list item clicked?
        if (itemClicked.dataset.type === "dock") {
            
            // Define a default array to store the found hauler
            let dockedHaulers = []
            // Get the id of the dock clicked
            const dockId = itemClicked.dataset.id
            //Get location of dock clicked
            const dockLocation = itemClicked.dataset.location
            // Get all the hauling ships
            const haulers = getHaulingShips()
            // Iterate the array of hauler objects
            for (const hauler of haulers) {
                // Does the hauler dockId foreign key match the id of the current dock?
                if (parseInt(dockId) === hauler.dockId) {
                    dockedHaulers.push(hauler.name)
                } 
            }
            
            // Show an alert to the user with these conditions...
            //If there is no hauler at the dock
            if (dockedHaulers.length === 0) {
                window.alert(`${dockLocation} dock is currently unloading nothing`)
            //Else for docks with one or more hauler(s)
            } else {
                window.alert(`${dockLocation} dock is currently unloading ${dockedHaulers.join(", ")}`)
            }
        }
    }
)
