import axios from "axios"
import { useEffect, useRef, useState } from "react"

export default function Chat({
  messages,
  messageData,
  channel
}){
  const messageRef = useRef(null)
  // const [initChannel, setInitChannel] = useState()
  const [input, setInput] = useState('')
  
  // console.log(initChannel, 'from Chat state')

  const onSubmit = async (e) => {
    e.preventDefault()
    try {
      const { data } = await axios.post(`/api/channels/${channel.id}/messages`, {
        text: input,
        userName: 'not you'
      })
      messageData(data)
      setInput('')
      console.log(data)
    } catch (e) {
      console.log(e)
      setInput('')
    }
  }
  
  useEffect(() => {
    if (messageRef.current){
      messageRef.current.scrollTo({
        top: messageRef.current.scrollHeight,
        behavior: 'smooth',
      })
    }

  
    // setInitChannel(channel)
    
  }, [messages])

  return (
    <>
    <div>
      <div 
        className="overflow-y-scroll bg-pink-700 w-full h-[calc(100vh_-_6rem)] container flex flex-col gap-8 py-8 px-8 text-white" 
        ref={messageRef}
      >
      {messages && 
        messages.map((message, i) => {

          const dateString = message.created
          const date = new Date(dateString)
          
          const options = {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: 'numeric',
            // timeZone: "America/Los_Angeles", 
            hour12: true
          }

          const formattedDate = date.toLocaleDateString('en-US', options)
          console.log(dateString)
          return (
            <div key={message.id}>
              <p>Message: {message.text}</p>
              {/* <p>{formattedDate}</p> */}
              <p>Username: {message.userName}</p>
            </div>
          )
        })
      }
      </div>
      <div
        className="h-24 w-full flex justify-start flex-col px-4 pb-4 pt-2 container"
      >
        <form
         className="flex gap-4 flex-row justify-evenly items-center"
         onSubmit={onSubmit}
        >
          <input
            className="w-full rounded h-6"
            type="text" 
            id="text" 
            name="text" 
            value={input}
            onChange={(e) => {
              setInput(e.target.value)
            }}
          />  
        <button
          className="text-white border border-white rounded px-2 py-1"
          type="submit"
        >
          Send
        </button>

        </form>

      </div>

    </div>
    </>
  )
}