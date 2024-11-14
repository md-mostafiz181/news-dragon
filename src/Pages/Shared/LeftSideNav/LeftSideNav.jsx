import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const LeftSideNav = () => {
    const [categories,setCategories] = useState([]);

    useEffect(()=>{
        fetch("categories.json")
        .then(res=>res.json())
        .then(data=>setCategories(data))
    }, [])
    return (
        <div className="space-y-5">
            <h1 className="text-3xl font-bold">All Category :{categories.length} </h1>

            <div className="my-3">
            {
                categories.map(category=> <Link className="block py-1"
                     key={category.id}
                     to={`/category/${category.id}`}
                     ><button className="btn btn-active btn-ghost w-full">{category.name}</button></Link> )
            }
            </div>
        </div>
    );
};

export default LeftSideNav;