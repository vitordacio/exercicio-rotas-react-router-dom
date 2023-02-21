import { Routes, Route, Outlet, Navigate } from 'react-router-dom'
import Main from "./pages/Main"
import SignIn from "./pages/SignIn"
import TeacherDetail from './pages/TeacherDetail'

const ProtectedRoutes = ({ redirectTo }) => {
    const isAllowed = true

    return isAllowed ? <Outlet /> : <Navigate to={redirectTo} />
}

const MainRoutes = () => {
    return (
        <>
            <Routes>
                <Route path='/'>
                    <Route path='/' element={<SignIn />} />
                    <Route path='/signin' element={<SignIn />} />
                </Route>
                <Route element={<ProtectedRoutes redirectTo={'/signin'} />}>
                    <Route path='/teachers' element={<Main />} />
                </Route>
                <Route path='/teachers/:id' element={<TeacherDetail />} />
            </Routes>
        </>
    )
}

export default MainRoutes