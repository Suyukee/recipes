export interface Recipes {
	id: string;
	name: string;
	image: string;
	rating: number;
	prepTimeMinutes: number;
	cookTimeMinutes: number;
}

export interface Data {
	recipes: Recipes[];
	total: number;
	skip: number;
	limit: number;
}
