import VideoPreview from "./VideoPreview";


const Previews = ({setTransition,projects, styleName}) => {
    return(
        <div className={'preview-container'}>
            <h1 onClick={()=>setTransition([false,true,false])}><span>&#10005;</span></h1>
            {
                projects.map(prj =>
                    <VideoPreview video={prj.vidSource} label={prj.name} link={prj.link} image = {prj.imgSource} key={prj.name} desc={prj.description} live_link={prj.live_link} demo={prj.demo} styleName={styleName}/>
                )
            }
            
        </div>
    )
}
export default Previews;