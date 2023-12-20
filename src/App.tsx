import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from './Pages/Home';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import Hotels from "./Pages/Hotels"
import Hotel from './Pages/Hotel';
import Payment from "./Pages/Payment"
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from "react-query/devtools"
import PaymentFailed from './Pages/PaymentFailed';
import { HomeInputContextProvider } from './contexts/HomeInputContext';
import { SelectedHotelContextProvider } from './contexts/SelectedHotelContext';
function App() {
  const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
      <HomeInputContextProvider>
        <SelectedHotelContextProvider>
          <div className='w-full h-full'>
            <BrowserRouter>
              <Navbar />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/hotels/:countryId" element={<Hotels />} />
                <Route path="/hotels/:country/:id" element={<Hotel />} />
                <Route path="/payment" element={<Payment />} />
                <Route path="/failure" element={<PaymentFailed />} />
              </Routes>
            </BrowserRouter>
          </div>
        </SelectedHotelContextProvider>
      </HomeInputContextProvider>
      <ReactQueryDevtools position='bottom-right' />
    </QueryClientProvider>
  )
}

export default App
