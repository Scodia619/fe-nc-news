import { Routes, Route } from 'react-router-dom';

import ArticlePage from '../pages/ArticlePage';

import Header from './components/Header'
import ArticleContainer from './components/ArticleContainer'

import './App.css'

function App() {

  return (
    <>
    <Header />
    <Routes>
        <Route path="/" element={<ArticleContainer />} />
        <Route path="/:article_topic/:article_id" element={<ArticlePage />}/>
        <Route path="/articles/:topic_name" element={<ArticleContainer />}/>
      </Routes>
    </>
  )
}

export default App
