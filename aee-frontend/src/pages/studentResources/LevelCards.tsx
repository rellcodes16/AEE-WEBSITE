import { FaGoogleDrive } from "react-icons/fa";

const levels = [
  {
    title: "100 Level Resources",
    description: "Lecture notes, guides, and materials for 100 level students.",
    image:
      "small-pile-paperback-books.jpg",
    link: "#",
  },
  {
    title: "200 Level Resources",
    description: "Materials to support 200 level coursework and projects.",
    image:
      "small-pile-paperback-books.jpg",
    link: "#",
  },
  {
    title: "300 Level Resources",
    description: "Access study materials and lab guides for 300 level.",
    image:
      "small-pile-paperback-books.jpg",
    link: "#",
  },
  {
    title: "400 Level Resources",
    description: "Advanced notes, seminar topics, and past questions.",
    image:
      "small-pile-paperback-books.jpg",
    link: "#",
  },
  {
    title: "500 Level Resources",
    description: "Final year research resources and writing guides.",
    image:
      "small-pile-paperback-books.jpg",
    link: "#",
  },
  {
    title: "Masters Resources",
    description: "Graduate-level materials, papers, and research tools.",
    image:
      "small-pile-paperback-books.jpg",
    link: "#",
  },
  {
    title: "PhD Resources",
    description: "Dissertation writing resources and academic journals.",
    image:
      "small-pile-paperback-books.jpg",
    link: "#",
  },
];

function LevelCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-20 py-10">
      {levels.map((level, index) => (
        <div
          key={index}
          className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow"
        >
          <img
            src={level.image}
            alt={level.title}
            className="w-full object-cover"
          />
          <div className="p-4">
            <h3 className="text-xl font-semibold mb-2">{level.title}</h3>
            <p className="text-gray-600 mb-4">{level.description}</p>
            <a
              href={level.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-green-600 text-white px-4 py-2 rounded hover:bg-green-600 transition"
            >
              Access Resources <FaGoogleDrive className="inline"/>
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}

export default LevelCards;
