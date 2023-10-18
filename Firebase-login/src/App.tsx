import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./routes/Login"
import UserDetail from "./routes/UserDetail";
import { Provider } from 'react-redux';
import appStore from './utils/appStore'


function App() {
  return (
    <Provider store={appStore}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />}/>
          <Route path='/user/:uid' element={<UserDetail />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}

export default App