const app = Vue.createApp({
    data() {
        return {
            api: 'https://script.google.com/macros/s/AKfycbzWzUbnlCbmeR3xsGOT_TFYWTW4eCzwLisP2C6Lfxy30WDDpKoBYJP44_DCHdrqTcP-Qg/exec',
            country: '',
            geo: false,
            profile: '',
            spinner: false,

            // send a message form
            message: '',
            subject: '',
            username: '',
            useremail: ''
        }
    },
    methods: {

        encode(x) {
            return encodeURIComponent(x)
        },
    },
    mounted() {
        // fetch('https://api.ipregistry.co/?key=x0t2kp1nt9cpfhqp').then(res => res.json()).then(res => {
        //     console.log(res)
        //     this.country = res.location.country.code
        //     console.log(this.country)
        //     if(this.country == 'US') this.geo = true
        // })
        this.spinner = true
        fetch(this.api).then(res => res.json()).then(res => {
            console.log(res)
            this.profile = res
            this.spinner = false
        }).catch(err => {
            alert('Weak network please refresh the page !')
        })
    }
})
app.mount('#app')