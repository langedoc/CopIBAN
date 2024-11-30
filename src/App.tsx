import { useState } from 'react'
import './App.css'
import { RiSearchEyeLine, RiFileCopy2Fill } from "react-icons/ri";

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
  const handleCopy = (segment: string) => {
    navigator.clipboard.writeText(segment).catch(err => {
      console.error('Failed to copy: ', err);
    });
  }

  return (
    <div className='main-container'>
      <div className='top-container'>
        <h1>CopIBAN</h1>
        <h2>a tool designed to help you extract IBAN codes for easy pasting wherever you need them</h2>
      </div>
      <div className='bottom-container'>
        <div className='left-container'>
          <h3>insert a message containing an IBAN code</h3>
          <textarea placeholder='insert the original message' className='input-message'/>
          <button onClick={handleClick} className='search-button'><RiSearchEyeLine /></button>
        </div>
        <div className='right-container'>
          <h3>get formatted IBAN number for your convenience</h3>
          {input &&
          <>
            <div className='continuous-output'>
              <p>{input}</p>
              {input && <RiFileCopy2Fill onClick={()=>handleCopy(input)} className='copy-icon'/>}
            </div>
            <div className='spaced-output'>
              {Array.from({ length: Math.ceil(input.length /4) }, (_, i) => {
                const segment = input.slice(i*4, i*4 + 4);
                return (
                  <div key={i}>
                    <p>{segment}</p>
                    <RiFileCopy2Fill onClick={()=>handleCopy(segment)} className='copy-icon'/>
                  </div>
                );
              })}
            </div>
          </>
          }
        </div>
      </div>
      <footer className='copyright'>
      <p>© 2024 <a href="https://yuliakapustinaweb.web.app/">YuliaWebDev</a> All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App
