import React ,{useState} from 'react'
import axios from 'axios';

function Home() {
    const [title, setTitle] = useState("");
    const [date, setDate] = useState(null)
    const [explanation, setExplanation] = useState("")
    const [img, setImg] = useState("")

    const url="https://api.nasa.gov/planetary/apod?api_key=qKCpkbJR0iclcBVHz9YtVxjab68oeZEl67phkAXt"

    const getresult = async()=>{
      const result=await axios.get(url);
      console.log(result.data.explanation)
      setTitle(result.data.title)
      setDate(result.data.date)
      setExplanation(result.data.explanation)
      setImg(result.data.url)
    }
    getresult();
  return (
    <div>
      <h3 className='text-2xl font-bold'
     >I am Home</h3>
      <h3 className='text-2xl font-bold'>{date}</h3>
     <h3 className='text-2xl font-bold'>{title}</h3>
     <h3 >{explanation}</h3>
      <img src={img} alt="" class="h-screen max-w-full h-auto mx-auto" />
    </div>
  )
}

export default Home
