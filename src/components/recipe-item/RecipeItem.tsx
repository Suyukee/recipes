import StarIcon from '@/icon/StarIcon';
import styles from '@/styles/recipes.module.css';
import Image from 'next/image';

type Props = {
	name: string;
	imgUrl: string;
	rating: number;
};

function RecipeItem({ name, imgUrl, rating }: Props) {
	if (name.length > 30) {
		name = name.slice(0, 30) + '…';
	}

	return (
		<div className={styles.item}>
			<Image src={imgUrl} alt={name} width={260} height={260} />
			<div className={styles.description}>
				<h3 className={styles.title}>{name}</h3>
				<span className={styles.rating}>
					<StarIcon />
					{rating}
				</span>
			</div>
		</div>
	);
}
export default RecipeItem;
