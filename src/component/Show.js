import React from 'react';
import myMap from './Blogdata';
import  "./Show.css"
const Show = () => {
  const myMapKeys = Object.keys(myMap);
  console.log(myMap)
 
  return (
    <div>
      <h2 className="blog-blog">Welcome to the Blog </h2>
      <div>
        {myMapKeys.map(key => (
          <div key={key}>
            <div className='blog'>
                   <div >
                      <img  className='image' src={myMap[key].img} alt="Girl in a jacket"></img>
                    </div>
                   <div className='para'>
                        <p >{myMap[key].content}</p>
                   </div>
             
                  
                
            </div>
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default Show;
