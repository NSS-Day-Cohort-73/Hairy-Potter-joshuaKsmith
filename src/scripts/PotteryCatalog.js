let catalog = []

export const toSellOrNotToSell = (cookedItem) => {
    const heavyPrice = 40
    const lightPrice = 20
    const weightBreakpoint = 6
    if (!cookedItem.cracked) {
        if (cookedItem.weight < weightBreakpoint) {
            cookedItem.price = lightPrice
        } else {
            cookedItem.price = heavyPrice
        }
        catalog.push(cookedItem)
    }
    return cookedItem
}


export const usePottery = () => {



    return catalog
}