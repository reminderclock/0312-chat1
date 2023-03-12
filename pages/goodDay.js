import {useEffect, useState} from 'react'
import axios from 'axios'
const GoodDay = () => {
  const [userInput, setUserInput] = useState('');
  const [result, setResult] = useState('');
  useEffect(()=> {
  }, [userInput])
  const submit = async () => {
    const url = "/api/hello"
    const res = await axios.post(url, {
      userInput: userInput
    })

    setResult(res.data.result)
    return true
  }
  return <div className='nice'>
    <input onChange={e => setUserInput(e.target.value)}></input>
    <button onClick={e => submit()}>send</button>
    <div>{result}</div>
  </div>
}
export default GoodDay