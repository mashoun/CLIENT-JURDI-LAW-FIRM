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
            useremail: '',

            // MODAL 
            modalId: true,
            modalTitle: '',
            modalBody: '',
            tab: 'Music',
            geoCount: 0


        }
    },
    methods: {
        unGeoBlock() {
            if (this.geoCount == 5) this.geo = false
            else this.geoCount++;


        },

        encode(x) {
            return encodeURIComponent(x)
        },
        setTab(t) {
            this.tab = t.title
            this.modalId = t.title
            this.modalBody = t.description
            this.modalTitle = t.title
        }
    },
    mounted() {

        // GEO BLOCKING
        fetch('https://api.ipregistry.co/?key=x0t2kp1nt9cpfhqp').then(res => res.json()).then(res => {
            console.log(res)
            this.country = res.location.country.code
            console.log(this.country)
            if (this.country == 'US') {
                this.geo = true
            }
        })

        this.spinner = true
        fetch(this.api).then(res => res.json()).then(res => {
            // console.log(res)

            this.profile = res
            this.spinner = false
        }).catch(err => {
            alert('Weak network please refresh the page !')
        })
    }
})

app.component('my-nav', {
    template:
        /*html*/
        `
    
    <header
        class="w-100 position-fixed top-0 start-0  d-flex justify-content-between align-items-center p-4 shadow text-light">
        <div class="d-flex gap-3 align-items-center">
            <i class="bi bi-grid-fill menu fs-1 point" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample"></i>
            <a href="./index.html">
                <img src="assets/img/logo.png" alt="Jurdi Logo"
                    class="img-fluid rounded" width="120" height="25">
            </a>
        </div>
        <!-- <h1 class="fs-1 cin  point"><a href="#" class="text-light">Jurdi Law</a></h1> -->
        <nav class="justify-content-evenly align-items-center gap-5">
            <a href="./index.html" class="fs-6">Home</a>
            <a href="./team.html" class="fs-6">Our Team</a>
            <a href="./terms.html" class="fs-6">Terms of Use</a>
            <a href="./privacy policy.html" class="fs-6">Privacy Policy</a>
            <a :href="profile.linkedin" class="fs-6">LinkedIn</a>
            <a href="#Contact" class="fs-6">Contact</a>
            <div>
                <a :href="profile.whatsapp" class="btn btn-success px-3">
                <i class="bi bi-whatsapp me-2 fs-6 text-light"></i> Whatsapp
                </a>
            </div>
        </nav>
        <a :href="profile.whatsapp" class="menu">
            <img src="assets/img/wa.png" class="img-fluid" width="30" height="30" alt="Contact by Whatsapp">
        </a>



        <div class="w-85 offcanvas offcanvas-start bg-dark-x" tabindex="-1" id="offcanvasExample"
            aria-labelledby="offcanvasExampleLabel">
            <div class="offcanvas-header">
                <h5 class="offcanvas-title fs-5 text-light cin" id="offcanvasExampleLabel">Jurdi Law</h5>
                <i class="bi bi-arrow-left fs-3" data-bs-dismiss="offcanvas" aria-label="Close"></i>
            </div>
            <div class="offcanvas-body">
                <div class="text-center text-grey-2 fs-4">
                    {{profile.bio}}
                </div>
                <div class="fs-5 d-flex justify-content-evenly align-items-center gap-3 my-4 media-links">
                
                    <a :href="'mailTo:'+profile.email1"> <i class="bi bi-envelope"></i></a>
                    <a :href="profile.whatsapp"><i class="bi bi-whatsapp"></i></a>
                    <a :href="profile.linkedin"> <i class="bi bi-linkedin"></i></a>
                </div>
                <hr>
                <section class="d-flex flex-column justify-content-evenly align-items-center gap-3 my-4 ls-2">
                    <a href="./index.html">Home</a>
                    <a href="./team.html">Our Team</a>

                    <a href="./privacy policy.html">Privacy Policy</a>
                    <a href="./terms.html">Terms of Use</a>
                    <span data-bs-dismiss="offcanvas" >
                    <a href="#Contact">Contact Us</a>
                    </span>
                   
                    <a :href="profile.whatsapp" class="btn btn-success px-3 w-100">
                    <i class="bi bi-whatsapp me-2 fs-6 text-light"></i> Whatsapp
                    </a>
                </section>

            </div>
        </div>
    </header>
    `,
    props: ['profile']
})

