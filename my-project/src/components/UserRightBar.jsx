import './userrightbar.css';
import Navbar from './Navbar.jsx';
import start from '../assets/start.svg';
const UserRightBar=()=>{
    return(
        <>
            <div className='container'>
                <Navbar/>
                <div className='flex flex-col justify-center items-center'>
                    <img src={start}/> 
                    <h3 className='text-xl m-3'>It’s the beginning of a legendary sales pipeline </h3>               
                    <p className='text-xs m-4 w-[44%] text-slate-500'>When you have inbound E-mails you’ll see them here.</p>
                </div>
            </div>
        </>
    );
}
export default UserRightBar;