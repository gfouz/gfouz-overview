import React, { lazy } from 'react';
import './routes.css';

const Homepage = lazy(() => import('./homepage/index'));
const About = lazy(() => import('./about/index'));
const Work = lazy(() => import('./work/index'));
const Blog = lazy(() => import('./blog/Blog'));
const Post = lazy(() => import('./blog/Post'));

export default [
  {
    path: '/',
    element: <Homepage />,
  },
  {
    path: 'about',
    element: <About />,
  },
  {
    path: 'work',
    element: <Work />,
  },
  {
    path: 'blog',
    element: <Blog />,
  },
  {
    path: 'post/:id',
    element: <Post />, //change work for Post as soon as exists.
  },
  {
    path: '404',
    element: <Work />, //change work for Post as soon as exists.
  },
];
