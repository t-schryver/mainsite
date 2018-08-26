import * as React from 'react';
// import logo from '../images/logo_transparent.png';
import '../css/App.css';
import styled from 'styled-components';
import VideoCover from 'react-video-cover';


import MyVideo from '../videos/MP4/Aloha-Mundo.mp4'


const CssContainer = styled.div`
  display:flex;
  justify-content: center;
  flex-direction: column;
  font-size: 40px;
  align-items: center;react-native
  height: 100vh;
  width: 100vw;
  `;

  const videoOptions = {

    src: MyVideo,
    autoPlay: true,
    loop: true,
    
    ref: videoRef => {
      this.videoRef = videoRef;
    },
    onClick: () => {
      if (this.videoRef && this.videoRef.paused) {
        this.videoRef.play();
      } else if (this.videoRef) {
        this.videoRef.pause();
      }
    },
    title: 'click to play/pause',
  };
export default class Home extends React.Component{
  static propTypes = {};
  render() {
    return (
      // <div >
      //   <div>
      //     <p style={{textAlign:'center'}}>THIS PAGE IS UNDER CONSTRUCTION</p>
      //   </div>
      //   <div className="App"> 
      //     <img src={logo} alt="logo" className="responsive"/>
      //   </div>
      // </div>
      <div>
        <div className='vidContainer'> 
          <VideoCover style={{width:'100%', height:'100%', overflowX:'hidden'}} videoOptions={videoOptions}></VideoCover>
          <CssContainer className='centered'>
            <h2>Quotes from</h2>
            <h1>Life is simple, if you let it be.</h1>
            <p>- Tim0thy Schryver -</p>
          </CssContainer>
        </div>
        

      </div>
    );
  }
}
