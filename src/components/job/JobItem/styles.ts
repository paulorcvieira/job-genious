import styled from 'styled-components';

export const Container = styled.a`
  display: block;
  border-radius: 4px;
  box-shadow: 0 2px 12px rgb(0 0 0 / 12%);
  margin-bottom: 35px;
  background-color: #fff;
  position: relative;
  text-decoration: none;
  transition: top ease 0.5s;
  transition: 0.5s;

  &:hover {
    text-decoration: none;
    top: -1px;
    box-shadow: 0 2px 12px rgb(0 0 0 / 25%);
  }

  .job-listing-details {
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    padding: 35px;
    padding-bottom: 32px;
  }

  .job-listing-description {
    flex: 1;
    padding-top: 3px;
  }

  h4.job-listing-company {
    font-size: 16px;
    color: #808080;
  }

  h3.job-listing-title {
    font-size: 20px;
    color: #333;
    line-height: 30px;
  }

  .job-listing-description p {
    margin: 15px 0 0 0;
    padding: 0;
    color: #666;
  }

  .job-listing-footer {
    background-color: #f2f2f2;
    padding: 20px 35px;
    border-radius: 0 0 4px 4px;
    position: relative;
  }

  .job-listing-footer ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .job-listing-footer ul li {
    display: inline-block;
    margin-right: 14px;
    color: #777;
  }

  .job-listing-footer ul li i.icon-material-outline-location-on {
    margin-right: 0;
  }

  .job-listing-footer ul li i {
    position: relative;
    top: 1px;
    margin-right: 3px;
    color: #777;
  }
`
