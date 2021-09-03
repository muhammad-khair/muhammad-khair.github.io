<template>
    <div class="navbar navbar-expand-lg navbar-light bg-light" id="contact">
        <div>
            <h3 style="text-align: center;">Let's connect!</h3>
        </div>
        <div class="nav-item" v-for="contact in contacts" :key="contact">
            <a class="nav-link" :href="contact.link" target="_blank" rel="noopener noreferrer">{{ contact.name }}</a>
        </div>
        <a href="#" class="float-right">Jump back to top</a>
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
                {name: 'Resume', link: '#contact', image:''} // todo
            ]
        }
    }
}
</script>

<style>

</style>
