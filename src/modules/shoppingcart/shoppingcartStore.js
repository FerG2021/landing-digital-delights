export default {
	namespaced: true,

	state: {
		list: [],
		total: 0
	},

	getters: {
		list(state) {
			return state.list;
		},
		total(state) {
			return state.total;
		}
	},

	mutations: { 
		addProduct(state, value) {
			const index = state.list.findIndex(element => element.id === value.product.id && element.category_id === value.product.category_id);

			if (index !== -1) {
				if (value.cant !== 0) {
					state.list[index].cant = value.cant;
					state.list[index].subtotal =  setSubtotal(value.product.price, value.cant);
				} else {
					state.list.splice(index, 1);
				}
				
			} else {
				state.list.push({
					id: value.product.id,
					name: value.product.name ? value.product.name : value.product.title,
					price: value.product.price,
					cant: value.cant,
					subtotal: setSubtotal(value.product.price, value.cant),
					category_id: value.product.category_id,
					image: value.product.image
				});
			}

			setTotal(state);
		}
	},

	actions: { },
};

function setSubtotal(price, cant) {
	return price * cant;
}

function setTotal(state) {
	state.total = 0;
	for (const item of state.list) {
		state.total = state.total + item.subtotal;
	}
}