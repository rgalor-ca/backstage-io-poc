import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  svg: {
    width: 28,
    height: 28,
  },
  frame: {
    fill: 'none',
    stroke: '#7df3e1',
    strokeWidth: 7,
  },
  mark: {
    fill: '#7df3e1',
  },
});

export const LogoIcon = () => {
  const classes = useStyles();

  return (
    <svg
      className={classes.svg}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
      role="img"
      aria-label="Frontier"
    >
      <rect className={classes.frame} x="8" y="8" width="48" height="48" rx="10" />
      <path className={classes.mark} d="M21 47V17h24v8H31v5h12v8H31v9z" />
    </svg>
  );
};
