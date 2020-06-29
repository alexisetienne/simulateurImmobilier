import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
    width: 100%;
  }

  body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  body.fontLoaded {
    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  #app {
    background-color: #fafafa;
    min-height: 100%;
    min-width: 100%;
  }

  .stepper-item-inner-active {
    background-color: #e65e21;
}

.stepper-item-inner-future {
    background-color: #ffffff;
}

.stepper-item-inner-completed {
   background-color: #ffffff;
}

.stepper-container {
    display: flex;
    flex-wrap: nowrap;
    background-color: transparent;
    justify-content: center;
    align-items: center;
    padding: 10px;
    padding-left: 40px;
    padding-right: 40px;
}

.stepper-container .stepper-item .stepper-title {
    font-family: "Roboto",Roboto,Arial,sans-serif;
    position: absolute;
    display: inline-block;
    width: max-content;
    max-width: 200px;
    min-width: 200px;
    transform: translate(-39%, 5px);
    text-align: center;
    font-size: 17px;
}

.stepper-container .stepper-item .stepper-title-active {
    font-family: "Roboto",Roboto,Arial,sans-serif;
    color: #1d1b38;
    font-size: 17px;
    font-weight: bold;
}

  p,
  label {
    font-family: Georgia, Times, 'Times New Roman', serif;
    line-height: 1.5em;
  }
`;

export default GlobalStyle;
