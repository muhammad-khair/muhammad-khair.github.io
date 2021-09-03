<template>
    <div id="experience">
        <h1>Experience</h1>
        <ul>
            <li v-for="job in jobs" :key="job">
                <h3>{{ job.name }}</h3>
                <p>{{ job.desc }}</p>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'Experience',
    data() {
        return {
            jobs: [
                {name: 'TAIGER', desc: 'backend intern', image:''},
                {name: 'NUS', desc: 'ta for cs1010e', image:''},
                {name: 'Project Innovation (SOGP)', desc: 'project lead for cip', image:''}
            ]
        }
    }
}
</script>

<style>

</style>
