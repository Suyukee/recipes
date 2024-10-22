import { Dispatch, SetStateAction } from 'react';
import PizzaIcon from '@/icon/PizzaIcon';
import header from '@/styles/header.module.css';

export default function Header({ setSearch }: { setSearch: Dispatch<SetStateAction<string>> }) {
	return (
		<header className={header.header}>
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
				{/* <button className={header.btn}>Search</button> */}
			</div>
		</header>
	);
}
