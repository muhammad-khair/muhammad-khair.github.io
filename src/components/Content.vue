<template>
    <div class="content">
        <Greeting />
        <Skills />
        <Experience />
        <Projects />
    </div>
</template>

<script>
import Greeting from './Greeting';
import Skills from './Skills';
import Experience from './Experience';
import Projects from './Projects';

export default {
    name: 'Content',
    components: { 
        Greeting,
        Skills,
        Experience,
        Projects
    }
}
</script>

<style>

</style>
