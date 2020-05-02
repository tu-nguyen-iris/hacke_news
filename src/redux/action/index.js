import axios from "axios"
import * as ActionType from "./../const/index"

export const apiGetData = () => {
    return dispatch => {
        axios({
            method: "GET",
            url: "https://api.hnpwa.com/v0/news/1.json"

        }).then(res => {
            dispatch({
                type: ActionType.GET_DATA,
                data: res.data
            })
        })
            .catch(err => console.log(err))

    }
}
export const search = data => {
    return {
        type: ActionType.SEARCH,
        data
    }
}
export const getComment = id => {
    return dispatch => {

        axios({
            method: "GET",
            url: `https://api.hnpwa.com/v0/item/${id}.json`
        })
            .then(res => {
                dispatch({
                    type: ActionType.GET_COMMENT,
                    data: res.data
                })
            })
            .catch(err => console.log(err))





    }



}
export const login = (data, history) => {
    return dispatch => {
        axios({
            method: "POST",
            url: "http://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap",
            data
        }).then(res => {
            localStorage.setItem("user", JSON.stringify(res.data))
            alert("login Success")
            history.push("/")
        }).catch(err => alert(err))


    }


}
export const register = (data) => {
    return dispatch => {
        axios({
            method: "POST",
            url: "http://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangKy",
            data
        })
            .then(res =>
                alert("Register success")
            )
            .catch(err => alert(err))
    }
}