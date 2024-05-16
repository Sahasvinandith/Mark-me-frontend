import { Route, Routes } from "react-router-dom";
import { Homepage } from "./pages/Homepage";
import { useNavigate } from "react-router-dom";
import { Scheduleclickmodel } from "./contents/Homepage/Pages/Schedule/contents/scheduleclickmodel";
import { Scedule } from "./contents/Homepage/Pages/Schedule/Schedule_page";

function App() {
  const navigator=useNavigate();
  return (

    <div>
      <Routes>
        <Route index  element={<Homepage/>}/>   
      </Routes>
      
    </div>
  );
}

export default App;
