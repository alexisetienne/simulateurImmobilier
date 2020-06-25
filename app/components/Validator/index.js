import React from 'react';
import Button from '@material-ui/core/Button';
import { TextValidator, ValidatorForm } from 'react-material-ui-form-validator';
import MobileStepper from '@material-ui/core/MobileStepper';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

const styles = theme => ({
  container: {
    maxWidth: 800,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    [theme.breakpoints.down('md')]: {
      marginBottom: 12,
    },
  },
});

class InputValidator extends React.PureComponent {
  state = {
    maxSteps: 2,
  };

  renderValidator() {
    const { register, handleChange, index } = this.props;
    switch (index) {
      case 0:
        return [
          <TextValidator
            ref={input => {
              this.netSalary = input;
            }}
            key="salary-net"
            label="Salaire net"
            onChange={handleChange('netSalary', this.netSalary)}
            name="salaire net"
            value={register.netSalary}
            fullwidth
            validators={['required', 'minNumber:0', 'maxNumber:99999999']}
            errorMessages={[
              'this field is required',
              'number is too low',
              'number is too high',
            ]}
          />,
          <TextValidator
            ref={input => {
              this.annualBonus = input;
            }}
            key="annual-bonus"
            label="Primes annuelles"
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
          />,
          <TextValidator
            ref={input => {
              this.otherSalary = input;
            }}
            key="other-resource"
            label="Autres revenus"
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
          />,
          <TextValidator
            ref={input => {
              this.receiveRent = input;
            }}
            key="received-rent"
            label="Loyers percus"
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
          />,
          <TextValidator
            ref={input => {
              this.contribution = input;
            }}
            key="contribution"
            label="Apport"
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
          />,
        ];
      case 1:
        return [
          <TextValidator
            ref={input => {
              this.rent = input;
            }}
            key="add-rent"
            label="Loyer mensuel restant"
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
          />,
          <TextValidator
            ref={input => {
              this.consumerCredit = input;
            }}
            key="consumer-credit"
            label="Crédit a la consommation"
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
          />,
          <TextValidator
            ref={input => {
              this.otherCredit = input;
            }}
            key="other-credit"
            label="Autres crédit"
            onChange={handleChange('otherCredit', this.otherCredit)}
            name="autres crédit"
            value={register.otherCredit}
            fullwidth
            validators={['required', 'minNumber:0', 'maxNumber:99999999']}
            errorMessages={[
              'this field is required',
              'number is too low',
              'number is too high',
            ]}
          />,
        ];
      default:
        return [];
    }
  }

  render() {
    const { maxSteps } = this.state;
    const { classes, index, buttonBack, onSubmit } = this.props;
    return (
      <div className={classes.container}>
        <ValidatorForm
          onSubmit={onSubmit}
          onError={errors => console.log(errors)}
        >
          <div className={classes.validatorContainer}>
            {this.renderValidator()}
          </div>
          <MobileStepper
            steps={maxSteps}
            position="static"
            variant="text"
            activeStep={index}
            nextButton={
              <Button
                type="submit"
                size="small"
                disabled={index === this.maxSteps - 1}
              >
                <FormattedMessage {...messages.button[index].buttonNext} />
              </Button>
            }
            backButton={
              <Button size="small" onClick={buttonBack} disabled={index === 0}>
                <FormattedMessage {...messages.backButton} />
              </Button>
            }
          />
        </ValidatorForm>
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
