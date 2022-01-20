import ReactPlayer from 'react-player'

const VideoPreview = ({label, video, link, image, desc, live_link, demo, styleName}) => {
    return (
        <div className={'preview-container'}>
            <h2>{label}</h2>
            <a href={link} target="_blank" rel="noopener noreferrer">
                <div className='previews'>   
                    <ReactPlayer url={video} playing={true}  width='100%' height='100%' loop={true}/>
                    <img src={image} alt=''></img>
                </div>   
            </a>
            <p>{desc}</p>
            {
                demo?
                    <a href={live_link} target="_blank" rel="noopener noreferrer" className={`button ${styleName}  noselect live-text`}><span className='live-text'>Live</span></a>:null
            }
            
        </div>
    )
}

export default VideoPreview;