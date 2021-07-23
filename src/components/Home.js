import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Alert from '@material-ui/lab/Alert'; 
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import YouTube from 'react-youtube';
import AlertTitle from '@material-ui/lab/AlertTitle';
import { useHistory, Link } from 'react-router-dom';
// import { TournesolAPI } from '../api'; // (needs "api" which is not found)
// import EmailAddVerifyAlert from './EmailAddVerifyAlert'; // (needs "api" which is not found)
import { minNumRateLater } from '../constants';

import UpgradeBro from './Svg/UpgradeBro.js'

const youtubeOpts = {
  height: '275px',
  width: '490px',
  playerVars: {
    // https://developers.google.com/youtube/player_parameters
    autoplay: 0,
    controls: 0,
    iv_load_policy: 0,
    modestbranding: 1,
    // playsinline: 1,
    showinfo: 0,
    rel: 0,
  },
};

const LinkOrText = ({ text, link, isLink = false }) => {
  if (isLink) {
    return (
      <Link to={link}>
        {text}
      </Link>
    );
  }

  return (
    <span>
      {text}
    </span>
  );
};

const useStyles = makeStyles(() => ({
  root: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    minWidth: '420px',
  },
  imageContainer: {
    width: '100%',
    maxWidth: '700px',
    position: 'relative',
    color: 'black',
  },
  descriptionContainer: {
    width: '100%',
    maxWidth: '900px',
    position: 'relative',
    textAlign: 'center',
  },
  statistic: {
    fontSize: 70,
  },
  spacing: {
    minHeight: '30px',
  },
  arrowCon: {
    width: '100%',
  },
  arrowMedia: {
    minHeight: '100px',
    width: '100%',
    objectFit: 'cover',
  },
  arrowText: {
    position: 'absolute',
    color: 'black',
    transform: 'translateX(-50%)',
  },
  //add :
  rectangle67 : {
    position: 'absolute',
    width: '100%',
    height: '534px',
    left: '0px',
    top: '0px',
    background: '#1282B2',
  },
  upgradeBro : {
    position: 'absolute',
    width: '374px',
    height: '392.01px',
    right: '211px',
    top: '118px',
  }



}));

const Home = () => {
  const classes = useStyles();
  const history = useHistory();
  const [data, setData] = React.useState({});
  const [loading, setLoading] = React.useState(true);
  const [numRatedLater, setNumRatedLater] = React.useState(null);
  const [numRatings, setNumRatings] = React.useState(null);

  

  return (
    <div className={classes.root}>
      <div className={classes.rectangle67}> <UpgradeBro cl={classes.upgradeBro}/> </div>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
      >
        <Grid item xs={6}>
          <Typography variant="h3">
            Tournesol
          </Typography>
        </Grid>
        <Typography variant="h4">
          Our journey so far encompasses...
        </Typography>
      </Grid>
    </div>
  );
};


export default Home;