import React from "react";
import Rating from "@material-ui/lab/Rating";
import Box from "@material-ui/core/Box";
import { createStyles, makeStyles, Theme } from "@material-ui/core";

// const useStyles = makeStyles((theme: Theme) =>
//   createStyles({
//     root: {
//       "& > *": {
//         margin: theme.spacing(2, 15, 0)
//       }
//     }
//   })
// );

export default function SimpleRating() {
  const [value, setValue] = React.useState<number | null>(2);
  // const classes = useStyles();

  return (
    <div>
      <Box
        display="flex"
        // component="fieldset"
        borderColor="transparent"
        justifyContent="flex-end"
        marginTop="10px"
        marginBottom="10px"
      >
        <Rating
          name="simple-controlled"
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          size="large"
        />
      </Box>
    </div>
  );
}
