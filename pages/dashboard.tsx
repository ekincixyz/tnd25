import AuthenticatedPage from '@/components/authenticated-page'
import { usePrivy } from '@privy-io/react-auth'
import { useEffect, useState } from 'react'

const Dashboard = () => {
	const { user } = usePrivy()
	const [balance, setBalance] = useState('0')

	return (
		<AuthenticatedPage>
			<div className="flex flex-col h-full px-4 pt-4">
				<div className="flex justify-between items-center mb-8">
					<h1 className="text-3xl font-semibold">Money</h1>
				</div>

				<div className="bg-white rounded-xl p-6 shadow-sm">
					<div className="flex justify-between items-center mb-2">
						<h2 className="text-xl text-gray-700">Cash Balance</h2>
						<button className="text-gray-600">
							Account &gt;
						</button>
					</div>

					<div className="mb-8">
						<h3 className="text-5xl font-semibold">${balance}</h3>
					</div>

					<div className="flex gap-4">
						<button className="flex-1 bg-gray-100 rounded-full py-3 text-gray-900 font-medium hover:bg-gray-200 transition-colors">
							Add Cash
						</button>
						<button className="flex-1 bg-gray-100 rounded-full py-3 text-gray-900 font-medium hover:bg-gray-200 transition-colors">
							Cash Out
						</button>
					</div>
				</div>
			</div>
		</AuthenticatedPage>
	)
}

export default Dashboard
