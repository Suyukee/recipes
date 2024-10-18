import Header from '@/components/header';
import RecipesList from '@/components/recipes-list';

export default function Home() {
	return (
		<div className="main">
			<Header />
			<RecipesList />
		</div>
	);
}
