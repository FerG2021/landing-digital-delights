<template>
	<div class="category-container">
		<div class="image">
			<img :src="category.image" class="img">
		</div>
		<div class="title">
			<div>
				{{ category.name }}
			</div>
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
				backgroundImage: `url(${this.category.image})`,
				backgroundSize: 'cover',
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
	height: 140px;
	width: 140px;
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
	.image {
		height: 110px;
		.img {
			height: 100%;
			object-fit: cover;
		}
	}
	.title {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		width: 100%;
		// background-color: var(--main);
		color: var(--secondary);
		text-align: center;
	}
	
}

</style>