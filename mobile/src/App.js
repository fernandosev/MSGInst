import React from 'react';
import {useSelector} from 'react-redux';
import Routes from '~/routes';

export default function App() {
  const email = useSelector((state) => state.auth);

  return <Routes />;
}
