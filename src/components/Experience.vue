<template>
    <div id="experience">
        <h1>Experience</h1>
        <div v-for="job in jobs" :key="job">
            <h3>{{ job.name }}</h3>
            <h4>{{ job.title }}</h4>
            <p>{{ job.timeline }}</p>
            <p>{{ job.description }}</p>
            <p>Worked with:</p>
            <div v-for="tool in job.tools" :key="tool">
                <h5>{{ tool.name }}</h5>
                <p>{{ tool.image }}</p>
            </div>
        </div>
    </div>
</template>

<script>
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
                    image: '',
                    tools: [
                        {name: 'Java', image: ''},
                        {name: 'SpringBoot', image: ''},
                        {name: 'ELK Stack', image: ''},
                        {name: 'Bash', image: ''},
                        {name: 'Git', image: ''},
                        {name: 'Postman', image: ''},
                        {name: 'JMeter', image: ''},
                        {name: 'Tomcat', image: ''},
                        {name: 'mySQL', image: ''},
                        {name: 'msSQL', image: ''}
                    ]
                },
                {
                    name: 'NUS',
                    title: 'TA for Programming Methodology with Python, CS1010E',
                    timeline: 'Jan 2021 to May 2021',
                    description: 'Taught programming methodologies.',
                    image: '',
                    tools: [
                        {name: 'Python', image: ''}
                    ]
                },
                {
                    name: 'Project Innovation (SOGP)',
                    title: 'Project Lead',
                    timeline: 'Jan 2020 to Dec 2020',
                    description: 'Lead in a CIP that teaches youth visual programming to inspire them about the tech domain.',
                    image: '',
                    tools: [
                        {name: 'Scratch', image: ''}
                    ]
                }
            ]
        }
    }
}
</script>

<style>

</style>
