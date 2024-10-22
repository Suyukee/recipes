'use client';

import { usePathname, useRouter } from 'next/navigation';
import Image from 'next/image';
import { useQuery } from '@tanstack/react-query';
import { getRecipePage } from '@/utils/fetching';
import Header from '@/components/header';
import Preloader from '@/icon/Preloader';
import StarIcon from '@/icon/StarIcon';
import { RecipesDto } from '@/types/recipes';
import styles from '@/styles/recipe-page.module.css';
import BackArrowIcon from '@/icon/BackArrowIcon';

export default function RecipePage() {
	const router = useRouter();

	const searchParams = usePathname();
	const id = searchParams.split('/').pop();

	const { data, error, isPending } = useQuery<RecipesDto>({
		queryKey: ['recipePage', id],
		queryFn: () => getRecipePage(id),
	});

	return (
		<div className="app">
			<button className={styles.btnBack} onClick={router.back}>
				<BackArrowIcon />
			</button>

			<Header />

			<div className={styles.main}>
				{error && <p>{error.message}</p>}
				{isPending && <Preloader />}

				{data && (
					<>
						<div className={styles.card}>
							<Image src={data.image} alt={data.name} width={300} height={300} priority={true} />

							<div className={styles.info}>
								<div className={styles.description}>
									<h3 className={styles.title}>{data.name}</h3>

									<p>
										Calories per serving:{' '}
										<span className={styles.purpleText}>{data.caloriesPerServing} kcal</span>
									</p>
									<p>
										Servings: <span className={styles.purpleText}>{data.servings} person</span>
									</p>
									<p>
										Difficulty: <span className={styles.purpleText}>{data.difficulty}</span>
									</p>
									<p>
										Prep time minutes:{' '}
										<span className={styles.purpleText}>{data.prepTimeMinutes} min</span>
									</p>
									<p>
										Cook time minutes:{' '}
										<span className={styles.purpleText}>{data.cookTimeMinutes} min</span>
									</p>
									<p>
										Cuisine: <span className={styles.purpleText}>{data.cuisine}</span>
									</p>
									<p>
										Meal type: <span className={styles.purpleText}>{data.mealType}</span>
									</p>

									<p>
										{data.tags?.map((tag, i) => (
											<span key={i} className={styles.hashtag}>
												{`#${tag.replace(/\s/g, '')} `}
											</span>
										))}
									</p>
								</div>

								<p className={styles.rating}>
									<StarIcon size={20} />
									{data.rating}
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
