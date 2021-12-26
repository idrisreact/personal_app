/* eslint-disable react/function-component-definition */
import { AppProps } from 'next/app';
import { FC } from 'react';

import '@styles/globals.css';
import Layout from '@src/components/Layout/Layout';

const MyApp: FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default MyApp;
