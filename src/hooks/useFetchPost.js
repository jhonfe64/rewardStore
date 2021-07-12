import {useState, useEffect} from 'react';

const useFetchPost = (url, headers, body, rechargedFigure) => {
    console.log('esta es la url', url)
    console.log('este es el header', headers);
    console.log('este es el body', body)
    
    
    const [data, setData] = useState(0);
    useEffect(()=>{
        if(rechargedFigure !== 0){
            console.log('este es el del cambio', rechargedFigure)
            fetch(url, {
                method: 'POST',
                headers: headers,
                body: body
            })
            .then((res)=>{
                return res.json();
            }).then((info)=>{
                setData(info)
            }).catch((err)=>{
                console.log(err);
            })
        }
    }, [rechargedFigure]);
    return [data];
}

export default useFetchPost;