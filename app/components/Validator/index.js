import React from 'react';
import Button from '@material-ui/core/Button';
import { TextValidator, ValidatorForm } from 'react-material-ui-form-validator';
import MobileStepper from '@material-ui/core/MobileStepper';
import Paper from '@material-ui/core/Paper';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import {
  createMuiTheme,
  MuiThemeProvider,
  withStyles,
} from '@material-ui/core/styles';
import NumberFormat from 'react-number-format';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import CheckInfo from '../CheckInfo';

function NumberFormatCustom(props) {
  const { inputRef, onChange, ...other } = props;

  return (
    <NumberFormat
      {...other}
      getInputRef={inputRef}
      onValueChange={values => {
        onChange({
          target: {
            value: values.value,
          },
        });
      }}
      suffix="€"
    />
  );
}

NumberFormatCustom.propTypes = {
  inputRef: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
};

const themeLabel = createMuiTheme({
  overrides: {
    MuiMobileStepper: {
      dotActive: {
        backgroundColor: '#e65e21',
      },
    },
    MuiFormLabel: {
      root: {
        fontFamily: 'Cairo, sans-serif',
        fontWeight: 'bold',
        fontSize: '14px',
        color: '#e65e21',
        '&$focused': {
          // increase the specificity for the pseudo class
          color: '#e65e21',
        },
      },
    },
  },
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
  cssOutlinedInput: {
    '&$cssFocused $notchedOutline': {
      borderColor: `#e65e21 !important`,
      color: `#e65e21 !important`,
    },
  },
  cssFocused: {
    color: '#e65e21',
    '&:hover:not($inputDisabled):not(inputFocused):not($inputError) $inputNotchedOutline': {
      borderColor: '#e65e21 !important',
    },
  },

  notchedOutline: {
    borderWidth: '1px',
    borderColor: '#e65e21 !important',
    color: '#e65e21',
  },
});

class InputValidator extends React.PureComponent {
  state = {
    maxSteps: 3,
  };

