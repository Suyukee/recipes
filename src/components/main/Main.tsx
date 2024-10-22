'use client';

import { useState } from 'react';
import Header from '@/components/header';
import Search from '@/components/search';
import RecipesList from '@/components/recipes-list';

export default function Main() {
	const [limit, setLimit] = useState(20);
	const [search, setSearch] = useState('');

	return (
		<div className="app">
			<Header />
			<Search search={search} setSearch={setSearch} />
			<RecipesList limit={limit} setLimit={setLimit} search={search} />
		</div>
	);
}
