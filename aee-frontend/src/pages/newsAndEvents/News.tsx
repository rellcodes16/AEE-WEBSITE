import { Link } from "react-router-dom";

export const newsList = [
  {
    id: 1,
    title: "Faculty of Technology Launches Smart Waste Management Project",
    date: "2025-02-10",
    thumbnail: "waste-management.jpg",
    slug: "smart-waste-management-ui",
    details: `
      The Faculty of Technology at the University of Ibadan has launched a new Smart Waste Management Project aimed at promoting sustainable waste management practices among students and staff.
      The project involves the installation of smart bins equipped with sensors that monitor waste levels and automatically notify staff when they need to be emptied.
      This innovative approach to waste management is expected to reduce operational costs and contribute significantly to a cleaner and greener campus.
    `
  },
  {
    id: 2,
    title: "UI Engineering Students Win National Robotics Challenge",
    date: "2025-01-18",
    thumbnail: "robotic-arm.jpg",
    slug: "ui-robotics-champions",
    details: `
      A team of engineering students from the University of Ibadan recently won the prestigious National Robotics Challenge. The students showcased their cutting-edge robotic designs, which were evaluated based on innovation, functionality, and performance.
      The team members were recognized for their creativity and problem-solving skills, which played a significant role in their success. This achievement highlights the growing interest and expertise in robotics at UI.
    `
  },
  {
    id: 3,
    title: "Agri-Engineering Hosts Climate Innovation Seminar",
    date: "2024-12-05",
    thumbnail: "tech-innovation.jpg",
    slug: "climate-seminar-agric",
    details: `
      The Department of Agricultural and Environmental Engineering at UI organized a groundbreaking Climate Innovation Seminar focused on addressing the pressing issues of climate change and environmental sustainability.
      Experts from various fields, including environmental science, engineering, and policy-making, gathered to share their knowledge and discuss innovative solutions to combat climate change. The seminar was well-attended by students and faculty members alike, fostering collaboration and knowledge sharing.
    `
  },
  {
    id: 4,
    title: "New Mechanical Lab Commissioned",
    date: "2024-11-02",
    thumbnail: "mech-lab.jpg",
    slug: "new-mechanical-lab-ui",
    details: `
      The University of Ibadan has commissioned a new state-of-the-art Mechanical Engineering Laboratory designed to enhance the learning experience for students pursuing mechanical engineering studies.
      The lab is equipped with the latest tools and technologies that will enable students to gain hands-on experience in key areas such as thermodynamics, material science, and mechanical systems design.
      This new facility underscores UI’s commitment to providing world-class education and resources to its engineering students.
    `
  },
  {
    id: 5,
    title: "Faculty Inducts Freshers with Tech Innovation Tour",
    date: "2024-10-15",
    thumbnail: "tech-innovation.jpg",
    slug: "tech-innovation-tour-ui",
    details: `
      As part of its annual induction program, the Faculty of Technology at UI organized a Tech Innovation Tour for incoming students. The tour showcased the various cutting-edge technologies and innovations developed by the faculty, giving freshers a glimpse into the exciting world of tech and engineering.
      The event featured demonstrations of student projects, innovative tech solutions, and industry partnerships, inspiring new students to explore careers in technology and engineering.
    `
  }
];


function News() {
  return (
    <div className="px-4 md:px-20 py-10">
      <h2 className="text-4xl font-bold mb-8">News</h2>
      <div className="grid gap-10 md:grid-cols-3">
        {newsList.map(news => (
          <div key={news.id}>
            <img src={news.thumbnail} alt={news.title} className="w-full h-52 object-cover mb-3" />
            <p className="text-gray-500 text-sm">{news.date}</p>
            <h3 className="text-lg font-semibold">{news.title}</h3>
            <Link to={`/news/${news.slug}`}>
              <button className="mt-2 text-green-600 hover:underline cursor-pointer">Read More +</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default News
