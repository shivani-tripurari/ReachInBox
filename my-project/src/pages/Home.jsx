import './login.css';
import UserRightBar from '../components/UserRightBar.jsx';
import Sidebar from '../components/Sidebar.jsx';
const Home=()=>{

    return(
        <>
            <div className='container'>
                <UserRightBar/>
                <Sidebar/>
            </div>
        </>
    )

}
export default Home;
