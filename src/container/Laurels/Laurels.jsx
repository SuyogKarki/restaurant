import React from 'react';
import { images, data } from '../../constants';
import { SubHeading } from '../../components';
import './Laurels.css';

const AwardCard = ({ award: { imgUrl, title, subtitle } }) => (
  <div className='app__laurels_award-card'>
    <img src={imgUrl} alt='award' />
    <div className='app__laurels_award-card_content'>
      <p className='p__cormorant' style={{ color: '#dcca87' }}>
        {title}
      </p>
      <div className='p__cormorant'>{subtitle}</div>
    </div>
  </div>
);

function Laurels() {
  return (
    <div className='app__bg app__wrapper section__padding' id='awards'>
      <div className='app__wrapper_info'>
        <SubHeading title='Awards & recognition' />
        <h1 className='headtext__cormorant'> Our Laurels</h1>
        <div className='app__laurels_awards'>
          {data.awards.map(award => (
            <AwardCard award={award} key={award.title} />
          ))}
        </div>
      </div>
      <div className='app__wrapper_img'>
        <img src={images.laurels} alt='laurels' />
      </div>
    </div>
  );
}

export default Laurels;
