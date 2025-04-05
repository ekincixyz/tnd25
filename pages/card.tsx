import AuthenticatedPage from '@/components/authenticated-page'

const CardPage = () => {
	return (
		<AuthenticatedPage>
			<div className="flex flex-col h-full px-4 pt-4">
				<div className="flex justify-between items-center mb-8">
					<h1 className="text-3xl font-semibold">Pesa Card</h1>
				</div>

				<div className="bg-white rounded-xl p-6 shadow-sm mb-6">
					<div className="flex flex-col items-center text-center">
						<div className="flex space-x-4 mb-6">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="w-12 h-12">
								<path fill="#ff9800" d="M32 10A14 14 0 1 0 32 38A14 14 0 1 0 32 10Z" />
								<path fill="#d50000" d="M16 10A14 14 0 1 0 16 38A14 14 0 1 0 16 10Z" />
								<path fill="#ff3d00" d="M18,24c0,4.755,2.376,8.95,6,11.48c3.624-2.53,6-6.725,6-11.48s-2.376-8.95-6-11.48 C20.376,15.05,18,19.245,18,24z" />
							</svg>
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="w-12 h-12">
								<path fill="#1565C0" d="M45,35c0,2.209-1.791,4-4,4H7c-2.209,0-4-1.791-4-4V13c0-2.209,1.791-4,4-4h34c2.209,0,4,1.791,4,4V35z"/>
								<path fill="#FFF" d="M15.186 19l-2.626 7.832c0 0-.667-3.313-.733-3.729-1.495-3.411-3.701-3.221-3.701-3.221L10.726 30v-.002h3.161L18.258 19H15.186zM17.689 30L20.56 30 22.296 19 19.389 19zM38.008 19h-3.021l-4.71 11h2.852l.588-1.571h3.596L37.619 30h2.613L38.008 19zM34.513 26.328l1.563-4.157.818 4.157H34.513zM26.369 22.206c0-.606.498-1.057 1.926-1.057.928 0 1.991.674 1.991.674l.466-2.309c0 0-1.358-.515-2.691-.515-3.019 0-4.576 1.444-4.576 3.272 0 3.306 3.979 2.853 3.979 4.551 0 .291-.231.964-1.888.964-1.662 0-2.759-.609-2.759-.609l-.495 2.216c0 0 1.063.606 3.117.606 2.059 0 4.915-1.54 4.915-3.752C30.354 23.586 26.369 23.394 26.369 22.206z"/>
							</svg>
						</div>
						<div className="bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl p-6 w-full max-w-sm mb-8">
							<div className="flex flex-col h-48 justify-between text-white">
								<div className="flex justify-between items-start">
									<div className="text-lg font-semibold">Pesa Card</div>
									<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
										<path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
									</svg>
								</div>
								<div className="text-xl tracking-wider">•••• •••• •••• ••••</div>
								<div className="flex justify-between items-end">
									<div>
										<div className="text-xs opacity-75">COMING SOON</div>
										<div className="font-medium">YOUR NAME</div>
									</div>
									<div className="text-sm font-semibold">VISA</div>
								</div>
							</div>
						</div>
						<h2 className="text-2xl font-bold mb-3">Coming Soon</h2>
						<p className="text-gray-600 mb-6">Pay anywhere where VISA and MasterCard is accepted using your USD balance.</p>
						<div className="flex items-center space-x-2 text-indigo-600">
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
								<path strokeLinecap="round" strokeLinejoin="round" d="M21 11.25v8.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 109.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1114.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
							</svg>
							<span className="font-medium">Earn Pesa points on every purchase</span>
						</div>
					</div>
				</div>
			</div>
		</AuthenticatedPage>
	)
}

export default CardPage 