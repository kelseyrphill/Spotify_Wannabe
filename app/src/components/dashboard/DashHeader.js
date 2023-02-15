import './dashboard_header.css';
import { useLocation } from 'react-router-dom';
import { RxChevronLeft, RxChevronRight } from 'react-icons/rx';
// import { BsPersonCircle, BsCaretDownFill } from 'react-icons/bs';
// import useAuth from '../simple/useAuth';
// import { IconContext } from 'react-icons/lib';
// import { useRef, useState } from 'react';
// import useLogout from '../simple/useLogout';
// import { useNavigate } from 'react-router-dom';
// import aldi_logo from '../official/AL_BLR_LA_MC_RGB.png';
// import { BiMenu } from 'react-icons/bi';
// import { AiFillQuestionCircle } from 'react-icons/ai';

const DashHeader = () => {
    const location = useLocation();
    // const dialogRef = useRef();
    // const { auth } = useAuth();
    // console.log(name)
    // console.log(auth);
    // const [dropdown, setDropdown] = useState(false);
    // const logout = useLogout();
    // const navigate = useNavigate();
    // const date = new Date();
    // const signOut = () => {
    //     logout();
    //     navigate('/login');
    // }
    return (
        <div className='Dashboard_Header' style={location.pathname === "/dashboard/home" ? {backgroundColor: "rgb(16,16,16)"} : {backgroundColor: "rgb(69,80,91)"}}>
            <div className="Dashboard_Header_Page_Buttons">
                <button type="button" className="Dashboard_Header_Page_Button">
                    <RxChevronLeft style={{verticalAlign: 'middle', color: 'white'}} size='2em' />
                </button>
                <button type="button" className="Dashboard_Header_Page_Button">
                    <RxChevronRight style={{verticalAlign: 'middle', color: 'white'}} size='2em' />
                </button>
            </div>
            <div className='Dashboard_Header_User_Controls_Wrapper'>
                <div className="Dashboard_Header_Nav_Buttons">
                    <button type="button" className="Dashboard_Header_Nav_Button">Premium</button>
                    <button type="button" className="Dashboard_Header_Nav_Button">Support</button>
                    <button type="button" className="Dashboard_Header_Nav_Button">Download</button>
                </div>
                <div className="Dashboard_Header_User_Buttons">
                    <div className="Dashboard_Header_Signup_Button_Wrapper">
                        <button type="button" className="Dashboard_Header_Signup_Button">Sign up</button>
                    </div>
                    <div className="Dashboard_Header_Login_Button_Wrapper">
                        <button type="button" className="Dashboard_Header_Login_Button">Log in</button>
                    </div>
                </div>
            </div>
        </div>
    )
    // return (
    //     <div className='dashboard-header'>
    //         <div>
    //             <IconContext.Provider value={{ style: { verticalAlign: 'middle' },  size: '1.5em' }}>
    //                 <BiMenu className='dashboard-header-hamburger' onClick={() => setNavOpen(prev => !prev)} />
    //             </IconContext.Provider>
    //         </div>
    //         <div className='aldi-header'>ALDI</div>
    //         <div style={{flexGrow: '1'}}></div>
    //         <div className='header-support'>
    //             <IconContext.Provider value={{ style: { verticalAlign: 'middle' },  size: '1.1em' }}>
    //                 <AiFillQuestionCircle onClick={() => setSupportOpen(true)} className='support-icon' />
    //             </IconContext.Provider>
    //         </div>
    //         <div className='header-dropdown' onClick={() => setDropdown(prev => !prev)}>
    //             <div className='user-header' key={'hey'}>
    //                 <IconContext.Provider value={{ style: { verticalAlign: 'middle' },  size: '1.2em' }}>
    //                     <BsPersonCircle className='user-icon' />
    //                 </IconContext.Provider>
    //                     {name/* {`${auth.first_name} ${auth.last_name}`} */}
    //                 <IconContext.Provider value={{ style: { verticalAlign: 'middle'}, size: '0.75em' }}>
    //                     <BsCaretDownFill className='header-dropdown-icon' />
    //                 </IconContext.Provider>
    //             </div>
    //             <div className='header-dropdown-content' style={{display: (dropdown ? 'block' : 'none')}}>
    //                 <div>{date.toDateString()}</div>
    //                 <div className='header-dropdown-logout' onClick={signOut}><span>Logout</span></div>
    //             </div>
    //         </div>
    //     </div>
    // )
}

export default DashHeader;