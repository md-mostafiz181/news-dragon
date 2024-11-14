import Marquee from "react-fast-marquee";

const BreakingNews = () => {
  return (
    <div className="bg-gray-300 flex shadow-lg mt-3 mb-1">
      <button className="btn">Latest News</button>
      <p className="mt-3">
        <Marquee pauseOnHover={true} speed={100}>
          I can be a React component, multiple React components, or just some
          text.
        </Marquee>
      </p>
    </div>
  );
};

export default BreakingNews;
