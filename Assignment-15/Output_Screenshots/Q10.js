import React, { useState, useEffect } from 'react';

function NewsFeedDashboard() {
  const [articles, setArticles] = useState([]);
  const [newArticle, setNewArticle] = useState({ title: '', description: '', author: '' });

  useEffect(() => {
    const fetchArticles = async () => {
      const response = await fetch('https://example.com/news');
      const data = await response.json();
      setArticles(data);
    };
    fetchArticles();
  }, []);

  const handleAddArticle = () => {
    const newArticles = [...articles, newArticle];
    setArticles(newArticles);
    setNewArticle({ title: '', description: '', author: '' });
  };

  return (
    <div>
      <h1>News Feed Dashboard</h1>
      <input
        type="text"
        value={newArticle.title}
        onChange={(e) => setNewArticle({ ...newArticle, title: e.target.value })}
        placeholder="Title"
      />
      <input
        type="text"
        value={newArticle.description}
        onChange={(e) => setNewArticle({ ...newArticle, description: e.target.value })}
        placeholder="Description"
      />
      <input
        type="text"
        value={newArticle.author}
        onChange={(e) => setNewArticle({ ...newArticle, author: e.target.value })}
        placeholder="Author"
      />
      <button onClick={handleAddArticle}>Add Article</button>
      <ul>
        {articles.map((article, index) => (
          <li key={index}>
            <p>
              {article.title} - {article.description} - {article.author}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NewsFeedDashboard;
