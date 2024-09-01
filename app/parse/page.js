// app/parse/page.js
'use client';
import { useState } from 'react';
import Layout from '../components/Layout';

const Parse = () => {
  const [url, setUrl] = useState('');

  const handleParse = async () => {
    // Implement the logic to send the URL to the backend for parsing
    console.log(`Parsing website: ${url}`);
  };

  return (
    <Layout>
      <h1>Parse Website</h1>
      <input
        type="text"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        placeholder="Enter website URL"
      />
      <button onClick={handleParse}>Parse</button>
    </Layout>
  );
};

export default Parse;
