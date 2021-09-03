<template>
    <div id="skills">
        <h1>Skills</h1>
        <p>Here are some of the tools that I use most often</p>
        <br>
        <div class="d-flex flex-wrap justify-content-around">
            <div v-for="skill in skills" :key="skill">
                <img :src="skill.image" height="80" alt="">
                <h3>{{ skill.name }}</h3>
                <p>{{ skill.level }}</p>
            </div>
        </div>
    </div>
</template>

<script>
import python from '../assets/images/python.png';
import java from '../assets/images/java.png';
import javascript from '../assets/images/javascript.png';
import html from '../assets/images/html.png';
import css from '../assets/images/css.png';
import postgresql from '../assets/images/postgresql.png';

export default {
    name: 'Skills',
    data() {
        return {
            skills: [
                {name: 'Python', level: 'Proficient', image: python},
                {name: 'Java', level: 'Proficient', image: java},
                {name: 'postgreSQL', level: 'Basic', image: postgresql},
                {name: 'Javascript', level: 'Basic', image: javascript},
                {name: 'HTML', level: 'Basic', image: html},
                {name: 'CSS', level: 'Basic', image: css}
            ]
        }
    }
}
</script>

<style>

</style>
