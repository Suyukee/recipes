import BackArrowIcon from '@/icon/BackArrowIcon';
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';
import styles from '@/styles/back-button.module.css';

export default function BackButton({ router }: { router: AppRouterInstance }) {
	return (
		<button className={styles.btnBack} onClick={router.back}>
			<BackArrowIcon />
		</button>
	);
}
