import { createRouter, createWebHistory } from 'vue-router';


const routes = [
	{
		path: '/',
		name: 'Home',
		component: () =>
			import('../views/Home.vue'),
		meta: {
			title: 'Home',
		},
	},
	{
		path: '/projects',
		name: 'Projects',
		component: () =>
			import('../views/Projects.vue'),
		meta: {
			title: 'Projects',
		},
	},
	{
		path: '/contact',
		name: 'Contact',
		component: () =>
			import('../views/Contact.vue'),
		meta: {
			title: 'Contact',
		},
	},
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
	scrollBehavior() {
		document.getElementById('app').scrollIntoView();
	},
});

export default router;


 router.beforeEach((to, from, next) => {
	const nearestWithTitle = to.matched
		.slice()
		.reverse()
		.find((r) => r.meta && r.meta.title);

	const nearestWithMeta = to.matched
		.slice()
		.reverse()
		.find((r) => r.meta && r.meta.metaTags);

	const previousNearestWithMeta = from.matched
		.slice()
		.reverse()
		.find((r) => r.meta && r.meta.metaTags);

	if (nearestWithTitle) {
		document.title = nearestWithTitle.meta.title;
	} else if (previousNearestWithMeta) {
		document.title = previousNearestWithMeta.meta.title;
	}
	Array.from(
		document.querySelectorAll('[data-vue-router-controlled]')
	).map((el) => el.parentNode.removeChild(el));
	if (!nearestWithMeta) return next();

	nearestWithMeta.meta.metaTags
		.map((tagDef) => {
			const tag = document.createElement('meta');

			Object.keys(tagDef).forEach((key) => {
				tag.setAttribute(key, tagDef[key]);
			});

			tag.setAttribute('data-vue-router-controlled', '');

			return tag;
		})
		.forEach((tag) => document.head.appendChild(tag));

	next();
}); 
