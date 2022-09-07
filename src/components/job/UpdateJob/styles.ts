import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px 0;

  .formWrapper {
    background: #fff;
    padding: 20px;
    box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px,
        rgba(17, 17, 26, 0.05) 0px 8px 32px;
    width: 70%;
  }

  .description {
    width: 100%;
    padding-left: 10px;
    border: none;
    outline: none;
    font-size: 13px;
    height: 50px;
    background: rgb(241, 241, 241);
  }

  .inputWrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
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

  .boxWrapper:not(:first-child) {
    margin: 36px 0;
  }

  .boxWrapper h4 {
    margin-bottom: 15px;
  }

  .selectWrapper {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  select {
    background-color: white;
    border: thin solid var(--primary);
    border-radius: 4px;
    width: 300px;
    display: inline-block;
    font: inherit;
    line-height: 1.5em;
    padding: 0.5em 3.5em 0.5em 1em;
    margin: 0;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    -webkit-appearance: none;
    -moz-appearance: none;
  }

  select.classic {
    background-image: linear-gradient(45deg, transparent 50%, #4481eb 50%),
        linear-gradient(135deg, #4481eb 50%, transparent 50%),
        linear-gradient(to right, skyblue, skyblue);
    background-position: calc(100% - 20px) calc(1em + 2px),
        calc(100% - 15px) calc(1em + 2px), 100% 0;
    background-size: 5px 5px, 5px 5px, 2.5em 2.5em;
    background-repeat: no-repeat;
  }

  select.classic:focus {
    background-image: linear-gradient(45deg, white 50%, transparent 50%),
        linear-gradient(135deg, transparent 50%, white 50%),
        linear-gradient(to right, gray, gray);
    background-position: calc(100% - 15px) 1em, calc(100% - 20px) 1em, 100% 0;
    background-size: 5px 5px, 5px 5px, 2.5em 2.5em;
    background-repeat: no-repeat;
    border-color: grey;
    outline: 0;
  }
`