  renderValidator() {
    const { register, handleChange, index, classes } = this.props;

    switch (index) {
      case 0:
        return [
          <TextValidator
            ref={input => {
              this.netSalary = input;
            }}
            variant="outlined"
            margin="normal"
            key="salary-net"
            label="Salaire net *"
            onChange={handleChange('netSalary', this.netSalary)}
            name="salaire net"
            value={register.netSalary}
            fullwidth
            validators={['required']}
            errorMessages={['this field is required']}
            InputLabelProps={{
              classes: {
                root: classes.cssLabel,
                focused: classes.cssFocused,
              },
            }}
            InputProps={{
              inputComponent: NumberFormatCustom,
              classes: {
                root: classes.cssOutlinedInput,
                focused: classes.cssFocused,
                notchedOutline: classes.notchedOutline,
              },
              inputMode: 'numeric',
            }}
          />,
          <TextValidator
            ref={input => {
              this.annualBonus = input;
            }}
            key="annual-bonus"
            variant="outlined"
            margin="normal"
            label="Primes annuelles *"
            onChange={handleChange('annualBonus', this.annualBonus)}
            name="Primes annuelles"
            value={register.annualBonus}
            fullwidth
            validators={['required', 'minNumber:0', 'maxNumber:99999999']}
            errorMessages={[
              'this field is required',
              'number is too low',
              'number is too high',
            ]}
            InputLabelProps={{
              classes: {
                root: classes.cssLabel,
                focused: classes.cssFocused,
              },
            }}
            InputProps={{
              inputComponent: NumberFormatCustom,
              classes: {
                root: classes.cssOutlinedInput,
                focused: classes.cssFocused,
                notchedOutline: classes.notchedOutline,
              },
              inputMode: 'numeric',
            }}
          />,
          <TextValidator
            ref={input => {
              this.otherSalary = input;
            }}
            key="other-resource"
            variant="outlined"
            label="Autres revenus *"
            margin="normal"
            onChange={handleChange('otherSalary', this.otherSalary)}
            name="autres revenus"
            value={register.otherSalary}
            fullwidth
            validators={['required', 'minNumber:0', 'maxNumber:99999999']}
            errorMessages={[
              'this field is required',
              'number is too low',
              'number is too high',
            ]}
            InputLabelProps={{
              classes: {
                root: classes.cssLabel,
                focused: classes.cssFocused,
              },
            }}
            InputProps={{
              inputComponent: NumberFormatCustom,
              classes: {
                root: classes.cssOutlinedInput,
                focused: classes.cssFocused,
                notchedOutline: classes.notchedOutline,
              },
              inputMode: 'numeric',
            }}
          />,
          <TextValidator
            ref={input => {
              this.receiveRent = input;
            }}
            key="received-rent"
            variant="outlined"
            margin="normal"
            label="Loyers percus *"
            onChange={handleChange('receivedRent', this.receiveRent)}
            name="loyers percus"
            value={register.receivedRent}
            fullwidth
            validators={['required', 'minNumber:0', 'maxNumber:99999999']}
            errorMessages={[
              'this field is required',
              'number is too low',
              'number is too high',
            ]}
            InputLabelProps={{
              classes: {
                root: classes.cssLabel,
                focused: classes.cssFocused,
              },
            }}
            InputProps={{
              inputComponent: NumberFormatCustom,
              classes: {
                root: classes.cssOutlinedInput,
                focused: classes.cssFocused,
                notchedOutline: classes.notchedOutline,
              },
              inputMode: 'numeric',
            }}
          />,
          <TextValidator
            ref={input => {
              this.contribution = input;
            }}
            key="contribution"
            variant="outlined"
            margin="normal"
            label="Apport *"
            onChange={handleChange('contribution', this.contribution)}
            name="apport"
            value={register.contribution}
            fullwidth
            validators={['required', 'minNumber:0', 'maxNumber:99999999']}
            errorMessages={[
              'this field is required',
              'number is too low',
              'number is too high',
            ]}
            InputLabelProps={{
              classes: {
                root: classes.cssLabel,
                focused: classes.cssFocused,
              },
            }}
            InputProps={{
              inputComponent: NumberFormatCustom,
              classes: {
                root: classes.cssOutlinedInput,
                focused: classes.cssFocused,
                notchedOutline: classes.notchedOutline,
              },
              inputMode: 'numeric',
            }}
          />,
        ];
      case 1:
        return [
          <TextValidator
            ref={input => {
              this.rent = input;
            }}
            key="add-rent"
            label="Loyer mensuel restant *"
            margin="normal"
            variant="outlined"
            onChange={handleChange('rent', this.rent)}
            name="loyer mensuel restant"
            value={register.rent}
            fullwidth
            validators={['required', 'minNumber:0', 'maxNumber:99999999']}
            errorMessages={[
              'this field is required',
              'number is too low',
              'number is too high',
            ]}
            InputLabelProps={{
              classes: {
                root: classes.cssLabel,
                focused: classes.cssFocused,
              },
            }}
            InputProps={{
              inputComponent: NumberFormatCustom,
              classes: {
                root: classes.cssOutlinedInput,
                focused: classes.cssFocused,
                notchedOutline: classes.notchedOutline,
              },
              inputMode: 'numeric',
            }}
          />,
          <TextValidator
            ref={input => {
              this.consumerCredit = input;
            }}
            key="consumer-credit"
            variant="outlined"
            margin="normal"
            label="Crédit a la consommation *"
            onChange={handleChange('consumerCredit', this.consumerCredit)}
            name="credit a la consommation"
            value={register.consumerCredit}
            fullwidth
            validators={['required', 'minNumber:0', 'maxNumber:99999999']}
            errorMessages={[
              'this field is required',
              'number is too low',
              'number is too high',
            ]}
            InputLabelProps={{
              classes: {
                root: classes.cssLabel,
                focused: classes.cssFocused,
              },
            }}
            InputProps={{
              inputComponent: NumberFormatCustom,
              classes: {
                root: classes.cssOutlinedInput,
                focused: classes.cssFocused,
                notchedOutline: classes.notchedOutline,
              },
              inputMode: 'numeric',
            }}
          />,
          <TextValidator
            ref={input => {
              this.otherCredit = input;
            }}
            key="other-credit"
            variant="outlined"
            label="Autres crédit *"
            onChange={handleChange('otherCredit', this.otherCredit)}
            name="autres crédit"
            margin="normal"
            value={register.otherCredit}
            fullwidth
            validators={['required', 'minNumber:0', 'maxNumber:99999999']}
            errorMessages={[
              'this field is required',
              'number is too low',
              'number is too high',
            ]}
            InputLabelProps={{
              classes: {
                root: classes.cssLabel,
                focused: classes.cssFocused,
              },
            }}
            InputProps={{
              inputComponent: NumberFormatCustom,
              classes: {
                root: classes.cssOutlinedInput,
                focused: classes.cssFocused,
                notchedOutline: classes.notchedOutline,
              },
              inputMode: 'numeric',
            }}
          />,
        ];
      case 2:
        return (
          <div>
            <CheckInfo register={register} />
          </div>
        );
      default:
        return [];
    }
  }

  render() {
    const { maxSteps } = this.state;
    const { classes, index, buttonBack, onSubmit } = this.props;
    return (
      <div className={classes.container}>
        <MuiThemeProvider theme={themeLabel}>
          <Paper elevation={3} className={classes.paper}>
            <img src="../../img/logo.png" alt="" style={{ width: 80 }} />
            <Typography className={classes.title}>
              <FormattedMessage {...messages.title[index].resource} />
            </Typography>
            <ValidatorForm
              onSubmit={onSubmit}
              onError={errors => console.log(errors)}
            >
              <div className={classes.validatorContainer}>
                {this.renderValidator()}
              </div>
              <MobileStepper
                className={classes.stepperContainer}
                steps={maxSteps}
                position="static"
                variant="dots"
                activeStep={index}
                nextButton={
                  <Button
                    className={classes.buttonNext}
                    type="submit"
                    variant="outlined"
                    size="large"
                    disabled={index === this.maxSteps - 1}
                  >
                    <FormattedMessage {...messages.button[index].buttonNext} />
                  </Button>
                }
                backButton={
                  <Button
                    variant="outlined"
                    size="large"
                    onClick={buttonBack}
                    disabled={index === 0}
                  >
                    <FormattedMessage {...messages.backButton} />
                  </Button>
                }
              />
            </ValidatorForm>
          </Paper>
        </MuiThemeProvider>
      </div>
    );
  }
}
InputValidator.propTypes = {
  index: PropTypes.number.isRequired,
  register: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
  buttonBack: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(InputValidator);
