import { Dispatch, SetStateAction } from 'react';
import styles from '@/styles/search.module.css';

export default function Search({ setSearch }: { setSearch: Dispatch<SetStateAction<string>> }) {
	return (
		<form role="search" className={styles.search}>
			<input
				type="text"
				className={styles.input}
				placeholder="Start typing to search…"
				onChange={(e) => setSearch(e.target.value)}
			/>
		</form>
	);
}
