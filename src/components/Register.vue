<template>
<div>
    <Banner></Banner>
    <div style="padding-bottom:100px;" class="bg-1">
        <div class="container">
            <div class="row" style="padding-top:1.5rem">
                <div class="col-md-2"></div>
                <div class="col-md-3 col-pull-offset-3 col-12">
                    <span style="font-size:18px;font-weight:bold">Bulan</span>
                </div>
                <div class="col-md-4 col-12">
                    <b-select v-model="month" class="form-control" required>
                        <option v-for="list in monthlist" :value="list.value">{{list.label}}</option>
                    </b-select>
                </div>
            </div>
            <div class="row" style="padding-top:1.5rem">
                <div class="col-md-2"></div>
                <div class="col-md-3 col-offset-3 col-12">
                    <span style="font-size:18px;font-weight:bold">Tahun</span>
                </div>
                <div class="col-md-4 col-12">
                    <b-select v-model="year" class="form-control" required>
                        <option v-for="list in yearlist" :value="list.label">{{list.label}}</option>
                    </b-select>
                </div>
            </div>
            <div style="padding-top:1.5rem" class="text-center">
                <b-button v-on:click="getlistbooking()" variant="primary">NEXT</b-button>
            </div>
            <div style="padding-top:1.5rem">
                <table class="table text-center" v-if="isNext" style="background:white !important;">
                    <thead>
                        <tr>
                            <th scope="col" class="text-center b1">TANGGAL PENDAKIAN</th>
                            <th scope="col" class="text-center b1">KUOTA PENDAKIAN</th>
                            <th class="text-center b1"></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="list in kuota">
                            <td class="b1"><b>{{list.date}}</b></td>
                            <td class="b1"><b>{{list.quota}}</b></td>
                            <td class="b1"><button @click="clickQuota(list)" v-if="list.quota > 0" class="btn btn-primary">Pilih</button></td>
                        </tr>
                    </tbody>
                </table>
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
    name: 'Register',
    components: {
        Banner
    },
    data() {
        return {
            kuota: [],
            isNext: false,
            month: "",
            monthlist: [{
                    label: 'Januari',
                    value: 1,
                },
                {
                    label: 'Februari',
                    value: 2,
                },
                {
                    label: 'Maret',
                    value: 3,
                },
                {
                    label: 'April',
                    value: 4,
                },
                {
                    label: 'Mei',
                    value: 5,
                },
                {
                    label: 'Juni',
                    value: 6,
                },
                {
                    label: 'Juli',
                    value: 7,
                },
                {
                    label: 'Agustus',
                    value: 8,
                },
                {
                    label: 'September',
                    value: 9,
                },
                {
                    label: 'Oktober',
                    value: 10,
                },
                {
                    label: 'November',
                    value: 11,
                },
                {
                    label: 'Desember',
                    value: 12,
                },
            ],
            year: "",
            yearlist: [{
                    label: 2021
                },
                {
                    label: 2022
                },
            ]
        }
    },
    mounted() {},
    methods: {
        getlistbooking() {
            this.isNext = false
            if (this.month != '' && this.year != '') {
                service.getBooking(this.month, this.year).then(res => {
                    if (res.data) {
                        if (res.data.code == "200") {
                            this.kuota = res.data.data
                            this.isNext = true
                        }
                    }
                })
            }
        },
        clickQuota(data){
             this.$router.push({ name: 'Registerpendaki', params: { data: data } })
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
    border:solid 1px black;
}
</style>
