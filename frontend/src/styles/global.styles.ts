import { createGlobalStyle, css } from 'styled-components'

// react-toastify
import 'react-toastify/dist/ReactToastify.min.css'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    border: 0;
    box-sizing: border-box;
    vertical-align: baseline;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    outline: 0;
  }

  ${({ theme }) => css`
    html {
      font-family: "Parisienne", cursive;
      font-size: 62.5%;
      scroll-behavior: smooth;
    }

    body {
      background-color: #F2F2F2;
      color: #030517;
      font-size: 1.6rem;

      width: 100vw;
      height: 100%;
      margin: 0px;
      padding: 0px;
      overflow-x: hidden;
    }

    h1, h2, h3, h4, h5, h6, strong { font-weight: 700; }

    a { text-decoration: none; }

    ul { list-style: none; }

    a, button { cursor: pointer; }

    .Toastify__toast--info { background: 'rgb(51, 102, 255)'; }
    .Toastify__toast--success { background: 'rgb(51, 187, 102)'; }
    .Toastify__toast--warning { background: 'rgb(254, 255, 20)'; }
    .Toastify__toast--error { background: 'rgb(255, 102, 102)'; }


    /* Scroll Bar */
    ::-webkit-scrollbar-track {
      background-color: #f5f5f5;
    }

    ::-webkit-scrollbar {
      width: 8px;
      background-color: #f5f5f5;
    }

    ::-webkit-scrollbar-thumb {
      background-color: rgba(66, 66, 66, 0.2);
      border: 0px;
      background-clip: padding-box;
      border-radius: 5px;
    }

    /* Button Loader */
    .lds-dual-ring {
      display: inline-block;
      width: 16px;
      height: 16px;
    }

    .lds-dual-ring:after {
      content: " ";
      display: block;
      width: 24px;
      height: 24px;
      border-radius: 50%;
      border: 3px solid #fff;
      border-color: #fff transparent #fff transparent;
      animation: lds-dual-ring 1.2s linear infinite;
    }

    @keyframes lds-dual-ring {
        0% {
          transform: rotate(0deg);
        }
        100% {
          transform: rotate(360deg);
        }
    }

    /* Pagination */
    .page-item.active .page-link {
      background-color: #2557a7;
      border-color: #2557a7;
    }

    .page-link {
      color: #2557a7;
    }

    .page-link:hover {
      color: #2557a7;
    }

    /* Input */
    .loginButtonWrapper,
    .registerButtonWrapper,
    .searchButtonWrapper,
    .createButtonWrapper,
    .uploadButtonWrapper {
      display: flex;
      justify-content: center;
      margin: 10px 0;
    }

    .loginButton,
    .registerButton,
    .searchButton,
    .createButton,
    .uploadButton {
      width: 170px;
      font-size: 16px;
      font-weight: 600;
      color: #fff;
      cursor: pointer;
      margin: 20px;
      height: 50px;
      text-align: center;
      border: none;
      background-size: 300% 100%;
      background-image: linear-gradient(
        to right,
        #25aae1,
        #4481eb,
        #04befe,
        #3f86ed
      );
      box-shadow: 0 4px 15px 0 rgba(65, 132, 234, 0.75);

      border-radius: 50px;
      moz-transition: all 0.4s ease-in-out;
      -o-transition: all 0.4s ease-in-out;
      -webkit-transition: all 0.4s ease-in-out;
      transition: all 0.4s ease-in-out;
    }

    .loginButton:hover,
    .registerButton:hover,
    .searchButton:hover,
    .createButton:hover,
    .uploadButton:hover {
      background-position: 100% 0;
      moz-transition: all 0.4s ease-in-out;
      -o-transition: all 0.4s ease-in-out;
      -webkit-transition: all 0.4s ease-in-out;
      transition: all 0.4s ease-in-out;
    }

    .loginButton:focus,
    .registerButton:focus,
    .searchButton:focus,
    .createButton:focus,
    .uploadButton:focus {
      outline: none;
    }
  `}
`

export default GlobalStyle
