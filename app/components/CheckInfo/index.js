import React from 'react';
import PropTypes from 'prop-types';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import EuroIcon from '@material-ui/icons/Euro';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {
  createMuiTheme,
  MuiThemeProvider,
  withStyles,
} from '@material-ui/core/styles';
import { FormattedMessage } from 'react-intl';
import Typography from '@material-ui/core/Typography';
import messages from './messages';

const themeLabel = createMuiTheme({
  overrides: {},
});

const styles = theme => ({
  table: {
    backgroundColor: '#e65e21',
  },
  category: {
    fontFamily: 'Roboto, sans-serif',
    fontSize: 22,
    fontWeight: 'bold',
    color: '#ffffff',
    [theme.breakpoints.down('md')]: {
      fontSize: '16px',
    },
  },
  title: {
    fontFamily: 'Roboto, sans-serif',
    fontSize: 17,
    fontWeight: 'bold',
    color: '#ffffff',
    [theme.breakpoints.down('md')]: {
      fontSize: '12px',
    },
  },
});

class CheckInfo extends React.PureComponent {
  state = {};

  render() {
    const { classes, register } = this.props;

    return (
      <div className={classes.container}>
        <MuiThemeProvider theme={themeLabel}>
          <div>
            <TableContainer component={Paper}>
              <Table className={classes.table} aria-label="caption table">
                <TableHead>
                  <TableRow>
                    <TableCell>
                      <Typography className={classes.category}>
                        <FormattedMessage {...messages.income} />
                      </Typography>
                    </TableCell>
                    <TableCell align="right">
                      <Typography className={classes.category}>
                        <FormattedMessage {...messages.amount} />
                      </Typography>
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow key="netSalary">
                    <TableCell component="th" scope="row">
                      <Typography className={classes.title}>
                        <FormattedMessage {...messages.netSalary} />
                      </Typography>
                    </TableCell>
                    <TableCell align="right">
                      {' '}
                      <Typography className={classes.title}>
                        {register.netSalary}
                        <EuroIcon />{' '}
                      </Typography>
                    </TableCell>
                  </TableRow>
                  <TableRow key="annualBonus">
                    <TableCell component="th" scope="row">
                      <Typography className={classes.title}>
                        <FormattedMessage {...messages.annualBonus} />
                      </Typography>
                    </TableCell>
                    <TableCell align="right">
                      {' '}
                      <Typography className={classes.title}>
                        {register.annualBonus}
                        <EuroIcon />
                      </Typography>
                    </TableCell>
                  </TableRow>
                  <TableRow key="otherSalary">
                    <TableCell component="th" scope="row">
                      <Typography className={classes.title}>
                        <FormattedMessage {...messages.otherSalary} />
                      </Typography>
                    </TableCell>
                    <TableCell align="right">
                      {' '}
                      <Typography className={classes.title}>
                        {register.otherSalary}
                        <EuroIcon />
                      </Typography>
                    </TableCell>
                  </TableRow>
                  <TableRow key="receivedRent">
                    <TableCell component="th" scope="row">
                      <Typography className={classes.title}>
                        <FormattedMessage {...messages.receivedRent} />
                      </Typography>
                    </TableCell>
                    <TableCell align="right">
                      <Typography className={classes.title}>
                        {register.receivedRent}
                        <EuroIcon />
                      </Typography>
                    </TableCell>
                  </TableRow>
                  <TableRow key="contribution">
                    <TableCell component="th" scope="row">
                      <Typography className={classes.title}>
                        <FormattedMessage {...messages.contribution} />
                      </Typography>
                    </TableCell>
                    <TableCell align="right">
                      <Typography className={classes.title}>
                        {register.contribution}
                        <EuroIcon />
                      </Typography>{' '}
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
              <Table className={classes.table} aria-label="caption table">
                <TableHead>
                  <TableRow>
                    <TableCell>
                      <Typography className={classes.category}>
                        <FormattedMessage {...messages.spend} />
                      </Typography>
                    </TableCell>
                    <TableCell align="right">
                      <Typography className={classes.category}>
                        <FormattedMessage {...messages.amount} />
                      </Typography>
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow key="rent">
                    <TableCell component="th" scope="row">
                      <Typography className={classes.title}>
                        <FormattedMessage {...messages.rent} />
                      </Typography>
                    </TableCell>
                    <TableCell align="right">
                      <Typography className={classes.title}>
                        {register.rent}
                        <EuroIcon />
                      </Typography>
                    </TableCell>
                  </TableRow>
                  <TableRow key="consumerCredit">
                    <TableCell component="th" scope="row">
                      <Typography className={classes.title}>
                        <FormattedMessage {...messages.consumerCredit} />
                      </Typography>
                    </TableCell>
                    <TableCell align="right">
                      {' '}
                      <Typography className={classes.title}>
                        {register.consumerCredit}
                        <EuroIcon />
                      </Typography>
                    </TableCell>
                  </TableRow>
                  <TableRow key="otherCredit">
                    <TableCell component="th" scope="row">
                      <Typography className={classes.title}>
                        <FormattedMessage {...messages.otherCredit} />
                      </Typography>
                    </TableCell>
                    <TableCell align="right">
                      <Typography className={classes.title}>
                        {register.otherCredit}
                        <EuroIcon />
                      </Typography>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </MuiThemeProvider>
      </div>
    );
  }
}
CheckInfo.propTypes = {
  register: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(CheckInfo);
