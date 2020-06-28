import React from 'react';
import Stepper from 'react-js-stepper';
import EuroIcon from '@material-ui/icons/Euro';
import Paper from '@material-ui/core/Paper';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import {
  createMuiTheme,
  MuiThemeProvider,
  withStyles,
} from '@material-ui/core/styles';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

const themeLabel = createMuiTheme({
  overrides: {},
});

const styles = theme => ({
  container: {
    display: 'flex',
    justifyContent: 'center',
    [theme.breakpoints.down('md')]: {
      marginBottom: 12,
    },
  },
  stepperContainer: {
    width: 450,
  },
  buttonNext: {
    color: '#e65e21',
    borderColor: '#e65e21',
    '&:hover': {
      backgroundColor: '#e65e21',
      color: '#ffffff',
    },
  },
  title: {
    fontSize: '24px',
    fontFamily: 'Montserrat, sans-serif',
    fontWeight: 'bold',
    color: '#e65e21',
    margin: 40,
  },
  cssLabel: {
    color: '#e65e21',
    fontFamily: 'Roboto, sans-serif',
    fontWeight: 'bold',
  },
  paper: {
    backgroundColor: '#ffffff',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 50,
    padding: 50,
    width: 600,
  },
  validatorContainer: {
    display: 'flex',
    flexDirection: 'column',
  },
  titleValue: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'Roboto, sans-serif',
    fontSize: '32px',
    fontWeight: 'bold',
    color: '#1d1b38',
  },
});

class Result extends React.PureComponent {
  render() {
    const {
      classes,
      amountMonthly,
      activeStep,
      amountSpend,
      handleClickStepper,
      arrayData,
      taxAmount,
    } = this.props;
    return (
      <div className={classes.container}>
        <MuiThemeProvider theme={themeLabel}>
          <Paper elevation={3} className={classes.paper}>
            <img src="../../img/logo.png" alt="" style={{ width: 80 }} />
            <Typography align="center" className={classes.title}>
              <FormattedMessage {...messages.amountMonthly} />
            </Typography>
            <Typography className={classes.titleValue}>
              {amountMonthly} <EuroIcon />
            </Typography>
            <Typography align="center" className={classes.title}>
              <FormattedMessage {...messages.amountSpend} />
            </Typography>
            <div style={{ width: '100%' }}>
              <Stepper
                steps={arrayData}
                activeStep={activeStep}
                onSelect={handleClickStepper}
                showNumber={false}
              />

              <div style={{ marginTop: '40px' }}>
                <div style={{ marginTop: '40px' }}>
                  <div className={classes.resultAnnual}>
                    <Typography align="center" className={classes.titleValue}>
                      {amountSpend} <EuroIcon />
                    </Typography>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <Typography align="center" className={classes.title}>
                <FormattedMessage {...messages.totalAmountCredit} />
              </Typography>
              <Typography className={classes.titleValue}>
                {taxAmount} <EuroIcon />
              </Typography>
            </div>
          </Paper>
        </MuiThemeProvider>
      </div>
    );
  }
}
Result.propTypes = {
  activeStep: PropTypes.number.isRequired,
  amountMonthly: PropTypes.number.isRequired,
  taxAmount: PropTypes.number.isRequired,
  amountSpend: PropTypes.number.isRequired,
  arrayData: PropTypes.array.isRequired,
  handleClickStepper: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(Result);
