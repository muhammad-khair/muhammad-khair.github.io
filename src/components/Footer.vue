<template>
    <div class="navbar navbar-expand-lg navbar-dark bg-dark" id="contact">
        <div>
            <h3 class="text-white bg-dark">Contact</h3>
        </div>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav ml-auto">
                <li class="nav-item" v-for="contact in contacts" :key="contact">
                    <a class="nav-link" :href="contact.link" target="_blank" rel="noopener noreferrer">{{ contact.name }}</a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Footer',
    data() {
        return {
            contacts: [
                {name: 'Email', link: '#mailto:muhammad_khair@outlook.com', image:''},
                {name: 'LinkedIn', link: 'https://www.linkedin.com/in/muhammadkhair-binabdulrashid/', image:''},
                {name: 'GitHub', link: 'https://github.com/muhammad-khair', image:''},
                {name: 'Resume', link: '', image:''} // todo
            ]
        }
    }
}
</script>

<style>

</style>
