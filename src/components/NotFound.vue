<template>
	<div class="not-found-container">
		<i class="pi pi-exclamation-circle not-found-icon" />
		<div class="description">
			{{ description }}
		</div>
	</div>
</template>

<script>
export default {
	props: {
		description: {
			type: String,
			required: true
		}
	}
};
</script>

<style lang="scss" scoped>
.not-found-container {
	margin-top: 20px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	border-radius: 8px;
	padding: 10px;
	.not-found-icon {
		font-size: 60px;
		color: var(--not-found);
	}
	.description {
		margin-top: 20px;
		text-align: center;
		font-size: 25px;
		color: var(--not-found);
	}
}
</style>