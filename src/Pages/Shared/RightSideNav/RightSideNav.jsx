
import { FcGoogle } from "react-icons/fc";
import { GrGithub } from "react-icons/gr";
import { Link } from "react-router-dom";
import swimmingImg from "../../../assets/swimming.png"
import playImg from "../../../assets/playground.png"
import classImg from "../../../assets/class.png"
import coverImg from "../../../assets/bg.png"



const RightSideNav = () => {
    return (
        <div>
           <div className=" px-2">
               <h1 className="text-3xl font-bold">Login with</h1>
               <button className="btn  w-full mt-2"> <FcGoogle /> Login with Google</button>
               <button className="btn  w-full mt-2"> <GrGithub /> Login with Github</button>
           </div>

           <div className="mt-2 px-2">
                    <h1 className="text-3xl font-bold">Finds on</h1>
                    <Link> <p className="text-center border p-2 rounded-t-lg">  Facebook</p> </Link>
                    <Link> <p className="text-center border-x p-2 "> Twitter</p> </Link>
                    <Link> <p className="text-center border p-2 rounded-b-lg"> Instagram</p> </Link>
           </div>

           <div className="mt-2 px-2 bg-slate-300">
                <h1 className="text-3xl font-bold">Q Zone </h1>
                <div className="w-full">
                <img src={swimmingImg} alt="" />
                <img src={playImg} alt="" />
                <img src={classImg} alt="" />
                </div>
           </div>

           <div className="mt-2">
            <img className="w-full" src={coverImg} alt="" />
           </div>

           
        </div>
    );
};

export default RightSideNav;