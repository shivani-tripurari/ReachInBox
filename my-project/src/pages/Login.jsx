import './login.css';
import reachLogo from '../assets/reachLogo.svg';
import google from '../assets/google.svg';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <>
            <div className='container'>
                <div className='block absolute left-0 top-0 flex justify-center items-center border-solid border-b-[0.1px] border-gray-900 w-[100%] h-[4rem] login-navbar'>
                    <div className='block absolute'><img src={reachLogo} alt="Reach Logo"/></div>
                </div>

                <div className='z-10 block relative w-[20rem] p-1 shadow-md bg-[length:100%_100%] md:w-[29rem] lg:w-[30rem]'>
                    <div className="z-10 relative items-center justify-center mt-auto z-2 min-h-[22rem] p-[2.4rem] bg-gray-900 backdrop-blur border border-gray-800 rounded-2xl">
                        <div className="flex flex-col items-center justify-center mt-auto">
                            <h2 className='p-1 text-2xl'>Create a new account</h2>
                            <button className='z-20 m-7 px-4 py-2 rounded-md border border-neutral-500 bg-gray-900 text-neutral-500 text-sm transform transition duration-200 hover:shadow-md flex justify-center items-center w-[89%]'>
                                <div><img src={google} alt="Google"/></div>
                                <h4 className='p-1'>Signup with Google</h4>
                            </button>
                            <Link to="/home" className="z-20 cursor-pointer m-5 shadow-[0_4px_14px_0_rgb(0,118,255,39%)] hover:shadow-[0_6px_20px_rgba(0,118,255,23%)] hover:bg-[rgba(0,118,255,0.9)] px-8 py-2 bg-[#0070f3] rounded-md text-white font-light transition duration-200 ease-linear">
                                Create Account
                            </Link>
                            <p className='m-2'>Already have an account? Sign-in</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;
