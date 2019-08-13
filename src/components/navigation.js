import React from 'react'
import { Link } from 'gatsby'
import styles from './navigation.module.css'

export default () => (
  <nav class="uk-navbar-container" uk-navbar>
    <div className="uk-navbar-left">

      <ul className="uk-navbar-nav">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/blog/">Blog</Link>
        </li>
      </ul>
    </div>
  </nav>
)
