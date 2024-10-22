import { Data } from '@/types/recipes';

export async function getRecipes({ limit = 20, search = '' }) {
	const res = await fetch(
		`https://dummyjson.com/recipes/search?q=${search}&select=name,image,rating,prepTimeMinutes,cookTimeMinutes&limit=${limit}`,
	);
	const data: Data = await res.json();
	return data;
}

export async function getRecipePage(id = '') {
	const res = await fetch(`https://dummyjson.com/recipes/${id}`);
	const data = await res.json();
	return data;
}
