import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import "./Mission.css"

const ProductList = () => {
  const products = [
    ["Product item 1", "keyword1", "keyword2"],
    ["Product item 2", "keyword3", "keyword4"],
    ["Product item 3", "keyword5"],
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
    const colors = products.map(() => ({
      borderColor: getRandomColor(),
      backgroundColor: getRandomColor(),
      textColor: getRandomColor()
    }));

    setButtonColors(colors);
  }, []);

  return (
    <div className='mission-list-div'>
      <div>
        
        {products.map((item, index) => (
          <div className='topic-string-keyword' key={index}>
            <div className='only-string'>
              <div className='string'>
                <h3>{item[0]}</h3>
              </div>
              <div>
                <Link to="/blog-editor" state={{ from: "ProductList" + item[0] }}>
                  <button className='write-button'>Write</button>
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

export default ProductList;
