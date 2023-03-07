import jwt_decode from "jwt-decode";
const APIs = {
    CRUD_API: 'https://script.google.com/macros/s/AKfycbwgZrq5_5XIb4bmKQCJibfZF2CEDZVtCrcr4CBUn6EDkTnxHuKd3ZPkEDzcihMxxO3N/exec',
};

export const getDataFromAPI = async (API, action, jsonTxt) => {
    const url = `${APIs[API]}?action=${action}&data=${encodeURIComponent(
        jsonTxt
    )}`;
    const response = await fetch(url);
    return await response.json();
};





export const postDataFromAPI = async (API, action, obj) => {
    const url = `${APIs[API]}?action=${action}`;

    const settings = {
        method: 'POST',
        // mode: 'no-cors',
        cache: 'no-cache',
        // headers: {
        //     'Access-Control-Allow-Origin': '*',
        //     'Accept': 'application/json',
        //     'Content-Type': 'application/json;charset=UTF-8'
        // },
        redirect: 'follow',
        body: JSON.stringify(obj)
    }

    const response = await fetch(url, settings)
    console.log('response', response)
    const rrr = await response.json();
    console.log('rrr',rrr)
    const {token} = rrr
    console.log(jwt_decode(token))
    return jwt_decode(token)

};
