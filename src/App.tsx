import { Route, Routes, BrowserRouter } from 'react-router-dom'

import MapAndChart from './components/Pages/MapAndChart'
import Layout from './components/Layout'
import Contacts from './components/Pages/Contacts';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>} >
          <Route index element={<Contacts />} />
          <Route path="/map" element={<MapAndChart />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App
