<template>
	<div class="container">
		<div class="logo-searcher-container">
			<div class="logo">
				<div class="back">
					<i 
						class="pi pi-angle-left back-icon"
						@click="clickBack()"
					/>
				</div>
				<img 
					:src="imgSource" 
					class="img"
					@click="clickImgLogo()"
				>
				<div class="back">
					<i 
						v-badge.warning="shoppingCartCant" 
						class="pi pi-shopping-cart p-overlay-badge back-icon shopping-cart" 
						style="font-size: 2rem"
						@click="clickShoppingCart()"
					/>
				</div>
			</div>
			<div class="searcher">
				<SearcherInput 
					@changeSearcherInput="changeSearcherInput" 
					class="searcher-input"
				/>
			</div>
		</div>
		
		<div class="categories-container">
			<div v-for="category in filteredCategories" :key="category">
				<CategoryItem 
					:category="category" 
					class="category"
					@click="clickCategory(category)"
				/>
			</div>
		</div>
	</div>
</template>

<script>
import { mapGetters } from 'vuex';
import Store from '../../managers/store/store';
import bunkerLogo from '../../assets/accounts/bunker/logo.png';
import chinisLogo from '../../assets/accounts/chinis/logo.svg';

import SearcherInput from '../../components/SearcherInput.vue';
import CategoryItem from './CategoryItem.vue';

export default {
	name: 'CategoriesComponent',
	components: { CategoryItem, SearcherInput },
	computed: {
		...mapGetters('UsersStore', ['account']),
		...mapGetters('CategoriesStore', ['categories', 'filteredCategories', 'selectedCategory']),
		...mapGetters('ShoppingCartStore', ['list']),
		imgSource() {
			const accountLogoMap = {
				bunker: bunkerLogo,
				chinis: chinisLogo,
			};
			return accountLogoMap[this.account];
		},
		shoppingCartCant() {
			return this.list.length > 0 ? this.list.length : '';
		}
	},
	methods: {
		changeSearcherInput(data) {
			this.categories = this.categories.filter(item => item.name.includes(data));
			const filteredCategories = this.categories.filter((element) =>
				element.name.toLowerCase().includes(data.toLowerCase())
			);
			Store.commit('CategoriesStore/setFilteredCategories', filteredCategories);
		},
		clickCategory(category) {
			Store.commit('CategoriesStore/setSelectedCategory', category);
			Store.commit('CategoriesStore/setFilteredCategories', this.categories);
			Store.commit('ProductsStore/setProductsBySelectedCategory', this.selectedCategory);
			this.$router.push('/products');
		},
		clickBack() {
			this.$router.go(-1);
		},
		clickImgLogo() {
			this.$router.push('/');
		},
		clickFSsolutions() {
			window.open('http://fssolutions.com.ar/', '_blank');
		},
		clickShoppingCart() {
			this.$router.push('/shopping-cart');
		}
	},
};
</script>

<style lang="scss" scoped>
/*  */
/* MOBILE */
/*  */
@media all and (max-width: 960px) {
	.container {
		height: 100vh;
		background-color: var(--main);
		background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), var(--main-background-image);
		background-size: cover;
		background-position: center;
		background-repeat: no-repeat;
		display: flex;
		flex-direction: column;
		.logo-searcher-container {
			.logo {
				display: flex;
				align-items: center;
				justify-content: space-between;
				.back {
					height: 70px;
					width: 70px;
					display: flex;
					align-items: center;
					justify-content: center;
					.back-icon {
						color: var(--contrast);
						font-size: 30px;
					}
					.img {
						height: 70px;
						opacity: .2;
					}
				}
				.img {
					height: 100px;
					padding: 10px;
				}
				.fssolutions-logo {
					.img {
						height: 70px;
						opacity: .2;
					}
				}
			}
			.searcher {
				display: flex;
				flex-direction: column;
				align-items: center;
			}
		}
		.categories-container {
			height: 100%;
			display: flex;
			overflow-y: auto;
			flex-wrap: wrap;
			justify-content: center;
			align-items: center;
			.category {
				margin: 20px;
			}
		}
	}
}

/*  */
/* WEB */
/*  */
@media all and (min-width: 961px) {
	.container {
		height: 100vh;
		background-color: var(--main);
		background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), var(--main-background-image);
		background-size: cover;
		background-position: center;
		background-repeat: no-repeat;
		display: flex;
		flex-direction: column;
		.logo-searcher-container {
			.logo {
				display: flex;
				align-items: center;
				justify-content: space-between;
				.back {
					display: flex;
					.back-icon {
						color: var(--contrast);
						font-size: 30px;
						margin: 20px;
						&:hover {
							cursor: pointer;
						}
					}
					.img {
						height: 70px;
						opacity: .2;
					}
				}
				.img {
					height: 100px;
					padding: 10px;
					height: 120px;
					&:hover {
						cursor: pointer;
					}
				}
				.fssolutions-logo {
					padding: 5px;
					.img {
						height: 70px;
						opacity: .2;
						&:hover {
							cursor: pointer;
						}
					}
				}
			}
			.searcher {
				display: flex;
				flex-direction: column;
				align-items: center;
				.searcher-input {
					width: 30%;
				}
			}
		}
		.categories-container {
			height: 100%;
			display: flex;
			overflow-y: auto;
			flex-wrap: wrap;
			justify-content: center;
			align-items: center;
			.category {
				margin: 20px;
			}
		}
	}
}
</style>