import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Login from './pages/Login'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        {/* <Route path="/main-layout" element={<MainLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="company" element={<Company />} />
          <Route path="drivers" element={<Drivers />} />
          <Route path="units" element={<UnitsLayout></UnitsLayout>}>
            <Route index element={<UnitsTable data={[]}/>}></Route>
            <Route path="trucks" element={<TrucksTable />}></Route>
          </Route>
        </Route> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;