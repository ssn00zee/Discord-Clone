import { useState } from "react"
import axios from "axios"

export default function Modal({
  onClick = () => {},
  onSend = () => {},
  data,
}) {

  const [input, setInput] = useState('')

    
  const newChannel = async (input) => {
    
    console.log('click')
    try {
      const res = await axios.post('/api/channels', {
        name: input
      })
      data(res.data)
      setInput('')
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <>
      <div
        onClick={() => {
          onClick()
        }}
        className='fixed h-screen w-full bg-black bg-opacity-25 flex justify-center items-center'
      >
        <div
          className="text-white h-min w-min min-h-60 min-w-60 border border-white rounded-lg bg-blue-300 p-4 flex flex-col gap-4"
          onClick={(e) => {
            e.stopPropagation()
          }}
        >
          <h1
            className="text-lg"
          >New Channel Name</h1>
          <input
            onChange={(e) => {
              setInput(e.target.value)
            }}
            type='text'
            className='text-black'
            value={input}
          />
          <button
            className="border border-white rounded-sm py-1 px-1"
            onClick={() => {
              newChannel(input)
              onSend()
            }}
          >Create</button>
        </div>
      </div>
    </>
  )
}