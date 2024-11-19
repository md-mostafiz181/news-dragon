import Header from "../Shared/Header/Header";
import Navbar from "../Shared/Navbar/Navbar";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";

const NewsDetails = () => {
  return (
    <div>
      <Header></Header>
      <Navbar></Navbar>

      <div className="lg:flex gap-2">
        <div className="w-2/3 bg-orange-600">
        <h1>this is news details page</h1>
        </div>
        <div className="w-1/3 ">
        <RightSideNav></RightSideNav>
        </div>
      </div>
    </div>
  );
};

export default NewsDetails;
