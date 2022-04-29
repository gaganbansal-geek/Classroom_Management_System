import { AppBar,  Toolbar, Typography } from '@mui/material';
import {Avatar, Menu,MenuItem } from "@material-ui/core";
import React from 'react'
import { useStyles } from './style';
import { Add , Apps} from "@material-ui/icons";
import CreateClass from '../CreateClass/CreateClass';
import { useLocalContext } from '../../Context/context';
import JoinClass from '../JoinClass/JoinClass';

const Header = ({children}) => {
    const classes = useStyles();


    const [anchorEl,setAnchorEl]  = React.useState(null);
    const handleClick =(event) =>{
        setAnchorEl(event.currentTarget);
    };

    const handleClose =() =>{
        setAnchorEl(null);
    };

    const { setCreateClassDialog,setJoinClassDialog, loggedInUser ,logout} = useLocalContext();

    const handleCreate =()=>{
        handleClose();
        setCreateClassDialog(true);
    }

    const handleJoin =()=>{
        handleClose();
        setJoinClassDialog(true);
    }


  return (
    <div className={classes.root}>
      <AppBar className={classes.appbar} position = "static">
          <Toolbar className={classes.toolbar}>
              <div className={classes.headerWrapper}>
                  {children}
                  <img src= "https://www.gstatic.com/images/branding/googlelogo/svg/googlelogo_clr_74x24px.svg" alt="classroom " />
                  <Typography variant= "h6" className={classes.title}>
                      Classroom
                  </Typography>
              </div>
              <div className={classes.header__wrapper__right}>
                  <Add onClick={handleClick} className={classes.icon} />
                  <Apps className={classes.icon} />
                  <Menu
                  id="simple-menu"
                  anchorEl={anchorEl}
                  keepMounted
                  open={Boolean(anchorEl)}
                  onClose={handleClose}>
                        <MenuItem onClick={handleJoin}>Join Class</MenuItem>
                        <MenuItem onClick={handleCreate}>Create Class</MenuItem>
                  </Menu>
                  <div>
                      <Avatar onClick={()=>logout()} src={loggedInUser?.photoURL} className={classes.icon} />
                  </div>

              </div>
          </Toolbar>
      </AppBar>
    <CreateClass />
    <JoinClass />
    </div>
  )
}

export default Header