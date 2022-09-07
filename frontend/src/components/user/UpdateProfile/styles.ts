import styled from 'styled-components';

export const ModalMask = styled.div`
  display: flex;
  min-height: 90vh;
  justify-content: center;
  align-items: center;

  .modalWrapper {
    width: 75%;
    height: 70vh;
    background: rgb(255, 255, 255);
    border-radius: 10px;
    position: relative;
    display: flex;
    z-index: 20;
    border: 1px solid rgb(233, 233, 233);
    box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px,
      rgba(17, 17, 26, 0.05) 0px 8px 32px;
  }

  .h70 {
    height: 60%;
  }

  .right {
    border-left: 1px solid rgb(196, 196, 196);
    display: flex;
    align-items: center;
    padding: 0 20px;
    width: 100%;
  }

  .rightContentWrapper,
  .leftContentWrapper {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .headerWrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 30px;
  }

  .headerWrapper h2 {
    display: flex;
    justify-content: center;
    font-size: 40px;
    color: #505050;
    font-weight: bold;
    margin-left: 10px;
  }

  .LoginLogoWrapper,
  .RegisterLogoWrapper {
    width: 34px;
  }

  .left {
    display: flex;
    align-items: center;
    width: 100%;
  }

  .form {
    display: flex;
    flex-direction: column;

    input {
      width: 100%;
      padding-left: 10px;
      border: none;
      outline: none;
      font-size: 13px;
      background: rgb(241, 241, 241);
    }
  }

  .inputBox {
    display: flex;
    align-items: center;
    width: 85%;
    padding: 15px;
    margin-left: 5%;
    background: rgb(241, 241, 241);
    margin-bottom: 15px;
    border-radius: 4px;

    input {
      background: transparent;
      margin-left: 1rem;
      width: 100%;
    }

    i {
      font-size: 12px;
    }
  }

  .inputWrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

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

  .signup {
    display: flex;
    justify-content: center;
    font-size: 16px;
    font-weight: bold;
    margin-top: 30px;
    cursor: pointer;
    color: rgb(36, 36, 36);

    a {
      text-decoration: none;
      color: var(--primary);
      margin-left: 10px;
    }
  }

  @media only screen and (max-width: 920px) {
    .modalWrapper {
      width: 70%;
    }
  }

  @media only screen and (max-width: 720px) {
    .left {
      display: none;
    }
    .modalWrapper {
      width: 95%;
    }
    .right {
      border-left: none;
    }
    .inputBox {
      width: 93.5%;
      margin-left: 0;
    }
    .signup {
      margin-top: 10px;
    }
  }
`
