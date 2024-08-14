import './login.css';
import reachLogo from '../assets/reachLogo.svg';
import google from '../assets/google.svg';

const Login = () => {

    const handleGoogleLogin = () => {
        // Redirect to the Google login endpoint
        window.location.href = "https://hiring.reachinbox.xyz/api/v1/auth/google-login?redirect_to=https://frontend.com";
    };

    
    

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
                            <button
                                onClick={handleGoogleLogin}
                                className='z-20 m-7 px-4 py-2 rounded-md border border-neutral-500 bg-gray-900 text-neutral-500 text-sm transform transition duration-200 hover:shadow-md flex justify-center items-center w-[89%]'
                            >
                                <div><img src={google} alt="Google"/></div>
                                <h4 className='p-1'>Signup with Google</h4>
                            </button>
                            {/* You can keep the existing account creation link as is */}
                            <p className='m-2'>Already have an account? <a href="/signin">Sign-in</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;
