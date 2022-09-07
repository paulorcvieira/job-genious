import styled from 'styled-components';

export const Wrapper = styled.div`
  background: #f5f7fa;
  padding-top: 50px;
  padding-bottom: 100px;

  .job-details,
  .job-contact-details {
    background-color: white;
    border-radius: 10px;
  }

  .job-header {
    border: 1px solid #e8e8e8;
    border-radius: 10px;
  }

  .job-header h2 {
    color: rgb(59, 59, 59);
  }

  .job-header span {
    color: grey;
  }

  .job-contact-details h5 {
    color: rgb(144, 144, 144);
  }

  .job-contact-details p {
    color: rgb(20, 20, 20);
    margin-left: 5px;
  }

  .apply-btn {
    border-radius: 20px;
  }
`
