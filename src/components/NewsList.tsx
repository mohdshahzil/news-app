import React, { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../hooks/typeHooks";
import { fetchNews } from "../redux/slices/newsSlice";

interface Article {
  title: string;
  content: string;
  image: string;
  url: string;
}

const NewsList: React.FC = () => {
  const dispatch = useAppDispatch();
  const news = useAppSelector((state) => state.news.data);

  useEffect(() => {
    dispatch(fetchNews());
  }, [dispatch]);

  console.log("News", news);

  return (
    <div className="flex flex-col items-center justify-center w-full p-4 gap-4">
      {news &&
        news.articles.map((article: Article, index: number) => (
          <div
            key={index}
            className="max-w-md w-full bg-white shadow-md rounded-lg overflow-hidden"
          >
            <img
              className="w-full h-64 object-cover object-center"
              src={article.image}
              alt={article.title}
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold">{article.title}</h2>
              <p className="mt-2 text-gray-600">{article.content}</p>
              <a
                href={article.url}
                className="mt-2 text-blue-500 block"
                target="_blank"
                rel="noopener noreferrer"
              >
                Read more
              </a>
            </div>
          </div>
        ))}
    </div>
  );
};

export default NewsList;
