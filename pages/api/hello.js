const axios = require('axios') 
const OPENAI_API_KEY = process.env.OPENAI_API_KEY

export default async function handler(req, res) {
  let userInput = req.body.userInput

  const url = "https://api.openai.com/v1/completions"
  const response = await axios.post(url, {
    model: "text-davinci-003",
    prompt: userInput,
    max_tokens: 100,
    n:1,
    stop: null,
    temperature: 0.7,
  }, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${OPENAI_API_KEY}`
    }
  })
  res.status(200).json({ result: response.data.choices[0].text })
}