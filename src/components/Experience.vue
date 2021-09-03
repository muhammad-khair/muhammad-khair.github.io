<template>
    <div id="experience">
        <h1>Experience</h1>
        <p>Here are some of the places where I build my experience on.</p>
        <br>
        <div v-for="job in jobs" :key="job">
            <img :src="job.image" height="100" alt="">
            <h3>{{ job.name }}</h3>
            <h4>{{ job.title }}</h4>
            <p>{{ job.timeline }}</p>
            <p>{{ job.description }}</p>
            <div class="d-flex flex-wrap justify-content-around">
                <div v-for="tool in job.tools" :key="tool">
                    <img :src="tool.image" height="75" alt="">
                    <h5>{{ tool.name }}</h5>
                </div>
            </div>
            <br>
        </div>
    </div>
</template>

<script>
import taiger from '../assets/images/taiger.png';
import nus from '../assets/images/nus.png';
import innovation from '../assets/images/innovation.png';

import scratch from '../assets/images/scratch.png';
import python from '../assets/images/python.png';
import tomcat from '../assets/images/tomcat.png';
import postman from '../assets/images/postman.png';
import mysql from '../assets/images/mysql.png';
import mssql from '../assets/images/mssql.png';
import git from '../assets/images/git.png';
import java from '../assets/images/java.png';
import elasticsearch from '../assets/images/elasticsearch.png';
import bash from '../assets/images/bash.png';
import jmeter from '../assets/images/jmeter.png';
import springboot from '../assets/images/springboot.png';

export default {
    name: 'Experience',
    data() {
        return {
            jobs: [
                {
                    name: 'TAIGER',
                    title: 'Sofware Engineering Intern',
                    timeline: 'May 2021 to Aug 2021',
                    description: 'Worked under product team.',
                    image: taiger,
                    tools: [
                        {name: 'Java', image: java},
                        {name: 'SpringBoot', image: springboot},
                        {name: 'ElasticSearch', image: elasticsearch},
                        {name: 'Bash', image: bash},
                        {name: 'Git', image: git},
                        {name: 'Postman', image: postman},
                        {name: 'JMeter', image: jmeter},
                        {name: 'Tomcat', image: tomcat},
                        {name: 'mySQL', image: mysql},
                        {name: 'msSQL', image: mssql}
                    ]
                },
                {
                    name: 'NUS',
                    title: 'Part Time Teaching Assistant',
                    timeline: 'Jan 2021 to May 2021',
                    description: 'Taught programming methodologies in CS1010E using Python.',
                    image: nus,
                    tools: [
                        {name: 'Python', image: python}
                    ]
                },
                {
                    name: 'Project Innovation',
                    title: 'Project Lead [Volunteering]',
                    timeline: 'Jan 2020 to Dec 2020',
                    description: 'Lead in a CIP that teaches youth visual programming to ' 
                        + 'inspire them about the tech domain.',
                    image: innovation,
                    tools: [
                        {name: 'Scratch', image: scratch}
                    ]
                }
            ]
        }
    }
}
</script>

<style>

</style>
