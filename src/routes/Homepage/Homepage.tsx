import React from 'react';
import Button from '../../Components/Button/Button';
import Card from '../../Components/Card/Card';
import Disclaimer from '../../Components/Disclaimer/Disclaimer';
import Header from '../../Components/Header/Header';
import Page from '../../Components/Page/Page';

import './Homepage.scss';

const Homepage: React.FC = () => {
  return (
    <Page>
      <Card>
        <Header />
        <br />
        <div className="centered-div">
          <p className="headline">Welcome</p>
        </div>
        <div className="copy-block">
          <p>
            Welcome to the Spending Account Service Center&apos;s Self-service Nondiscrimination
            Testing Portal
          </p>

          <p>
            Because cafeteria plans enjoy favorable tax treatment under the IRS code,
            non-discrimination rules are required to prevent plans from discriminating in favor of
            individuals who are either highly compensated or key to the business.
          </p>
        </div>
        <div className="centered-div">
          <p className="headline">What is an HCE?</p>
        </div>
        <div className="copy-block">
          <p>An HCE is a Highly Compensated Employee defined as: </p>
          <ul>
            <li>
              an officer at any time during the preceding year or the current year in the case of an
              individual&apos;s first year of employment
            </li>
            <li>
              a shareholder owning more than 5% of the voting power or value of all classes of stock
              of the employer during the current or preceding year
            </li>
            <li>
              an employee who earns more than the Code §414(q) compensation threshold for the prior
              plan year or the current year in the case of an individual&apos;s first year of
              employment($130,000 in 2020 W2 wages for 2021 plan year testing)
            </li>
            <li>a spouse or tax dependent of an individual described above.</li>
          </ul>
        </div>
        <div className="centered-div">
          <p className="headline">What is a Key Employee?</p>
        </div>
        <div className="copy-block">
          <p>A Key Employee is defined as:</p>
          <ul>
            <li>
              an officer of the company with annual compensation greater than a specified dollar
              threshold ($185,000 for 2020).
            </li>
            <li>
              a shareholder owning more than 5% of the voting power or value of all classes of
              stock. (When making this determination please note that a spouse or dependent of an
              owner of the company is considered to own the same percentage as the owner).
            </li>
            <li>
              a shareholder owning more than 1% of the voting power or value of all classes of stock
              with compensation over $185,000.
            </li>
          </ul>
        </div>
        <div className="centered-div">
          <p className="headline">Test Descriptions</p>
        </div>
        <div className="copy-block">
          <p>There are three basic components to the nondiscrimination test:</p>
          <ul>
            <li>Premium Conversion (Section 125)</li>
            <li>Healthcare Spending Account (Section 105)</li>
            <li>Dependent Care Spending Account (Section 129)</li>
          </ul>
        </div>
        <div className="centered-div">
          <p className="headline">Test Preparation</p>
        </div>
        <div className="copy-block">
          <p>There are three basic components to the nondiscrimination test:</p>
          <ul>
            <li>Premium Conversion (Section 125)</li>
            <li>Healthcare Spending Account (Section 105)</li>
            <li>Dependent Care Spending Account (Section 129)</li>
          </ul>
        </div>
        <div className="button">
          <Button variant="red">Begin Test</Button>
        </div>
        <Disclaimer />
        <div className="legal">
          <hr />
          <p>
            Trion Group, a Marsh & McLennan Agency, LLC company, is not engaged in the practice of
            law or the provision of tax advice. The results of the test are based on the information
            that was entered by your company in the self-test portal. The intent of this test is to
            provide general information on the non-discrimination requirements of the Internal
            Revenue Service (IRS) rules and regulations. It is not intended to be a comprehensive
            summary of all laws that may be applicable to your situation, treat exhaustively the
            subjects covered, or provide a legal or tax opinion by which an employer may interpret
            its compliance with the law and related regulations and guidance. Consult your legal
            counsel and/or tax advisor regarding the specific application of the rules and
            regulations to your plan.
          </p>

          <p>
            No part of this document may be reproduced, quoted, or transmitted in any form or by any
            means (electronic, mechanical, photocopying, or by any information storage and retrieval
            system), without express, prior permission, in writing from Marsh & McLennan Agency,
            LLC..
          </p>

          <p>©2020 Marsh & McLennan Agency, LLC Company All Rights Reserved</p>
        </div>
      </Card>
    </Page>
  );
};

export default Homepage;
