import axios from 'axios'
const uri = "http://localhost:9093/api/"
export default {
    getBooking(dd, yy) {
        return axios.get(`${uri}climbing-schedule/${dd}/${yy}`);
    },
    getScheduler(data) {
        return axios.post(`${uri}booking/`, data)
    },
    getBayes(num) {
        return axios.post(`${uri}bayes/run?bookingNumber=${num}`)
    },
    getPdf(num) {
        return axios.get(`${uri}booking/${num}/pdf`)
    },
    getBookingcode(num) {
        return axios.get(`${uri}booking/${num}`)
    }
}