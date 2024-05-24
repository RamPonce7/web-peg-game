
import { createContext, ReactNode, useContext, useEffect, useState } from "react"
import { IScore } from "../../../api/models/score.interface"
import { createScore, getScores } from "../../../api/scores.api"



const useScores = () => {

    const [scores, setScores] = useState<IScore[]>([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setIsLoading(true)
        loadScores()
    }, [])

    const loadScores = () => {
        setIsLoading(true)
        getScores().then((res) => {
            setScores(res.data)
            setIsLoading(false)
        })
    }

    const addScore = (data: {
        username: string
        score: number

    }) => {
        createScore(data).then(() => {
            loadScores()
        })
    }


    return {
        scores,
        isLoading,
        addScore
    }
}

const ScoresContext = createContext<ReturnType<typeof useScores>>({} as ReturnType<typeof useScores>)

export const ScoresProvider = ({ children }: { children: ReactNode }) => {
    const theme = useScores()
    return <ScoresContext.Provider value={theme}>{children}</ScoresContext.Provider>
}

export const useScoresContext = () => useContext(ScoresContext)