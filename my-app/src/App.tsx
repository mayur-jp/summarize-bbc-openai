import React, { useEffect, useState } from 'react';
import './App.css';
import Form from './components/Form';
import Summary from './components/Summary';
import openai from './openai';

function App() {
  const [bbcLink, setBbcLink] = useState<string>("");
  const [change, setChange] = useState(false);

  const [card, setCard] = useState({
    title: "",
    desc: ""
  });

  const summarizeBBCLink = async (link: string) => {
    const summaryCompletion = await openai.createCompletion({
      model: 'text-davinci-003',
      prompt: `Summary for this bbc link ${link}`,
      max_tokens: 2000
    });
    const titleCompletion = await openai.createCompletion({
      model: 'text-davinci-003',
      prompt: `Title for this bbc link ${link}`,
      max_tokens: 2000
    });

    setCard({
      title: titleCompletion.data.choices[0].text || "",
      desc: summaryCompletion.data.choices[0].text || ""
    })
  }

  useEffect(() => {
    if (bbcLink) {
      summarizeBBCLink(bbcLink)
    }
    // eslint-disable-next-line
  }, [change])

  return (
    <div className="app">
      <Form {...{ bbcLink, setBbcLink, setChange, change }} />
      {card.title && <Summary title={card.title} desc={card.desc} />}
    </div>
  );
}

export default App;
