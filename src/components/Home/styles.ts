import styled from 'styled-components';

export const Container = styled.div`
  .container {
    padding: 0 2rem;
  }

  .main {
    min-height: 100vh;
    padding: 4rem 0;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .footer {
    display: flex;
    flex: 1;
    padding: 2rem 0;
    border-top: 1px solid #eaeaea;
    justify-content: center;
    align-items: center;
  }

  .footer a {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-grow: 1;
  }

  .title a {
    color: #0070f3;
    text-decoration: none;
  }

  .title a:hover,
  .title a:focus,
  .title a:active {
    text-decoration: underline;
  }

  .title {
    margin: 0;
    line-height: 1.15;
    font-size: 4rem;
  }

  .title,
  .description {
    text-align: center;
  }

  .description {
    margin: 4rem 0;
    line-height: 1.5;
    font-size: 1.5rem;
  }

  .code {
    background: #fafafa;
    border-radius: 5px;
    padding: 0.75rem;
    font-size: 1.1rem;
    font-family: Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono,
      Bitstream Vera Sans Mono, Courier New, monospace;
  }

  .grid {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    max-width: 800px;
  }

  .card {
    margin: 1rem;
    padding: 1.5rem;
    text-align: left;
    color: inherit;
    text-decoration: none;
    border: 1px solid #eaeaea;
    border-radius: 10px;
    transition: color 0.15s ease, border-color 0.15s ease;
    max-width: 300px;
  }

  .card:hover,
  .card:focus,
  .card:active {
    color: #0070f3;
    border-color: #0070f3;
  }

  .card h2 {
    margin: 0 0 1rem 0;
    font-size: 1.5rem;
  }

  .card p {
    margin: 0;
    font-size: 1.25rem;
    line-height: 1.5;
  }

  .logo {
    height: 1em;
    margin-left: 0.5rem;
  }

  @media (max-width: 600px) {
    .grid {
      width: 100%;
      flex-direction: column;
    }
  }

  @media (prefers-color-scheme: dark) {
    .card,
    .footer {
      border-color: #222;
    }
    .code {
      background: #111;
    }
    .logo img {
      filter: invert(1);
    }
  }

  .stats_btn {
    padding: 5px 30px;
    margin-top: -35px;
  }
`

export const NoJobFound = styled.div`
  display: flex;
  border-radius: 4px;
  box-shadow: 0 2px 12px rgb(0 0 0 / 12%);
  margin-bottom: 35px;
  background-color: #fff;
  height: 10rem;
  padding: 3.4rem;
  align-items: center;
  font-size: 1.6rem;
  font-weight: bold;
  color: #AB222E;

  &:hover {
    text-decoration: none;
    top: -1px;
    box-shadow: 0 2px 12px rgb(0 0 0 / 25%);
  }

  &::before {
    content: '😱';
    margin-right: 1rem;
  }
`

export const PaginationWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 5rem;
`
