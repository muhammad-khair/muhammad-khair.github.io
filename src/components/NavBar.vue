<template>
    <nav id="header" class="navbar navbar-expand-lg navbar-dark bg-dark">
        <a class="navbar-brand mb-0 h1" href="#">
            <img :src="logo" @click="toggleTheme" width="40" height="40" alt="">
            <span id="site-name">{{ title }}</span>
        </a>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav ml-auto">
                <li class="nav-item">
                    <button type="button" class="btn btn-dark" v-if="darkMode" @click="toggleTheme">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-moon-stars-fill" viewBox="0 0 16 16">
                            <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z"/>
                            <path d="M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.734 1.734 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.734 1.734 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.734 1.734 0 0 0 1.097-1.097l.387-1.162zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L13.863.1z"/>
                        </svg>
                    </button>
                    <button type="button" class="btn btn-dark" v-else @click="toggleTheme">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-sun-fill" viewBox="0 0 16 16">
                            <path d="M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"/>
                        </svg>
                    </button>
                </li>
                <li v-for="nav in navButtons" :key="nav" class="nav-item">
                    <a class="nav-link" :href="nav.link">{{ nav.name }}</a>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>
import image from '../assets/logo.png';

export default {
    name: "NavBar",
    data() {
        return {
            title: 'Muhammad Khair',
            logo: image, 
            darkMode: false,
            navButtons: [
                {name: 'Home', link: '#'},
                {name: 'Skills', link: '#skills'},
                {name: 'Experience', link: '#experience'},
                {name: 'Projects', link: '#projects'},
                {name: 'Contact', link: '#contact'}
            ]
        }
    },
    methods: {
        toggleTheme() {
            this.darkMode = !(this.darkMode);

            if (this.darkMode) {
                document.body.style.color = 'whitesmoke';
                document.body.style.backgroundColor = '#1E1E24';
                [...document.getElementsByClassName('block')].forEach(
                    (elem) => {
                        elem.style.backgroundColor = '#343a40';
                    }
                    // #2c3e50 #1E1E24 #343a40
                );

            } else {
                document.body.style.color = '#2c3e50';
                document.body.style.backgroundColor = 'whitesmoke'; 
                [...document.getElementsByClassName('block')].forEach(
                    (elem) => {
                        elem.style.backgroundColor = '#F0EFF4';
                    }
                );
                
            }
        }
    }
}
</script>

<style>
#site-name {
    margin-left: 15px;
}
</style>
