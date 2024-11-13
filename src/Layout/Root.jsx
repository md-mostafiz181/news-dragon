
import { Outlet } from 'react-router-dom';

const Root = () => {
    return (
        <div className='max-w-6xl mx-auto bg-orange-400'>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;