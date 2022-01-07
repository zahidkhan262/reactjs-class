import './App.css';
import react, { useState } from 'react';
import Counter from './Counter';



function App() {
  const [currentData, setCurrentData] = useState(0);
  const [inputData, setInputData] = useState({ firstname: "", lastname: "", })


  const handleChange = (e) => {
    const { name, value } = e.target;

    setInputData({ ...inputData, [name]: value, })
  }



  return (
    <>
      <Counter state={currentData} setCurrentData={setCurrentData} />


      <div className='field'>
        <h1>{inputData}</h1>
        <h1>{inputData}</h1>
        <input type="text" placeholder='enter text' onChange={handleChange} value={inputData.firstname} name="firstname" />
        <input type="text" placeholder='enter text' onChange={handleChange} value={inputData.lastname} name="lastname" />
      </div>
    </>
  );
}

export default App;
