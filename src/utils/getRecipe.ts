import { Data } from '@/types/recipes';

export async function getRecipe(limit = 20, search = '') {
	const res = await fetch(
		`https://dummyjson.com/recipes/search?q=${search}&select=name,image,rating,prepTimeMinutes,cookTimeMinutes&limit=${limit}`,
	);
	const data: Data = await res.json();
	return data;
}
