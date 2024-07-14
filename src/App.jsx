import {Container, Switch} from "@mui/material";
import { DashBord } from "./component/DashBord";
import { User } from "./controller/User";
import {Route, Routes} from "react-router-dom";


function App() {


  return (
   <Container>
<DashBord/>

<Routes>
        <Route path='/user' element={<User />} />
      </Routes>

   </Container>
  )
}

export default App
