import React, {useState} from "react";
import ghibliMovies from './data/ghibli_movies_info.json';
import stringImg from './img/line.png';
import {ReactComponent as Arrow} from './img/ghibli-arrow.svg';
import './ghibli.css';

export default function Intro() {
  const [imageIndex, setImageIndex] = useState(0);
  const posterImages = getImages();

  function getImages() {
    let images = [];
    let count = 0;
    for (const item in ghibliMovies) {
      if(count % 5 === 0) {
        images.push([]);
      }
      images[Math.floor(count / 5)].push(ghibliMovies[item].poster_path);
      count ++;
    }
    return images;
  }

  function renderImages() {
    const curPosters = posterImages[imageIndex];
    const  posters = [];
      for(const item in curPosters) {
        const frameTop = Math.random() * (100 - 20) + 20;
        posters.push(
          <div className='ghibli-poster'
            key={item}
            style={{top: frameTop + 'px'}}>
            <img src={curPosters[item]} />
          </div>
        );
      }
    return posters;
  }

  function onClickString() {
    setImageIndex(() => imageIndex === 4 ? 0 : imageIndex + 1);
  }

  return (
    <section>
      <div className='ghibli-poster-container'>
        <div className='d-flex flex-row justify-content-center'> 
          {renderImages()}
        </div>
        <div classname='string-container'>
          <button className='string-btn mb-0' onClick={() => onClickString()}><img src={stringImg}></img></button>
          <Arrow />
          <div className='text-handwritten'>Click</div>
        </div>
      </div>
      <h1 className='text-center'>
        <div>The</div> Colors in Ghibli Posters
      </h1>
      <p className='col-lg-4'>
        If you fall in love with one Studio Ghibli film, 
        then you must try out the other ones. As big fans of the films, 
        we have noticed that there might be some commonalities among them.
        Therefore, we decided to look at all 21 official movie posters of
        Studio Ghibli to investigate whether there is a pattern in the colors used. 
      </p>
    </section>
  );
}
