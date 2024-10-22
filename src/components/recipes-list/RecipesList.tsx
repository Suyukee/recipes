'use client';

import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getRecipes } from '@/utils/getRecipe';
import RecipeItem from '@/components/recipe-item';
import styles from '@/styles/recipes.module.css';
import { Recipes } from '@/types/recipes';
import Preloader from '@/icon/Preloader';

interface Props {
	limit: number;
	setLimit: Dispatch<SetStateAction<number>>;
	search: string;
}

export default function RecipesList({ limit, setLimit, search }: Props) {
	const { data, error, isPending } = useQuery({
		queryKey: ['recipes', limit, search],
		queryFn: () => getRecipes({ limit, search }),
	});

	const [recipes, setRecipes] = useState<Recipes[]>();

	useEffect(() => {
		if (data) {
			setRecipes(data.recipes);
		}
	}, [data, search]);

	return (
		<main className={styles.main}>
			<div className={styles.list}>
				{recipes &&
					recipes.map((recipe) => (
						<RecipeItem
							key={recipe.id}
							id={recipe.id}
							name={recipe.name}
							imgUrl={recipe.image}
							rating={recipe.rating}
							time={recipe.prepTimeMinutes + recipe.cookTimeMinutes}
						/>
					))}
			</div>

			{error && <p>{error.message}</p>}

			{isPending && <Preloader />}

			{!isPending && data && data.limit < data.total && (
				<button className={styles.showMoreBtn} onClick={() => setLimit(limit + 20)}>
					Show more
				</button>
			)}
		</main>
	);
}
