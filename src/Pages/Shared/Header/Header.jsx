import moment from 'moment';

const Header = () => {
    return (
        <div className='text-center'>
            <h1 className="text-7xl font-normal">Dragon News</h1>
            <h3 className="text-3xl font-bold mt-1 uppercase">Journalism without Fear and Favour</h3>
            <p className="text-2xl font-normal mt-1">{moment().format("dddd, MMMM D, YYYY")}</p>
        </div>
    );
};

export default Header;