import Workflow from "./components/Workflow";
import Destinations from "./components/Destinations";
import Header from "./components/Header";
import Stat from "./components/Stat";
import Testimonials from "./components/Testimonials";
import Preference from "./components/Preference";


function App() {
  return (
    <div className="flex flex-col  items-center justify-center w-screen bg-yellow-100 ">
   <Header/>

   <div className='flex items-center px-12  w-full mt-2'>
            <div className='h-px w-full bg-gray-400 '></div>
            <img src="https://aws.astrotalk.com/assets/images/astrotalk-mini-logo.webp"/>
            <div className='h-px w-full bg-gray-400 '></div>
   </div>



   <Preference/>
   
    
  <Destinations/>

  <Workflow/>

  <Stat/>

  <Testimonials/>

    
  
    </div>
  );
}

export default App;
