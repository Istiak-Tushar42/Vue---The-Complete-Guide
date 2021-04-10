const app = Vue.createApp({
	data() {
		return {
			counter: 0,
			name: '',
			confirmedName: '',
			lastName: '',
			// fullname: '',
		};
	},

	watch: {
		// name(value) {
		// 	if(value === '') {
		// 		this.fullname = '';
		// 	} else {
		// 		this.fullname = value + ' ' + this.lastName;
		// 	}
		// },

		// lastName(value) {
		// 	if(value === '') {
		// 		this.fullname = '';
		// 	} else {
		// 		this.fullname = this.name + ' ' + value;
		// 	}
		// }
	},

	computed: {
		// fullName() {
		// 	if(this.name === '') {
		// 		return '';
		// 	}
		// 	return this.name + ' ' + 'Tushar';
		// }
	},

	methods: {
		add(num) {
			this.counter += num;
		},

		reduce() {
			this.counter--
		},
		
		setName(event, lastName) {
			// this.name = event.target.value + ' ' + lastName;
			this.name = event.target.value;
		},

		confirmInput() {
			this.confirmedName = this.name;
		},

		submitForm(event) {
			// event.preventDefault();
		},

		resetInput() {
			// document.querySelector('input').value = '';

			this.name = '';
		},

		outputFullName() {
			if(this.name === '') {
				return '';
			} else {
				return this.name + ' ' + 'Tushar';
			}
		},
	}
});

app.mount('#events');