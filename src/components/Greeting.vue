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
            greeting: 'Hi',
            description: 'This is my site'
        }
    }
}
</script>

<style>

</style>
