import Store from '../managers/store/store';

export default function loadModulesByAccount(store, router, account) {
	const accountsModules = {
		// Agrega otros tipos de account y los módulos correspondientes aquí
		admin: [
			// {
			// 	name: 'home',
			// 	componentName: 'Home',
			// 	title: 'Home',
			// 	path: '/',
			// },
			{
				name: 'categories',
				componentName: 'Categories',
				title: 'Categorías',
				path: '/categories',
				store: true
			},
			{
				name: 'products',
				componentName: 'Products',
				title: 'Productos',
				path: '/products',
				store: true
			},
			{
				name: 'promotions',
				componentName: 'Promotions',
				title: 'Promociones',
				store: true
			}
		]
	};

	const processModules = accountsModules[account] || [];

	processModules.forEach(module => {
		if (module.store === true) {
			import(`../modules/${module.name}/${module.name}Store.js`).then(moduleStore => {
				store.registerModule(`${module.componentName}Store`, moduleStore.default);
			});
		}

		if (module.path) {
			router.addRoute({
				path: `${module.path}`,
				component: () => import(`../modules/${module.name}/${module.componentName}.vue`)
			});
		}
		Store.commit('UsersStore/setModules', processModules);
	});
}