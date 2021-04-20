import React, {useState} from "react";
import ghibliMovies from './data/ghibli_movies_info.json';
import './ghibli.css';
import { CSSTransition, TransitionGroup } from 'react-transition-group';


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
    console.log(curPosters)
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
        <button className='string-btn' onClick={() => onClickString()}><img src={require(`./img/line.png`)}></img></button>
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
