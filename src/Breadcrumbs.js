import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Breadcrumb } from 'react-bootstrap';

function Breadcrumbs() {
  const { pathname } = useLocation();
  const pathnames = pathname.split('/').filter(x => x);

  return (
    <Breadcrumb>
      {pathnames.map((value, index) => {
        const isLast = index === pathnames.length - 1;
        const to = `/${pathnames.slice(0, index + 1).join('/')}`;

        return isLast ? (
          <Breadcrumb.Item active key={index}>
            {value}
          </Breadcrumb.Item>
        ) : (
          <Breadcrumb.Item linkAs={Link} linkProps={{ to }} key={index}>
            {value}
          </Breadcrumb.Item>
        );
      })}
    </Breadcrumb>
  );
}

export default Breadcrumbs;
