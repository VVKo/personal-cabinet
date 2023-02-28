import jwt_decode from "jwt-decode";
const APIs = {
    CRUD_API: 'https://script.google.com/macros/s/AKfycbzef_y4t0K8aYk30ifIO5z1eM30WPsnZpxCFUqNrHqY48vASre-z3TnYLRq2W88DmAc/exec',
    rozkladChNU_API:
        'https://script.google.com/macros/s/AKfycbzthxLojygkg-2czBL9iGG8BIQ7rFKE67_vUI2d0XF8IRjfPFG-eGI_Vg2WhoQ3qec/exec',
    driver_API:
        'https://script.google.com/macros/s/AKfycbzPGSRA_iPCjt5IwrgY4AxPuCoKuP5gofysbI79ovilw_vob9UeHMD1ZzZoVicUhoA1/exec',
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
        cache: 'no-cache',
        redirect: 'follow',
        body: JSON.stringify(obj)
    }

    const response = await fetch(url, settings)
    console.log('response', response)
    const rrr = await response.json();
    console.log('rrr',rrr)
    const {token} = rrr

    return jwt_decode(token)

};
