/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import InputValidator from '../../components/Validator';
import Result from '../../components/Result';

class HomePage extends React.PureComponent {
  state = {
    amountSpend: 0,
    annualAmount: 0,
    taxFee: 0.75,
    taxAmount: 0,
    index: 0,
    activeStep: 1,
    spentResult: 0,
    incomeResult: 0,
    salaryResult: 0,
    monthlyCapacity: 0,
    register: {
      netSalary: '',
      annualBonus: '',
      otherSalary: '',
      receivedRent: '',
      contribution: '',
      rent: '',
      consumerCredit: '',
      otherCredit: '',
    },
  };

  handleChange = name => event => {
    const registerState = this.state.register;
    registerState[name] = Number(event.target.value);
    const registerModified = Object.assign({}, registerState);
    this.setState({ register: registerModified });
  };

  handleClickStepper = step => {
    this.setState({ activeStep: step });
  };

  buttonBack = () => {
    const { index } = this.state;
    this.setState({ index: index - 1 });
  };

  result = () =>
    this.state.register.netSalary + this.state.register.otherSalary;

  onSubmit = () => {
    const {
      index,
      incomeResult,
      salaryResult,
      spentResult,
      // eslint-disable-next-line no-unused-vars
      monthlyCapacity,
    } = this.state;
    const {
      rent,
      consumerCredit,
      otherCredit,
      netSalary,
      annualBonus,
      otherSalary,
      receivedRent,
    } = this.state.register;
    switch (index) {
      case 0:
        this.setState({ index: index + 1 });
        this.setState({
          incomeResult: netSalary + annualBonus + otherSalary + receivedRent,
        });
        break;
      case 1:
        this.setState({ spentResult: rent + consumerCredit + otherCredit });
        this.setState({ salaryResult: incomeResult - spentResult });
        this.setState({ index: index + 1 });
        break;
      case 2:
        this.setState({ monthlyCapacity: (salaryResult / 100) * 33 });
        this.props.actions.showResult();
        break;
      default:
    }
  };

  render() {
    const {
      index,
      activeStep,
      register,
      monthlyCapacity,
      annualAmount,
      taxAmount,
      // eslint-disable-next-line no-unused-vars
      taxFee,
      // eslint-disable-next-line no-unused-vars
      amountSpend,
    } = this.state;
    const { homepageStore } = this.props;
    const steps = [
      { title: '5 ans' },
      { title: '7 ans' },
      { title: '10 ans' },
      { title: '15 ans' },
      { title: '20 ans' },
    ];
    // prettier-ignore
    const value = (
      <div>
        {/* eslint-disable-next-line no-nested-ternary */}
        {this.state.activeStep === 1 ? (
          <div>
            {' '}
            {this.setState({
              annualAmount: (monthlyCapacity * 60).toFixed(2),
            })}
            {annualAmount}
            {this.setState({
              taxAmount: (
                ((annualAmount / 100) * taxFee + (annualAmount / 100) * 0.15) *
                5
              ).toFixed(2),
            })}
          </div>
        ) : // eslint-disable-next-line no-nested-ternary
          this.state.activeStep === 2 ? (
            <div>
              {(monthlyCapacity * 84).toFixed(2)}{' '}
              {this.setState({ taxFee: 0.85 })}{' '}
              {this.setState({
                taxAmount: (
                  ((annualAmount / 100) * taxFee + (annualAmount / 100) * 0.15) *
                7
                ).toFixed(2),
              })}
            </div>
          ) : // eslint-disable-next-line no-nested-ternary
            this.state.activeStep === 3 ? (
              <div>
                {(monthlyCapacity * 120).toFixed(2)}{' '}
                {this.setState({ taxFee: 0.98 })}
                {this.setState({
                  taxAmount: (
                    ((annualAmount / 100) * taxFee + (annualAmount / 100) * 0.15) *
                10
                  ).toFixed(2),
                })}
              </div>
            ) : // eslint-disable-next-line no-nested-ternary
              this.state.activeStep === 4 ? (
                <div>
                  {(monthlyCapacity * 180).toFixed(2)}{' '}
                  {this.setState({ taxFee: 1.08 })}
                  {this.setState({
                    taxAmount: (
                      ((annualAmount / 100) * taxFee + (annualAmount / 100) * 0.15) *
                15
                    ).toFixed(2),
                  })}
                </div>
              ) : this.state.activeStep === 5 ? (
                <div>
                  {(monthlyCapacity * 240).toFixed(2)}{' '}
                  {this.setState({ taxFee: 1.14 })}
                  {this.setState({
                    taxAmount: (
                      ((annualAmount / 100) * taxFee + (annualAmount / 100) * 0.15) *
                20
                    ).toFixed(2),
                  })}
                </div>
              ) : (
                <div> {this.state.activeStep} </div>
              )}
      </div>
    );
    return (
      <div>
        {homepageStore.showForm ? (
          <InputValidator
            index={index}
            buttonBack={this.buttonBack}
            handleChange={this.handleChange}
            onSubmit={this.onSubmit}
            register={register}
            netSalary={register.netSalary}
            annualBonus={register.annualBonus}
            otherSalary={register.otherSalary}
            receivedRent={register.receivedRent}
            contribution={register.contribution}
            rent={register.rent}
            consumerCredit={register.consumerCredit}
            otherCredit={register.otherCredit}
          />
        ) : null}

        {homepageStore.showResult ? (
          <Result
            arrayData={steps}
            amountMonthly={monthlyCapacity.toFixed(2)}
            activeStep={activeStep}
            amountSpend={value}
            handleClickStepper={this.handleClickStepper}
            taxAmount={taxAmount}
          />
        ) : null}
      </div>
    );
  }
}

HomePage.propTypes = {
  actions: PropTypes.any,
  homepageStore: PropTypes.object.isRequired,
};

export default HomePage;
