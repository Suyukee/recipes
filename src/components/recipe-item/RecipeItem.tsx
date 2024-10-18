import styles from '@/styles/recipes.module.css';
import Image from 'next/image';

type Props = {
	name: string;
	imgUrl: string;
};

function RecipeItem({ name, imgUrl }: Props) {
	return (
		<div className={styles.item}>
			<Image src={imgUrl} alt={name} width={260} height={260} />
			<h3 className={styles.title}>{name}</h3>
		</div>
	);
}
export default RecipeItem;
