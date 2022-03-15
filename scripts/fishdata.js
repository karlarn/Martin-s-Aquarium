const fishCollection = [
    {
        name: "Bart",
        food: "crustaceans",
        length: 10,
        saltwater: true,
        species: 'shark'
    },
    {
        name: "Cart",
        food: "drustaceans",
        length: 11,
        saltwater: false,
        species: 'minnow'
    },
    {
        name: "Dart",
        food: "erustaceans",
        length: 12,
        saltwater: true,
        species: 'puffer'
    },
    {
        name: "Eart",
        food: "frustaceans",
        length: 13,
        saltwater: false,
        species: 'tuna'  
    },
    {
        name: "Fart",
        food: "grustaceans",
        length: 14,
        saltwater: true,
        species: 'garr'
    },
    {
        name: "Gart",
        food: "hrustaceans",
        length: 15,
        saltwater: true,
        species: 'flounder'
    }
]

export const getFish = () => {
 const Fish= fishCollection.slice()
 return Fish
}