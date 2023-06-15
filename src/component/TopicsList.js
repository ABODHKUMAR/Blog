// import React, { useEffect, useState } from 'react';
import { getTopics } from "../component/topics";
// import { Link } from 'react-router-dom';
// import "./Mission.css";

// const TopicsList = () => {
//   const topics = getTopics();

//   // Generate random color
//   const getRandomColor = () => {
//     const letters = '0123456789ABCDEF';
//     let color = '#';
//     for (let i = 0; i < 6; i++) {
//       color += letters[Math.floor(Math.random() * 16)];
//     }
//     return color;
//   }

//   // State to store button colors
//   const [buttonColors, setButtonColors] = useState([]);

//   useEffect(() => {
//     // Generate random colors for each button
//     const colors = topics.map(() => ({
//       borderColor: getRandomColor(),
//       backgroundColor: getRandomColor(),
//       textColor: getRandomColor()
//     }));

//     setButtonColors(colors);
//   }, []);

//   return (
//     <div>
//       <div className='topic-list'>
//         <ul>
//           {topics.map((topic, index) => (
//             <li key={index}>
//               {topic.name}
//               <ul>
//                 {topic.keywords.map((keyword, subIndex) => (
//                   <li key={subIndex}>
//                     <button
//                       className='keyword-button'
//                       style={{
//                         borderColor: buttonColors[index]?.borderColor,
//                         backgroundColor: buttonColors[index]?.backgroundColor,
//                         color: buttonColors[index]?.textColor
//                       }}
//                     >
//                       {keyword}
//                     </button>
//                   </li>
//                 ))}
//               </ul>
//               <Link to="/blog-editor" state={{ from: "CustomeList" + topic.name }}>
//                 <button>Write</button>
//               </Link>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default TopicsList;


import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import "./Mission.css"

const TopicsList  = () => {
  const topics = getTopics();

  // Generate random color
  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  // State to store button colors
  const [buttonColors, setButtonColors] = useState([]);

  useEffect(() => {
    // Generate random colors for each button
    const colors = topics.map(() => ({
      borderColor: getRandomColor(),
      backgroundColor: getRandomColor(),
      textColor: getRandomColor()
    }));

    setButtonColors(colors);
  }, []);

  return (
    <div className='mission-list-div'>
      <div>
        {topics.map((topic, index) => (
          <div className='topic-string-keyword' key={index}>
            <div className='only-string'>
              <div className='string'>
                <h3>{topic.name}</h3>
              </div>
              <div>
              <Link to="/blog-editor" state={{ from: "CustomeList" + topic.name }}>
                 <button  className='write-button'>Write »</button>
              </Link>
              </div>
            </div>
            <div className='only-keyword'>
              {topic.keywords.map((keyword, subIndex) => (
                <div className='key-word' key={subIndex}>
                  <button
                    className='keyword-button'
                    style={{
                      borderColor: buttonColors[index]?.borderColor,
                      backgroundColor: buttonColors[index]?.backgroundColor,
                      color: buttonColors[index]?.textColor
                    }}
                  >
                    {keyword}
                  </button>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopicsList ;
