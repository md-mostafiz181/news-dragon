import  { useEffect, useState } from 'react';
import News from '../News/News';

const Newss = () => {
    const [newss, setNewss] = useState([])
    useEffect(()=>{
        fetch("news.json")
        .then(res => res.json())
        .then(data=>setNewss(data))
    }, [])
    return (
        <div>
            <h1 className='text-3xl font-bold mt-3'>Dragon News Home </h1>

            <div className='space-y-4'>
                {
                    newss.map(news => <News 
                        key={news.id}
                        news={news}
                    ></News> )
                }
            </div>
        </div>
    );
};

export default Newss;