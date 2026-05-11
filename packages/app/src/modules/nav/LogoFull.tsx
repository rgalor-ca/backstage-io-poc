import { makeStyles } from '@material-ui/core';
import { LogoIcon } from './LogoIcon';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    alignItems: 'center',
    gap: 10,
    color: '#7df3e1',
    minWidth: 0,
  },
  icon: {
    display: 'flex',
    flex: '0 0 auto',
  },
  wordmark: {
    display: 'flex',
    flexDirection: 'column',
    minWidth: 0,
    fontWeight: 700,
    lineHeight: 1.08,
    letterSpacing: 0,
  },
  primary: {
    fontSize: 16,
    whiteSpace: 'nowrap',
  },
  secondary: {
    fontSize: 11,
    opacity: 0.82,
    whiteSpace: 'nowrap',
  },
});

export const LogoFull = () => {
  const classes = useStyles();

  return (
    <span className={classes.root} aria-label="Frontier Developer Platform">
      <span className={classes.icon} aria-hidden="true">
        <LogoIcon />
      </span>
      <span className={classes.wordmark}>
        <span className={classes.primary}>Frontier</span>
        <span className={classes.secondary}>Developer Platform</span>
      </span>
    </span>
  );
};
