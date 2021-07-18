<template>
<div class="bg-1">
    <Banner></Banner>
    <h2 style="padding-top:1.5rem">{{header}}</h2>
    <div class="row text-center bg-1" style="padding:1.5rem;">
        <div class="col-md-5">
            <img :src="require('../assets/home/' +data.image)" style="width:100%">
        </div>
        <div class="col-md-7 text-left">
            <p>{{desc}}</p>
        </div>

    </div>
</div>
</template>

<script>
import Banner from './Banner'
export default {
    name: 'Newsdetail',
    components: {
        Banner
    },
    data() {
        return {
            data: {},
            desc: "",
            header: ""
        }
    },
    mounted() {
        this.data = this.$route.params.data
        if (this.data) {
            if (this.data.id == 1) {
                this.desc = `Mendaki gunung merupakan sebuah aktivitas di luar ruangan yang cukup populer bagi masyarakat Indonesia. 
                Bahkan aktivitas mendaki gunung seringkali dijadikan hobi yang rutin dilakukan oleh sebagian orang. 
                "Namun dalam mendaki gunung, kita juga harus memperhatikan kondisi tubuh kita, apakah layak untuk mendaki atau tidak. 
                Kenali juga berbagai penyakit yang nantinya bis a menyerang pada saat pendakian.
                Penyakit ini biasa disebut altitude illness atau penyakit ketinggian". 
                Gejala yang muncul biasanya berupa sakit kepala, mual, kehilangan nafsu makan, sesak nafas, tidur terganggu, dan lain sebagainya. 
                Solusi untuk mengatasi hal ini adalah pendaki harus tetap sadar dan tetap melakukan aktivitas ringan. 
                "Disarankan untuk tidak langsung tidur jika mengalami gejala tersebut," kata Rahman. Sementara AMS sedang, lanjut Rahman, akan menyerang pendaki jika gejala pada AMS rendah tidak teratasi dengan baik. Biasanya gejala yang muncul pada AMS sedang, pendaki akan merasakan sakit kepala parah, mual disertai muntah, penurunan kesadaran (ataksia), dan lain sebagainya. Solusi jika pendaki mengalami gejala-gejala tersebut, segeralah turun ke tempat yang lebih rendah untuk proses penyesuaian ketinggian atau aklimatisasi. 
                "Hal ini harus dilakukan untuk menghindari gejala ataksia mencapai titik puncaknya di mana si penderita tidak akan bisa berjalan dengan normal," ujar Rahman. Rahman melanjutkan, AMS berat terjadi ketika si penderita mengalami sesak nafas dan kehilangan 
                kesadaran total (penurunan status mental).
                Dalam kasus ini, pendaki tersebut sudah tidak sadarkan diri dan harus segera ditandu menuju tempat yang lebih rendah dan harus ditangani serius oleh petugas medis. "Sebenarnya untuk menghindari penyakit AMS cukup simpel. Pada saat mendaki, biasakan untuk berjalan sesuai ritme, tidak terburu-buru atau tergesa-gesa. Hal ini berguna bagi tubuh membiasakan ketinggian atau aklimatisasi. Sehingga kerja tubuh juga tetap berjalan dengan normal," saran Rahman.`
                this.header = `Penah jackpot di jalur pendakian ?`
            } else if (this.data.id == 2) {
                this.desc = `Seorang pendaki dilaporkan meninggal dunia di Pos 5 Gunung
                            Slamet, Kabupaten Purbalingga, Jawa Tengah, Senin (24/5/2021).
                            Korban bernama Sumardi (47) warga Dusun Bojong RT 1 RW 1,
                            Desa Giyanti, Kecamatan Candimulyo, Kabupaten Magelang. 
                            Korban melakukan pendakian bersama Azizul Bahtiar Wibowo 
                            (16), warga desa yang sama. "Keduanya melakukan registrasi di 
                            Basecamp Pendakian Pos Bambangan, Desa Kutabawa, 
                            Kecamatan Karangreja pada Sabtu (22/5/2021) pukul 10.00 WIB
                            dan langsung melakukan pendakian," kata Kapolsek Karangreja,
                            Iptu Catur Subagyo melalui rilis tertulis, Senin (24/5/2021) 
                            malam. 
                            Hasil pemeriksaan Inafis Polres Purbalingga dan dokter 
                            Puskesmas tidak ditemukan tanda penganiayaan. "Diduga 
                            penyebab korban meninggal dunia akibat mengalami hipotermia
                            saat mendaki gunung," ujarnya. 
                            Azizul, rekan pendakian korban mengatakan, korban sempat 
                            pingsan saat dalam perjalanan dari Pos 5 menuju Pos 6. Dia 
                            meminta tolong pendaki lain dan mengevakuasi korban turun 
                            hingga Pos 5. "Korban kemudian dibawa oleh pendaki lain ke 
                            Pos 5 sambil dibaringkan. Saat berada di Pos 5 dilakukan 
                            pengecekan nadi diketahui korban sudah meninggal dunia,
                            " terang Catur. Jenazah korban, kata Catur, telah dipulangkan ke 
                            kota asalnya di Magelang. Keluarga korban menerima kejadian 
                            sebagai musibah dan tidak mengizinkan otopsi. `;
                this.header = `Innalillahi, kabar duka datang dari dunia pendakian.`
            }
            else {
                this.desc = `
                Gunung Slamet hingga saat ini masih berstatus waspada, 
                sehingga jalur pendakian ke gunung tertinggi di Jawa Tengah 
                itu belum dibuka untuk umum. Hal tersebut setidaknya 
                diungkapkan Pusat Vulkanologi dan Mitigasi Bencana Geologi 
                (PVMBG) Pos Pengamatan Gunung Api (PGA) Slamet. Sukedi, 
                seorang petugas PVMBG Pos Pengamatan Gunung Api (PGA) 
                Slamet mengatakan, hingga kini, status Gunung Slamet masih 
                waspada karena memang dari indikasi data-data yang ada, 
                masih menunjukkan fluktuatif. Menurut dia, data-data yang 
                masih fluktuatif tersebut terutama pada kegempaan dan jarak 
                kemiringan (electronic distance meter/EDM) Gunung Slamet. 
                Dalam hal ini, kata dia, deformasi atau perubahan ukuran masih 
                terjadi pada gunung yang berada di wilayah Kabupaten 
                Banyumas, Purbalingga, Pemalang, Tegal, dan Brebes. "Makanya, 
                status masih bertahan di situ (waspada) meskipun telah 
                berlangsung hampir setahun. Oleh karena itu, teman-teman 
                yang ingin melakukan pendakian (di Gunung Slamet), itu belum 
                boleh, ditunda dulu, atau silakan cari gunung lain yang lebih 
                aman dan nyaman," katanya, Rabu (29/7/2020). 
                Dia mengakui intensitas embusan asap yang dikeluarkan 
                kawah di puncak Gunung Slamet hingga saat ini masih relatif 
                lemah. Sukedi mengatakan berdasarkan pengamatan dari Pos 
                PGA Slamet di Desa Gambuhan, Kecamatan Pulosari, Kabupaten 
                Pemalang, yang berjarak sekitar 8,5 kilometer sebelah utara dari 
                puncak Gunung Slamet, tinggi embusan asap pada Rabu (29/7) 
                pagi hingga siang berkisar 25-100 meter. 
                "Sementara ini embusan asap itu masih berwarna putih,
                belum sampai pekat. Mudah-mudahan jangan sampai pekat," 
                katanya. Seperti diwartakan, PVMBG meningkatkan status 
                Gunung Slamet dari aktif normal (tingkat I) menjadi waspada 
                (tingkat II) sejak hari Jumat, 9 Agustus 2019, pukul 09.00 WIB. 
                Peningkatan status tersebut dilakukan setelah PVMBG 
                melakukan analisis terhadap hasil pemantauan aktivitas Gunung 
                Slamet dari Pos PGA Slamet di Desa Gambuhan. Dalam hal ini, 
                sejak Juni hingga 8 Agustus 2019 tercatat 51.511 kali embusan 
                asap, lima kali gempa tektonik lokal, dan 17 kali gempa tektonik 
                jauh. Selain gempa-gempa tersebut, pada akhir Juli 2019 mulai 
                terekam getaran tremor dengan amplitudo maksimum 0,5-2 
                milimeter dan masih berlangsung hingga saat pelaporan serta 
                energi kegempaan terdeteksi meningkat secara gradual. 
                Pengukuran jarak miring dengan metode EDM berfluktuasi dan 
                berada pada pola datar, sedangkan dengan pengukuran ungkitan 
                dengan tiltmeter terdeteksi adanya penggembungan (deformasi)
                mulai akhir Juli 2019. Sementara dalam pengukuran suhu mata 
                air panas pada tiga lokasi menunjukkan nilai 44,8-50,8 derajat 
                Celcius atau menunjukkan adanya kecenderungan naik 
                dibandingkan dengan pengukuran sebelumnya.`;
                this.header = `Gunung Slamet Waspada`
            }
        }
    },
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
