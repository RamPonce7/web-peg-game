import { useEffect, useState } from "react"
import { useScoresContext } from "../../../scores/state/scores.context"
import { allowedMoves } from "../../../../utils"

export const useManualGame = () => {

    const { addScore } = useScoresContext()
    const [board, setBoard] = useState<number[]>(Array.from({ length: 15 }, () => 1))
    const [userName, setUserName] = useState('')
    const [from, setFrom] = useState<number>(-1)
    const [to, setTo] = useState<number>(-1)
    const [finished, setFinished] = useState(false)
    const [initialHole, setInitialHole] = useState<number>(-1)



    const isValidMove = (allowed: number[]) => {
        return (board[allowed[0] - 1] === 1 && board[allowed[1] - 1] === 1 && board[allowed[2] - 1] === 0)
    }

    const handleSelect = (index: number) => {
        if (initialHole === -1) {
            setInitialHole(index)
            setBoard((prev) => {
                const newBoard = [...prev]
                newBoard[index] = 0
                return newBoard
            })
            return
        }
        if (from === -1) {
            setFrom(index)
            return
        } else {
            if (!makeMove(from, index)) {
                setFrom(index)
                setTo(-1)
            } else {
                setFrom(-1)
                setTo(-1)
            }

        }
    }

    const makeMove = (from: number, to: number, apply = true) => {
        const allowed = allowedMoves.find((move) => {
            if ((move[0] - 1) === from && (move[2] - 1) === to) {
                return true
            }
        })
        if (!allowed) {
            return false
        }
        if (!isValidMove(allowed)) {
            return false
        }
        if (!apply) {
            return true
        }
        setBoard((prev) => {
            const newBoard = [...prev]
            newBoard[from] = 0
            newBoard[allowed![1] - 1] = 0
            newBoard[to] = 1
            return newBoard
        })
        setFrom(-1)
        return true

    }


    const restart = () => {
        setBoard(Array.from({ length: 15 }, () => 1))
        setInitialHole(-1)
        setFrom(-1)
        setTo(-1)
        setFinished(false)
        setUserName('')
    }


    useEffect(() => {
        if (initialHole !== -1) {
            setFinished(!hasMoreMoves())
        }

    }, [board])

    const saveAndRestart = () => {
        const score = board.filter((peg) => peg === 0).length
        addScore({ username: userName, score })
        restart()
    }

    const hasMoreMoves = () => {
        for (let i = 0; i < 15; i++) {
            if (board[i] === 1) {
                for (let j = 0; j < 15; j++) {
                    if (makeMove(i, j, false)) {

                        return true
                    }
                }
            }
        }
        return false
    }

    return {
        from,
        to,
        board,
        userName,
        finished,
        handleSelect,
        restart,
        saveAndRestart,
        setUserName,
        initialHole

    }
}
