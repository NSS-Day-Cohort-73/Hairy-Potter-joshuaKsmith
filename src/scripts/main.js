// Imports go first
import { makePottery } from './potteryWheel.js'
import { firePottery } from './Kiln.js'


// Make 5 pieces of pottery at the wheel
debugger
let raw0 = makePottery("vase", 4, 6)
let raw1 = makePottery("urn", 7, 3)
let raw2 = makePottery("cup", 2, 2)
let raw3 = makePottery("ashtray", 2, 1)
let raw4 = makePottery("bowl", 3, 3)

// Fire each piece of pottery in the kiln
let cooked0 = firePottery(raw0, 1000)
let cooked1 = firePottery(raw1, 2199)
let cooked2 = firePottery(raw2, 2200)
let cooked3 = firePottery(raw3, 2201)
let cooked4 = firePottery(raw4, 3000)


console.log(cooked0, cooked1, cooked2, cooked3, cooked4)
// Determine which ones should be sold, and their price


// Invoke the component function that renders the HTML list

