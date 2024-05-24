import { Box, Card, Grid, MenuItem, Select, Stack } from "@mui/material"
import { ScoresComponent } from "../scores/components/scores.component"
import { AutoGameComponent } from "../game/autogame/autogame.component"
import { useState } from "react"
import { ManualGameComponent } from "../game/manualgame/manualgame.component"
import { gameTypes } from "../../utils"
import { PegsTypesComponent } from "../game/components/pegs-types.component"



export const HomePage = () => {
    const [gameType, setGameType] = useState(gameTypes.AUTOMATIC)

    return (
        <Box sx={{
            mx: 4,
            my: 2
        }}>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={3}>
                    <ScoresComponent />
                </Grid>
                <Grid item xs={12} sm={8}>

                    <Card square>

                        {
                            gameType === gameTypes.MANUAL && <ManualGameComponent />
                        }
                        {
                            gameType === gameTypes.AUTOMATIC && <AutoGameComponent />
                        }

                    </Card>
                    <Stack flexDirection={'row'} justifyContent={'flex-end'} mt={2}>
                        <Select
                            onChange={(e) => setGameType(e.target.value as string)}
                            value={gameType}
                        >
                            <MenuItem value={gameTypes.AUTOMATIC}>Automatic</MenuItem>
                            <MenuItem value={gameTypes.MANUAL}>Manual</MenuItem>

                        </Select>
                    </Stack>
                </Grid>
                <Grid item xs={12} sm={1}>
                    <PegsTypesComponent />
                </Grid>

            </Grid>
        </Box>
    )
}
