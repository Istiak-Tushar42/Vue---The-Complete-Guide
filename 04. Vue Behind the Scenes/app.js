const app = Vue.createApp({
    data() {
        return {
            currentUserInput: '',
            message: 'Vue is great!',
        };
    },

    methods: {
        saveInput(event) {
            this.currentUserInput = event.target.value;
        },

        setText() {
            // this.message = this.currentUserInput;
            this.message = this.$refs.userText.value;
        },
    },

    // VUE APP LIFECYCLE HOOKS
    // CREATION LIFECYCLE
    beforeCreate() {
        console.log('beforeCreate()');
    },

    created() {
        console.log('created()');
    },

    beforeMount() {
        console.log('beforeMount()');
    },

    mounted() {
        console.log('mounted()');
    },

    // DATA CHANGES LIFECYCLE HOOKS
    beforeUpdate() {
        console.log('beforeUpdate()');
    },

    updated() {
        console.log('updated()');
    },

    // UNMOUNT LIFECYCLE HOOKS
    beforeUnmount() {
        console.log('beforeUnmount()');
    },

    unmount() {
        console.log('unmount()');
    }
});

app.mount('#app');

// setTimeout(function() {
//     app.unmount();
// }, 3000);