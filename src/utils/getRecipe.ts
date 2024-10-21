import { Data } from '@/types/recipes';

export async function getRecipe(limit = 20) {
	const res = await fetch(
		`https://dummyjson.com/recipes?select=name,image,rating,prepTimeMinutes,cookTimeMinutes&limit=${limit}`,
	);
	const data: Data = await res.json();
	return data;
}
