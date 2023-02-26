export default function Chat({channel}){
  // console.log(channel, 'from Chat')
  return (
    <>
      <div className="overflow-y-scroll bg-pink-700 w-full container">
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
    </>
  )
}