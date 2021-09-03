<template>
    <div id="skills">
        <h1>Skills</h1>
        <div v-for="skill in skills" :key="skill">
            <h3>{{ skill.name }}</h3>
            <p>{{ skill.level }}</p>
        </div>
    </div>
</template>

<script>
// todo import relevant tool images .png

export default {
    name: 'Skills',
    data() {
        return {
            skills: [
                {name: 'Python', level: 'Proficient', image:''},
                {name: 'Java', level: 'Proficient', image:''},
                {name: 'SQL', level: 'Basic', image:''},
                {name: 'Javascript', level: 'Basic', image:''},
                {name: 'Bash', level: 'Basic', image:''}
            ]
        }
    }
}
</script>

<style>

</style>
