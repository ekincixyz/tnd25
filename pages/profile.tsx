import AuthenticatedPage from '@/components/authenticated-page'
import Section from '@/components/section'
import { usePrivy, useLogout } from '@privy-io/react-auth'

const ProfilePage = () => {
	const { user } = usePrivy()
	const { logout } = useLogout()

	return (
		<AuthenticatedPage>
			<div className="flex flex-col h-full px-4 pt-4">
				<div className="flex justify-between items-center mb-8">
					<h1 className="text-3xl font-semibold">Profile</h1>
				</div>

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
				</div>

				<div className="space-y-4">
					<button
						onClick={logout}
						className="w-full bg-red-50 rounded-xl p-4 flex items-center justify-between text-red-600 font-medium hover:bg-red-100 transition-colors"
					>
						<span>Logout</span>
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
							<path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
						</svg>
					</button>
				</div>
			</div>
		</AuthenticatedPage>
	)
}

export default ProfilePage 