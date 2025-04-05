import Link from 'next/link'
import { useRouter } from 'next/router'
import {
	CurrencyDollarIcon,
	UserCircleIcon,
} from '@heroicons/react/24/outline'

const BottomNav = () => {
	const router = useRouter()
	const currentPath = router.pathname

	return (
		<div className='fixed inset-x-0 bottom-0 h-16 bg-white border-t px-safe'>
			<div className='mx-auto h-full max-w-screen-md'>
				<div className='grid h-full grid-cols-4'>
					<Link
						href='/dashboard'
						className={`flex flex-col items-center justify-center space-y-1 ${
							currentPath === '/dashboard'
								? 'text-green-600'
								: 'text-gray-600 hover:text-gray-900'
						}`}
					>
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
							<path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
						</svg>
						<span className='text-xs'>Money</span>
					</Link>

					<Link
						href='/payments'
						className={`flex flex-col items-center justify-center space-y-1 ${
							currentPath === '/payments'
								? 'text-green-600'
								: 'text-gray-600 hover:text-gray-900'
						}`}
					>
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
							<path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
						</svg>
						<span className='text-xs'>Payments</span>
					</Link>

					<Link
						href='/card'
						className={`flex flex-col items-center justify-center space-y-1 ${
							currentPath === '/card'
								? 'text-green-600'
								: 'text-gray-600 hover:text-gray-900'
						}`}
					>
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
							<path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
						</svg>
						<span className='text-xs'>Card</span>
					</Link>

					<Link
						href='/profile'
						className={`flex flex-col items-center justify-center space-y-1 ${
							currentPath === '/profile'
								? 'text-green-600'
								: 'text-gray-600 hover:text-gray-900'
						}`}
					>
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
							<path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
						</svg>
						<span className='text-xs'>Profile</span>
					</Link>
				</div>
			</div>
		</div>
	)
}

const links = [
	{
		label: 'Money',
		href: '/dashboard',
		icon: <CurrencyDollarIcon className='h-5 w-5 text-indigo-600' />,
	},
	{
		label: 'Profile',
		href: '/profile',
		icon: <UserCircleIcon className='h-5 w-5 text-indigo-600' />,
	},
]

export default BottomNav
