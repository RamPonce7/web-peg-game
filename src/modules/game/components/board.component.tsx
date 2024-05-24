import { Box, Grid } from "@mui/material"


import { PegComponent } from "./peg.component"


interface IBoardProps {
    board?: number[];
    nextMove?: number[];
    onSelect: (index: number) => void;
}

export const BoardComponent = ({ board, onSelect, nextMove, }: IBoardProps) => {

    const handleSelect = (index: number) => {
        onSelect(index)
    }


    return (
        <Box m={1}>

            {
                Array.from({ length: 5 }).map((_, i) => (
                    <Grid container key={i} sx={{ justifyContent: 'center' }}>
                        {
                            Array.from({ length: i + 1 }).map((_, j) => (
                                <Grid item key={j}>
                                    <PegComponent
                                        index={((i * (i + 1) / 2) + j)}
                                        onSelect={handleSelect}
                                        isFrom={nextMove?.[0] === ((i * (i + 1) / 2) + j)}
                                        isTo={nextMove?.[1] === ((i * (i + 1) / 2) + j)}
                                        willBeRemoved={nextMove?.[2] === ((i * (i + 1) / 2) + j)}
                                        isRemoved={board?.[((i * (i + 1) / 2) + j)] === 0}
                                    />
                                </Grid>
                            ))
                        }
                    </Grid>
                ))
            }


        </Box>
    )
}
