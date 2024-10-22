'use client';

import { usePathname } from 'next/navigation';
import { useQuery } from '@tanstack/react-query';
import { getRecipePage } from '@/utils/getRecipe';
import Header from '@/components/header';
import Preloader from '@/icon/Preloader';
import styles from '@/styles/recipe-page.module.css';
import Image from 'next/image';
import { Recipes } from '@/types/recipes';
import StarIcon from '@/icon/StarIcon';

export default function RecipePage() {
	const searchParams = usePathname();
	const id = searchParams.split('/').pop();

	const { data, error, isPending } = useQuery<Recipes>({
		queryKey: ['recipePage', id],
		queryFn: () => getRecipePage(id),
	});

	return (
		<div className="app">
			<Header />
			<div className={styles.main}>
				{error && <p>{error.message}</p>}
				{isPending && <Preloader />}

				{data && (
					<>
						<div className={styles.info}>
							<Image src={data.image} alt={data.name} width={250} height={250} priority={true} />

							<div className={styles.description}>
								<h3 className={styles.title}>{data.name}</h3>
								<p>
									Calories per serving:{' '}
									<span className={styles.span}>{data.caloriesPerServing} kcal</span>
								</p>
								<p>
									Servings: <span className={styles.span}>{data.servings} person</span>
								</p>
								<p>
									Difficulty: <span className={styles.span}>{data.difficulty}</span>
								</p>
								<p>
									Prep time minutes: <span className={styles.span}>{data.prepTimeMinutes} min</span>
								</p>
								<p>
									Cook time minutes: <span className={styles.span}>{data.cookTimeMinutes} min</span>
								</p>
								<p>
									<StarIcon /> {data.rating}
								</p>
							</div>
						</div>

						<figure className={styles.list}>
							<figcaption className={styles.title}>Ingredients</figcaption>
							<ul>
								{data.ingredients?.map((ingredient, i) => (
									<li key={i}>{ingredient}</li>
								))}
							</ul>
						</figure>

						<figure className={styles.list}>
							<figcaption className={styles.title}>Instructions</figcaption>
							<ol>
								{data.instructions?.map((act, i) => (
									<li key={i}>{act}</li>
								))}
							</ol>
						</figure>
					</>
				)}
			</div>
		</div>
	);
}
