import React from "react";
import { Auth0Provider } from '@auth0/auth0-react';
import { AppProps } from "next/app";
import "../styles/globals.css";

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  const AUTH0_DOMAIN: string = process.env.NEXT_PUBLIC_AUTH0_DOMAIN
    ? process.env.NEXT_PUBLIC_AUTH0_DOMAIN
    : "";
  const AUTH0_CLIENTID: string = process.env.NEXT_PUBLIC_AUTH0_CLIENTID
    ? process.env.NEXT_PUBLIC_AUTH0_CLIENTID
    : "";
  return (
    <Auth0Provider
      domain={AUTH0_DOMAIN}
      clientId={AUTH0_CLIENTID}
      authorizationParams={{
        redirect_uri: process.env.NEXT_PUBLIC_REDIRECT_URI,
      }}
    >
      <Component {...pageProps} />
    </Auth0Provider>
  );
};

export default MyApp;
