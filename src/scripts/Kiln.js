

export const firePottery = (rawItem, temperature) => {
    rawItem.fired = true
    const maxSafeTemp = 2200
    if (temperature > maxSafeTemp) {
        rawItem.cracked = true
    } else {
        rawItem.cracked = false
    }
    return rawItem
}