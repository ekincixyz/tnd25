import Link from 'next/link'
import { useRouter } from 'next/router'
import {
	CurrencyDollarIcon,
	CommandLineIcon,
	UserCircleIcon,
} from '@heroicons/react/24/outline'

const BottomNav = () => {
	const router = useRouter()

	return (
		<div className='sm:hidden'>
			<nav className='fixed bottom-0 w-full border-t bg-zinc-100 pb-safe dark:border-zinc-800 dark:bg-zinc-900'>
				<div className='mx-auto flex h-16 max-w-md items-center justify-around px-6'>
					{links.map(({ href, label, icon }) => (
						<Link key={label} href={href} className={`flex h-full w-full flex-col items-center justify-center space-y-1 ${
							router.pathname === href ? 'text-indigo-500' : 'text-gray-600'
						}`}>
							{icon}
							<span className='text-xs text-zinc-600'>{label}</span>
						</Link>
					))}
				</div>
			</nav>
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
		label: 'Dev',
		href: '/dev',
		icon: <CommandLineIcon className='h-5 w-5 text-indigo-600' />,
	},
	{
		label: 'Profile',
		href: '/profile',
		icon: <UserCircleIcon className='h-5 w-5 text-indigo-600' />,
	},
]

export default BottomNav
