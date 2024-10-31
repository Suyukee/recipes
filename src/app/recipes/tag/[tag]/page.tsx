'use client';

import { useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { useQuery } from '@tanstack/react-query';
import { getRecipesTag } from '@/api/actions';
import Header from '@/components/header';
import RecipesList from '@/components/recipes-list';
import BackButton from '@/components/back-button/BackButton';
import styles from '@/styles/tag-page.module.css';

export default function TagPage() {
	const router = useRouter();
	const tag = usePathname().split('/')[3];
	const tagName = tag
		.replace(/\W\d*/g, ' ')
		.replace(/(\w)(\w*)/g, (g0, g1, g2) => g1.toUpperCase() + g2)
		.replace(/\s/g, '');

	const [limit, setLimit] = useState(20);

	const { data, error, isLoading } = useQuery({
		queryKey: ['recipes', limit, tag],
		queryFn: () => getRecipesTag(tag),
	});

	return (
		<div className="app">
			<BackButton router={router} />
			<Header />
			<h2 className={styles.title}>{'#' + tagName}</h2>
			<RecipesList
				data={data}
				error={error}
				isLoading={isLoading}
				limit={limit}
				setLimit={setLimit}
				search=""
			/>
		</div>
	);
}
