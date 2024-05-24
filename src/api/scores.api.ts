import { PegGameApi } from "./peg-game.api"



export const getScores = async () => {
    const response = await PegGameApi.get('scores')
    return response
}

export const createScore = async (data: { username: string, score: number }) => {
    const response = await PegGameApi.post('scores', data)
    return response
}