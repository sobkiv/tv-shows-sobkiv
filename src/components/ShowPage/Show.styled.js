import styled from 'styled-components';

export const ShowPageWrapper = styled.div`
  padding: 0 0px;
  max-width: 100%;
  margin: auto;

  @media only screen and (min-width: 516px) {
    padding: 0 40px;
  }

  @media only screen and (min-width: 768px) {
    padding: 0 60px;
  }

  @media only screen and (min-width: 992px) {
    padding: 0 80px;
  }
`;

export const InfoBlock = styled.div`
  margin-bottom: 40px;
  position: relative;
  left: 30px;

  h2 {
    margin: 0;
    margin-bottom: 30px;
    font-size: 22px;
  }
`;
