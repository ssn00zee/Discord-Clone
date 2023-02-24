import { useEffect, useState } from 'react'
import styles from '@/styles/Home.module.css'


export default function Home() {


  const [color, setColor] = useState('bg-pink-400')
  const [toggle, setToggle] = useState(false)
  
  const handleColor = () => {
    toggle == true ? setColor('bg-blue-400') : setColor('bg-pink-400')
    setToggle(!toggle)
  }

  return (
    <>
      <div className={`h-screen flex ${color} justify-center items-center flex-col gap-10`}>
        <h1 className='text-3xl font-bold underline text-slate-50 font-mono' >
          Hello World</h1>
          <button className='rounded h-12 w-18 min-w-min min-h-min bg-gray-600 text-red-300 inline-flex items-center p-4'
            onClick={() => {
               handleColor()
            }}
          >
            Click Me</button>
      </div>
    </>
  )
}
