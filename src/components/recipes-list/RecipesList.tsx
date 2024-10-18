import styles from '@/styles/recipes.module.css';
import RecipeItem from '@/components/recipe-item';

// interface Recipe {
// 	id: string;
// 	name: string;
// 	ingredients: string[];
// 	instructions: string[];
// 	prepTimeMinutes: number;
// 	cookTimeMinutes: number;
// 	servings: number;
// 	difficulty: 'Easy';
// }

interface Data {
	recipes: Recipes[];
}

interface Recipes {
	id: string;
	name: string;
	image: string;
	rating: number;
	tags: string[];
}

const getRecipes = async () => {
	const response = await fetch(
		'https://dummyjson.com/recipes?limit=10&select=name,image,tags,rating',
	);
	console.log(response);
	return response.json();
};

async function RecipesList() {
	const { recipes }: Data = await getRecipes();
	console.log(recipes);
	return (
		<main className={styles.list}>
			{recipes.map((recipe) => (
				<RecipeItem key={recipe.id} name={recipe.name} imgUrl={recipe.image} />
			))}
		</main>
	);
}
export default RecipesList;
