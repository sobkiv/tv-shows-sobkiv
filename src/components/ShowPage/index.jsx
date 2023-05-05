import React from 'react';
import Details from './Details/Details';
import ShowMainData from './ShowMainData/ShowMainData';
import { InfoBlock, ShowPageWrapper } from './Show.styled';
import Header from '../Header';

const Show = () => {
  return (
    <>
      <Header />
      <ShowPageWrapper>
        <ShowMainData />
        <InfoBlock>
          <h2>Details</h2>
          <Details />
        </InfoBlock>
      </ShowPageWrapper>
    </>
  );
};

export default Show;
