"use client"
import "./globals.css";
import Link from "next/link";
import { useState, useEffect } from "react";

// export const metadata = {
//   title: "Web Tutorials",
//   description: "Generated by leanp",
// };

export default function RootLayout({ children }) {
  const [topics, setTopics] = useState([]);
  useEffect(() => {
    fetch("http://localhost:9999/topics")
      .then(response => response.json())
      .then(result => {
        setTopics(result);
      });
  }, []);
  return (
    <html lang="en">
      <body>
        <h1><Link href="/">WEB</Link></h1>
        <ol>
          {topics.map((topic)=>{
            return <li key={topic.id}><Link href={`/read/${topic.id}`}>{topic.title}</Link></li>
          })}
        </ol>
        {children}
        <ul>
          <li><Link href="/create">create</Link></li>
          <li><Link href="/update">update</Link></li>
          <li><input type="button" value="delete"/></li>
        </ul>
      </body>
    </html>
  );
}
