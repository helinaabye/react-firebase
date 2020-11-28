import React, { useEffect } from 'react';

const Home = (props) => {
  const { history } = props;

  useEffect(() => {
    history.push('/sign in') 
  }, [history])

  return (
    <div>
    </div>
  );
}

export default Home;