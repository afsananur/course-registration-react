

import { useState } from 'react'
import Courses from './component/Courses/Courses'


import Header from './component/Header/Header'

import Cadits from './component/Course_Credit'

import RemeningCadit from './component/RemainingCadit'


function App() {

  const [cadits,setCadits]= useState([]);

   const [credit, setCredit]= useState([]);

    const [creditHour, setCreditHour] = useState(10);

    const[hour, setHour] = useState(0);

    

    const [showAlert, setShowAlert] = useState(false);


   const handleCredit = (course , time )=>{
    const newCredit =[...credit, course];
   
   const newCadits =[...cadits, course];
   setCadits(newCadits);

    const result = credit.find(aCourse => aCourse.id === course.id);

    let timeCount = creditHour - time;
    
    if (!result) {
      if (timeCount >= 0) {
        setCredit(newCredit);
        // total Cadit

        setHour(hour + time);
       
        setCreditHour(timeCount);
        
      } else {
        setShowAlert(true);
      }
    }else{
      // alert('One time ADD');
      alert('hiugiuh')


    }

  }
   

   
  return (
    <>
    <Header></Header>

    <div  className=' flex gap-2'>
     <Courses  handleCredit={handleCredit} ></Courses>
     
     <div className='p-2'>
    <RemeningCadit
          creditHour={creditHour}
          showAlert={showAlert}
        ></RemeningCadit>
         <Cadits cadits={cadits}  
          hour={hour}
        ></Cadits>
    </div>

    </div>
    
    </>
  )
}

export default App
