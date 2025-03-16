import "./globals.css";

export const metadata = {
  title: "Web Tutorials",
  description: "Generated by leanp",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <h1><a href="/">WEB</a></h1>
        <ol>
          <li><a href="/read/1">HTML</a></li>
          <li><a href="/read/2">CSS</a></li>
        </ol>
        {children}
        <ul>
          <li><a href="/create">create</a></li>
          <li><a href="/update">update</a></li>
          <li><input type="button" value="delete"/></li>
        </ul>
      </body>
    </html>
  );
}
