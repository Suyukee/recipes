import SearchIcon from '@/icon/SearchIcon';
import header from '@/styles/header.module.css';

function Header() {
	return (
		<header className={header.header}>
			<h1 className={header.title}>Recipes</h1>
			<input type="text" className={header.input} placeholder="typing..." />
			<button className={header.btn}>
				<SearchIcon />
				Search
			</button>
		</header>
	);
}
export default Header;
