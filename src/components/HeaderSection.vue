<template>
	<div class="header">
		<div class="title">
			<div class="back">
				<i 
					class="pi pi-angle-left back-icon"
					@click="clickBack()"
				/>
			</div>
			<div>
				Mi carrito
			</div>
			<div class="back">
				<img 
					src="../assets/fssolutions.png" 
					class="img"
					@click="clickFSsolutions()"
				>
			</div>
		</div>
		
	</div>
</template>

<script>
import Store from '../managers/store/store';
import { mapGetters } from 'vuex';

import bunkerLogo from '../assets/accounts/bunker/logo.png';
import chinisLogo from '../assets/accounts/chinis/logo.svg';

export default {
	computed: {
		...mapGetters('UsersStore', ['account']),
		...mapGetters('CategoriesStore', ['categories']),
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
		clickBack() {
			this.$router.go(-1);
		},
	},
};
</script>

<style lang="scss" scoped>
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
</style>