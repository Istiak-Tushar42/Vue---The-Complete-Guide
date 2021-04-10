const app = Vue.createApp({
	data() {
		return {
			enteredGoalValue: '',
			goals: []
		};
	}, // v-if, v-else and v-else-if

	methods: {
		addGoal() {
			this.goals.push(this.enteredGoalValue);
		}
	}
});

app.mount('#user-goals');