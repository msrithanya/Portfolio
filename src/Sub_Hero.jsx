import React from 'react'
import './Sub_Hero.css';
function Sub_Hero() {
  return (
    <div className='ssection'>
        <div className='left'>
            <div style={{width:'100%',backgroundColor:' rgba(23, 23, 23, 1)',height:'65%',border:'1px solid rgba(35, 35, 35, 1)',borderRadius:'20px'}}> 
                <h1 style={{color:'white',backgroundColor:' rgba(23, 23, 23, 1)',marginLeft:"3vw",paddingTop:"3vh",borderBottom:'1px solid rgba(35, 35, 35, 1)',paddingBottom:'20px',width:"80%"}}>About me</h1>
            <p style={{color:'white',marginTop:"5vh",marginLeft:"3vw"}}>I combine technical expertise with a passion for <br/>creating intuitive and engaging user experiences. With<br/>a strong foundation in front-end development, UI/UX<br/>
                design, and a knack for solving complex problems, I <br/>love crafting solutions that are not only functional but<br/>aesthetically pleasing</p>
            
            </div>
            <div style={{width:'100%',height:'35%',marginTop:'2vh',display:'flex'}} >
              <div style={{width:'49%',backgroundColor:' rgba(23, 23, 23, 1)',height:'100%',border:'1px solid rgba(35, 35, 35, 1)',borderRadius:'20px'}}>
              <h1 style={{color:'white',marginLeft:"3vw",paddingTop:"3vh",borderBottom:'1px solid rgba(35, 35, 35, 1)',paddingBottom:'20px',width:"80%",backgroundColor:' rgba(23, 23, 23, 1)'}}>View projects in:</h1>
              <div className='outer'>
                <div className='inn'>
                <div></div>
                <div></div>
                <div></div>
                </div>
                
              </div>
              </div>
              <div style={{width:'49%', marginLeft:'16px',backgroundColor:' rgba(23, 23, 23, 1)',height:'100%',border:'1px solid rgba(35, 35, 35, 1)',borderRadius:'20px',}}></div>
            </div>
        </div>
        <div className='right'>
            <div style={{backgroundColor:' rgba(23, 23, 23, 1)',height:'49%',border:'1px solid rgba(35, 35, 35, 1)',borderRadius:'20px',position:"relative"}}><img style={{backgroundColor:"transparent",height:'100%',width:'80%',marginLeft:"10%"}} src='orbit.png'/>
            <img className='yoga' src='yoga.png'/>
            </div>
            <div style={{backgroundColor:' rgba(23, 23, 23, 1)',height:'50%',border:'1px solid rgba(35, 35, 35, 1)',borderRadius:'20px',marginTop:'16px'}}></div>
        </div>
    </div>
  )
}

export default Sub_Hero