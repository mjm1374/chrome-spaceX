import React from 'react';
import Card from '../../Components/Card/Card';
import Header from '../../Components/Header/Header';
import Page from '../../Components/Page/Page';

const Test: React.FC = () => {
  return (
    <Page>
      <Card>
        <Header />
        <br />
        test one
      </Card>
    </Page>
  );
};

export default Test;
