import './App.css';
import { useState, useEffect } from 'react';
import Counter from './Counter';
import Header from './components/routingComponent/Header';
import { Routes, Route } from 'react-router-dom';
import Home from './components/routingComponent/Home';
import About from './components/routingComponent/About';
import Contact from './components/routingComponent/Contact';
import Services from './components/routingComponent/Services';

function App() {


  const initialValue = { firstname: "", lastname: "" }
  const [currentData, setCurrentData] = useState(0);
  const [inputData, setInputData] = useState(initialValue);
  const [data, setData] = useState([]);

  const [jsonData, setJsonData] = useState([]);
  
const [productName, setProductName] =useState("")

  const [showPass, setShowPass] = useState(false);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos").then((resolve) => {
      resolve.json().then((data) => {
        console.log(data)
        setJsonData(data)
      })
    })
  }, []);





  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputData({ ...inputData, [name]: value });
    console.log(inputData)
  }
  const submitData = () => {
    setData(inputData);
    setInputData(initialValue)
  }

  return (
    <>

      <Header />
      <Routes>
        <Route exact path="/" element={<Home />}>
        </Route>
        <Route path="/about/:id" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
      </Routes>


      <Counter state={currentData} setCurrentData={setCurrentData} />
      <ul>
        <li>FirstName:{data.firstname}</li>
        <li>LastName:{data.lastname}</li>
      </ul>
      {jsonData.map((item) => {
        return (
          <>
           <div className="input_field">
                                <FormLabel>Organisation Name :</FormLabel>
                                <select aria-label="Default select example" displayEmpty value={productName} onChange={(e)=>{setProductName(e.target.value)}}>
                                    <option value="" disabled>Select Organisation</option>
                                    <option value={1}>Products</option>
                                    <option value={2}>Services</option>
                                    <option value={3}>Both</option>
                                </select>
                            </div>
            <li>{item.id}</li>
            <li>{item.title}</li>
          </>
        )
      })}

      <div className='field'>
        <input type="text" placeholder='enter text' onChange={handleChange} value={inputData.firstname} name='firstname' />
        <input type="text" placeholder='enter text' onChange={handleChange} value={inputData.lastname} name='lastname' />
        <input type={!showPass ? "password" : "text"} />
        <button onClick={() => setShowPass(!showPass)}>showpass</button>
        <button onClick={submitData}>Submit</button>
      </div>

    </>
  );
}

export default App;

