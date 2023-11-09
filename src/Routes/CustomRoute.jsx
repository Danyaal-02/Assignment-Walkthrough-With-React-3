import { HomePage } from "../Pages/HomePage.jsx"
import { SinglePhoto } from "../Pages/SinglePhoto.jsx"

export const CustomRoute=()=>{
    return(
        <Routes>
            <Route path='/' element={<HomePage/>} />
            <Route path='/' element={<SinglePhoto />} />
        </Routes>
    )
}