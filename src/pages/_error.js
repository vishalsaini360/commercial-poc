import React from 'react'

function ErrorPage({ statusCode }) {
  return (
    <div>Error : {statusCode}</div>
  )
}

ErrorPage.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

ErrorPage.getLayout = function getLayout(page) {
  return page
}

export default ErrorPage;