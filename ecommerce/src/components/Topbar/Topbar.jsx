import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import ('./topbar.scss');


export default function Topbar(){
    return(
    <div className='topbar'>
        <div className="wrapper">
            <div className="left">
                <a href='#intro' className='logo'>
                    HG La Fábrica en Casa
                </a>
                <div className="itemcontainer">
                    <YouTubeIcon className='icon' onclick={()=>window.open("https://www.youtube.com/channel/UCb0zUX-LjRFm0bxXU4L-Kpw")}/>
                    <span>Youtube Channel</span>
                </div>

                <div className="itemcontainer">
                <TwitterIcon className='icon' onclick={()=>window.open("https://www.youtube.com/channel/UCb0zUX-LjRFm0bxXU4L-Kpw")}/>
                    <span>Youtube Channel</span>
                </div>
            </div>
            
            <div className="menu">
                <span className='line-1'></span>
                <span className='line-2'></span>
                <span className='line-3'></span>
            </div>
        </div>
    </div>
    );
}