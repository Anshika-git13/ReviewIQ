import { useState, useEffect } from 'react';
import "prismjs/themes/prism-tomorrow.css";
import Editor from "react-simple-code-editor";
import prism from "prismjs";
import Markdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github-dark.css";
import axios from 'axios';
import { useAuth } from '../context/AuthContext';
import './CodeReviewer.css';

function CodeReviewer() {
  const [code, setCode] = useState(`function sum() {
  return 1 + 1
}`);
  const [review, setReview] = useState('');
  const [loading, setLoading] = useState(false);
  const { user, logout } = useAuth();

  useEffect(() => {
    prism.highlightAll();
  }, []);

  async function reviewCode() {
    setLoading(true);
    try {
      const response = await axios.post('http://localhost:3000/ai/get-review', { code });
      setReview(response.data);
    } catch (error) {
      console.error('Review failed:', error);
      if (error.response?.status === 401) {
        logout();
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Code Reviewer</h1>
        <div className="user-info">
          <span>Welcome, {user?.username}!</span>
          <button onClick={logout} className="logout-button">
            Logout
          </button>
        </div>
      </header>
      
      <main className="main-content">
        <div className="left-panel">
          <div className="code-editor">
            <Editor
              value={code}
              onValueChange={code => setCode(code)}
              highlight={code => prism.highlight(code, prism.languages.javascript, "javascript")}
              padding={10}
              style={{
                fontFamily: '"Fira code", "Fira Mono", monospace',
                fontSize: 12,
                border: "1px solid #ddd",
                borderRadius: "5px",
                height: "100%",
                width: "100%"
              }}
            />
          </div>
          <button
            onClick={reviewCode}
            className="review-button"
            disabled={loading}
          >
            {loading ? 'Reviewing...' : 'Review Code'}
          </button>
        </div>
        
        <div className="right-panel">
          <div className="review-content">
            {review ? (
              <Markdown rehypePlugins={[rehypeHighlight]}>
                {review}
              </Markdown>
            ) : (
              <div className="empty-state">
                <h2>Code Review Results</h2>
                <p>Click "Review Code" to analyze your code and see suggestions for improvements.</p>
                <div className="empty-state-icon">📝</div>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

export default CodeReviewer; 