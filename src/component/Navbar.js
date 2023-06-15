import React, { useState } from 'react';
import './Navbar.css';
import { useNavigate } from 'react-router-dom';
import { getTopics } from "../component/topics";
import TopicsList from './TopicsList';
import MissionList from './MissionList';
import ICPList from './ICPList';
import ProductList from './ProductList';
import RecommendedTopic from './RecommendedTopic';

const Navbar = () => {
  const navigate = useNavigate();
  const [showTopics, setShowTopics] = useState(false);
  const [showMission, setShowMission] = useState(false);
  const [showICP, setShowICP] = useState(false);
  const [showProduct, setShowProduct] = useState(false);

  const handleAddTopic = () => {
    navigate('/add-topic');
  };

  const handleCustomButtonClick = () => {
    setShowTopics(true);
    setShowMission(false);
    setShowICP(false);
    setShowProduct(false);
  };

  const handleMissionButtonClick = () => {
    setShowTopics(false);
    setShowMission(true);
    setShowICP(false);
    setShowProduct(false);
  };

  const handleICPButtonClick = () => {
    setShowTopics(false);
    setShowMission(false);
    setShowICP(true);
    setShowProduct(false);
  };

  const handleProductButtonClick = () => {
    setShowTopics(false);
    setShowMission(false);
    setShowICP(false);
    setShowProduct(true);
  };

  const handleAllButtonClick = () => {
    setShowTopics(true);
    setShowMission(true);
    setShowICP(true);
    setShowProduct(true);
  };

  return (
    <div>
      <h2 className="navbar-heading">Categories</h2>
      <nav className="navbar" style={{ overflow: 'auto' }}>
        
        <div className="navbar-categories">
          <button className="navbar-category" onClick={handleAllButtonClick}>
            All
          </button>
          <button className="navbar-category" onClick={handleCustomButtonClick}>
            Custom
          </button>
          <button className="navbar-category" onClick={handleICPButtonClick}>
            ICP
          </button>
          <button className="navbar-category" onClick={handleMissionButtonClick}>
            Mission
          </button>
          <button className="navbar-category" onClick={handleProductButtonClick}>
            Product
          </button>
        </div>
        <div className='add-topic'>
          <button className="navbar-write-button" onClick={handleAddTopic}>
            Add Topic
          </button>
        </div>
       
      </nav>
      <RecommendedTopic/>
      {showTopics && <TopicsList />}
      {showMission && <MissionList />}
      {showICP && <ICPList />}
      {showProduct && <ProductList />}
    </div>
  );
};

export default Navbar;
