import { Link, useLocation } from 'react-router-dom';
import { EditorState, convertToRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import './BlogEditor.css';
import { useState } from 'react';
const myMap = require('./Blogdata');
var key="";
var cnt=1;
var temp;
const BlogEditor = () => {
  const [editorState, setEditorState] = useState(() => EditorState.createEmpty());
  const location = useLocation();
  const { from } = location.state;
  temp=from;
  const handleEditorChange = (newEditorState) => {
    setEditorState(newEditorState);
  };

  const handlePublish = () => {
    const contentState = editorState.getCurrentContent();
    const content = contentState.getPlainText(); // Extract plain text
  
    // Get the image URL from the editorState (assuming there is only one image)
    const blocks = contentState.getBlockMap().toList();
    const imgBlock = blocks.find(block => block.getType() === 'atomic');
    let imageUrl;
  
    if (imgBlock) {
      const entityKey = imgBlock.getEntityAt(0);
      const entity = contentState.getEntity(entityKey);
      const data = entity.getData();
      imageUrl = data.src;
    }
  
    // Update myMap with the new content and image values
     key = from + cnt.toString();
    cnt++;
  
    // Update myMap with the new key, content, and image values
    myMap[key] = {
      content: content,
      img: imageUrl
    };
    // You can do something with myMap here, such as saving it to a database
  
    // Redirect to the show page
    // ...
    console.log(imageUrl)
    console.log(myMap)

  };
  
  
    // You can do something with myMap here, such as saving it to a database
  
    // Redirect to the show page
    // ...
  //   https://static.wikia.nocookie.net/characterprofile/images/c/c8/BotW_Link.png/revision/latest?cb=20170306180639
  
  return (
    <div className="blog-editor-container">
      <h2 className="blog-editor-heading">Blog Editor</h2>
      <Editor
        editorState={editorState}
        onEditorStateChange={handleEditorChange}
      />
      <div className="blog-editor-buttons">
        <Link to="/blog-editor/show"   state={{from:temp}}>
          <button className="publish-button" onClick={handlePublish}>
            Publish
          </button>
        </Link>
      </div>
    </div>
  );
};

export default BlogEditor;
