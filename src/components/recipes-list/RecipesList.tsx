'use client';

import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import RecipeItem from '@/components/recipe-item';
import { DataDto, RecipesDto } from '@/types/recipes';
import styles from '@/styles/recipes.module.css';
import Preloader from '@/icon/Preloader';

interface Props {
	data: DataDto | undefined;
	error: Error | null;
	isPending: boolean;
	limit: number;
	setLimit: Dispatch<SetStateAction<number>>;
	search: string;
}

export default function RecipesList({ data, error, isPending, limit, setLimit, search }: Props) {
	const [recipes, setRecipes] = useState<RecipesDto[]>();

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
