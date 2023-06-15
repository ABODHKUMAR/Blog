const topics = [];

export const addTopic = (topic) => {
  topics.push(topic);
  console.log(topic)
  console.log("topic file")
};

export const getTopics = () => {
  return topics ;
}

