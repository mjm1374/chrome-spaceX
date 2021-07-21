import React from 'react';
import classnames from 'classnames';

import './Page.scss';

type PageProps = {
  title?: string;
  className?: string;
  step?: string;
  button?: React.ReactNode;
};

const Page: React.FC<PageProps> = ({ className, children }) => (
  <div className={classnames('page', className)}> {children} </div>
);

export default Page;
