import {useState, useEffect} from 'react';

const useFetch = (url, headers) => {

    const [data, setData] = useState([]);

   useEffect(()=>{
        const getData = async (url, headers) => {
            try {
                const info = await fetch(url, {
                    headers
                });
                if(!info.ok){
                    throw new Error(`HTTP error! status: ${info.status}`);
                }else{
                    const jsonInfo = await info.json();
                    setData(jsonInfo);
                }
            }
            catch(e){
                console.log(e.name + " " + e.message);
            }
        }
        getData(url, headers);
   },[url, headers])
   return [data]
}


export default useFetch
