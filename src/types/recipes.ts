export interface RecipesDto {
	id: string;
	name: string;
	image: string;
	rating: number;
	prepTimeMinutes: number;
	cookTimeMinutes: number;
	ingredients?: string[];
	instructions?: string[];
	servings?: number;
	difficulty?: 'Easy' | 'Medium' | 'Hard';
	cuisine?: string;
	caloriesPerServing?: number;
	tags?: string[];
	mealType?: string[];
}

export interface DataDto {
	recipes: RecipesDto[];
	total: number;
	skip: number;
	limit: number;
}
