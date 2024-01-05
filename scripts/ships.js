import { getShippingShips, getHaulingShips } from "./database.js";

export const shipList = () => {
    const ships = getShippingShips()

    //sort alphabetically
    ships.sort((a, b) => a.name.localeCompare(b.name));

    let docksHTML = "<ul>"

    for (const ship of ships) {
        // Convert each dock object to an <li> and append to the docksHTML string
        docksHTML += `<li data-id="${ship.id}"
                          data-name="${ship.name}"
                          data-type="shippingShip"
                          data-haulerId="${ship.haulerId}">
                        ${ship.name}</li>`
    }

    docksHTML += "</ul>"

    return docksHTML
}

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target

        // Was a shipping ship list item clicked?
        if (itemClicked.dataset.type === "shippingShip") {

            // Get the haulerId value of the shipping ship clicked
            const haulerId = itemClicked.dataset.haulerid
            // Define a default object for the found hauler
            let haulingShip = {}
            const haulers = getHaulingShips()

            // Iterate the array of hauler objects
            for (const hauler of haulers) {
                // Does the haulerId foreign key match the id of the current hauler?
                if(parseInt(haulerId) === hauler.id) {
                    // Reassign the value of `haulingShip` to the current hauler
                    haulingShip = hauler
                }
            }
            
            // Show an alert to the user with this format...
            // Palais Royal is being hauled by Seawise Giant
            window.alert(`${itemClicked.dataset.name} is being hauled by ${haulingShip.name}`)
        }
    }
)
