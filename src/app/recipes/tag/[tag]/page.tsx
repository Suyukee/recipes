'use client';

import { useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { useQuery } from '@tanstack/react-query';
import { getRecipesTag } from '@/utils/fetching';
import Header from '@/components/header';
import RecipesList from '@/components/recipes-list';
import BackButton from '@/components/back-button/BackButton';
import styles from '@/styles/tag-page.module.css';

export default function TagPage() {
	const router = useRouter();
	const tag = usePathname().split('/')[3];

	const [limit, setLimit] = useState(20);

	const { data, error, isPending } = useQuery({
		queryKey: ['recipes', limit, tag],
		queryFn: () => getRecipesTag(tag),
	});

	return (
		<div className="app">
			<BackButton router={router} />
			<Header />
			<h2 className={styles.title}>{'#' + tag}</h2>
			<RecipesList
				data={data}
				error={error}
				isPending={isPending}
				limit={limit}
				setLimit={setLimit}
				search=""
			/>
		</div>
	);
}
