import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { fade, makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { ButtonGroup } from '@material-ui/core';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    mrNavbar: {
      minHeight: '41px',
      width: '100%',
    },
    appBar: {
      borderBottom: `1px solid ${theme.palette.divider}`,
    },
    toolbar: {
      minHeight: '41px',
      flexWrap: 'wrap',
    },
    mrTimelineButton: {

    }
  })
)

const buttons = [
  { title: 'My Review', url: 'myreview' },
  { title: 'My Page', url: 'mypage' },
  { title: 'My Likes', url: 'mylikes' },
  { title: 'My Friends', url: 'myfriends' },
];

export default function TimelineNavbar() {
  const classes = useStyles();
  return (
    <div className={classes.mrNavbar}>
      <AppBar position="static" color="default" elevation={0} className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <ButtonGroup className={classes.mrTimelineButton}>
            {buttons.map(button => (
              <Link
                color="inherit"
                noWrap
                key={button.title}
                variant="body2"
                href={button.url}
              >
                <Button>
                  {button.title}
                </Button>
              </Link>
            ))}
          </ButtonGroup>
        </Toolbar>
      </AppBar>
    </div>
  );

}