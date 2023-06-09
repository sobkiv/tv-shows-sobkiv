import styled from 'styled-components';

export const MainDataWrapper = styled.div`
  display: flex;
  margin-bottom: 40px;

  img {
    max-width: 410px;
    max-height: 610px;
    border: 1px solid #ddd;
    border-radius: 40px;
    @media (max-width: 550px) {
      width: 85%;
    }
  }

  .text-side {
    margin-left: 20px;
    .summary {
      color: #5f5f5f;
      line-height: 1.5;
    }
  }

  @media only screen and (max-width: 900px) {
    flex-wrap: wrap;
    img {
      margin-bottom: 20px;
      margin: auto;
    }
    .text-side {
      margin-right: 30px;
      margin-left: 30px;
      margin-top: 20px;
    }
  }
`;

export const Headline = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  h1 {
    margin: 0;
    border-right: 1px solid #ddd;
    padding-right: 25px;
    margin-right: 20px;
  }

  div {
    display: flex;
    align-items: center;
    span {
      margin-left: 10px;
    }
  }
`;

export const TagList = styled.div`
  display: inline-flex;
  flex-wrap: wrap;

  span {
    margin: 6px;
    margin-bottom: 0;
    color: #2e6542;
    background-color: #3da96d3a;
    padding: 3px 13px;
    border-radius: 20px;
    font-size: 14px;
  }
`;
