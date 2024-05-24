import { Button, Stack, Typography } from "@mui/material"
import { BoardComponent } from "../components/board.component"
import { useAutoGame } from "./hooks/useAutoGame.hook"
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { gameStates } from "../../../utils";





export const AutoGameComponent = () => {

    const { handleSelect, currentMove, board, gameState, reset } = useAutoGame()

    return (
        <>
            <Stack flexDirection={'row'} justifyContent={'space-between'} p={2}>
                <FiberManualRecordIcon sx={{
                    ...(gameState === gameStates.IN_PROGRESS && {
                        color: 'green'
                    })
                }} />
                {
                    gameState === gameStates.NOT_STARTED && <Typography variant="h6">Select the initial peg</Typography>
                }
                {
                    gameState === gameStates.IN_PROGRESS && <Typography variant="h6">Moving...</Typography>
                }
                {
                    gameState === gameStates.DONE && <Button variant="contained" onClick={reset}>Reset</Button>
                }
            </Stack>
            <BoardComponent onSelect={handleSelect} nextMove={currentMove} board={board} />

            <Stack alignItems={'center'} p={2}>

                <Typography variant="h6">Pegs left: {board.filter((peg) => peg === 1).length}</Typography>
            </Stack>
        </>
    )
}
