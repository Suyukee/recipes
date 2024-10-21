'use client';

import Header from '@/components/header';
import RecipesList from '@/components/recipes-list';
import { useState } from 'react';

export default function Main() {
	const [limit, setLimit] = useState(20);
	const [search, setSearch] = useState('');

	return (
		<div className="app">
			<Header search={search} setSearch={setSearch} />
			<RecipesList limit={limit} setLimit={setLimit} />
		</div>
	);
}
