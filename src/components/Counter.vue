<template>
	<div>
		<h3 data-testid='count'>{{count}}</h3>
		<button v-on:click="increment()" data-testid='increment'>+</button>
		<button v-on:click="decrement()" data-testid='decrement'>-</button>
	</div>
</template>

<script>
	
	export default {
		name: 'Counter',

		data: function() {
			return ({
				count : 0
			})
		},
		
		methods: {
			increment: function() {
				this.count ++
			},
			decrement: function() {
				if (this.count === 0) { return }
				this.count --
			}
		}
	}

</script>

<style scoped>

	h3 {
		color: blue;
	}

</style>