<template>
<div>
    <Banner></Banner>
    <div style="padding-bottom:100px;" class="bg-1">
        <div class="container">
            <div class="row" style="padding-top:1.5rem">
                <div class="col-md-2"></div>
                <div class="col-md-3 col-pull-offset-3 col-12">
                    <span style="font-size:18px;font-weight:bold">Kode Booking</span>
                </div>
                <div class="col-md-4 col-12">
                    <input type="text" class="form-control" placeholder="Kode booking" v-model="kode" required="true" />
                </div>
            </div>
            <div style="padding-top:1.5rem" class="text-center">
                <b-button v-on:click="getkodebook()" variant="primary">Search kode booking</b-button>
            </div>

            <div style="margin: 1.5rem;padding: 1.5rem;font-size: 14px;background: white;border-radius: 5px;" v-if="data && isNext">
                <div class="row">
                    <div class="col-md-4"></div>
                    <div class="col-md-2 text-left"><span>INVOICE NUMBER :</span></div>
                    <div class="col-md-4 text-left"><span style="font-weight:bold;">{{data.invoiceNumber}}</span></div>
                </div>
                <div class="row">
                    <div class="col-md-4"></div>
                    <div class="col-md-2 text-left"><span>TANGGAL BERANGKAT :</span></div>
                    <div class="col-md-4 text-left"><span style="font-weight:bold;">{{data.climbingSchedule.date}}</span></div>
                </div>
                <div class="row">
                    <div class="col-md-4"></div>
                    <div class="col-md-2 text-left"><span>TANGGAL PULANG :</span></div>
                    <div class="col-md-4 text-left"><span style="font-weight:bold;">{{data.dateReturn}}</span></div>
                </div>
                <div class="row">
                    <div class="col-md-4"></div>
                    <div class="col-md-2 text-left"><span>TOTAL PEMBAYARAN :</span></div>
                    <div class="col-md-4 text-left"><span style="font-weight:bold;">{{data.totalPrice}}</span></div>
                </div>
                <div class="row">
                    <div class="col-md-12 text-center" style="font-style:italic;font-weight:bold;">(Rekomendasi: <span v-if="data.needTourGuide">Butuh Tour Guide</span><span v-if="!data.needTourGuide">Tidak Butuh Tour Guide</span>)</div>
                </div>
                <div class="row">
                    <div class="col-md-2"></div>
                    <div style="padding-top:15px" class="col-md-10 col-12">
                        <table class="table table-responsive">
                            <thead>
                                <tr>
                                    <th scope="col" class="text-center b1">No</th>
                                    <th scope="col" class="text-center b1">Nama</th>
                                    <th scope="col" class="text-center b1">Jenis Kelamin</th>
                                    <th scope="col" class="text-center b1">Usia</th>
                                    <th scope="col" class="text-center b1">Jumlah Pendakian</th>
                                    <th scope="col" class="text-center b1">Riwayat Penyakit</th>
                                    <th scope="col" class="text-center b1">Rekomendasi Tour Guide</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="list,index in data.bookingDtls">
                                    <td class="b1">{{index + 1}}</td>
                                    <td class="b1">{{list.climber.name}}</td>
                                    <td class="b1">{{list.climber.gender}}</td>
                                    <td class="b1">{{list.climber.age}}</td>
                                    <td class="b1">{{list.climber.numberOfClimbs}}</td>
                                    <td class="b1"><span v-if="list.climber.isHasDisease">Ada</span><span v-if="!list.climber.isHasDisease">Tidak Ada</span></td>
                                    <td class="b1"><span v-if="list.needTourGuide">Butuh Tour Guide</span><span v-if="!list.needTourGuide">Tidak Butuh Tour Guide</span></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import Banner from './Banner'
import axios from 'Axios'
import service from "../service/service.js";
export default {
    name: 'Kodebooking',
    components: {
        Banner
    },
    data() {
        return {
            kode: "",
            isNext: false,
            data: {}
        }
    },
    mounted() {},
    methods: {
        getkodebook() {
            this.isNext = false
            if (this.kode != '') {
                service.getBookingcode(this.kode).then(res => {
                    if (res.data) {
                        this.isNext = true
                        if (res.data.code == "200") {
                            this.data = res.data.data[0]
                            console.log(res);
                        }
                    }
                })
            }
        },
    }
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

.b1 {
    border: solid 1px black;
}
</style>
