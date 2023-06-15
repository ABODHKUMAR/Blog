import React, { useState } from 'react';
import { addTopic } from './topics.js';
const myMap = require('./Blogdata');
const AddTopicPage = () => {
  const [topicName, setTopicName] = useState('');
  const [keywords, setKeywords] = useState('');

  const handleSaveTopic = () => {
    // Save the topic and keywords
    const newTopic = {
      name: topicName,
      keywords: keywords.split(',').map((keyword) => keyword.trim()),
    };
    console.log(newTopic);
    console.log("hi")
    addTopic(newTopic);

    // Reset the form fields
    setTopicName('');
    setKeywords('');
  };

  return (
    <div>
      <h2>Add Topic</h2>
      <input
        type="text"
        placeholder="Topic Name"
        value={topicName}
        onChange={(e) => setTopicName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Keywords (comma-separated)"
        value={keywords}
        onChange={(e) => setKeywords(e.target.value)}
      />
      <button onClick={handleSaveTopic}>Save</button>
    </div>
  );
};

export default AddTopicPage;
