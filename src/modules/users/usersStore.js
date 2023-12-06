export default {
	namespaced: true,

	state: { 
		account: null,
		loaded: false,
		modules: null,
	},

	getters: {
		account(state) {
			return state.account;
		},
		loaded(state) {
			return state.loaded;
		},
		modules(state) {
			return state.modules;
		}
	},

	mutations: {
		setAccount(state, account) {
			state.account = account;
		},
		setLoaded(state, loaded) {
			state.loaded = loaded;
		},
		setModules(state, modules) {
			state.modules = modules;
		}
	},

	actions: { },
};