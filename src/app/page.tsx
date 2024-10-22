import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';
import { getRecipes } from '@/utils/getRecipe';
import Main from '@/components/main';

export default async function Home() {
	const queryClient = new QueryClient();
	await queryClient.prefetchQuery({
		queryKey: ['recipes'],
		queryFn: () => getRecipes({}),
	});

	return (
		<HydrationBoundary state={dehydrate(queryClient)}>
			<Main />
		</HydrationBoundary>
	);
}
