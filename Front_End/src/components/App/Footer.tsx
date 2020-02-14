import React from "react";
import Typography from "@material-ui/core/Typography";
import {
  withStyles,
  Theme,
  createStyles,
  makeStyles
} from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import brown from "@material-ui/core/colors/brown";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      flexDirection: "column",
      minHeight: "100%vh"
    },
    footer: {
      padding: theme.spacing(3, 2),
      flex: 1,
      // marginTop: "auto",
      backgroundColor: brown["50"]
    }
  })
);

export default function Footer() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <footer className={classes.footer}>
        <Container maxWidth="sm">
          <Typography variant="body1">
            Welcome to Dionysos : Copyright © 2020 ssafy.co.,Ltd. All rights
            reserved.
          </Typography>
        </Container>
      </footer>
    </div>
  );
}
