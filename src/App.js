import Login from "./Login";
import Register from "./Register";
import { Navigate, Route, Routes } from "react-router-dom";
import Header from "./Header";
import Routes1 from "./Routes1";
import Routes2 from "./Routes2";
import Routes3 from "./Routes3";
import Routes4 from "./Routes4";
import Layout from "./Layout";
import Usercontext from "./Context/Usercontext";
import { useEffect, useReducer } from "react";
import Tokenreducer from "./reducer/Tokenreducer";
import Userreducer from "./reducer/Userreducer";
import Forgetpassword from "./Forgetpassword";




function modeReducer(mode,action){
     return !mode;
}
function App() {
  const [token, tokenDispatch] = useReducer(Tokenreducer,JSON.parse(localStorage.getItem("auth-token")));
  const [user , userDispatch]=useReducer(Userreducer,{});
  const [mode,modeDispatch]=useReducer(modeReducer,true);
  useEffect(()=>{console.log(user)},[token]);
  useEffect(()=>{console.log(mode)},[mode]);

  return (
    <Usercontext.Provider value={{user , userDispatch,token, tokenDispatch,mode,modeDispatch}}>
        
        {/* <Login /> */}
        {/* <Layout/> */}
        
        <Routes>
          {/* <Route path="/" element={token?<Layout />:<Login/>}> */}
          <Route path="/" element={<Layout />}>
             <Route index element={<Routes1 />} />
             <Route path="routes2" element={<Routes2 />} />
             <Route path="routes3" element={<Routes3 />} />
             <Route path="routes4" element={<Routes4 />} />
          </Route>
            <Route  path="/login" element={<Login />}>
            </Route>
               <Route path="/Forgetpassword" element={<Forgetpassword/>}/>
            <Route path="/register" element={<Register />} />
        </Routes>
        
    </Usercontext.Provider>
  );
}

export default App;
