import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import SimpleRating from "./Start";
import TextField from "@material-ui/core/TextField";
import UploadButtons from "./UploadBtn";
import Button from "@material-ui/core/Button";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`
  };
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      "& > *": {
        margin: theme.spacing(0),
        width: "100%",
        height: "100%"
      },
      "& .MuiTextField-root": {
        margin: theme.spacing(0),
        width: "100%"
      }
    },
    paper: {
      position: "absolute",
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: "2px solid #000",
      boxShadow: theme.shadows[5],
      padding: theme.spacing(3, 6, 8)
    }
  })
);

export default function SimpleModal() {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("Controlled");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <button type="button" onClick={handleOpen}>
        리뷰 작성
      </button>
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={open}
        onClose={handleClose}
      >
        <div style={modalStyle} className={classes.paper}>
          <form className={classes.root} noValidate autoComplete="off">
            <TextField
              id="standard-multiline-flexible"
              label="제목"
              multiline
              rowsMax="4"
              // value={value}
              onChange={handleChange}
            />{" "}
            <SimpleRating />
            <TextField
              id="outlined-multiline-static"
              label="내용"
              multiline
              rows="10"
              // defaultValue="Default Value"
              variant="outlined"
            />
            <UploadButtons />
            <div className={classes.root}>
              <Button
                variant="contained"
                color="primary"
                href="#contained-buttons"
              >
                작성하기
              </Button>
            </div>
          </form>
        </div>
      </Modal>
    </div>
  );
}
