import Link from "next/link"
import axios from "axios"

export default function Channel(
  {
    channels,
    onClick = () => {},
    newChannel
  }){
  // console.log(channels, 'from comps')

  return (
    <>
    <div>
      <div
        className="h-10 flex justify-center items-center"
      >
       <button
        className="border border-solid border-white text-white py-1 px-2 rounded-md"
        onClick={() => {
          // sendMessage()
          onClick()
        }}
       >
        Create New Channel
       </button>
      </div>
      <div
        className="bg-red-600 overflow-y-scroll w-full h-[calc(100vh_-_2.5rem)] flex justify-start flex-col items-start gap-4 pr-3 pl-3 pt-4 pb-4"
        >
        {channels &&
          channels.map((channel, i) => {
            return (
              <Link
                href={{
                  pathname: '/',
                  query: {
                    channel: channel.id
                  }
                }}
                key={channel.id}
                className='w-full border border-solid border-white rounded-md text-white py-2 px-4'
              >
                <p
                  onClick={() => {
                    console.log(channel)
                  }}
                >{channel.name}</p>
              </Link>

            )
          })
        }
      </div>
    </div>
    </>
  )
}