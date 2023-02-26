export default function Chat({channel}){
  // console.log(channel, 'from Chat')
  return (
    <>
    <div>
      <div className="overflow-y-scroll bg-pink-700 w-full h-[calc(100vh_-_6rem)] container flex flex-col gap-8 py-8 px-8 text-white">
      {channel.messages && 
        channel.messages.map((message, i) => {

          const dateString = message.created
          const date = new Date(dateString)
          
          const options = {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric',
            timeZone: "America/Vancouver"
          }

          const formattedDate = date.toLocaleString('en-US', options)
          // console.log(date)
          return (
            <div key={message.id}>
              <p>{message.text}</p>
              <p>{formattedDate}</p>
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
        >
          <input
            className="w-full rounded h-6"
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