<template>
    <div id="experience">
        <h1>{{ title }}</h1>
        <p>{{ message }}</p>
        <div v-for="job in jobs" :key="job">
            <div class="exp-group block">
                <img :src="job.image" height="100" alt="">
                <h2>{{ job.name }}</h2>
                <h4>{{ job.title }}</h4>
                <h5>{{ job.timeline }}</h5>
                <p>{{ job.description }}</p>
                <div class="d-flex flex-wrap justify-content-around spacing">
                    <div v-for="tool in job.tools" :key="tool">
                        <img :src="tool.image" height="80" alt="">
                        <h5>{{ tool.name }}</h5>
                    </div>
                </div>
            </div>
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

const message = 'Here are some of the places where I build my experience on.';
const taigerMessage = "Developed a new admin configuration feature in Omnitive's Semantics Search Engine - "
        + "from refining the epic's user stories to proposing and implementing the required RESTful API "
        + "endpoints, database structures and services. Automation scripts were also made to improve update "
        + "and cross-dependencies between the numerours repositories.";

const nusMessage = "Taught functional programming constructs, fundamental data structures, basics in "
        + "algorithmic design, common sorting algorithms as well as object-oriented programming.";

const innovationMessage = "Introduced fun and engaging programming lessons out of their academic curriculum, "
        + "this project aims to educate and instil in youths an appreciation of information technology.";

export default {
    name: 'Experience',
    data() {
        return {
            title: 'Experience',
            message: message,
            jobs: [
                {
                    name: 'TAIGER',
                    title: 'Sofware Engineering Intern',
                    timeline: 'May 2021 to Aug 2021',
                    description: taigerMessage,
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
                    description: nusMessage,
                    image: nus,
                    tools: [
                        {name: 'Python', image: python}
                    ]
                },
                {
                    name: 'Project Innovation',
                    title: 'Project Lead [Volunteer]',
                    timeline: 'Jan 2020 to Dec 2020',
                    description: innovationMessage,
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
.exp-group {
    margin: 30px;
    padding: 30px;
    border-radius: 30px;
}
</style>
