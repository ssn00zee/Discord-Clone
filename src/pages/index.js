import Channel from "@/comps/channel";
import Chat from "@/comps/chat";
import Modal from "@/comps/modal";
import { getAllChannels, getChannelById } from "@/database";
import { useEffect, useState } from "react";

export default function Home({allChannels, channelbyID}) {

  const [newChannel, setNewChannels] = useState(allChannels)
  const [channel, setChannel] = useState({})
  const [modal, setModal] = useState(false)


  useEffect(() => {
    setChannel(channelbyID)
  }, [channelbyID])

  return (
    <>
    <main>
      {
        modal && 
        <Modal 
          onClick={() => {
            setModal(false)
          }}
          onSend={() => {
            setModal(false)
          }}
          data={(data) => {
            setNewChannels([...newChannel, data])
          }}
        />
      }
      <div className='h-screen grid bg-pink-400 grid-cols-[minmax(0,240px)_2fr] grid-rows-[1fr]'>
        <Channel 
          channels={newChannel}
          onClick={() => {
            setModal(true)
          }}
        />
        <Chat 
          channel={channel}
        />
      </div>
    </main>
    </>
  )
}


export async function getServerSideProps(context) {

  const channels = await getAllChannels()
  const channelbyID = await getChannelById(context.query.channel) || '1'

  return {
    props: {
      allChannels: JSON.parse(JSON.stringify(channels)),
      channelbyID: JSON.parse(JSON.stringify(channelbyID))
    }
  }
}
