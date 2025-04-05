import AuthenticatedPage from '@/components/authenticated-page'
import Section from '@/components/section'
import { usePrivy, useLogout } from '@privy-io/react-auth'
import Link from 'next/link'
import { useState } from 'react'

const ProfilePage = () => {
	const { user, exportWallet } = usePrivy()
	const { logout } = useLogout()
	const [showRewardPopup, setShowRewardPopup] = useState(true)

	return (
		<AuthenticatedPage>
			<div className="flex flex-col h-full px-4 pt-4">
				<div className="flex justify-between items-center mb-8">
					<h1 className="text-3xl font-semibold">Profile</h1>
				</div>

				{showRewardPopup && (
					<div className="bg-white rounded-xl p-6 shadow-sm mb-6 relative">
						<button 
							onClick={() => setShowRewardPopup(false)}
							className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
						>
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
								<path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
							</svg>
						</button>
						<div className="flex items-center space-x-4">
							<div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center">
								<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-indigo-600">
									<path strokeLinecap="round" strokeLinejoin="round" d="M21 11.25v8.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 109.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1114.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
								</svg>
							</div>
							<div>
								<h2 className="text-lg font-semibold">Earn $10 USD for each friend you invite!</h2>
							</div>
						</div>
					</div>
				)}

				<div className="bg-white rounded-xl p-6 shadow-sm mb-6">
					<div className="flex items-center space-x-4 mb-6">
						<div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center">
							<span className="text-2xl text-indigo-600">
								{user?.email?.address?.[0]?.toUpperCase() || '?'}
							</span>
						</div>
						<div>
							<h2 className="text-xl font-semibold">{user?.email?.address || 'Anonymous User'}</h2>
							<p className="text-gray-500 text-sm">Wallet: {user?.wallet?.address?.slice(0, 6)}...{user?.wallet?.address?.slice(-4)}</p>
						</div>
					</div>

					<button
						onClick={logout}
						className="w-full bg-red-50 rounded-xl p-4 flex items-center justify-between text-red-600 font-medium hover:bg-red-100 transition-colors mb-6"
					>
						<span>Logout</span>
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
							<path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
						</svg>
					</button>

					<div className="border-t pt-6">
						<h3 className="text-lg font-semibold mb-4">Wallet Security</h3>
						<button
							onClick={exportWallet}
							className="w-full bg-indigo-50 rounded-xl p-4 flex items-center justify-between text-indigo-600 font-medium hover:bg-indigo-100 transition-colors mb-4"
						>
							<span>Export Private Key</span>
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
								<path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
							</svg>
						</button>

						<Link
							href="/developer"
							className="w-full bg-gray-50 rounded-xl p-4 flex items-center justify-between text-gray-600 font-medium hover:bg-gray-100 transition-colors"
						>
							<span>Developer Tools</span>
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
								<path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
							</svg>
						</Link>
					</div>
				</div>
			</div>
		</AuthenticatedPage>
	)
}

export default ProfilePage 