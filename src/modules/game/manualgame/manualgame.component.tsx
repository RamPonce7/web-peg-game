import { BoardComponent } from "../components/board.component"
import { Box, Button, FormGroup, Modal, Stack, TextField, Typography } from "@mui/material"
import { useManualGame } from "./hooks/useManualGame.hook"


export const ManualGameComponent = () => {

    const { restart, from, to, board, handleSelect, finished, userName, saveAndRestart, setUserName, initialHole } = useManualGame()

    return (

        <>
            <Stack flexDirection={'row'} justifyContent={'space-between'} p={2}>
                {
                    initialHole === -1 ? <Typography variant="h6">Select initial peg</Typography> : <Typography variant="h6">Make a move</Typography>
                }
                <Button variant="contained" onClick={restart}>Restart</Button>
            </Stack>

            <BoardComponent
                board={board}
                nextMove={[from, to, -1]}
                onSelect={handleSelect}
            />

            <Stack alignItems={'center'} p={2}>
                <Typography variant="h6">Pegs left: {board.filter((peg) => peg === 1).length}</Typography>
            </Stack>

            <Modal
                open={finished}
                aria-labelledby="parent-modal-title"
                aria-describedby="parent-modal-description"
            >
                <Box sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: 400,
                    bgcolor: 'background.paper',
                    boxShadow: 24,
                    p: 4,
                }}>
                    <Stack alignItems={'center'} spacing={1}>

                        <Typography variant="h6">
                            {board.filter((peg) => peg === 1).length === 1 ? 'You won!' : 'You lost!'}
                        </Typography>

                        <FormGroup>

                            <TextField
                                label="Username"
                                variant="standard"
                                value={userName}
                                onChange={
                                    (e) => setUserName(e.target.value)
                                } />
                            <Box sx={{ height: 20 }} />

                            <Button variant="contained" disabled={userName.length < 3} onClick={saveAndRestart}>Save & Restart</Button>
                        </FormGroup>
                    </Stack>


                </Box>
            </Modal>
        </>

    )
}
