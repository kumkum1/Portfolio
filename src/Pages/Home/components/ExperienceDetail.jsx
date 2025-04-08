import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export default function ExperienceDetail() {
  const location = useLocation();
  const navigate = useNavigate();
  const { item } = location.state || {};

  if (!item) {
    return <div>Experience not found</div>;
  }

  const imagePath = item.src.startsWith('./') ? item.src.substring(1) : item.src;

  return (
    <section className="experience-detail--section">
      <div className="experience-detail--container">
        <button 
          className="btn btn-outline-primary back-button"
          onClick={() => navigate(-1)}
        >
          ← Back to Experience
        </button>
        
        <div className="experience-detail--content">
          <div className="experience-detail--header">
            <div className="experience-detail--img">
              <img src={imagePath} alt={item.title} />
            </div>
            <h1 className="experience-detail--title">{item.title}</h1>
          </div>
          
          <div className="experience-detail--description">
            <p>{item.description}</p>
          </div>
        </div>
      </div>
    </section>
  );
} 