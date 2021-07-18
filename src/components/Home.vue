<template>
    <div>
        <Banner></Banner>
        <News></News>
    </div>
</template>

<script>
import News from './News'
import Banner from './Banner'
export default {
    components: {
        News,
        Banner
    },
    name: 'Home',
    data() {
        return {}
    },
    mounted() {},
    methods: {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
    font-weight: normal;
}

ul {
    list-style-type: none;
    padding: 0;
}

li {
    display: inline-block;
    margin: 0 10px;
}

a {
    color: #35495E;
}

* {
    box-sizing: border-box
}
</style>
