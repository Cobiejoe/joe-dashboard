import React from 'react';
import "./topbar.css";
import { NotificationsNone, Language, Settings } from '@material-ui/icons';

export default function Topbar() {
    return (
        <div className="topbar">
   <div className="topbarWrapper">
      <div className="topLeft">
         <span className="logo">joeAdminPanel</span>
      </div>
      <div className="topRight">
         <div className="topbarIconContainer">
            <NotificationsNone />
         <span className="topIconBadge">2</span>
         </div>
         <div className="topbarIconContainer">
            <Language />
         <span className="topIconBadge">2</span>
         </div>
         <div className="topbarIconContainer">
            <Settings />
         </div>
         <img src="https://scontent.fhio2-2.fna.fbcdn.net/v/t1.6435-9/93521067_10222061698755550_1324932513860157440_n.jpg?_nc_cat=104&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=vgy1pBcHmeYAX9a6WEG&_nc_ht=scontent.fhio2-2.fna&oh=5fbc469306b4ad086c8c753869d6eee1&oe=60E44935" alt="" className="topAvatar" />
      </div>
   </div>
</div>
               
)
}
