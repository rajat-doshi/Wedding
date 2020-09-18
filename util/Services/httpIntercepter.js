import { Api_Url } from "../Config";
import axios from 'axios';
export const post = (url, objBody = {}) => {


    return axios.post(Api_Url + url, objBody)
        .then(res => {
            console.log(res)
            return res
        }).catch(err => {
            return err
        })


}
export const get = (url, objBody = {}) => {


    return axios.get(Api_Url + url)
        .then(res => {
            console.log(res)
            return res
        }).catch(err => {
            return err
        })


}
const ErrHandling = () => {

}