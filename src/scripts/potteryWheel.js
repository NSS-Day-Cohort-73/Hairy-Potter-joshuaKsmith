let primaryKey = 1

export const makePottery = (shapeBlueprint, argWeight, argHeight) => {
    let freshPottery = {
        shape: shapeBlueprint,
        weight: argWeight,
        height: argHeight,
        id: primaryKey
    }
    primaryKey++
    return freshPottery
}