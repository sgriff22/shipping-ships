const database = {
    docks: [
        { id: 1, location: "Shanghai, China", volume: "43.5"},
        { id: 2, location: "Busan, South Korea", volume: "21.6" },
        { id: 3, location: "Rotterdam, The Netherlands", volume: "14.35" },
        { id: 4, location: "Antwerp, Belgium", volume: "12.04" }
    ],
    haulers: [
        { id: 1, name: "Usain Boat", dockId: 2 },
        { id: 2, name: "The Codfather", dockId: 1 },
        { id: 3, name: "Wave Runner", dockId: 3 },
        { id: 4, name: "The Ruddy Beard", dockId: 2}
    ],
    shippingShips: [
        {id: 1, name:"Havock", haulerId: 2},
        {id: 2, name:"Rapid Mermaid", haulerId: 1},
        {id: 3, name:"Rapid Voyager", haulerId: 3},
        {id: 4, name:"USS Warrior", haulerId: 4},
        {id: 5, name:"Shining Phoenix", haulerId: 2},
        {id: 6, name:"Shark Bait", haulerId: 1},
        {id: 7, name:"Siren", haulerId: 4},
        {id: 8, name:"Nausea", haulerId: 1},
        {id: 7, name:"Misty", haulerId: 3},
        {id: 8, name:"Riptide", haulerId: 4}
    ]
}

export const getDocks = () => {
    // You write the code for copying the array and returning it
    return database.docks.map(dock => ({...dock}))
}

export const getHaulingShips = () => {
    // You write the code for copying the array and returning it
    return database.haulers.map(hauler => ({...hauler}))
}

export const getShippingShips = () => {
    // You write the code for copying the array and returning it
    return database.shippingShips.map(shippingShip => ({...shippingShip}))
}