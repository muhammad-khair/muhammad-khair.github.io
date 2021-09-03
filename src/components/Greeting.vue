<template>
    <div id="greeting">
        <h1>{{ greeting }}</h1>
        <p>{{ description }}</p>
    </div>
</template>

<script>
export default {
    name: 'Greeting',
    data() {
        return {
            greeting: 'Welcome!',
            description: 'My name is Muhammad Khair. I am a Computer Science Student in NUS.',
            sites: [
                {name: 'GitHub', label: 'muhammad-khair', image: ''},
                {name: 'LinkedIn', label: '', image: ''}
            ]
        }
    }
}
</script>

<style>

</style>
