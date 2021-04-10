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
		counter(value) {
			if(value > 50) {
				const that = this;

				setTimeout(() => {
					that.counter = 0;
				}, 2000);
			}
		},

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
		fullName() {
			if(this.name === '' || this.lastName === '') {
				return '';
			}
			return this.name + ' ' + this.lastName;
		},
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