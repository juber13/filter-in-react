import {useState , useEffect} from 'react';
import './App.css'


function App() {

  const [data , setData] = useState([]);
  const [loading , setLoading] = useState(false);
  const [error , setError] = useState(false);
  const [val , setValue] = useState('');
  

  const filterUser = () => {
    return data.filter(user => user.name.toLowerCase().includes(val));
  }


  
  useEffect(() =>{
    const fetchUsers = async () => {
      try{
      setLoading(true);
      const res = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await res.json();
      setData(data);
      setLoading(false);
    }catch(error){
      setError(true);
      console.log(error);
    }
   }

   fetchUsers();
  },[])

  if(loading) return <h1>Loading....</h1>
  if(error) return <h3>Somthing Went wrong....</h3>


  console.log(data);
  

  return (
    <div className='container border w-[300px] m-auto mt-20 rounded-lg overflow-hidden relative'>
      <div className="header bg-header-color w-full h-10vh flex flex-col items-start p-5 stickey left-0 ">
        <h2 className='text-white font-bold font-popins'>Live User Filter</h2>
        <p className='text-gray-300'>Search by name and or / location</p>
        <input type="text" className='text-white rounded-full outline-none bg-dark-gray-transparent w-[100%] p-2 px-3 mt-3 font-sm' placeholder='Search' onChange={(e) => setValue(e.target.value)}/>
      </div>

    <div className="users flex flex-col h-[500px] overflow-y-scroll">

       {data.length > 0  ? filterUser(val).map((user , index) => {
        return(
          <div className="user-profile w-full flex p-5 items-center gap-3 border-b-2" key={index}>
            <img className="w-[60px] h-[60px] rounded-full" src="https://randomuser.me/api/portraits/women/46.jpg" alt="user-profile-image"/>
            <div className="body flex flex-col items-start gap-1">
              <h2 className='text-lg font-md'>{user.name}</h2>
              <p className='text-sm'>{user.email}</p>
            </div>
          </div>
        )
       }) : "no user found"} 

     
    </div>
  </div>
  )
}

export default App
