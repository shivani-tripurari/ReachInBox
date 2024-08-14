
import onebox from '../assets/onebox.svg';
import mode from '../assets/mode.svg';
import username from '../assets/username.svg';
import { Link } from 'react-router-dom';

const Navbar=()=>{
    return(
        <>
            <div className='block absolute left-0 top-0 flex justify-between items-center border-solid border-b-[0.1px] border-gray-900 bg-gray-900 w-[100%] h-[4rem] '>
                <div className='absolute left-40 m-1 p-1'>
                    <img src={onebox}/>
                </div>
                <div className='absolute right-11 m-3 flex items-center justify-center'>
                    <Link to='/'><img src={mode} className='p-3'/></Link>
                    <img src={username} className='p-4'/>
                </div>
            </div>
        </>
    )
}
export default Navbar;