import React,{useState} from 'react'


import Previews from './Previews'
import Category from './Category'
import SubCategory from './SubCategory'


// TODO: Add a Video for Resume

const HomeBtn = ({text,styleName, images, projects, preview, link}) => {
    const [transition, setTransition] = useState([true,false,false])

    return (
      
      <div className='button-container'>
        
        {
          transition[0]?
          <Category text = {text} styleName={styleName} transition={transition} setTransition = {setTransition}/>:null
        }
        {
          transition[1]?
          <SubCategory text={text} projects={projects} transition={transition} setTransition={setTransition} styleName={styleName} images = {images} preview={preview} link={link}/>:null
        }
        {
          transition[2]?
          <Previews styleName={styleName} projects={projects} transition={transition} setTransition={setTransition}/>:null
        }

        
      </div>
      
    )
};

export default HomeBtn