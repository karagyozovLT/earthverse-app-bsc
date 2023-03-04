import "../styles/globals.css";

import { WagmiConfig, configureChains, createClient } from "wagmi";
import { bsc, bscTestnet } from "@wagmi/chains";

import Footer from "../components/Footer";
import Head from "next/head";
import Header from "../components/header/Header";
import { SessionProvider } from "next-auth/react";
import { publicProvider } from "wagmi/providers/public";

const { provider, webSocketProvider } = configureChains(
  [bscTestnet, bsc],
  [publicProvider()]
);
const client = createClient({ provider, webSocketProvider, autoConnect: true });

export default function MyApp({ Component, pageProps }) {
  return (
    <WagmiConfig client={client}>
      <SessionProvider session={pageProps.session} refetchInterval={0}>
        <Head>
          <title>E(AR)TH - NFT EARTH ON BNB CHAIN</title>
          <meta charSet="UTF-8" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <meta name="description" content="E(AR)TH - NFT EARTH ON BNB CHAIN" />
        </Head>
        <div className="min-h-screen flex flex-col">
          <Header />
          <div className="flex-grow">
            <Component {...pageProps} />
          </div>
          <Footer />
        </div>
      </SessionProvider>
    </WagmiConfig>
  );
}
