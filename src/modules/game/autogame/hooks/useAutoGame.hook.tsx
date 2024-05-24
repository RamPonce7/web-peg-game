import { useEffect, useState } from "react"
import { getMoves } from "../../../../api/models/moves.api"
import { gameStates } from "../../../../utils"




export const useAutoGame = () => {
    const delay = 2000
    const [firstHole, setFirstHole] = useState(-1)
    const [moves, setMoves] = useState<number[][]>()
    const [board, setBoard] = useState<number[]>(Array.from({ length: 15 }, () => 1))
    const [currentMove, setCurrentMove] = useState<number[]>()
    const [gameState, setGameState] = useState(gameStates.NOT_STARTED)

    const handleSelect = (index: number) => {
        if (firstHole === -1) {
            setFirstHole(index)
            setBoard((prev) => {
                const newBoard = [...prev]
                newBoard[index] = 0
                return newBoard
            })
        }
        return
    }


    useEffect(() => {
        if (firstHole === -1) {
            return
        }
        getMoves(firstHole).then((res) => {
            setMoves([...res.data, [-1, -1, -1]])
        })


    }, [firstHole])


    useEffect(() => {
        if (moves) {
            moves.forEach((move, i) => {
                setTimeout(() => {
                    setCurrentMove(move)
                }, i * delay)
            })
        }
    }, [moves])

    useEffect(() => {
        if (currentMove) {
            if (currentMove[0] === -1) {
                setGameState(gameStates.DONE)
            } else {
                setGameState(gameStates.IN_PROGRESS)
            }
            setTimeout(() => {
                setBoard((prev) => {
                    const newBoard = [...prev]
                    newBoard[currentMove[0]] = 0
                    newBoard[currentMove[1]] = 1
                    newBoard[currentMove[2]] = 0
                    return newBoard
                })
            }, (delay / 2))
        }

    }, [currentMove])


    useEffect(() => {
        console.log(`
     ${board[0]}
    ${board[1]} ${board[2]}
   ${board[3]} ${board[4]} ${board[5]}
  ${board[6]} ${board[7]} ${board[8]} ${board[9]}
 ${board[10]} ${board[11]} ${board[12]} ${board[13]} ${board[14]}`)
    }, [board])


    const reset = () => {
        setFirstHole(-1)
        setMoves(undefined)
        setBoard(Array.from({ length: 15 }, () => 1))
        setCurrentMove(undefined)
        setGameState(gameStates.NOT_STARTED)
    }


    return {
        handleSelect,
        currentMove,
        board,
        gameState,
        reset
    }
}
