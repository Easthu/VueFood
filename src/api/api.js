import axios from '../utilis/axios'
//获取数据
let getData = () =>{
        let url = '/food/mock/87086/food/getAllFood'
        return axios.post(url,{})
}
export {getData}