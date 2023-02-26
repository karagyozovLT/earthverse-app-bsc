import "../styles/globals.css";

import { WagmiConfig, configureChains, createClient } from "wagmi";
import { bsc, bscTestnet } from "@wagmi/chains";

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
        <Component {...pageProps} />
      </SessionProvider>
    </WagmiConfig>
  );
}
