'use client';

import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getRecipe } from '@/utils/getRecipe';
import RecipeItem from '@/components/recipe-item';
import styles from '@/styles/recipes.module.css';
import { Recipes } from '@/types/recipes';
import Preloader from '@/icon/Preloader';

interface Props {
	limit: number;
	setLimit: Dispatch<SetStateAction<number>>;
}

export default function RecipesList({ limit, setLimit }: Props) {
	const { data, error, isPending } = useQuery({
		queryKey: ['recipes', limit],
		queryFn: () => getRecipe(limit),
	});

	const [recipes, setRecipes] = useState<Recipes[]>();

	useEffect(() => {
		if (data) {
			setRecipes(data.recipes);
		}
	}, [data]);

	return (
		<main className={styles.main}>
			{error && <h2>{error.message}</h2>}

			<div className={styles.list}>
				{recipes &&
					recipes.map((recipe) => (
						<RecipeItem
							key={recipe.id}
							name={recipe.name}
							imgUrl={recipe.image}
							rating={recipe.rating}
							time={recipe.prepTimeMinutes + recipe.cookTimeMinutes}
						/>
					))}
			</div>

			{isPending && <Preloader />}

			{!isPending && limit < 50 && (
				<button className={styles.showMoreBtn} onClick={() => setLimit(limit + 20)}>
					Show more
				</button>
			)}
		</main>
	);
}
