<template>
<div>
    <Banner></Banner>
    <div style="padding-bottom:100px;" class="bg-1">
        <form @submit="register($event)" class="text-left">
            <div class="container">
                <div class="card-body px-5 py-4" style="background:white">
                    <div>
                        <h1>Data Ketua Kelompok</h1>
                        <div class="form-group row" style="padding-top:1.5rem">
                            <div class="text-left col-md-4" style="padding:5px 10px">Tanggal pendakian</div>
                            <div class="col-md-8" v-if="data">
                                <input type="text" class="form-control" placeholder="tanggal pendakian" v-model="data.date" disabled />
                            </div>
                        </div>
                        <div class="form-group row">
                            <div class="text-left col-md-4" style="padding:5px 10px">Tanggal pulang</div>
                            <div class="col-md-8">
                                <input type="date" class="form-control" placeholder="tanggal pulang" v-model="dateReturn" />
                            </div>
                        </div>
                        <div class="form-group row">
                            <div class="text-left col-md-4" style="padding:5px 10px">Nama ketua kelompok</div>
                            <div class="col-md-8">
                                <input type="text" class="form-control" id="fullname" aria-describedby="Nama lengkap Sesuai Ktp" placeholder="Nama lengkap Sesuai Ktp" v-model="leader.name" required="true" />
                            </div>
                        </div>
                        <div class="form-group row">
                            <div class="text-left col-md-4" style="padding:5px 10px">Tanggal lahir</div>
                            <div class="col-md-8">
                                <input type="date" class="form-control" id="alamat" aria-describedby="tanggal lahir" placeholder="Alamat Sesuai Ktp" v-model="leader.dob" required="true" />
                            </div>
                        </div>
                        <div class="form-group row">
                            <div class="text-left col-md-4" style="padding:5px 10px">Jenis Kelamin</div>
                            <div class="col-md-8">
                                <b-form-select class="form-control" id="jenis identitas" aria-describedby="jenis kelamin" placeholder="Jenis kelamin" v-model="leader.gender">
                                    <option value="Laki Laki">Laki-laki</option>
                                    <option value="Perempuan">Perempuan</option>
                                </b-form-select>
                            </div>
                        </div>
                        <div class="form-group row">
                            <div class="text-left col-md-4" style="padding:5px 10px">Alamat Rumah</div>
                            <div class="col-md-8">
                                <input type="text" class="form-control" aria-describedby="Alamat lengkap Sesuai Ktp" placeholder="Alamat lengkap Sesuai Ktp" v-model="leader.address" required="true" />
                            </div>
                        </div>
                        <div class="form-group row">
                            <div class="text-left col-md-4" style="padding:5px 10px">Jenis Identitas</div>
                            <div class="col-md-8">
                                <b-form-select class="form-control" id="jenis identitas" aria-describedby="jenis identitas" placeholder="Jenis identitas" v-model="leader.identityType">
                                    <option value="ktp">KTP</option>
                                    <option value="passport">Passport</option>
                                    <option value="kartu mahasiswa">Kartu Mahasiswa/Siswa</option>
                                </b-form-select>
                            </div>
                        </div>
                        <div class="form-group row">
                            <div class="text-left col-md-4" style="padding:5px 10px">No Kartu identitas</div>
                            <div class="col-md-8">
                                <input type="text" class="form-control" placeholder="No kartu identitas" v-model="leader.identityNumber" required="true" />
                            </div>
                        </div>
                        <div class="form-group row">
                            <div class="text-left col-md-4" style="padding:5px 10px">Provinsi</div>
                            <div class="col-md-8">
                                <input type="text" class="form-control" id="provinsi" aria-describedby="provinsi" placeholder="Provinsi" v-model="leader.province" required="true" />
                            </div>
                        </div>
                        <div class="form-group row">
                            <div class="text-left col-md-4" style="padding:5px 10px">Kota/ Kabupaten</div>
                            <div class="col-md-8"><input type="text" class="form-control" id="provinsi" aria-describedby="kota/kabupaten" placeholder="Kabupaten" v-model="leader.city" required="true" />
                            </div>
                        </div>
                        <div class="form-group row">
                            <div class="text-left col-md-4" style="padding:5px 10px">Nomor telp</div>
                            <div class="col-md-8">
                                <input type="text" class="form-control" id="notelp" aria-describedby="No. Telp" placeholder="No.Telp" v-model="leader.phoneNumber" required="true" />
                            </div>
                        </div>
                        <div class="form-group row">
                            <div class="text-left col-md-4" style="padding:5px 10px">Nomor telp Keluarga</div>
                            <div class="col-md-8">
                                <input type="text" class="form-control" id="notelpkeluarga" aria-describedby="No. Telp" placeholder="No.Telp" v-model="leader.familyPhoneNumber" required="true" />
                            </div>
                        </div>
                        <div class="form-group row">
                            <div class="text-left col-md-4" style="padding:5px 10px">Pekerjaan</div>
                            <div class="col-md-8">
                                <input type="text" class="form-control" placeholder="Pekerjaan" v-model="leader.occupation" required="true" />
                            </div>
                        </div>
                        <div class="form-group row">
                            <div class="text-left col-md-4" style="padding:5px 10px">Email</div>
                            <div class="col-md-8">
                                <input type="email" class="form-control" placeholder="Email" v-model="leader.email" required="true" />
                            </div>
                        </div>
                        <div class="form-group row">
                            <div class="text-left col-md-4" style="padding:5px 10px">usia</div>
                            <div class="col-md-8">
                                <input type="number" class="form-control" placeholder="age" v-model="leader.age" required="true" />
                            </div>
                        </div>
                        <div class="form-group row">
                            <div class="text-left col-md-4" style="padding:5px 10px">Latar penyakit</div>
                            <div class="col-md-6">
                                <input type="text" class="form-control" v-model="diseaseName" />
                                <div style="padding-top:1.5rem" v-if="leader.climberDiseases.length != 0">
                                    <table class="table text-center" style="background:white !important;">
                                        <thead style="background:purple;color:white !important">
                                            <tr>
                                                <th scope="col" class="text-center b1">Jenis Penyakit</th>
                                                <th class="text-center b1"></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr v-for="list in leader.climberDiseases">
                                                <td class="b1"><b>{{list.diseaseName}}</b></td>
                                                <td class="b1"><button @click="onSplice(list, 0)" class="btn btn-info">Delete</button></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div class="col-md-2">
                                <a class="btn btn-primary" @click="addpenyakit(0)">TAMBAH PENYAKIT</a>
                            </div>
                        </div>
                        <div class="form-group row">
                            <div class="text-left col-md-4">pengalamanan mendaki</div>
                            <div class="col-md-8">
                                <input type="text" class="form-control" placeholder="pengalaman mendaki" v-model="leader.numberOfClimbs" required="true" />
                            </div>
                        </div>
                    </div>

                    <div v-for="leader,index in climberDtls">
                        <h1>Data Anggota {{index + 1}}</h1>
                        <div class="form-group row">
                            <div class="text-left col-md-4" style="padding:5px 10px">Nama Anggota kelompok</div>
                            <div class="col-md-8">
                                <input type="text" class="form-control" id="fullname" aria-describedby="Nama lengkap Sesuai Ktp" placeholder="Nama lengkap Sesuai Ktp" v-model="leader.climber.name" required="true" />
                            </div>
                        </div>
                        <div class="form-group row">
                            <div class="text-left col-md-4" style="padding:5px 10px">Tanggal lahir</div>
                            <div class="col-md-8">
                                <input type="date" class="form-control" id="alamat" aria-describedby="tanggal lahir" placeholder="Alamat Sesuai Ktp" v-model="leader.climber.dob" required="true" />
                            </div>
                        </div>
                        <div class="form-group row">
                            <div class="text-left col-md-4" style="padding:5px 10px">Jenis Kelamin</div>
                            <div class="col-md-8">
                                <b-form-select class="form-control" id="jenis identitas" aria-describedby="jenis kelamin" placeholder="Jenis kelamin" v-model="leader.climber.gender">
                                    <option value="Laki Laki">Laki-laki</option>
                                    <option value="Perempuan">Perempuan</option>
                                </b-form-select>
                            </div>
                        </div>
                        <div class="form-group row">
                            <div class="text-left col-md-4" style="padding:5px 10px">Alamat Rumah</div>
                            <div class="col-md-8">
                                <input type="text" class="form-control" aria-describedby="Alamat lengkap Sesuai Ktp" placeholder="Alamat lengkap Sesuai Ktp" v-model="leader.climber.address" required="true" />
                            </div>
                        </div>
                        <div class="form-group row">
                            <div class="text-left col-md-4" style="padding:5px 10px">Jenis Identitas</div>
                            <div class="col-md-8">
                                <b-form-select class="form-control" id="jenis identitas" aria-describedby="jenis identitas" placeholder="Jenis identitas" v-model="leader.climber.identityType">
                                    <option value="ktp">KTP</option>
                                    <option value="passport">Passport</option>
                                    <option value="kartu mahasiswa">Kartu Mahasiswa/Siswa</option>
                                </b-form-select>
                            </div>
                        </div>
                        <div class="form-group row">
                            <div class="text-left col-md-4" style="padding:5px 10px">No Kartu identitas</div>
                            <div class="col-md-8">
                                <input type="text" class="form-control" placeholder="No kartu identitas" v-model="leader.climber.identityNumber" required="true" />
                            </div>
                        </div>
                        <div class="form-group row">
                            <div class="text-left col-md-4" style="padding:5px 10px">Provinsi</div>
                            <div class="col-md-8">
                                <input type="text" class="form-control" id="provinsi" aria-describedby="provinsi" placeholder="Provinsi" v-model="leader.climber.province" required="true" />
                            </div>
                        </div>
                        <div class="form-group row">
                            <div class="text-left col-md-4" style="padding:5px 10px">Kota/ Kabupaten</div>
                            <div class="col-md-8"><input type="text" class="form-control" id="provinsi" aria-describedby="kota/kabupaten" placeholder="Kabupaten" v-model="leader.climber.city" required="true" />
                            </div>
                        </div>
                        <div class="form-group row">
                            <div class="text-left col-md-4" style="padding:5px 10px">Nomor telp</div>
                            <div class="col-md-8">
                                <input type="text" class="form-control" id="notelp" aria-describedby="No. Telp" placeholder="No.Telp" v-model="leader.climber.phoneNumber" required="true" />
                            </div>
                        </div>
                        <div class="form-group row">
                            <div class="text-left col-md-4" style="padding:5px 10px">Nomor telp Keluarga</div>
                            <div class="col-md-8">
                                <input type="text" class="form-control" id="notelpkeluarga" aria-describedby="No. Telp" placeholder="No.Telp" v-model="leader.climber.familyPhoneNumber" required="true" />
                            </div>
                        </div>
                        <div class="form-group row">
                            <div class="text-left col-md-4" style="padding:5px 10px">Pekerjaan</div>
                            <div class="col-md-8">
                                <input type="text" class="form-control" placeholder="Pekerjaan" v-model="leader.climber.occupation" required="true" />
                            </div>
                        </div>
                        <div class="form-group row">
                            <div class="text-left col-md-4" style="padding:5px 10px">Email</div>
                            <div class="col-md-8">
                                <input type="email" class="form-control" placeholder="Email" v-model="leader.climber.email" required="true" />
                            </div>
                        </div>
                        <div class="form-group row">
                            <div class="text-left col-md-4" style="padding:5px 10px">usia</div>
                            <div class="col-md-8">
                                <input type="number" class="form-control" placeholder="age" v-model="leader.climber.age" required="true" />
                            </div>
                        </div>
                        <div class="form-group row">
                            <div class="text-left col-md-4" style="padding:5px 10px">Latar penyakit</div>
                            <div class="col-md-6">
                                <input type="text" class="form-control" v-model="diseaseName" />
                                <div style="padding-top:1.5rem" v-if="leader.climber.climberDiseases.length != 0">
                                    <table class="table text-center" style="background:white !important;">
                                        <thead style="background:purple;color:white !important">
                                            <tr>
                                                <th scope="col" class="text-center b1">Jenis Penyakit</th>
                                                <th class="text-center b1"></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr v-for="list in leader.climber.climberDiseases">
                                                <td class="b1"><b>{{list.diseaseName}}</b></td>
                                                <td class="b1"><button @click="onSplice(list, index + 1)" class="btn btn-info">Delete</button></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div class="col-md-2">
                                <a class="btn btn-primary" @click="addpenyakit(index + 1)">TAMBAH PENYAKIT</a>
                            </div>
                        </div>
                        <div class="form-group row">
                            <div class="text-left col-md-4">pengalamanan mendaki</div>
                            <div class="col-md-8">
                                <input type="text" class="form-control" placeholder="pengalaman mendaki" v-model="leader.climber.numberOfClimbs" required="true" />
                            </div>
                        </div>
                    </div>
                    <div class="text-center">
                        <b-button variant="secondary" v-on:click="tambahAnggota()">+ TAMBAH ANGGOTA</b-button>
                    </div>
                    <div style="padding-top:1.5rem" class="text-center">
                        <button class="btn btn-primary" type="submit">SUBMIT</button>
                    </div>
                </div>

            </div>
        </form>
    </div>
