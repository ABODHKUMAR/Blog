import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import "./Mission.css"

const MissionList = () => {
  const mission = [
    ["The Importance of Establishing a Strong Online Presence for Small Businesses", "online presence", "small businesses", "digital marketing", "branding"],
    ["How Fast Turnaround Times in Logo and Website Design Benefit Your Business", "fast turnaround", "logo design", "website design", "branding"],
    ["Affordable Branding Solutions for Startups and Entrepreneurs", "affordable branding", "startups", "entrepreneurs", "logo design", "website design"],
    ["The Benefits of Comprehensive Branding Services for Small to Medium-Sized Businesses", "comprehensive branding", "small businesses", "logo design", "website design", "social media management"],
    ["Expert Tips for Choosing the Right Digital Marketing Agency for Your Business", "digital marketing agency", "tips", "branding", "website design", "social media management"]
];


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
    const colors = mission.map(() => ({
      borderColor: getRandomColor(),
      backgroundColor: getRandomColor(),
      textColor: getRandomColor()
    }));

    setButtonColors(colors);
  }, []);

  return (
    <div className='mission-list-div'>
      <div>
        {mission.map((item, index) => (
          <div className='topic-string-keyword' key={index}>
            <div className='only-string'>
              <div className='string'>
                <h3>{item[0]}</h3>
              </div>
              <div>
                <Link to="/blog-editor" state={{ from: "MissionList" + item[0] }}>
                  <button className='write-button'>Write »</button>
                </Link>
              </div>
            </div>
            <div className='only-keyword'>
              {item.slice(1).map((keyword, subIndex) => (
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

export default MissionList;
