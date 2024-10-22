import PizzaIcon from '@/icon/PizzaIcon';
import styles from '@/styles/header.module.css';

export default function Header() {
	return (
		<header className={styles.header}>
			<h1 className={styles.title}>
				<PizzaIcon /> Recipes
			</h1>
		</header>
	);
}
