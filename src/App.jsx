import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const defaultData = [
    { date: "2022-09-01", views: 100, article: "Article 1" },

    { date: "2023-09-01", views: 100, article: "Article 1" },

    { date: "2023-09-02", views: 150, article: "Article 2" },

    { date: "2023-09-02", views: 120, article: "Article 3" },

    { date: "2020-09-03", views: 200, article: "Article 4" },
  ];

  const [data, setData] = useState(defaultData);

  const handleSortByViews = () => {
    const sortedByViewsData = [...data].sort((a, b) => b.views - a.views);
    setData(sortedByViewsData);
  };

  const handleSortByDate = () => {
    const sortedByDateData = [...data].sort((a, b) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);

      return dateB - dateA;
    });
    setData(sortedByDateData);
  };

  console.log(data);

  return (
    <>
      <h1>Date and Views Table</h1>
      <button onClick={handleSortByDate}>Sort by Date</button>
      <button onClick={handleSortByViews}>Sort by Views</button>
      <table>
        <thead>
          <tr>
            <td>Date</td>
            <td>Views</td>
            <td>Article</td>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => {
            return (
              <tr>
                <td>{item.date}</td>
                <td>{item.views}</td>
                <td>{item.article}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default App;
