/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import InputValidator from '../../components/Validator';
import messages from './messages';

class HomePage extends React.PureComponent {
  state = {
    index: 0,
    register: {
      netSalary: 0,
      annualBonus: 0,
      otherSalary: 0,
      receivedRent: 0,
      contribution: 0,
      rent: 0,
      consumerCredit: 0,
      otherCredit: 0,
    },
  };

  handleChange = name => event => {
    const registerState = this.state.register;
    registerState[name] = event.target.value;
    const registerModified = Object.assign({}, registerState);
    this.setState({ register: registerModified });
  };

  buttonBack = () => {
    const { index } = this.state;
    this.setState({ index: index - 1 });
  };

  result = () =>
    this.state.register.netSalary + this.state.register.otherSalary;

  onSubmit = () => {
    const { index } = this.state;
    const {
      rent,
      consumerCredit,
      otherCredit,
      netSalary,
      annualBonus,
      otherSalary,
      receivedRent,
    } = this.state.register;
    const spentResult = rent + consumerCredit + otherCredit;
    console.log(this.result());
    const incomeResult = netSalary + annualBonus + otherSalary + receivedRent;
    console.log(incomeResult);
    const salaryResult = incomeResult - spentResult;
    switch (index) {
      case 0:
        this.setState({ index: index + 1 });
        console.log(index);
        break;
      case 1:
      default:
        console.log(salaryResult);
    }
  };

  render() {
    const { index, register } = this.state;
    return (
      <div>
        <FormattedMessage {...messages.header} />
        <InputValidator
          index={index}
          buttonBack={this.buttonBack}
          handleChange={this.handleChange}
          onSubmit={this.onSubmit}
          register={register}
        />
        {console.log(index)}
      </div>
    );
  }
}

export default HomePage;
