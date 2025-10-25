import React from 'react';

interface FeatureProps {
    icon: string;
    title: string;
    description: string;
    alt: string; 
}




export const Feature:React.FC<FeatureProps> = ({icon, title, description, alt}) => {
    return (
    <div className="feature-item">
      <img src={icon} alt={alt} className="feature-icon" />
      <h3 className="feature-item-title">{title}</h3>
      <p>{description}</p>
    </div>
    );
}