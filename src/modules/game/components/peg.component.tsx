import { Box } from "@mui/material";
import { green, indigo, red, yellow } from "@mui/material/colors";

interface IPegProps {
    index: number;
    isFrom?: boolean;
    isTo?: boolean;
    willBeRemoved?: boolean;
    isRemoved?: boolean;
    onSelect: (index: number) => void;
}

export const PegComponent = ({ index, isRemoved, isTo, isFrom, willBeRemoved, onSelect }: IPegProps) => {

    return (
        <Box m={1}

            onClick={() => onSelect(index)}

            sx={{
                width: 50,
                height: 50,
                borderRadius: '50%',
                color: 'white',
                backgroundColor: 'primary.main',
                cursor: 'pointer',
                ...(isRemoved && {
                    opacity: 0.5,
                    backgroundColor: `${indigo[200]} !important`,
                }),

                ...(isTo && {

                    border: `3px solid ${green['A700']} !important`,
                }),

                ...(isFrom && {

                    border: `3px solid ${yellow['A200']} !important`,
                }),

                ...(willBeRemoved && {

                    border: `3px solid ${red['A700']} !important`,
                }),


            }}>


        </Box>
    )
}
