import { Dispatch, SetStateAction } from 'react';
import CrossIcon from '@/icon/CrossIcon';
import styles from '@/styles/search.module.css';

interface Props {
	search: string;
	setSearch: Dispatch<SetStateAction<string>>;
}

export default function Search({ search, setSearch }: Props) {
	const handleChange = (target: HTMLInputElement) => setSearch(target.value);

	const handleClear = () => {
		setSearch('');
	};

	return (
		<form role="search" className={styles.search}>
			<input
				type="text"
				className={styles.input}
				placeholder="Start typing to search…"
				value={search}
				onChange={(e) => handleChange(e.target)}
			/>
			{search && (
				<button className={styles.btnClear} onClick={handleClear}>
					<CrossIcon />
				</button>
			)}
		</form>
	);
}
