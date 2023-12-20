import { HomeInputContextProvider } from "@/contexts/HomeInputContext"
import HomeInput from "../components/HomeInput"
const Home = () => {
  return (
    <div className="bg-home-bg bg-center bg-cover bg-no-repeat h-screen">
      <div className="h-full w-full backdrop-brightness-50 text-white pt-24 flex flex-col justify-center items-center">
        <div>
          <h3 className="font-bold text-6xl max-md:text-3xl max-sm:text-2xl">Find Next Place to Visit</h3>
          <p className="text-sm my-2 text-center font-medium max-sm:text-xsz">Discover amzaing places at exclusive deals</p>
        </div>
       <HomeInput/>
      </div>
    </div>
  )
}

export default Home
