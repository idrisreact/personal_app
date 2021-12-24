/* eslint-disable react/function-component-definition */
import { AppProps } from 'next/app';
import { FC } from 'react';

import '@styles/globals.css';

const MyApp: FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Component {...pageProps} />;
};

export default MyApp;
