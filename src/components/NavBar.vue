<template>
    <nav id="header" class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand mb-0 h1" href="#">
            <img :src="logo" width="20" height="20" alt="">
            {{ name }}
        </a>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav">
                <li v-for="nav in navButtons" :key="nav" class="nav-item">
                    <a class="nav-link" :href="nav.link">{{ nav.name }}</a>
                </li>
                <li class="nav-item">
                    <button type="button" class="btn btn-dark">Toggle Mode</button>
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
            name: 'Muhammad Khair',
            logo: image, 
            navButtons: [
                {name: 'Greeting', link: '#greeting'},
                {name: 'Skills', link: '#skills'},
                {name: 'Experience', link: '#experience'},
                {name: 'Projects', link: '#projects'},
                {name: 'Contact', link: '#contact'}
            ]
        }
    }
}
</script>

<style>

</style>
