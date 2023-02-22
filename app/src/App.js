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

function App() {
    return (
        <Routes>
            <Route path='/'>
                <Route index path='login' element={<Login />} />
                <Route index path='create' element={<Create />} />
                <Route path="dashboard" element={<Dashboard />}>
                    <Route path="home" element={<Home />} />
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