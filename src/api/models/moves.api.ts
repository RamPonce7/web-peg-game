import { PegGameApi } from "../peg-game.api"


export const getMoves = async (holeAt: number) => {
    const response = await PegGameApi.get(`moves/${holeAt}`)
    return response
}
