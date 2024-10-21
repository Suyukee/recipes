import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';
import { Data } from '@/types/recipes';
import Main from '@/components/main/Main';

export async function getRecipe(limit = 20) {
	const res = await fetch(
		`https://dummyjson.com/recipes?select=name,image,rating,prepTimeMinutes,cookTimeMinutes&limit=${limit}`,
	);
	const data: Data = await res.json();
	return data;
}

export default async function Home() {
	const queryClient = new QueryClient();
	await queryClient.prefetchQuery({
		queryKey: ['recipes'],
		queryFn: () => getRecipe(),
	});

	return (
		<HydrationBoundary state={dehydrate(queryClient)}>
			<Main />
		</HydrationBoundary>
	);
}
