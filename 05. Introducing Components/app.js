const app = Vue.createApp({
    data() {
        return {
            friends: [
                {
                    id: 'nishi',
                    name: 'Rubaiyat Jahan Nishi',
                    phone: '01234 5678 991',
                    email: 'nishi@localhost.com'
                },
                {
                    id: 'ratul',
                    name: 'Abdullah Al Mamun Ratul',
                    phone: '0123 5678 991',
                    email: 'ratul@localhost.com'
                },
                {
                    id: 'mahadi',
                    name: 'Mahadi Hasan',
                    phone: '012 5678 991',
                    email: 'mahadi@localhost.com'
                },
            ],
        };
    }
});

app.component('friend-contact', {
    template: `
        <li>
            <h2>{{ friend.name }}</h2>
            <button @click="toggleDetails()">{{ detailsAreVisible ? 'Hide' : 'Show' }} Details</button>
            <ul v-if="detailsAreVisible">
                <li><strong>Phone:</strong> {{ friend.phone }}</li>
                <li><strong>Email:</strong> {{ friend.email }}</li>
            </ul>
        </li>
    `,

    data() {
        return {
            detailsAreVisible: false,
            friend: {
                id: 'nishi',
                name: 'Rubaiyat Jahan Nishi',
                phone: '01234 5678 991',
                email: 'nishi@localhost.com'
            },
        }
    },

    methods: {
        toggleDetails(id) {
            this.detailsAreVisible = !this.detailsAreVisible;
        }
    }
});

app.mount('#app');