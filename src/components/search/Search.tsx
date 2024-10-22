import { ChangeEvent, Dispatch, MouseEvent, SetStateAction, useRef } from 'react';
import CrossIcon from '@/icon/CrossIcon';
import styles from '@/styles/search.module.css';

interface Props {
	search: string;
	setSearch: Dispatch<SetStateAction<string>>;
}

export default function Search({ search, setSearch }: Props) {
	const ref = useRef(null);

	const handleClear = (e: MouseEvent<HTMLButtonElement>) => {
		const resetForm = e.target as HTMLFormElement;
		resetForm.reset();
		setSearch('');
	};

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => setSearch(e.target.value);

	return (
		<form role="search" className={styles.search}>
			<input
				type="text"
				className={styles.input}
				placeholder="Start typing to search…"
				ref={ref}
				onChange={(e) => handleChange(e)}
			/>
			{search && (
				<button className={styles.btnClear} onClick={(e) => handleClear(e)}>
					<CrossIcon />
				</button>
			)}
		</form>
	);
}
