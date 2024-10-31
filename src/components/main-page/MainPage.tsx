'use client';

import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getRecipes } from '@/api/actions';
import Header from '@/components/header';
import Search from '@/components/search';
import RecipesList from '@/components/recipes-list';

export default function Main() {
	const [limit, setLimit] = useState(20);
	const [search, setSearch] = useState('');

	const { data, error, isLoading } = useQuery({
		queryKey: ['recipes', limit, search],
		queryFn: () => getRecipes({ limit, search }),
	});

	return (
		<div className="app">
			<Header />
			<Search search={search} setSearch={setSearch} />
			<RecipesList
				data={data}
				error={error}
				isLoading={isLoading}
				limit={limit}
				setLimit={setLimit}
				search={search}
			/>
		</div>
	);
}
