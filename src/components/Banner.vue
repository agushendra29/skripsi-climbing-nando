<template>
<div>
    <img src="@/assets/logoslamet-removebg-preview.png" style="z-index:10;position: absolute;left: 2%;top: 2%;width: 15%;">
    <div>
        <b-carousel id="carousel-fade" style="text-shadow: 0px 0px 2px #000" fade indicators img-width="1024" img-height="480">
            <b-carousel-slide>
                <template #img>
                    <img style="width:100%;height:650px" src="@/assets/home/gambar 1.jpg" alt="image slot">
                </template>
            </b-carousel-slide>
            <b-carousel-slide>
                <template #img>
                    <img style="width:100%;height:650px" src="@/assets/home/gambar 2.jpg" alt="image slot">
                </template>
            </b-carousel-slide>
            <b-carousel-slide>
                <template #img>
                    <img style="width:100%;height:650px" src="@/assets/home/gambar 3.jpg" alt="image slot">
                </template>
            </b-carousel-slide>
        </b-carousel>
    </div>
    <b-navbar toggleable type="dark" variant="dark">
        <b-navbar-toggle target="navbar-toggle-collapse">
            <template #default="{ expanded }">
                <b-icon v-if="expanded" icon="chevron-bar-up"></b-icon>
                <b-icon v-else icon="chevron-bar-down"></b-icon>
            </template>
        </b-navbar-toggle>

        <b-collapse id="navbar-toggle-collapse" is-nav>
            <b-navbar-nav class="ml-auto">
                <b-nav-item href="./#/">HOME</b-nav-item>
                <b-nav-item href="./#/sop">SOP</b-nav-item>
                <b-nav-item href="./#/rute">RUTE</b-nav-item>
                <b-nav-item href="./#/register">REGISTER</b-nav-item>
                <b-nav-item href="./#/kodebooking">KODE BOOKING</b-nav-item>
            </b-navbar-nav>
        </b-collapse>
    </b-navbar>

</div>
</template>

<script>
export default {
    name: 'Banner',
    data() {
        return {}
    },
    mounted() {},
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style>
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
