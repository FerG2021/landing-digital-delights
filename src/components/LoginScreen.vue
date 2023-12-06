<template>
	<div class="container">
		<div class="logo-container" />
		<div class="button-welcome-container">
			<div class="greeting">
				{{ greeting }}
			</div>
			<PrimaryButton 
				:label="label" 
				class="login-button"
				@click="$router.push('/categories')"
			/>
		</div>
		<div class="develop-by-container">
			<div class="develop-by">
				{{ $t('developBy') }}
			</div>
			<!-- <span 
				class="fs-solutions"
				@click="clickFSsolutions()"
			>
				{{ $t('FSsolutions') }}
			</span> -->
			<img 
				src="../assets/fssolutions.png" 
				class="img"
				@click="clickFSsolutions()"
			>
		</div>
	</div>
</template>

<script>
import { mapGetters } from 'vuex';

import PrimaryButton from './PrimaryButton.vue';

export default {
	components: { PrimaryButton },
	computed: {
		...mapGetters('UsersStore', ['account']),
		greeting() {
			return this.$t(`${this.account}.greeting`); 
		},
		label() {
			return this.$t(`${this.account}.login-button-label`); 
		}
	},
	methods: {
		clickFSsolutions() {
			window.open('http://fssolutions.com.ar/', '_blank');
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
		color: var(--main);
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		.logo-container {
			height: 160px;
			background-image: var(--main-logo);
			background-size: cover;
			background-position: center;
			background-repeat: no-repeat;
			margin: 20px;
		}
		.button-welcome-container {
			height: 200px;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			.login-button {
				font-weight: bold;
			}
			.greeting {
				margin-bottom: 20px;
				font-size: 18px;
				color: var(--contrast);
			}
		}
		.develop-by-container {
			text-align: center;
			font-size: 12px;
			color: var(--contrast);
			.img {
				height: 70px;
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
		color: var(--main);
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		.logo-container {
			height: 250px;
			background-image: var(--main-logo);
			background-position: center;
			background-repeat: no-repeat;
		}
		.button-welcome-container {
			height: 200px;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			.login-button {
				font-weight: bold;
			}
			.greeting {
				margin-top: 20px;
				color: var(--contrast);
			}
		}
	}
}




</style>