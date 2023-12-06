<template>
	<div class="category-container">
		<div class="img-container" :class="selectedCategory.id === category.id ? 'category-selected' : ''">
			<img :src="category.image" class="img">
		</div>
		<div class="title">
			{{ category.name }}
		</div>
	</div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
	props: {
		category: {
			type: Object,
			required: true
		}
	},
	computed: {
		...mapGetters('CategoriesStore', ['selectedCategory']),
	}
};
</script>

<style lang="scss" scoped>
.category-container {
	// border: 1px solid red;
	height: 110px;
	width: 80px;
	.img-container {
		height: 80px;
		width: 100%;
		object-fit: contain;
		border-radius: 20px;
		background-color: var(--main-variant);
		.img {
			height: 80px;
			width: 100%;
			object-fit: contain;
			border-radius: 20px;
			padding: 0px 5px 0pc 5px;
		}
	}
	.title {
		margin-top: 5px;
		width: 100%;
		// border: 1px solid blue;
		text-align: center;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;    
	}
}

.category-selected {
	background-color: var(--main-variant-selected) !important;
}

</style>