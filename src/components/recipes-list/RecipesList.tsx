import styles from '@/styles/recipes.module.css';
import RecipeItem from '@/components/recipe-item';

interface Data {
	recipes: Recipes[];
}

interface Recipes {
	id: string;
	name: string;
	image: string;
	rating: number;
	prepTimeMinutes: number;
	cookTimeMinutes: number;
}

async function RecipesList() {
	const response = await fetch(
		'https://dummyjson.com/recipes?limit=30&select=name,image,rating,prepTimeMinutes,cookTimeMinutes',
	);
	const { recipes }: Data = await response.json();

	return (
		<main className={styles.list}>
			{recipes.map((recipe) => (
				<RecipeItem
					key={recipe.id}
					name={recipe.name}
					imgUrl={recipe.image}
					rating={recipe.rating}
					time={recipe.prepTimeMinutes + recipe.cookTimeMinutes}
				/>
			))}
		</main>
	);
}
export default RecipesList;
