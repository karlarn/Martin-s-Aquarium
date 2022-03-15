import { Fish } from "./fish.js"
import { getFish } from "./fishdata.js"

export const FishList = () => {
    const contentElement = document.querySelector(".fishList")
    const fishes = getFish()
    fishes.forEach((i)=>{
        contentElement.innerHTML += Fish(i)
    })
}