import { newsList } from "./News";
import { useParams } from "react-router-dom";

function NewsDetails() {
  const { slug } = useParams();
  const newsItem = newsList.find(news => news.slug === slug);

  if (!newsItem) {
    return <div>News not found!</div>;
  }

  return (
    <div className="min-h-screen px-4 md:px-20 pt-16 pb-20 bg-[#fdfaf6]">
      <div className="relative bg-white/90 shadow-xl newspaper border border-gray-300 rounded-lg px-6 py-10 max-w-4xl mx-auto font-serif">
      <div className="absolute top-0 right-4 transform rotate-12">
          <img
            src="/pushpin.png" 
            alt="Push Pin"
            className="w-22 h-15"
          />
        </div>

        <p className="text-sm text-gray-500 mb-2">{newsItem.date}</p>
        <h1 className="text-3xl font-bold mb-6">{newsItem.title}</h1>
        <img
          src={`/${newsItem.thumbnail}`}
          alt={newsItem.title}
          className="w-full h-72 object-cover rounded-md mb-10"
        />
        <p className="text-lg leading-relaxed text-gray-800">{newsItem.details}</p>
      </div>
    </div>
  );
}
 export default NewsDetails;