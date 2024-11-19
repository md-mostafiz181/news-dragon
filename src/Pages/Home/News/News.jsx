import { Link } from "react-router-dom";


const News = ({news}) => {
    const {title,image_url,details, _id}=news;
    console.log(news)
    return (
        <div className="card bg-base-100 w-full shadow-xl py-3">
            <h1 className="text-2xl font-semibold p-2">{title}</h1>
  <figure className="px-2">
    <img
      src={image_url}
      alt="Shoes" />
  </figure>
  <div >

    <div className="p-2">
    {
      details.length > 200 ? 
      <p>{details.slice(0, 200)} <br /> <Link to={`/news/${_id}`} className="btn btn-sm text-orange-500 mb-2 ms-2">Read more</Link></p>
      :
      <p>{details}</p>

    }
    </div>

    
    <hr />

  </div>
</div>
    );
};

export default News;