import type { AppProps } from 'next/app'
import Meta from '@/components/meta'
import '@/styles/globals.css'
import { PrivyProvider } from '@privy-io/react-auth'
import { celoAlfajores } from 'viem/chains'

const App = ({ Component, pageProps }: AppProps) => {
	return (
		<PrivyProvider
			appId={process.env.NEXT_PUBLIC_PRIVY_APP_ID as string}
			config={{
				embeddedWallets: {
					createOnLogin: 'all-users',
				},
				defaultChain: celoAlfajores,
				supportedChains: [celoAlfajores],
			}}
		>
			<Meta />
			<Component {...pageProps} />
		</PrivyProvider>
	)
}

export default App
