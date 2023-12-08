<template>
	<div class="products-container">
		<div class="header">
			<div class="title">
				<div class="back">
					<i 
						class="pi pi-angle-left back-icon"
						@click="clickBack()"
					/>
				</div>
				<div>
					Menú
				</div>
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
		<div class="content-container">
			<div class="list-categories-container">
				<div 
					v-for="category of categories" 
					:key="category"
				>
					<CategoryListItem
						:category="category" class="item-category" @click="clickCategory(category)"/>
				</div>
				
			</div>
			<div class="list-products-container">
				<div class="promotions" v-if="availabledPromotions > 0">
					<div v-for="promotion of availabledPromotions" :key="promotion">
						<Promotions 
							:promotion="promotion"
							@click="clickProduct(promotion)"
						/>
					</div>
				</div>

				<div class="products">
					<div class="category-title">
						{{ selectedCategory.name }}
					</div>
					<div class="items-category">
						<template v-for="product of productsFiltered" :key="product">
							<ProductItem 
								:product="product" 
								class="items"
								@click="clickProduct(product)"
							/>
						</template>
						<div v-if="productsFiltered.length === 0" class="not-found-container">
							<NotFound 
								:description="$t('notFoundProducts')"
								class="not-found"
							/>
						</div>
					</div>
				</div>
			</div>

			<Sidebar 
				v-model:visible="open" 
				position="bottom" 
				style="height: auto"				
			>
				<BottomSheet 
					:product-selected="productSelected"
				/>
			</Sidebar>
		</div>
	</div>
</template>

<script>
import { mapGetters } from 'vuex';
import SearcherInput from '../../components/SearcherInput.vue';
import CategoryListItem from '../categories/CategoryListItem.vue';
import ProductItem from './ProductItem.vue';
import Promotions from '../promotions/Promotions.vue';
import NotFound from '../../components/NotFound.vue';
import Store from '../../managers/store/store';
import BottomSheet from '../../components/BottomSheet.vue';

export default {
	name: 'ProductsComponent',
	components: { SearcherInput, CategoryListItem, ProductItem, Promotions, NotFound, BottomSheet },
	computed: {
		...mapGetters('CategoriesStore', ['selectedCategory', 'categories']),
		...mapGetters('ProductsStore', ['productsByCategory', 'productsFiltered']),
		...mapGetters('PromotionsStore', ['promotions']),
		availabledPromotions() {
			const availabledPromotions = [];

			for (const promotion of this.promotions) {
				if (promotion.available === 1) {
					availabledPromotions.push(promotion);
				}
			}

			return availabledPromotions;
		}
	},
	data() {
		return {
			open: false,
			productSelected: null
		};
	},
	mounted() {
		this.setProducts();
	},
	methods: {
		setProducts() {
			this.productsFiltered = this.productsByCategory;
		},
		changeSearcherInput(data) {
			Store.commit('ProductsStore/setProductsFiltered', this.productsByCategory.filter((element) =>
				element.name.toLowerCase().includes(data.toLowerCase())
			));

		},
		clickCategory(category) {
			Store.commit('CategoriesStore/setSelectedCategory', category);
			Store.commit('CategoriesStore/setFilteredCategories', this.categories);
			Store.commit('ProductsStore/setProductsBySelectedCategory', this.selectedCategory);
		},
		clickProduct(product) {
			this.open = true;
			this.productSelected = product;
		},
		clickBack() {
			this.$router.go(-1);
		},
		clickFSsolutions() {
			window.open('http://fssolutions.com.ar/', '_blank');
		}
	},
};
</script>

<style lang="scss" scoped>
.products-container {
	height: 100vh;
	.header {
		height: 20%;
		min-height: 150px;
		border-radius: 40%;
		border-top-left-radius: 0;
		border-top-right-radius: 0;
		background-color: var(--main);
		background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), var(--main-background-image);
		background-size: cover;
		background-position: center;
		background-repeat: no-repeat;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		.title {
			display: flex;
			align-items: center;
			justify-content: space-between;
			text-align: center;
			color: var(--contrast);
			font-size: 30px;
			font-weight: bold;
			.back {
				width: 20%;
				display: flex;
				align-items: center;
				flex-direction: column;
				.back-icon {
					color: var(--contrast);
					font-size: 30px;
					padding: 20px;
				}
				.img {
					height: 50px;
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
	.content-container {
		height: 80%;
		.list-categories-container {
			display: flex;
			overflow-x: auto;
			height: 20%;
			min-height: 140px;
			.item-category {
				margin: 20px;
			}
		}
		.list-products-container {
			height: 80%;
			padding: 10px 20px 10px 20px;
			overflow-y: auto;
			.promotions {
				display: flex;
				overflow-x: auto;
				width: 100%;
				height: 130px;
			}
			.products {
				margin-top: 10px;
				padding-bottom: 20px;
				.category-title {
					color: black;
					font-size: 25px;
				}
				.items-category {
					display: flex;
					flex-wrap: wrap;
					justify-content: center;
					height: 80%;
					.items {
						margin: 20px;
					}
				}
				.not-found-container {
					display: flex;
					flex-direction: column;
					align-items: center;
					justify-content: center;
				}
			}
		}
	}
}

</style>