app.component('contact', {
    template:
        /*html */
        `
    
        <!-- Contact Section -->
        <h2 class="text-center text-grey-2 fs-2">Contact us</h2>
        <h5 class="fs-5 text-grey-1 text-center container my-3">
            {{profile.contactHeading}}
        </h5>
        <!-- ======= Contact Section ======= -->
        <section id="Contact" class="contact my-5">

            <div class="container">

                <div class="row gy-4">

                    <div class="col-lg-6">

                        <div class="row gy-4">
                        <div class="col-md-6" data-aos="fade-up" data-aos-delay="500">
                            <div class="info-box rounded shadow  glow-h point h-250px">
                                <i class="bi bi-telephone"></i>
                                <h3>Call Us</h3>
                                <p class="ls-2 fs-6"> <a :href="'tel:+'+profile.number1" class="text-grey-2">+{{profile.number1}}</a> <br>{{profile.number2}}</p>
                                <a :href="profile.whatsapp" class="btn btn-success w-100 mt-3"> <i class="bi bi-whatsapp me-2 fs-6 text-light"></i> Whatsapp</a>
                            </div>
                        </div>
                        <div class="col-md-6" data-aos="fade-up" data-aos-delay="700">
                            <div class="info-box rounded shadow  glow-h point h-250px">
                                <i class="bi bi-envelope"></i>
                                <h3>Email Us</h3>
                                <p class="ls-2 fs-6"> <a :href="'mailto:'+profile.email1" class="text-grey-2">{{profile.email1}}</a> </p>
                            </div>
                        </div>
                            <div class="col-md-6" data-aos="fade-up" data-aos-delay="100">
                            <div class="info-box rounded shadow  glow-h point h-250px">
                                <i class="bi bi-geo-alt"></i>
                                <h3>Address</h3>
                                <p class="fs-6"> {{profile.address1}} <br>{{profile.address2}}</p>
                            </div>
                        </div>
                        <div class="col-md-6" data-aos="fade-up" data-aos-delay="900">
                            <div class="info-box rounded shadow  glow-h point h-250px">
                                <i class="bi bi-clock"></i>
                                <h3>Open Hours</h3>
                                <p class="fs-6">{{profile.openDays}}<br>{{profile.openHours}}</p>
                            </div>
                        </div>
                        </div>

                    </div>

                    <div class="col-lg-6" data-aos="fade-up" data-aos-delay="700">
                        <form class="php-email-form  rounded shadow">
                            <div class="row gy-4">

                                <div class="col-md-6">
                                    <input v-model="username" type="text" name="name" class="form-control"
                                        placeholder="Your Name" required>
                                </div>

                                <div class="col-md-6 ">
                                    <input v-model="useremail" type="email" class="form-control" name="email"
                                        placeholder="Your Email" required>
                                </div>

                                <div class="col-md-12">
                                    <input v-model="subject" type="text" class="form-control" name="subject"
                                        placeholder="Subject" required>
                                </div>

                                <div class="col-md-12">
                                    <textarea v-model="message" class="form-control" name="message" rows="6"
                                        placeholder="Message" required></textarea>
                                </div>

                                <div class="col-md-12 text-center">

                                <a class="px-5 send-msg btn btn-primary mt-3"
                                :href="link">Send
                                Message</a>
                                </div>


                            </div>
                        </form>

                    </div>

                </div>

            </div>

        </section><!-- End Contact Section -->
    `,
    data() {
        return {


            // send a message form

            message: '',
            subject: '',
            username: '',
            useremail: '',
        }
    },
    computed: {
        link() {
            return `mailto:${this.profile.email2}?subject=${this.encode(this.subject)}&body=${this.encode('' + this.username + ' | ' + this.useremail + '\n\n\n' + this.message)}`
        }
    },
    methods: {

        encode(x) {
            return encodeURIComponent(x)
        },
    },
    props: ['profile']
})

app.component('my-footer', {
    template:
        /*html */
        `
    
    <footer class=" w-100 py-5">

        <center>
            <img src="assets/img/logo.png" alt="JURDI LOGO" class="img-fluid"
                width="150" height="25" data-aos="zoom-in-up" data-aos-duration="1000">

            <div class="d-flex justify-content-evenly align-items-center gap-3 my-5 fs-3 text-grey-2 media-links w-75">
                <a :href="profile.whatsapp" data-aos="zoom-in-up" data-aos-duration="1000" data-aos-delay="50"><i
                        class="bi bi-whatsapp"></i></a>
                <a :href="'mailTo:'+profile.email1" data-aos="zoom-in-up" data-aos-duration="1000" data-aos-delay="800">
                    <i class="bi bi-envelope"></i></a>
                <a :href="profile.linkedin" data-aos="zoom-in-up" data-aos-duration="1000" data-aos-delay="400"> <i
                        class="bi bi-linkedin"></i></a>
                <!-- <a :href="profile.twitter" data-aos="zoom-in-up" data-aos-duration="1000" data-aos-delay="1000"><i
                        class="bi bi-twitter"></i></a> -->
            </div>

        </center>
        <!-- <hr class="w-75 mx-auto"> -->
        <hr>
        <h6 title="Developed By Lebancode.com" ondblclick="alert('This site (version:1.2) was developed by lebancode.com')"
            class="point fs-6 text-grey-1 text-center mb-0 mt-4 no-select">All Rights Reserved</h6>

    </footer>
    `,
    props: ['profile']
})

app.component('geo', {
    template:
        /*html */
        `
    <center class="my-5">
        <img  src="assets/img/logo.png" alt="Jurdi Logo"
            class="img-fluid rounded" width="120">
        <!-- <h1 class="text-center text-grey-2 my-5">Welcome to JURDI Law </h1> -->
        <p class="text-center text-grey-2 my-5 fs-6 no-select">Unfortunately JURDI Law Does Not Provide Services In Your
            Jurisdiction</p>
    </center>
    `,
})
app.mount('#app')