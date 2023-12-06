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
					<img 
						src="../../assets/fssolutions.png" 
						class="img"
						@click="clickFSsolutions()"
					>
				</div>
			</div>
			<div class="searcher">
				<SearcherInput @changeSearcherInput="changeSearcherInput"/>
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
	components: { SearcherInput, CategoryItem },
	computed: {
		...mapGetters('UsersStore', ['account']),
		...mapGetters('CategoriesStore', ['categories', 'filteredCategories', 'selectedCategory']),
		imgSource() {
			const accountLogoMap = {
				bunker: bunkerLogo,
				chinis: chinisLogo,
			};
			return accountLogoMap[this.account];
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
		}
	},
};
</script>

<style lang="scss" scoped>
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
				width: 20%;
				.back-icon {
					color: var(--contrast);
					font-size: 30px;
					padding: 20px;
				}
				.img {
					height: 70px;
				}
			}
			.img {
				height: 100px;
				padding: 10px;
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
		// align-items: flex-start;
		.category {
			margin: 20px;
		}
	}
}
</style>