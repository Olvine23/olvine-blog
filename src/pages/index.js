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
        <StaticImage placeholder= "blurred" width ={200} height ={200} src = "../images/together.jpg" />

        <p>Life is amazing , love is amazing. Our souls, hearts and bodies filled with pleasure</p>
        <StaticImage placeholder= "blurred" margin-left= {100} width ={200} height ={200} src = "../images/gas.jpg" />


     

     </Layout>
  )
}

export default IndexPage;
 
