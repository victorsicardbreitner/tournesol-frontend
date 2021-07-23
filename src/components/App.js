import React from 'react';
import clsx from 'clsx';
import { useHistory } from 'react-router-dom';
import Cookies from 'universal-cookie';

import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CssBaseline from '@material-ui/core/CssBaseline';
import IconButton from '@material-ui/core/IconButton';
import YouTubeIcon from '@material-ui/icons/YouTube';
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';
import Logo from './Svg/Logo.js';
import Vector from './Svg/Vector.js';
import Button from '@material-ui/core/Button';


import Home from './Home'


const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'absolute',
    display: 'flex',
    width: '100%',
    height: '100%',
    overflow: 'hidden',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  grow: {
    flexGrow: 1,
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height : "80px",
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  content: {
    position: 'absolute',
    flexGrow: 1,
    marginTop: '80px',
    height: 'calc(100% - 80px)',
    width : '100%',
    
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },

 

  //try with searchbar

  search : {
    position: 'absolute',
  },
  
  searchTerm : {
    width: "484px",
    border: "1px solid #F1EFE7",
    "border-right": "none",
    padding: "5px",
    height: "36px",
    "border-radius": "4px",
    "box-sizing": "border-box",
    outline: "none",
    color: "#9dbfaf",
    "font-family": "Poppins",
    "font-style": "normal",
    "font-weight": "normal",
    "font-size": "18px",
    "line-height": "28px",
  },
  
  
  searchButton : {
    width : "76px",
    right: "0px",
    top: "0px",
    bottom: "0px",
    height: "36px",
    border: "1px solid #F1EFE7",
    background: "#F1EFE7",
    color: "#fff",
    cursor: "pointer",
    position: "absolute",
    "border-radius": "0px 4px 4px 0px",
  },
  

  
  
}));

const App = () => {
  const classes = useStyles();
  const cookies = new Cookies();

  const getCookieWithDefault = (key, defaultValue) => {
    const val = cookies.get(key);
    if (val === undefined) {
      return defaultValue;
    }

    return val;
  };

  const theme = useTheme();
  const history = useHistory();
  const [open, setOpen] = React.useState(
    getCookieWithDefault('menuOpen', 'true') === 'true',
  );

  const [moreOpen, setMoreOpen] = React.useState(
    getCookieWithDefault('menuMoreOpen', 'false') === 'true',
  );

  const handleMoreClick = () => {
    setMoreOpen(!moreOpen);
    cookies.set('menuMoreOpen', !moreOpen ? 'true' : 'false',
      { path: '/' });
  };

  const handleDrawerOpen = () => {
    setOpen(true);
    cookies.set('menuOpen', 'true', { path: '/' });
  };

  const handleDrawerClose = () => {
    setOpen(false);
    cookies.set('menuOpen', 'false', { path: '/' });
  };

  const nestedClass = open ? classes.nested : '';

  const socialMedia = {
    twitter: {
      href: 'https://twitter.com/tournesolapp',
      ariaLabel: 'The Twitter page of Tournesol',
    },
    youtube: {
      href: 'https://www.youtube.com/channel/UCH8TsmKEX_PR4jxsg2W3vOg',
      ariaLabel: 'The YouTube page of Tournesol',
    },
    github: {
      href: 'https://github.com/tournesol-app',
      ariaLabel: 'The GitHub page of Tournesol',
    },
  };

  


  return (
    <div className={classes.root} id="id_menu_all">
      {/* For selenium to know the status of the menu faster */}
      {moreOpen ? <span id="id_more_open" />
        : <span id="id_more_closed" />}
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar className={classes.toolbar}>
          <Logo />
          <div className={classes.search}>
            <input type="text" className={classes.searchTerm} id="input_text"></input>
            <button type="submit" className={classes.searchButton}>
              <Vector />
            </button>
          </div>

          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
          <Button
                  variant="contained"
                  color="primary"
                  size="small"
                  onClick={() => history.push('/login')}
                  id="login_button"
                >
                  Log in
                </Button>
                <Button
                  variant="contained"
                  color="secondary"
                  size="small"
                  onClick={() => history.push('/signup')}
                  id="signup_button"
                >
                  Join us
                </Button>
          </div>

        </Toolbar>
      </AppBar>


      <main className={classes.content}>
        <Home />
      </main>
    </div>
  );
};

export default App;
