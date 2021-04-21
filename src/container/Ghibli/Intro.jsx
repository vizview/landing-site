import React, {useState} from "react";
import { useTransition, animated } from '@react-spring/web'
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


  const posters = [
    renderImages(1),
    renderImages(2),
    renderImages(3),
    renderImages(4),
    renderImages(5)
  ]

  const pages = [
    ({ style }) => <animated.div className='d-flex flex-row justify-content-center' style={{ ...style }}>{renderImages(0)}</animated.div>,
    ({ style }) => <animated.div className='d-flex flex-row justify-content-center' style={{ ...style }}>{renderImages(1)}</animated.div>,
    ({ style }) => <animated.div className='d-flex flex-row justify-content-center' style={{ ...style }}>{renderImages(2)}</animated.div>,
  ];

  function renderImages(index) {
    const curPosters = posterImages[index];
    const posters = [];
      for(const item in curPosters) {
        const frameTops = [32.5, 96.5, 56, 27, 68]
        posters.push(
          <div className='ghibli-poster'
            key={item}
            style={{top: frameTops[item] + 'px'}}>
            <img src={curPosters[item]} />
          </div>
        );
      }
    return posters;
  }

  function onClickString() {
    setImageIndex(() => (imageIndex + 1) % 3);
  }

  const transitions = useTransition(imageIndex, {
    keys: null,
    from: { position:'absolute',  opacity: 0, transform: 'translate3d(0,-100%,0)' },
    enter: { position:'absolute',  opacity: 1, transform: 'translate3d(0, 0% ,0)' },
    leave: { position:'absolute', opacity: 0, transform: 'translate3d(0,-100%,0)' },
    trail: 400
  })

  return (
    <section>
      <div className='ghibli-poster-container'>
          {transitions((style, i) => {
            const Page = pages[i]
            return Page &&<Page style={style} />
          })}
        <div className='string-container'>
          <button className='string-btn mb-0' onClick={() => onClickString()}><img src={stringImg}></img></button>
          <Arrow />
          <div className='text-handwritten'>Click</div>
        </div>
      </div>
      <h1 className='text-center'>
        <div>The</div> Colors in Ghibli Posters
      </h1>
      <p className='col-lg-3'>
        If you fall in love with one Studio Ghibli film, 
        then you must try out the other ones. As big fans of the films, 
        we have noticed that there might be some commonalities among them.
        Therefore, we decided to look at all 21 official movie posters of
        Studio Ghibli to investigate whether there is a pattern in the colors used. 
      </p>
    </section>
  );
}
