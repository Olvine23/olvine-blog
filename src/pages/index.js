import * as React from 'react'
import {Link} from 'gatsby';
import Layout from '../components/layout';
import { StaticImage } from 'gatsby-plugin-image';


const IndexPage = () => {
  return (
     <Layout pageTitle = "Home Page">
       <p>I am trying to make a blog and change the world</p>

       <StaticImage placeholder= "blurred" width ={900} height ={200} src = "../images/love.jpg" />
        <StaticImage placeholder= "blurred" width ={200} height ={200} src = "../images/love_zone.jpg" />
        <StaticImage placeholder= "blurred" width ={1000} height ={200} src = "../images/together.jpg" />

        <p>Life is amazing , love is amazing. Our souls, hearts and bodies filled with pleasure</p>

        <h2> Life Without you  </h2>
        <StaticImage placeholder = "blurred" width = {200} height ={200} src = '../images/download.jpeg' />
        <p> I say , you are my home, my light, <br></br>
        My breath, my <span>pulse </span> and my life <br></br> 
        Without you , what would I be? <br></br>
        Statement said, question asked <br></br>
        But never have I imagined or thought <br></br>
        That this would be a reality
        </p>


        
         

     

     </Layout>
  )
}

export default IndexPage;
 
