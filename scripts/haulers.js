import { getHaulingShips, getShippingShips } from "./database.js"

export const haulerList = () => {
    let haulers = getHaulingShips()

    //sort alphabetically
    haulers.sort((a, b) => a.name.localeCompare(b.name));

    let docksHTML = "<ul>"

    for (const hauler of haulers) {
        // Convert each dock object to an <li> and append to the docksHTML string
        docksHTML += `<li data-id="${hauler.id}"
                          data-type="hauler">
                        ${hauler.name}
                      </li>`
    }

    docksHTML += "</ul>"

    return docksHTML
}

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target

        // Was a hauler list item clicked?
        if (itemClicked.dataset.type === "hauler") {

            // Get the id of the hauler clicked
            const haulerId = itemClicked.dataset.id

            // Start a counter variable at 0
            let shipCounter = 0

            // Iterate all of the shipping ships
            const shippingShips = getShippingShips()

            for (const ship of shippingShips) {
                // Does the haulerId foreign key match the id?
                if (parseInt(haulerId) === ship.haulerId) {
                    // Increase the counter by 1
                    shipCounter++
                }
            }

            window.alert(`This hauler is carrying ${shipCounter} shipping ships`)
        }
    }
)
