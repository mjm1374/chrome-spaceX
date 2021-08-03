const data = [
  {
    id: 1,
    name: 'Premium Conversion (Section 125)',
    questions: [
      {
        question:
          'Does the plan impose an employment requirement less than three years to participate and does it contain the same employment requirement for all employees?',
        inputType: 'radio',
      },
      {
        question:
          'Does the plan provide that an individual who meets the employment requirement enters the plan no later than the first day of the plan year after meeting the employment requirements?',
        inputType: 'radio',
      },
      {
        question: 'Are all employees eligible?',
        inputType: 'radio',
        secondaryText:
          'NOTE: "All employees" is defined as all full and part-time employees of the plan sponsor including leased employees.',
      },
      {
        question:
          'Does the plan give each participant an equal opportunity to select non-taxable benefits?',
        inputType: 'radio',
      },
      {
        question:
          'Are employer contributions on behalf of each participant greater or equal to either 100% of the cost of major medical coverage for the majority of HCEs similarly situated or 75% of the cost of major medical coverage for the participants similarly situated having the highest cost coverage?',
        inputType: 'radio',
        secondaryText:
          'A Highly Compensated Employee (HCE) is defined as: I NEED ADDITIONAL list here <p>NOTE: If all participants receive the same employer contribution by benefit, this standard will be met.</p>',
      },
      {
        question:
          'Do employer contributions under the plan on behalf of each participant include an amount which:<ul><li>equals either 100% of the cost of the health benefit coverage under the plan of the majority of the similarly situated HCEs or</li><li>the contribution on behalf of each participant must equal or exceed 75% of the cost of the most expensive health benefit coverage available under the plan for similarly situated participants</li></ul>',
        inputType: 'radio',
        secondaryText:
          'A Highly Compensated Employee (HCE) is defined as: I NEED ADDITIONAL list here <p>NOTE: If all participants can choose among the same benefits, this standard will be met.</p>',
      },
      {
        question: 'Please provide the following:',
        inputType: 'text',
        labels: [
          { label: 'Total amount of all premiums paid by employees:' },
          { label: 'Total amount of premiums paid by key employees:' },
        ],
        secondaryText:
          'A Key Employee is defined as: <ul><li>An officer of the company with annual compensation greater than a specified dollar threshold ($185,000 for 2020).</li><li>A shareholder owning more than 5% of the voting power or value of all classes of stock. (When making this determination please note that a spouse or dependent of an owner of the company is considered to own the same percentage as the owner).</li><li>A shareholder owning more than 1% of the voting power or value of all classes of stock with compensation over $185,000.</li></ul>',
      },
    ],
  },
  {
    id: 2,
    name: 'Healthcare Spending Account (Section 105)',
    questions: [
      {
        question:
          'Are all employees eligible for the same health care spending account benefit plan design?',
      },
      {
        question:
          'Does the same benefit waiting period for the health care spending account plan apply to all employees?',
      },
      {
        question: 'Does the employer contribute to the health care spending account plan?',
      },
      {
        question:
          'Does the same health care spending account contribution formula apply equally to all employees?',
      },
    ],
  },
  {
    id: 3,
    name: 'Dependent Care Spending Account (Section 129)',
    questions: [
      {
        question:
          'Are all employees eligible for the same dependent care spending account plan design?',
      },
      {
        question: 'Does the employer contribute to the dependent care spending account plan?',
      },
      {
        question:
          'Does the same dependent care spending account contribution formula apply equally to all employees?',
      },
      {
        question:
          'Does the dependent care spending account plan have more than 5% owners / shareholders with annual dependent care elections?',
      },
      {
        question: 'Please provide the following:',
      },
      {
        question:
          'Does the dependent care spending account plan have HCE participants with annual dependent care elections?',
      },
      {
        question: 'Please provide the following:',
      },
    ],
  },
];

export { data };