</div>
</template>

<script>
import Banner from './Banner'
import service from "../service/service.js";
export default {
    name: 'Registerpendaki',
    components: {
        Banner
    },
    data() {
        return {
            data: {},
            arrDiseases: [],
            dateReturn: "",
            leader: {
                address: "",
                age: 0,
                city: "",
                diseases: "",
                dob: "",
                email: "",
                familyPhoneNumber: "",
                gender: "",
                hasEverClimb: true,
                identityNumber: "",
                identityType: "",
                isHasDisease: true,
                leader: true,
                name: "",
                numberOfClimbs: 0,
                occupation: "",
                phoneNumber: "",
                province: "",
                climberDiseases: []
            },
            anggota: {
                address: "",
                age: 0,
                city: "",
                diseases: "",
                dob: "",
                email: "",
                familyPhoneNumber: "",
                gender: "",
                hasEverClimb: true,
                identityNumber: "",
                identityType: "",
                isHasDisease: true,
                leader: false,
                name: "",
                numberOfClimbs: 0,
                occupation: "",
                phoneNumber: "",
                province: "",
                climberDiseases: []
            },
            climberDtls: [],
            diseaseName: ""
        }
    },
    mounted() {
        if (this.$route.params.data != undefined) {
            this.data = this.$route.params.data
        } else {
            this.$router.push({ name: 'Register' })
        }
    },
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
        addpenyakit(index) {
            if (index == 0) {
                if (this.diseaseName != "") {
                    this.leader.climberDiseases.push({ diseaseName: this.diseaseName })
                    this.diseaseName = "";
                }
            } else {
                if (this.diseaseName != "") {
                    this.climberDtls[index - 1].climber.climberDiseases.push({ diseaseName: this.diseaseName })
                    this.diseaseName = "";
                }
            }
        },
        onSplice(index, index1) {
            let i = this.arrDiseases.indexOf(index)
            if (index1 == 0) {
                this.leader.climberDiseases.splice(i, 1)
            } else {
                this.climberDtls[index1 - 1].climber.climberDiseases.splice(i, 1)
            }
        },
        setValuebeforesubmit() {
            let data = {
                bookingDtls: [],
                dateReturn: "",
                totalPrice: 0,
                climbingSchedule: {
                    id: ""
                }
            };
            this.leader.climberDiseases = this.arrDiseases
            return data;
        },
        register(event) {
            event.preventDefault();
            let data = this.setValuebeforesubmit();
            data.bookingDtls.push({ climber: this.leader })
            if (data.bookingDtls.length >= 1) {
                for (let i = 0; i < this.climberDtls.length; i++) {
                    data.bookingDtls.push({ climber: this.climberDtls[i].climber })
                }
            }
            data.totalPrice = data.bookingDtls.length * 25000
            data.climbingSchedule.id = this.data.id
            data.dateReturn = this.dateReturn
            service.getScheduler(data).then(res => {
                if (res.data.code == "201") {
                    service.getBayes(res.data.data[0].bookingNumber).then(res1 => {
                        if (res1.data.code == "200") {
                            service.getPdf(res1.data.data[0].bookingNumber).then(res2 => {
                              
                            })
                        }
                    })
                }
            })
        },
        tambahAnggota() {
            event.preventDefault();
            this.climberDtls.push({ climber: this.anggota })
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
    border: solid 1px black;
}
</style>
