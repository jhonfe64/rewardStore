import {useState, useEffect} from 'react';

const useFetchPost = (url, headers, body, rechargedFigure) => {
    const [data, setData] = useState(0);
    useEffect(()=>{
        if(rechargedFigure !== 0){
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
    }, [rechargedFigure, body, headers, url]);
    return [data];
}

export default useFetchPost;