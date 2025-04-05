import AuthenticatedPage from '@/components/authenticated-page'
import Section from '@/components/section'
import { links } from '@/lib/links'
import { usePrivy, useWallets, useSendTransaction } from '@privy-io/react-auth'
import { useEffect, useState } from 'react'
import { createWalletClient, custom, isAddress, parseEther } from 'viem'
import { celoAlfajores } from 'viem/chains'

const DevPage = () => {
	// User object section
	const { user, linkPhone, linkGoogle, linkApple, connectWallet, signMessage, exportWallet } = usePrivy()
	const { sendTransaction } = useSendTransaction()
	const { wallets } = useWallets()
	const embeddedWallet = wallets.find(
		(wallet) => wallet.walletClientType === 'privy'
	)
	const externalWallet = wallets.find(
		(wallet) => wallet.walletClientType !== 'privy'
	)
	
	const [showButton, setShowButton] = useState(false)
	useEffect(() => {
		if (user) {
			setShowButton(true)
		}
	}, [user])

	// Wallet section states
	const [signature, setSignature] = useState<string | undefined>()
	const [recipientAddress, setRecipientAddress] = useState<string | undefined>()
	const [txHash, setTxHash] = useState<string | undefined>()
	const [txIsLoading, setTxIsLoading] = useState(false)

	// Wallet section functions
	const onSign = async () => {
		try {
			const _signature = await signMessage(
				'I logged into the Privy PWA demo and signed this message!'
			)
			setSignature(_signature)
		} catch (e) {
			console.error('Signature failed with error ', e)
		}
	}

	const onTransfer = async () => {
		if (!embeddedWallet) return
		try {
			await embeddedWallet.switchChain(celoAlfajores.id)
			const provider = await embeddedWallet.getEthereumProvider()
			const walletClient = createWalletClient({
				account: embeddedWallet.address as `0x${string}`,
				chain: celoAlfajores,
				transport: custom(provider),
			})

			setTxIsLoading(true)
			const _txHash = await walletClient.sendTransaction({
				account: embeddedWallet.address as `0x${string}`,
				to: recipientAddress as `0x${string}`,
				value: parseEther('0.004'),
			})
			setTxHash(_txHash)
		} catch (e) {
			console.error('Transfer failed with error ', e)
		}
		setTxIsLoading(false)
	}

	// Load assets section functions
	const onLoadTransfer = async () => {
		if (!externalWallet || !embeddedWallet) return
		try {
			await externalWallet.switchChain(celoAlfajores.id)
			const provider = await externalWallet.getEthereumProvider()
			const walletClient = createWalletClient({
				account: externalWallet.address as `0x${string}`,
				chain: celoAlfajores,
				transport: custom(provider),
			})

			setTxIsLoading(true)
			const _txHash = await walletClient.sendTransaction({
				account: externalWallet.address as `0x${string}`,
				to: embeddedWallet.address as `0x${string}`,
				value: parseEther('0.005'),
			})
			setTxHash(_txHash)
		} catch (e) {
			console.error('Transfer failed with error ', e)
		}
		setTxIsLoading(false)
	}

	const onAddNetwork = async () => {
		if (!externalWallet) return
		const provider = await externalWallet.getEthereumProvider()
		await provider.request({
			method: 'wallet_addEthereumChain',
			params: [
				{
					chainId: `0x${celoAlfajores.id.toString(16)}`,
					chainName: celoAlfajores.name,
					nativeCurrency: celoAlfajores.nativeCurrency,
					rpcUrls: [celoAlfajores.rpcUrls.public?.http[0] ?? ''],
					blockExplorerUrls: [celoAlfajores.blockExplorers?.default.url ?? ''],
				},
			],
		})
	}

	return (
		<AuthenticatedPage>
			{/* User Object Section */}
			<Section>
				<h2 className='text-xl font-bold mb-4 text-gray-800'>Developer Tools</h2>
				<p className='text-md mt-2 font-bold uppercase text-gray-700'>
					YOUR USER OBJECT
				</p>
				<p className='mt-2 text-sm text-gray-600'>
					Inspect your linked accounts, or{' '}
					<a
						href={links.docs.userObject}
						className='underline'
						target='_blank'
						rel='noreferrer noopener'
					>
						learn more
					</a>
					.
				</p>
				{showButton && (
					<button onClick={() => sendTransaction({
						to: '0x0000000000000000000000000000000000000000',
						value: '1',
					})}
					className='mt-2 w-full rounded-md bg-indigo-600 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500'
					>Send Transaction</button>
				)}
				<textarea
					value={JSON.stringify(user, null, 2)}
					className='mt-4 h-64 w-full rounded-md bg-slate-700 p-4 font-mono text-xs text-slate-50 disabled:bg-slate-700'
					rows={JSON.stringify(user, null, 2).split('\n').length}
					readOnly
				/>
			</Section>

			{/* Wallet Section */}
			<Section>
				<h2 className='text-xl font-bold mb-4 text-gray-800'>Wallet Operations</h2>
				<div className='space-y-8'>
					<div>
						<p className='text-md font-bold uppercase text-gray-700'>
							Sign a message
						</p>
						<p className='mt-2 text-sm text-gray-600'>
							Sign a message to verify you&apos;ve used this demo!
						</p>
						<button
							type='button'
							className='mt-2 w-full rounded-md bg-indigo-600 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500'
							onClick={onSign}
						>
							Sign Message
						</button>
						<textarea
							value={signature || 'No signature yet'}
							className='mt-4 h-fit w-full rounded-md bg-slate-700 p-4 font-mono text-xs text-slate-50'
							rows={3}
							readOnly
						/>
					</div>

					<div>
						<p className='text-md font-bold uppercase text-gray-700'>
							Transfer ETH
						</p>
						<p className='mt-2 text-sm text-gray-600'>
							Transfer Goerli ETH from your embedded wallet.
						</p>
						<input
							type='text'
							placeholder='0x123...'
							autoComplete='off'
							onChange={(e: React.FormEvent<HTMLInputElement>) =>
								setRecipientAddress(e.currentTarget.value)
							}
							className='form-input mt-2 w-full rounded-lg border-2 border-gray-200 px-4 py-3'
						/>
						<button
							type='button'
							className='mt-2 w-full rounded-md bg-indigo-600 py-2 text-sm font-semibold text-white shadow-sm disabled:bg-indigo-400'
							disabled={!recipientAddress || !isAddress(recipientAddress) || txIsLoading}
							onClick={onTransfer}
						>
							Transfer 0.004 ETH
						</button>
					</div>

					<div>
						<p className='text-md font-bold uppercase text-gray-700'>
							Export your private key
						</p>
						<p className='mt-2 text-sm text-gray-600'>
							Export your embedded wallet&apos;s private key.
						</p>
						<button
							type='button'
							className='mt-2 w-full rounded-md bg-indigo-600 py-2 text-sm font-semibold text-white shadow-sm'
							onClick={exportWallet}
						>
							Export key
						</button>
					</div>
				</div>
			</Section>

			{/* Load Assets Section */}
			<Section>
				<h2 className='text-xl font-bold mb-4 text-gray-800'>Load Assets</h2>
				<p className='text-md font-bold uppercase text-gray-700'>
					Fund your embedded wallet
				</p>
				<p className='mt-2 text-sm text-gray-600'>
					Connect an external wallet to send assets to your embedded wallet.
				</p>
				<button
					type='button'
					className='mt-2 w-full rounded-md bg-indigo-600 py-2 text-sm font-semibold text-white shadow-sm disabled:bg-indigo-400'
					onClick={connectWallet}
				>
					{!externalWallet ? 'Connect a wallet' : 'Connect another wallet?'}
				</button>
				<textarea
					value={
						externalWallet
							? JSON.stringify(externalWallet, null, 2)
							: 'No external wallet connected'
					}
					className='mt-4 h-fit w-full rounded-md bg-slate-700 p-4 font-mono text-xs text-slate-50'
					rows={9}
					readOnly
				/>
				<p className='mt-2 text-sm text-gray-600'>
					Add the Celo Alfajores network to your wallet.
				</p>
				<button
					type='button'
					className='mt-2 w-full rounded-md bg-indigo-600 py-2 text-sm font-semibold text-white shadow-sm disabled:bg-indigo-400'
					onClick={onAddNetwork}
					disabled={!externalWallet}
				>
					Add Celo Alfajores Network
				</button>
				<p className='mt-2 text-sm text-gray-600'>
					Transfer 0.005 Goerli ETH to your embedded wallet.
				</p>
				<button
					type='button'
					className='mt-2 w-full rounded-md bg-indigo-600 py-2 text-sm font-semibold text-white shadow-sm disabled:bg-indigo-400'
					onClick={onLoadTransfer}
					disabled={!externalWallet || txIsLoading}
				>
					Transfer 0.005 ETH
				</button>
				{txHash && (
					<p className='mt-2 text-sm italic text-gray-600'>
						See your transaction on{' '}
						<a
							className='underline'
							href={`${links.celoAlfajores.transactionExplorer}${txHash}`}
							target='_blank'
							rel='noreferrer noopener'
						>
							Celoscan
						</a>
						.
					</p>
				)}
			</Section>
		</AuthenticatedPage>
	)
}

export default DevPage 