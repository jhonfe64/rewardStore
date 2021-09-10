
const userUrl = 'https://coding-challenge-api.aerolab.co/user/me';
const allProductsUrl = 'https://coding-challenge-api.aerolab.co/products';
const updateCoinsFigureUrl = 'https://private-anon-6ac56a34c9-aerolabchallenge.apiary-proxy.com/user/points';
const setReedemproducts = 'https://private-anon-a69557cdcd-aerolabchallenge.apiary-proxy.com/redeem'
const getReedemproducts = 'https://coding-challenge-api.aerolab.co/user/history';


const headers = {
    Accept : 'application/json',
    Authorization : 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGVlMDNiODY3Mjk2ZTAwMTk5NjQxM2IiLCJpYXQiOjE2MjYyMTEyNTZ9.OzGeRBOP0AnB8kXaVO20X79DFEkO65SEia_3yxmKkU8',
    'Content-Type': 'application/json'
}


export  {headers, allProductsUrl, userUrl, updateCoinsFigureUrl, setReedemproducts, getReedemproducts};





