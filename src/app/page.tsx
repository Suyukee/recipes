import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';
import { getRecipe } from '@/utils/getRecipe';
import Main from '@/components/main/Main';

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
