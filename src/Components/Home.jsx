import React ,{useState} from 'react'

function Home() {
    const [name, setName] = useState("hello");
    const apikey="https://api.nasa.gov/planetary/apod?api_key=qKCpkbJR0iclcBVHz9YtVxjab68oeZEl67phkAXt"
    const changeName=()=>{
        setName("there");
    }
  return (
    <div>
      <h3 className='text-2xl font-bold'
     >I am Home</h3>
     <button onClick={changeName} className='bg-black text-white py-2 px-4 rounded'>Click here</button>
     <h3 className='text-2xl font-bold'>{name}</h3>
    </div>
  )
}

export default Home
