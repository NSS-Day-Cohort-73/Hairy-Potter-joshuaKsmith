import { usePottery } from "./PotteryCatalog.js"

export const PotteryList = () => {
    let renderedString = ``
    const menuList = usePottery()

    for (const item of menuList) {
        renderedString += `
            <section class="pottery" id="pottery--${item.id}">
            <h2 class="pottery__shape">
                ${item.shape}
            </h2>
            <div class="pottery__properties">
                Item weighs ${item.weight} grams and is ${item.height} cm in height
            </div>
            <div class="pottery__price">
                Price is ${item.price}
            </div>
            </section>
        `
    }
    return renderedString
}