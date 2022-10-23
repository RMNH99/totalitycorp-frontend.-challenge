import React from "react";
import Background from "../Background";
import './home.css';
import Sidebar from "../Sidebar";


const Home=()=>{
  
    // ........................To Close Menu......................
    const close=()=>{
        document.querySelector('.blur-bgaactive').className ='blur-bg';
        document.querySelector('.sidebaractive').className='sidebar';
    }

    // ........................To Slide Background.................

//     document.lastScrollPosition=0;
//     document.lastCentered=0;
//     document.onWayTo=null;

//    document.addEventListener('scroll',()=>{
    
//     const direction = window.pageYOffset - document.lastScrollPosition > 0 ? 'down':'up';
//     const sect = [...document.querySelectorAll('.section')];

//     if(document.onWayTo === null){
//         const destIndex = direction === 'up' ? document.lastCentered -1 : document.lastCentered +1;
         
//         if(destIndex >=0 && destIndex < sect.length){
//             console.log({destIndex,direction});
//             document.onWayTo = destIndex;
//             window.scroll(0,sect[destIndex].offsetTop);
//         }
//     }
   

//     sect.forEach((section,index)=>{
//         if(window.pageYOffset===section.offsetTop){
//             document.lastCentered = index;
//             section.className='active';
//             if(document.onWayTo=== index){
//                 document.onWayTo=null;
//             }
//         }
        
//     })
//     document.lastScrollPosition = window.pageYOffset;
//    })

return(
    <div>
        
        <div className="blur-bg" onClick={close}></div>

        <Sidebar/>
       

        <Background/>
        

    </div>
);
}
export default Home;