import { Dispatch, SetStateAction } from 'react';
import PizzaIcon from '@/icon/PizzaIcon';
import header from '@/styles/header.module.css';

interface Props {
	search: string;
	setSearch: Dispatch<SetStateAction<string>>;
}

export default function Header({ search, setSearch }: Props) {
	return (
		<header className={header.header}>
			{/* TODO: Это естественно нужно переделать */}
			<p style={{ position: 'absolute', top: '5px', color: '#fff' }}>{search}</p>

			<h1 className={header.title}>
				<PizzaIcon /> Recipes
			</h1>

			<div className={header.search}>
				<input
					type="text"
					className={header.input}
					placeholder="Start typing to search…"
					onChange={(e) => setSearch(e.target.value)}
				/>
				<button className={header.btn}>Search</button>
			</div>
		</header>
	);
}
