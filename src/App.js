import React, { useState, useEffect } from 'react';
import './App.css';
import VideoCard from './Components/VideoCard/VideoCard';
import db from './Components/FireBaseConfig/FirebaseConfig';



function App() {

  const [reels, setReels] = useState([])

  useEffect(() => {
    db.collection('reels').onSnapshot(snapshot => {
      setReels(snapshot.docs.map(doc => doc.data()))
    })
  }, [])

  return (
    <div className="app">

      <div className="app__top">
        <div className="app__logo">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/120px-Instagram_logo_2016.svg.png" alt="ig" />
          <h1>Reels</h1>
        </div>
      </div>

      <div className="app__videos">
        {reels.map(({ channel, song, avatarSrc, url, likes, shares }) => (

          <VideoCard
            channel={channel}
            song={song}
            avatarSrc={avatarSrc}
            url={url}
            likes={likes}
            shares={shares}
          />

        ))}

      </div>
    </div>
  );
}

export default App;


// "https://instagram.fdac5-1.fna.fbcdn.net/v/t50.2886-16/118600429_318787009185645_8701683070824797714_n.mp4?_nc_ht=instagram.fdac5-1.fna.fbcdn.net&_nc_cat=109&_nc_ohc=dSBrWh64Eg4AX9DFEZw&oe=5F5A2CC6&oh=af04cd6b2d3f6021d1abd00ce9979298"

// "https://instagram.fdac5-1.fna.fbcdn.net/v/t50.2886-16/118492140_159268775806212_8491776961807020188_n.mp4?_nc_ht=instagram.fdac5-1.fna.fbcdn.net&_nc_cat=100&_nc_ohc=wETIEbq6JFwAX_OWPq-&oe=5F59DC7B&oh=e7f0d84922100f3819bf4247f3693dd6"

// 'https://instagram.fdac5-1.fna.fbcdn.net/v/t50.2886-16/118985042_187153939525764_1334350632945044544_n.mp4?_nc_ht=instagram.fdac5-1.fna.fbcdn.net&_nc_cat=100&_nc_ohc=wVohsW6Bez4AX_UUr9M&oe=5F5B23EE&oh=ec23e6ee5747d638f411bcd16f8ccad2'

// "https://instagram.fdac5-1.fna.fbcdn.net/v/t50.2886-16/116978441_238076977210718_6341506063403619458_n.mp4?_nc_ht=instagram.fdac5-1.fna.fbcdn.net&_nc_cat=102&_nc_ohc=_XcAZBbrg30AX-iG83q&oe=5F5AE033&oh=2169acf154e1d691497d4367baed9e21"

