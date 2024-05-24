import { Avatar, Card, Divider, List, ListItem, ListItemAvatar, ListItemText, Typography } from "@mui/material"
import GamepadIcon from '@mui/icons-material/Gamepad';

import { useScoresContext } from "../state/scores.context"

export const ScoresComponent = () => {

    const { scores, isLoading } = useScoresContext()

    return (
        <Card sx={{
            opacity: isLoading ? 0.5 : 1,
            width: '100%',
        }}>
            <Typography variant="h5" sx={{ textAlign: 'center', mt: 2, mb: 2 }}>Best Scores</Typography>
            <Divider />
            {
                scores.length === 0 &&
                (<ListItem>
                    <ListItemAvatar>
                        <Avatar sx={{
                            color: 'white',

                        }}>
                            <GamepadIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary={'Play in Manual mode and save your score.'} />
                </ListItem>)
            }
            <List >
                {scores.map((score, index) => (
                    <ListItem key={score._id}>
                        <ListItemAvatar>
                            <Avatar sx={{
                                color: 'white',

                            }}>
                                {index + 1}
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary={score.username} secondary={`${score.score} ${score.score === 1 ? 'peg' : 'pegs'} removed`} />
                    </ListItem>
                ))}

            </List>

        </Card>
    )
}
