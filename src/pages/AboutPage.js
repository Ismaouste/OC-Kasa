import React from 'react';
import { useParams } from 'react-router-dom';
import cardData from '../logements.json'; 

import '../styles/pages/AboutPage.scss';


function AboutPage() {
  const { title } = useParams();

}

export default AboutPage;