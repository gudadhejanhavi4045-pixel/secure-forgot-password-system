import {BrowserRouter,Routes,Route} from "react-router-dom";

import ForgotPassword from "./pages/ForgotPassword";


function App(){


return(

<BrowserRouter>

<Routes>


<Route

path="/forgot-password"

element={<ForgotPassword/>}

/>


</Routes>


</BrowserRouter>

)

}


export default App;