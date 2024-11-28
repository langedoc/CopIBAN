import { useState } from 'react'
import './App.css'

function App() {
  const [input, setInput] = useState('');
  const handleClick = () => {
    const inputElement = document.querySelector('.input-message') as HTMLInputElement;
    const message = inputElement?.value || '';
    const ibanRegex = /[A-Z]{2}[\W]?[0-9]{2}[\W]?([A-Z0-9][\W]?){15,34}/g;
    const ibanMatch = message.match(ibanRegex);
    const cleanedIban = ibanMatch ? ibanMatch[0].replace(/\W/g, '') : '';
    setInput(cleanedIban);
  }
  return (
    <div>
      <h1>Welcome to CopIBAN, a tool designed to help you manage and extract IBAN codes</h1>
      <p>insert a message containing an IBAN code for processing</p>
      <input type='text' placeholder='insert the original message' className='input-message'/>
      <button onClick={handleClick}>V</button>
      <p>get the IBAN number in various formats from the original message for your convenience</p>
      <p>{input}</p>

    </div>
  )
}

export default App
