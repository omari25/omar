import React from 'react'
import img from './images/juhug.jpg'

function Blog() {
  return (
    <div className='my-blog' id='blog'>
        <p style={{textAlign: "center"}}>Check Out My Latest Blog Posts</p>
        <p id='the-bold-h1'>My <span className='colored-name'>Blog</span></p>
        <div className='blogs-div'>
            <a href="" className='one-blog'>
                <div className='blog-image-div'>
                    <img src={img} alt="" />
                </div>
                <div style={{width: "100%", height: "10px", backgroundColor:"#00b395", margin: "0"}}></div>
                <div className='blog-text-div'>
                    <p className='blog-text-div-p1'>The Importance Of Web Design</p>
                    <p style={{fontSize: "18px"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere molestiapraesentium, in aspernatur...</p>
                </div>
            </a>
            <a href="" className='one-blog'>
                <div className='blog-image-div'>
                    <img src={img} alt="" />
                </div>
                <div style={{width: "100%", height: "10px", backgroundColor:"#00b395", margin: "0"}}></div>
                <div className='blog-text-div'>
                    <p className='blog-text-div-p1'>The Importance Of Web Design</p>
                    <p style={{fontSize: "18px"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere molestiapraesentium, in aspernatur...</p>
                </div>
            </a>
            <a href="" className='one-blog'>
                <div className='blog-image-div'>
                    <img src={img} alt="" />
                </div>
                <div style={{width: "100%", height: "10px", backgroundColor:"#00b395", margin: "0"}}></div>
                <div className='blog-text-div'>
                    <p className='blog-text-div-p1'>The Importance Of Web Design</p>
                    <p style={{fontSize: "18px"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere molestiapraesentium, in aspernatur...</p>
                </div>
            </a>
        </div>
    </div>
  )
}

export default Blog