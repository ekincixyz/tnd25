import AuthenticatedPage from '@/components/authenticated-page'
import { useState } from 'react'

const PaymentsPage = () => {
	const [pestagUsername, setPestagUsername] = useState('')

	return (
		<AuthenticatedPage>
			<div className="flex flex-col h-full px-4 pt-8">
				<div className="mb-2">
					<h1 className="text-2xl font-semibold">Choose a @Pestag</h1>
					<p className="text-gray-500 text-sm mt-1">
						Your unique name for getting paid by anyone
					</p>
				</div>

				<div className="mt-4 bg-gray-100 rounded-xl p-4">
					<div className="mb-1 text-sm text-gray-600">Pestag</div>
					<div className="relative">
						<span className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-400">@</span>
						<input
							type="text"
							value={pestagUsername}
							onChange={(e) => setPestagUsername(e.target.value)}
							className="w-full bg-transparent pl-6 pr-4 py-1 focus:outline-none text-gray-900"
							maxLength={16}
						/>
					</div>
				</div>
				
				<div className="text-right text-xs text-gray-400 mt-2">
					{pestagUsername.length} / 16
				</div>

				<button 
					className="mt-32 mb-8 w-full bg-blue-100 text-blue-900 rounded-xl py-4 font-medium transition-colors disabled:opacity-50"
					disabled={!pestagUsername}
				>
					Continue
				</button>
			</div>
		</AuthenticatedPage>
	)
}

export default PaymentsPage 