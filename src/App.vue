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
    font-size: 18px;
}
.spacing > div {
    margin: 10px;
}
.block {
    background-color: #F0EFF4;
}
.split {
    margin-right: 5px;
    margin-left: 5px;
}
.wide-split {
    margin-right: 15px;
    margin-left: 15px;
}
.paragraph {
    width: 70%;
    margin: auto;
}
</style>
