<template>
<div style="padding-bottom:100px;" class="bg-1">
    <div class="container" v-for="list in news" style="margin-bottom:25px">
        <div class="row">
            <div class="col-md-4 col-12" style="padding-left:0px;padding-right:0px">
                <img class="img-fluid" v-bind:src="require('../assets/home/' +list.image)" alt="" style="width:100%;height:100%" />
            </div>
            <div class="col-md-8 col-12 text-left" style="padding:25px">
                <h1 class="text-left">{{list.header}}</h1>
                <p>
                    {{list.desc}}
                </p>
                <div v-on:click="ondetail(list)" style="position: absolute;top: 85%;right: 5%; font-weight:bold;">Read more...</div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: 'News',
    data() {
        return {
            news: [{
                    id: 1,
                    image: "berita 1.jpg",
                    header: "Pernah Jackpot dijalur pendakian?",
                    desc: " Acute Mountain Sickness (AMS) Penyakit ketinggian, dimana suatu kondisi yang terjadi saat tubuh tidak mendapatkan oksigen yang cukup saat melakukan pendakian"

                },
                {
                    id: 2,
                    image: "berita 2.jpg",
                    header: "Innalilahi kabar duka datang dari dunia dunia pendakian",
                    desc: "Pendaki meninggal atas nama Sumardi, alamat dusun Bojong, desa Giyanti, kecamatan Candimulyo, Magelang. Diduga meninggal dunia karena hipotermia di Pos 5"

                },
                {
                    id: 3,
                    image: "berita 3.jpg",
                    header: "Gunung Slamet Waspada",
                    desc: "Gunung Slamet hingga saat ini masih berstatus waspada, sehingga jalur pendakian ke gunung tertinggi di Jawa Tengah itu belum dibuka untuk umum.Hal tersebut setidaknya ..."

                },
            ]
        }
    },
    mounted() {},
    methods: {
        ondetail(id) {
            this.$router.push({ name: 'Newsdetail', params: { data: id } })
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
.bg-1 {
    background: #F0EFDB;
}

h1 {
    padding-bottom: 1rem;
    padding-top: 1rem;
    font-weight: bolder;
    font-size: 2rem;
}

.c-img {
    width: 70%;
    padding: 15px;
}

.ptb {
    padding-bottom: 1rem;
}

.min-max {
    min-height: 150px;
    max-height: 150px;
}

.mb-0 {
    margin-bottom: 0px
}

.stock {
    background: #1D434E;
    color: white;
    padding: 5px 10px;
    border-radius: 100%;
}

.container {
    border: solid 1px lightgray;
    background: lightgray;
    border-radius: 10px;
}
</style>
