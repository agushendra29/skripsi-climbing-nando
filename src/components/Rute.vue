<template>
<div>
    <Banner></Banner>
    <div style="background:#F6F6F6"><img src="../assets/rute pendakian/peta slamet.jpg"></div>
    <div style="padding-bottom:100px;" class="bg-1">
        <div class="container" v-for="list in post">
        <span class="span-h1">{{list.header}}</span>
            <p style="font-size:14px">{{list.desc}}</p>
        </div>
    </div>
</div>
</template>

<script>
import Banner from './Banner'
export default {
    name: 'Rute',
    components: {
        Banner
    },
    data() {
        return {
            post: [{
                    header: "POS 1 - POS 2 (2256 MDPL)",
                    desc: "Menuju POS 2 akan di mulai dengan trek yang langsung menanjak yang akan membuat lelah lutuh dan bahu para pendaki, tapi trek nya tidak sepanjang dari basecampm ke POS 1"
                },
                {
                    header: "POS 2 - POS 3 (2510 MDPL)",
                    desc: "Para pendaki masih akan melalui perhutanan Gunung Slamet, dengan trek yang cukup nanjak dan akar-akar yang membantu pijakan kaki di setiap tanjakan"
                },
                {
                    header: "POS 3 - POS 4 (2688 MDPL)",
                    desc: "Menuju POS 4 trek nya tidak terlalu nanjak, karena tenaga sudah habis di pos-pos sebelumnya sehingga terasa lelah dan jauh untuk menuju POS 4"
                },
                {
                    header: "POS 4 - POS 5 (2795 MDPL)",
                    desc: "Para pendaki akan melalui gerbang samarantu, sebuah gerbang dua pohon besar, yang konon katanya kita masuk ke dunia ghaib, memang di percaya oleh masyarakat sekitar POS 4 memiliki cerita horor Gunung Slamet. Untuk menuju POS 5 trek nya sedikit nanjak dan tidak terlalu panjang, sehingga hanya membutuhkan waktu yang tidak terlalu lama"
                },
                {
                    header: "POS 5 - POS 6 (2909 MDPL)",
                    desc: "Di POS 5 para pendaki bisa mengisi ulang kembali air, dengan membutuhkan waktu perjalan ke mata air selama 30 Menit. Menuju POS 6 trek nya masih sama seperti sebelumnya, jalanan yang teduh karena pepohonan yang lebat di setiap jalur"
                },
                {
                    header: "POS 6 - POS 7 (3040 MDPL)",
                    desc: "Mulai dari POS 6, POS 7, POS 8 para pendaki sudah bisa memasang tendanya dan bermalam. trek menuju POS 7 agak sedikit nanjak dan lumayan cukup panjang"
                },
                {
                    header: "POS 7 - POS 8 (3092 MDPL)",
                    desc: "Para pendaki akan melalui hutan bekas kebakaran, sehingga suasana nya agak sedikit gersang, dan trek nya pun cukup santai untuk lutut dan bahu"
                },
                {
                    header: "POS 8 - POS 9 (3172 MDPL)",
                    desc: "Menuju POS 9 para pendaki akan melalui batas vegetasi hutan, dimana trek pendakian sudah tidak terhalang lagi oleh pepohonan, dan jalan mulai ada bebatuan"
                },
                {
                    header: "POS 9 - Puncak (3428 MDPL)",
                    desc: "Para pendaki akan melalui trek yang terus menanjak dengan konstur jalan bebatuan yang menumpuk dengan kemiringan sekitar 45 derajat"
                }
            ]
        }
    },
    mounted() {},
    methods: {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
.bg-1 {
    background: #F0EFDB;
}

h1 {
    font-weight: bold !important;
    font-size: 1.5rem;
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
    text-align: left;
    border-radius: 10px;
    padding-top: 5px;
}

.span-header {
    font-size: 16px;
    font-weight: bold;
}

.span-h1 {
    font-size: 14px;
    font-weight: bold;
}
</style>
