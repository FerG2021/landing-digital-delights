<template>
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
			<div class="fssolutions-logo">
				<img 
					src="../assets/fssolutions.png" 
					class="img"
					@click="clickFSsolutions()"
				>
			</div>
		</div>
		<div class="searcher">
			<SearcherInput 
				@changeSearcherInput="changeSearcherInput" 
				class="searcher-input"
			/>
		</div>
	</div>	
</template>

<script>
import Store from '../managers/store/store';
import { mapGetters } from 'vuex';

import SearcherInput from './SearcherInput.vue';
import bunkerLogo from '../assets/accounts/bunker/logo.png';
import chinisLogo from '../assets/accounts/chinis/logo.svg';

export default {
	components: { SearcherInput },
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
	},
};
</script>

<style lang="scss" scoped>
.logo-searcher-container {
	.logo {
		display: flex;
		align-items: center;
		justify-content: space-between;

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
</style>