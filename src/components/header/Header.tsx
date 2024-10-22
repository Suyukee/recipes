import PizzaIcon from '@/icon/PizzaIcon';
import styles from '@/styles/header.module.css';
import Link from 'next/link';

export default function Header() {
	return (
		<header className={styles.header}>
			<Link href="/">
				<h1 className={styles.title}>
					<PizzaIcon /> Recipes
				</h1>
			</Link>
		</header>
	);
}
