import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const newSocket = new WebSocket('ws://localhost:8080');
    newSocket.onopen = () => {
      console.log('Connection established');
      newSocket.send('Hello Server!');
    }
    newSocket.onmessage = (message) => {
      console.log('Message received:', message.data);
    }
    setSocket(newSocket);
    return () => newSocket.close();
  }, [])
  
  if(!socket){
    return <div>Loading...</div> 
  }

  return (
    <>
      hi there
    </>
  )
}

export default App