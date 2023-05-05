import React from 'react';
import Title from './Title/Title';
import Header from '../Header';

const MainPageLayout = ({ children }) => {
  return (
    <div>
      <Header/>
      <Title subtitle="What show do you want to find?" />
      {children}
    </div>
  );
};

export default MainPageLayout;
