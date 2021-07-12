import * as React from 'react';
import {Link} from 'gatsby';
import { container, heading,navLinkText, navItem, navCont } from './layout.module.css'
 
const Layout = ({pageTitle, children}) => {
    return(
        <main className = {container}>
            <title>{pageTitle}</title>
            <nav>
                <ul className ={navCont}>
                    <li className = {navItem}><Link className= {navLinkText} to ="/">Home</Link></li>
                    <li className = {navItem }><Link className= {navLinkText} to ="/about">About</Link></li>
                </ul>
            </nav>
            <h1 className= {heading}>{pageTitle}</h1>
            {children}
        </main>
    )
}

export default Layout;