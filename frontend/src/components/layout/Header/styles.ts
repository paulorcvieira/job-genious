import styled from 'styled-components';

export const Wrapper = styled.div`
  min-width: 100%;
  background: #ffffff;
  padding: 10px 0;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px,
    rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
`

export const NavContainer = styled.div`
  width: 85vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
`

export const LogoWrapper = styled.div`
  font-family: "Parisienne", cursive;
  font-size: 24px;
  font-weight: bold;
  display: flex;
  align-items: center;

  cursor: pointer;

  span:first-child {
    color: var(--primary);
  }

  span:last-child {
    color: #618dd4;
  }
`

export const LogoImgWrapper = styled.div`
  width: 27px;
  display: flex;
  margin-right: 10px;
`

export const BtnsWrapper = styled.div`
  display: flex;
  gap: 8px;
`

export const PostAJobButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #00875f;
  padding: 5px 20px;
  border: none;
  outline: none;
  border-radius: 4px;
  height: 35px;
  width: 120px;
  color: #ffffff;
  font-weight: bold;
  font-size: 12px;
  text-decoration: none;

  transition: all 0.5s;

  cursor: pointer;

  &:hover {
    background: #00b37e;
  }
`

export const LoginButtonHeader = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #4481eb;
  padding: 5px 20px;
  border: none;
  outline: none;
  border-radius: 4px;
  height: 35px;
  width: 90px;
  color: #ffffff;
  font-weight: bold;
  font-size: 12px;
  text-decoration: none !important;

  transition: all 0.5s;

  cursor: pointer;

  &:hover {
    background: #618dd4;
  }
`
