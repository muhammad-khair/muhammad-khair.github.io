<template>
    <div>
        <NavBar />
        <Content />
        <Footer />
    </div>
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
    text-align: center;
    color: #2c3e50;
    background-color: whitesmoke;
}
.spacing > div {
    margin: 10px;
}
.block {
    background-color: #F0EFF4;
}
</style>
