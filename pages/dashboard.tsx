import AuthenticatedPage from '@/components/authenticated-page'
import { usePrivy } from '@privy-io/react-auth'
import { useEffect, useState } from 'react'
import CurrencyChart from '@/components/CurrencyChart'

const Dashboard = () => {
	const { user } = usePrivy()
	const [balance, setBalance] = useState('0')

	return (
		<AuthenticatedPage>
			<div className="flex flex-col h-full px-4 pt-4">
				<div className="flex justify-between items-center mb-8">
					<h1 className="text-3xl font-semibold">Money</h1>
				</div>

				<div className="bg-white rounded-xl p-6 shadow-sm mb-6">
					<div className="mb-2">
						<h2 className="text-xl text-gray-700">Your Balance</h2>
					</div>

					<div className="mb-4">
						<h3 className="text-5xl font-semibold">${balance} USD</h3>
						<div className="mt-2 inline-block bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
							+4% APY
						</div>
					</div>

					<div className="mb-8 bg-gray-50 rounded-xl p-4">
						<div className="mb-1 text-gray-600">Money Saved</div>
						<div className="text-2xl font-semibold">$320.45</div>
						<div className="flex flex-col">
							<span className="text-green-600 font-medium">+12.8%</span>
							<span className="text-sm text-gray-500 mt-1">Amount saved from inflation since joining</span>
						</div>
					</div>

					<div className="flex gap-4">
						<button className="flex-1 bg-green-600 rounded-full py-3 text-white font-medium hover:bg-green-700 transition-colors">
							Add Cash
						</button>
						<button className="flex-1 bg-gray-100 rounded-full py-3 text-gray-900 font-medium hover:bg-gray-200 transition-colors">
							Cash Out
						</button>
					</div>
				</div>

				<div className="bg-white rounded-xl p-6 shadow-sm">
					<CurrencyChart />
				</div>
			</div>
		</AuthenticatedPage>
	)
}

export default Dashboard
