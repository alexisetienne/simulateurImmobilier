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
    // taxFee: 0,
    // taxAssurances: 0,
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
      // eslint-disable-next-line no-unused-vars
      amountSpend,
    } = this.state;
    const { homepageStore } = this.props;
    const steps = [
      { title: '5 années' },
      { title: '7 années' },
      { title: '10 années' },
      { title: '15 années' },
      { title: '20 années' },
    ];
    const value = (
      <div style={{ marginTop: '40px' }}>
        {/* eslint-disable-next-line no-nested-ternary */}
        {this.state.activeStep === 1 ? (
          <div> {(monthlyCapacity * 60).toFixed(2)} </div>
        ) : this.state.activeStep === 2 ? (
          <div> {(monthlyCapacity * 84).toFixed(2)} </div>
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
            amountMonthly={monthlyCapacity}
            activeStep={activeStep}
            amountSpend={value}
            handleClickStepper={this.handleClickStepper}
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
