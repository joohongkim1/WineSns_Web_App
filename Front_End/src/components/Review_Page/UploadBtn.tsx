import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import PhotoCamera from "@material-ui/icons/PhotoCamera";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    input: {
      display: "none"
    }
  })
);

export default function UploadButtons() {
  const classes = useStyles();

  return (
    <div>
      <input
        accept="image/*"
        className={classes.input}
        id="icon-button-file"
        type="file"
      />
      <label htmlFor="icon-button-file">
        <IconButton
          color="primary"
          aria-label="upload picture"
          component="span"
          edge="end"
        >
          <PhotoCamera />
        </IconButton>
      </label>
    </div>
  );
}
