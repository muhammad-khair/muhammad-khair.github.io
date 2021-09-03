<template>
    <div id="skills">
        <h1>{{ title }}</h1>
        <p>{{ message }}</p>
        <div class="d-flex flex-wrap justify-content-around spacing">
            <div v-for="skill in skills" :key="skill" class="skill-group block">
                <img :src="skill.image" height="90" alt="">
                <h3>{{ skill.name }}</h3>
            </div>
        </div>
    </div>
    <br>
</template>

<script>
import python from '../assets/images/python.png';
import java from '../assets/images/java.png';
import javascript from '../assets/images/javascript.png';
import html from '../assets/images/html.png';
import css from '../assets/images/css.png';
import postgresql from '../assets/images/postgresql.png';

const message = 'Here are some of the tools that I use most often.';

export default {
    title: 'Skills',
    data() {
        return {
            title: 'Skills',
            message: message,
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
.skill-group {
    padding: 30px;
    border-radius: 30px;
}
</style>
