import PizzaIcon from '@/icon/PizzaIcon';
import header from '@/styles/header.module.css';

function Header() {
	return (
		<header className={header.header}>
			<h1 className={header.title}>
				<PizzaIcon /> Recipes
			</h1>
			<div className={header.search}>
				<input type="text" className={header.input} placeholder="Start typing to search…" />
				<button className={header.btn}>Search</button>
			</div>
		</header>
	);
}
export default Header;
