import React from 'react';
import { BsFillPlayFill, BsPauseFill } from 'react-icons/bs';
import { meal } from '../../constants';
import './Intro.css';

function Intro() {
  const vidRef = React.useRef();
  const [play, setPlay] = React.useState(false);
  const handleVideo = () => {
    setPlay(prevPlay => !prevPlay);
    if (play) {
      vidRef.current.pause();
    } else {
      vidRef.current.play();
    }
  };
  return (
    <div className='app__video'>
      <video src={meal} type='video/mp4' loop controls={false} ref={vidRef} muted />
      <div className='app__video-overlay flex__center'>
        <div className='app__video-overlay_circle flex__center' onClick={handleVideo}>
          {play ? (
            <BsPauseFill color='#fff' fontSize={30} />
          ) : (
            <BsFillPlayFill color='#fff' fontSize={30} />
          )}
        </div>
      </div>
    </div>
  );
}

export default Intro;
