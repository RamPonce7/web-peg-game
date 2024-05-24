import { Card, Stack, Typography } from "@mui/material"
import { PegComponent } from "./peg.component"




export const PegsTypesComponent = () => {
  return (
    <Card>
      <Stack alignItems={'center'} p={2} spacing={1}>
        <Stack alignItems={'center'} >
          <PegComponent
            onSelect={() => { }}
            index={0}
          />
          <Typography>Peg</Typography>
        </Stack>
        <Stack alignItems={'center'} >
          <PegComponent
            onSelect={() => { }}
            index={0}
            isRemoved
          />
          <Typography>Hole</Typography>
        </Stack>
        <Stack alignItems={'center'} >
          <PegComponent
            onSelect={() => { }}
            index={0}
            isFrom
          />
          <Typography>From</Typography>
        </Stack>
        <Stack alignItems={'center'} >
          <PegComponent
            onSelect={() => { }}
            index={0}
            willBeRemoved
          />
          <Typography>Over</Typography>
        </Stack>
        <Stack alignItems={'center'} >
          <PegComponent
            onSelect={() => { }}
            index={0}
            isTo
          />
          <Typography>To</Typography>
        </Stack>

      </Stack>
    </Card>

  )
}
