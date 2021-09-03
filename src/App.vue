<template>
    <NavBar />
    <Content />
    <Footer />
</template>

<script>
import NavBar from './components/NavBar';
import Content from './components/Content';
import Footer from './components/Footer';

export default {
    name: 'App',
    components: { 
        NavBar,
        Content,
        Footer
    }
};
</script>

<style>
body {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}
</style>
