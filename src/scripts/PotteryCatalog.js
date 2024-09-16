let catalog = []

export const toSellOrNotToSell = (cookedItem) => {
    heavyPrice = 40
    lightPrice = 20
    weightPriceBreakpoint = 6
    if (!cookedItem.cracked) {
        if (cookedItem.weight < weightPriceBreakpoint) {
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