import mlogo from '../assets/mlogo.svg';
import home from '../assets/home.svg';
import user from '../assets/usericon.svg';
import mail from '../assets/mail.svg';
import send from '../assets/send.svg';
import inbox from '../assets/inbox.svg';
import grid from '../assets/grid.svg';
import './sidebar.css';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <>
            <div className='absolute top-0 left-0 h-[100%] flex-1 flex-col justify-evenly items-center bg-gray-950 border-solid border-r-[0.1px] border-gray-900'>
                <div>
                    <ul className='m-3'>
                        <Link to='/'>
                            <li className='liContainer'>
                                <img src={mlogo} className='relative z-10 top-1'/>
                            </li>
                        </Link>
                        <Link to='/home'>
                            <li className='liContainer'>
                                <img src={home} className='mb-5'/>
                            </li>
                        </Link>
                        <li className='liContainer'>
                            <img src={user} className='mb-7'/>
                        </li>
                        <li className='liContainer'>
                            <img src={mail} className='mb-7'/>
                        </li>
                        <li className='liContainer'>
                            <img src={send} className='mb-7'/>
                        </li>
                        <Link to='/all'>
                            <li className='liContainer'>
                                <img src={inbox} className='mb-7'/>
                            </li>
                        </Link>
                        <li className='liContainer'>
                            <img src={grid} className='mb-7'/>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Sidebar;
