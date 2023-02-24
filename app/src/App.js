import { Routes, Route } from 'react-router-dom';
import Dashboard from './components/dashboard/Dashboard';
// import Layout from './components/Layout';
// import Dashboard from './pages/dashboard//Dashboard';
// import RequireAuth from './simple/RequireAuth';
// import RememberLogin from './simple/RememberLogin';
// import Unauthorized from './simple/Unauthorized';
// import Status from './simple/Status';
// import SessionExpired from './simple/SessionExpired';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Create from "./pages/login/Create";
import SignIn from "./pages/login/Signin";
import Forgot from "./pages/login/Forgot";
import UserHome from "./pages/home/UserHome";
import SearchDashboard from "./components/search_dashboard/SearchDashboard";
import HomeDashboard from "./components/home_dashboard/HomeDashboard";

function App() {
    return (
        <Routes>
            <Route path='/'>
                <Route index path='login' element={<Login />} />
                <Route index path='create' element={<Create />} />
                <Route index path='signIn' element={<SignIn />} />
                <Route index path='forgot' element={<Forgot />} />

                <Route path="dashboard" element={<Dashboard />}>
                    <Route path="new" element={<Home />} />
                </Route>
                <Route path="dashboard" element={<SearchDashboard />}>
                    <Route path="search" element={<UserHome />} />
                </Route>
                <Route path="dashboard" element={<HomeDashboard />}>
                    <Route path="home" element={<UserHome />} />
                </Route>
                {/* <Route path="register" element={<Register />} />
                <Route path="unauthorized" element={<Unauthorized />} />
                <Route path="sessionexpired" element={<SessionExpired />}/>
                <Route element={<RememberLogin />}>
                    <Route element={<Status />}>
                        <Route element={<RequireAuth allowedEmployeeType={["Employee", "Manager"]}/>}>
                            <Route path="dashboard" element={<Dashboard />}>
                                <Route index path="/home" element={<Home />} />
                            </Route>
                        </Route>
                        
                    </Route>
                </Route> */}
            </Route>
        </Routes>
    )
}

export default App;