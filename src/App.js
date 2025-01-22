import './App.css';
import { useState } from 'react';

function App() {

  const articles = [{
    id: 1,
    date: 'Jan 01,2025',
    title: 'React Js',
    content: 'React is the library for web and native user interfaces. Build user interfaces out of individual pieces called components written in JavaScript.'
  },
  {
    id: 2,
    date: 'Jan 03,2025',
    title: 'Angular',
    content: 'Angular is a development platform, built on TypeScript. As a platform, Angular includes: A component-based framework for building scalable web applications'
  },
  {
    id: 3,
    date: 'Jan 15,2025',
    title: 'Axios',
    content: 'Axios is a promise-based HTTP library that lets developers make requests to either their own server or a third-party server to fetch data.'
  },
  {
    id: 4,
    date: 'Jan 15,2025',
    title: 'MySql',
    content: 'MySQL Cluster enables users to meet the database challenges of next generation web, cloud, and communications services with uncompromising scalability'
  },
  ];

  const [searchQuery, setSearchQuery] = useState('');
  const [filteredArticles, setFilteredArticles] = useState(articles)

  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    const filtered = articles.filter(article => article.title.toLocaleLowerCase().includes(query.toLocaleLowerCase())
      || article.date.toLocaleLowerCase().includes(query.toLocaleLowerCase()) || article.content.toLocaleLowerCase().includes(query.toLocaleLowerCase()));
    setFilteredArticles(filtered)
  }

  const highlightText = (text) => {
    if (!searchQuery) return text;
    const regex = new RegExp(`(${searchQuery})`, 'gi');
    return text.split(regex).map((part, index) => part.toLocaleLowerCase() === searchQuery.toLocaleLowerCase()
      ? (<span key={index} style={{ backgroundColor: 'yellow' }}>{part}</span>) : part);
  }
  return (
    <div style={{ backgroundColor: '#F5F5F5',height:'100vw' }}>
      <div className='article-container'>
        <h1 style={{ textAlign: 'center' }}>Search</h1>
        <ul>
          <li>
            <input type='text' value={searchQuery} placeholder='Search articles...' className='searchBar'
              onChange={handleSearch} />
          </li>
          {filteredArticles.map(article => (
            <li key={article.id} className='article'>
              <h3>{highlightText(article.title)}</h3>
              <h4>{highlightText(article.date)}</h4>
              <p>{highlightText(article.content)}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
