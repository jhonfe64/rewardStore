
const userUrl = 'https://coding-challenge-api.aerolab.co/user/me';
const allProductsUrl = 'https://private-anon-0eb3c50ad1-aerolabchallenge.apiary-proxy.com/products';
const updateCoinsFigureUrl = 'https://private-anon-6ac56a34c9-aerolabchallenge.apiary-proxy.com/user/points';
const setReedemproducts = 'https://private-anon-a69557cdcd-aerolabchallenge.apiary-proxy.com/redeem'
const getReedemproducts = 'https://coding-challenge-api.aerolab.co/user/history';


const headers = {
    Accept : 'application/json',
    Authorization : 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGFmZDhmYzliNzc4MTAwMjA5YzVhYTgiLCJpYXQiOjE2MjIxMzcwODR9.mpjkoeSAOeuY18cVP6T0XFLZpaXs8GbO5XWzFIg9N-A',
    'Content-Type': 'application/json'
}

export  {headers, allProductsUrl, userUrl, updateCoinsFigureUrl, setReedemproducts, getReedemproducts};





