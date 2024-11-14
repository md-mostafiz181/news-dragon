

const News = ({news}) => {
    const {title,image_url,details}=news;
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
    <h2 >
      <p className="p-2">{details}</p>
    </h2>
    <button className="btn btn-sm text-orange-500 mb-2 ms-2">Read more</button>
    <hr />

  </div>
</div>
    );
};

export default News;