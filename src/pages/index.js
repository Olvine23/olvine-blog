import * as React from 'react'
import {Link} from 'gatsby';
import Layout from '../components/layout';
import { StaticImage } from 'gatsby-plugin-image';


const IndexPage = () => {
  return (
     <Layout pageTitle = "Home Page">
       <p>I am trying to make a blog and change the world</p>

       <StaticImage src = "../images/love.jpg" />

     

     </Layout>
  )
}

export default IndexPage;
 
