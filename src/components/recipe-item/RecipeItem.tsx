import ClockIcon from '@/icon/ClockIcon';
import StarIcon from '@/icon/StarIcon';
import styles from '@/styles/recipes.module.css';
import Image from 'next/image';
import Link from 'next/link';

type Props = {
	id: string;
	name: string;
	imgUrl: string;
	rating: number;
	time: number;
};

function RecipeItem({ id, name, imgUrl, rating, time }: Props) {
	if (name.length > 30) {
		name = name.slice(0, 30) + '…';
	}

	return (
		<Link href={`recipe/${id}`} className={styles.item}>
			<Image src={imgUrl} alt={name} width={260} height={260} priority={true} />

			<div className={styles.description}>
				<h3 className={styles.title}>{name}</h3>

				<div className={styles.info}>
					<span className={styles.rating}>
						<StarIcon size={14} />
						{rating}
					</span>

					<span className={styles.time}>
						<ClockIcon />
						{time + ' min'}
					</span>
				</div>
			</div>
		</Link>
	);
}
export default RecipeItem;
