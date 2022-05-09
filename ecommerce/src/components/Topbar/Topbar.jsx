import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import('../../../public/image/logo.jpg');
import ('./topbar.scss');


export default function Topbar(){
    return(
    <div className='topbar'>
       <div className="left">
            <div className="logo">
                
            </div>
            <div className='iconContainer'>
               <div className="youtubeIcon">

               </div>
               <div className="socialIcon">
                    
               </div>
            </div>
       </div>
       <div className="right">
            <div className="menu">

            </div>
       </div>
    </div>
    );
}