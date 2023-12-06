<template>
	<div :style="dynamicStyles" class="category-container">
		<div class="title">
			{{ category.name }}
		</div>
	</div>
</template>

<script>
export default {
	props: {
		category: {
			type: Object,
			required: true
		}
	},
	computed: {
		dynamicStyles() {
			return {
				backgroundColor: 'var(--contrast)',
				// backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${this.category.image})`,
				backgroundImage: `url(${this.category.image})`,
				backgroundSize: 'cover',
				// backgroundSize: 'contain',
				backgroundPosition: 'center',
				backgroundRepeat: 'no-repeat',
				color: 'var(--main)'
			};
		}
	}
};
</script>

<style lang="scss" scoped>
.category-container {
	height: 130px;
	width: 130px;
	border-radius: 20px;
	background-color: var(--contrast);
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	&:hover {
		cursor: pointer;
	}
	.title {
		width: 100%;
		background-color: var(--main);
		color: var(--secondary);
		text-align: center;
	}
	
}

</style>