import * as React from 'react';
import {Link, useStaticQuery, graphql} from 'gatsby';
import { container} from './layout.module.css';

 
const Layout = ({pageTitle, children}) => {


    const data = useStaticQuery(graphql`
       query {
           site{
               siteMetadata {
                   title
               }
           }
       }`)
    return(
        <main className = {container}>
            {/* <title>{pageTitle} | {data.site.siteMetadata.title}</title> */}
            <title>{pageTitle}</title>
            <p >{data.site.siteMetadata.title}</p>
            <nav>
                <ul>
                    <li><Link   to ="/">Home</Link></li>
                    <li><Link  to ="/about">About</Link></li>
                    <li><Link  to ="/blog">Blog</Link></li>
                </ul>
            </nav>
            <h1>{pageTitle}</h1>
            {children}
        </main>
    )
}

export default Layout;