import './App.css';
import HomeBtn from './components/HomeBtn'
import React,{useState} from 'react'

// TODO: Add contact button
function App() {

  const [about, setAbout] = useState(false)

  const resumeImages = [
    {
      'source': require('./assets/GDrive@2x.png')
    } 
  ]
  const dataImages = [
    {
      'source': require('./assets/R@2x.png')
    },
    {
      'source': require('./assets/Python@2x.png')
    }
  ]
  const webImages = [
    {
      'source': require('./assets/Html@2x.png')
    },
    {
      'source': require('./assets/React@2x.png')
    }
  ]
  const gitImages = [
    {
      'source': require('./assets/Github@2x.png')
    }
  ]
  const dataProjects = [
    {
      'preview': true,
      "name": "FforFlash Inference",
      "imgSource": require('./assets/R@2x.png'),
      "vidSource": require('./assets/FforFlash.mov'),
      "link": 'https://github.com/aasuter/FforFlashInference',
      "description": 'Comparing proportions of a sample using bootstrap simulation based hypothesis testing with confidence intervals and the Asymptotic Two-sample Z-test. ',
      "demo": false
    },
    {
      "name": "Riot API Data Wrangling",
      "imgSource": require('./assets/Python@2x.png'),
      "vidSource": require('./assets/wrangling.mov'),
      "link": 'https://github.com/aasuter/LoLDataWrangling',
      "description": 'Python program using the Cassiopeia library to extract large samples of high tier League of Legends match data from the Riot Games API. Independence is accounted for using random sampling and other factors.',
      "demo": false
    },
    {
      "name": "College Data Predictions",
      "imgSource": require('./assets/R@2x.png'),
      "vidSource": require('./assets/Ames.mov'),
      "link": 'https://github.com/aasuter/CollegePredictions',
      "description": 'Model evaluation and selection on the ISLR College dataset. Our team used cross-validation and MSE to evaluate the best regression model (Lasso, Ridge, Backwards Selection, ...) to predict Grduation Rate based on the other 17 input variables.',
      "demo": false
    },
    {
      "name": "FforFlash Data Wrangling",
      "imgSource": require('./assets/Python@2x.png'),
      "vidSource": require('./assets/FlashPy.mov'),
      "link": 'https://github.com/aasuter/LoLDataWrangling',
      "description": 'Similar to Riot API Data Wrangling Project but on a smaller scale. Using the Cassiopeia python library the python program accesses the Riot Games API and extracts data that is relevent for my FforFlash Inference Data Analysis.',
      "demo": false
    }
  ]
  const webProjects = [
    {
      "name": "Alex Mcfly Website",
      "imgSource": require('./assets/React@2x.png'),
      "vidSource": require('./assets/Marty.mov'),
      "link": 'https://github.com/aasuter/alex-mcfly-website',
      "description": 'Gatsby single-page responsive website. Assets designed customly for the client.',
      "demo": true,
      "live_link": 'https://alexmcfly.netlify.app/'
    },
    {
      "name": "NW Heli Structures Website",
      "imgSource": require('./assets/Html@2x.png'),
      "vidSource": require('./assets/NWHS.mov'),
      "link": 'https://github.com/aasuter/NWHeliStructures',
      "description": 'Large multi-page responsive website designed for Northwest Heli Structures featuring HTML, JS, and CSS.',
      "demo": true,
      "live_link": 'https://nwhelistructures.org/'
    },
    {
      "name": "EYM Website",
      "imgSource": require('./assets/React@2x.png'),
      "vidSource": require('./assets/EYM.mov'),
      "link": 'https://github.com/aasuter/eym-v1',
      "description": 'React single-page responsive website. Assets designed customly for the Eat Your Memes podcast.',
      "demo": true,
      "live_link": 'https://eatyourmemes.netlify.app/'
    }
  ]

  const ghNoPreview = [
    {
      'preview': false,
    }

  ]

  const resumeNoPreview = [
    {
      'preview': false,
    }
  ]

  const ghLink = 'https://github.com/aasuter'
  const resumeLink = 'https://drive.google.com/file/d/1p7pU8SO2ckksIUsl7RJ0nZ9mG8j3NJ1D/view?usp=sharing'


  return (
    
    <div className='container'>
      <div className='name-container noselect'>
        Andrew<br></br><span className='last-name'>Suter</span>
      </div>
      
      {
        about?
        <div className='about-container'>

          I am a recent graduate of the University of British Columbia, 
          where I got my degree in Mathematics from the Faculty of Science. 
          <br></br> <br></br> 
          I was born and raised in Bellingham, Washington, which is where I currently reside. 
          <br></br> <br></br>  
          Coding and math have been my interests since I was very young. I am primarily 
          interested in data science as I enjoy its widespread applications to many disciplines. 
          <br></br> <br></br> 
          Outside of my work I enjoy to play soccer and tennis. I also like to play League of 
          Legends and Age of Empires on cold days. 
          <br></br> <br></br> 
          If you would like to see my work or contact me please follow the navigation below.
          <h1 onClick={() => {setAbout(!about)}}><span className='x'>&#10005;</span></h1>
        </div>:null
      }

      {
        !about?
        <div className='closed-about-container'>
          <h1 onClick={() => {setAbout(!about)}}><span className='plus'>&#10133;</span></h1>
        </div>:null
      }
      
      <div className='button-container'>
        <HomeBtn text='Data' styleName='button-a' images={dataImages} preview={true} projects={dataProjects}/>
        <HomeBtn text='Web' styleName='button-b' images={webImages} preview={true} projects={webProjects}/>
        <HomeBtn text='Github' styleName='button-c' images={gitImages} preview={ghNoPreview.preview} link={ghLink}/>
        <HomeBtn text='Resume' styleName='button-d' images={resumeImages} preview={resumeNoPreview.preview} link={resumeLink}/>
      </div>

    </div>
    
    

  );
}
export default App;