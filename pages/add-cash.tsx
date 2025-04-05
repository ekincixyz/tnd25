import AuthenticatedPage from '@/components/authenticated-page'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { usePrivy } from '@privy-io/react-auth'

const AddCashPage = () => {
	const router = useRouter()
	const { user } = usePrivy()

	return (
		<AuthenticatedPage>
			<div className="flex flex-col h-full bg-white">
				<div className="flex items-center px-4 py-4 border-b">
					<button 
						onClick={() => router.back()}
						className="p-2 -ml-2 text-gray-600 hover:text-gray-900"
					>
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
							<path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
						</svg>
					</button>
					<h1 className="text-xl font-semibold ml-2">Account details</h1>
				</div>

				<div className="px-4 py-4">
					<div className="flex items-center space-x-2 mb-6">
						<div className="w-6 h-6 rounded-full bg-white flex items-center justify-center overflow-hidden">
							<Image 
								src="/images/celo-logo.jpg"
								alt="Celo"
								width={24}
								height={24}
							/>
						</div>
						<span className="font-medium">Celo Blockchain</span>
					</div>

					<div className="bg-white rounded-xl">
						<p className="text-gray-600 mb-6">For transfers on the Celo blockchain only.</p>

						<div className="space-y-6">
							<div>
								<p className="text-gray-600 mb-2">Wallet Address</p>
								<div className="flex justify-between items-center">
									<p className="text-blue-600 font-medium break-all">{user?.wallet?.address}</p>
									<button className="p-2 text-gray-400 flex-shrink-0">
										<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
											<path strokeLinecap="round" strokeLinejoin="round" d="M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184" />
										</svg>
									</button>
								</div>
							</div>

							<div>
								<p className="text-gray-600 mb-2">Network name</p>
								<div className="flex justify-between items-center">
									<p className="text-blue-600 font-medium">Celo</p>
									<button className="p-2 text-gray-400">
										<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
											<path strokeLinecap="round" strokeLinejoin="round" d="M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184" />
										</svg>
									</button>
								</div>
							</div>

							<div>
								<p className="text-gray-600 mb-2">New RPC URL</p>
								<div className="flex justify-between items-center">
									<p className="text-blue-600 font-medium">https://forno.celo.org</p>
									<button className="p-2 text-gray-400">
										<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
											<path strokeLinecap="round" strokeLinejoin="round" d="M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184" />
										</svg>
									</button>
								</div>
							</div>

							<div>
								<p className="text-gray-600 mb-2">Chain ID</p>
								<div className="flex justify-between items-center">
									<p className="text-blue-600 font-medium">42220</p>
									<button className="p-2 text-gray-400">
										<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
											<path strokeLinecap="round" strokeLinejoin="round" d="M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184" />
										</svg>
									</button>
								</div>
							</div>

							<div>
								<p className="text-gray-600 mb-2">Currency symbol</p>
								<div className="flex justify-between items-center">
									<p className="text-blue-600 font-medium">CELO</p>
									<button className="p-2 text-gray-400">
										<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
											<path strokeLinecap="round" strokeLinejoin="round" d="M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184" />
										</svg>
									</button>
								</div>
							</div>

							<div>
								<p className="text-gray-600 mb-2">Block explorer URL</p>
								<div className="flex justify-between items-center">
									<p className="text-blue-600 font-medium">https://celoscan.io</p>
									<button className="p-2 text-gray-400">
										<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
											<path strokeLinecap="round" strokeLinejoin="round" d="M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184" />
										</svg>
									</button>
								</div>
							</div>
						</div>

						<button className="w-full mt-8 py-4 bg-gray-100 rounded-xl text-gray-900 font-medium flex items-center justify-center space-x-2">
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
								<path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z" />
							</svg>
							<span>Share details</span>
						</button>
					</div>
				</div>
			</div>
		</AuthenticatedPage>
	)
}

export default AddCashPage 