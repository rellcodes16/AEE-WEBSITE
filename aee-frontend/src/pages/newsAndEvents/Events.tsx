const eventList = [
    {
      id: 1,
      title: "2025 Freshers' Welcome Party",
      description: "An exciting welcome event for our new Agricultural and Environmental Engineering students. Come network, play games, and enjoy great music.",
      startDate: "2025-04-20",
      endDate: "2025-04-20",
      venue: "NLNG Room 3",
      thumbnail: "freshers-welcome-party.jpg",
      slug: "freshers-welcome-2025"
    },
    {
      id: 2,
      title: "Freshers' Orientation Program",
      description: "Official departmental orientation for 100-level students. Learn about your academic journey, student life, and meet your lecturers.",
      startDate: "2025-04-22",
      endDate: "2025-04-22",
      venue: "Automotive Building",
      thumbnail: "freshers-orientation.jpg", 
      slug: "orientation-2025"
    },
    {
      id: 3,
      title: "Departmental Movie Night",
      description: "Relax and vibe with your coursemates. Free popcorn and drinks available. Movie lineup includes a surprise classic and a tech-themed short film.",
      startDate: "2025-05-03",
      endDate: "2025-05-03",
      venue: "Petroleum Building",
      thumbnail: "https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?auto=format&fit=crop&w=800&q=80", 
      slug: "movie-night-2025"
    },
    {
      id: 4,
      title: "Environmental Sustainability Awareness Week",
      description: "A week-long series of activities including a clean-up drive, tree planting, and a sustainability seminar featuring experts.",
      startDate: "2025-05-15",
      endDate: "2025-05-19",
      venue: "NLNG Building",
      thumbnail: "sustainability.jpg", 
      slug: "sustainability-week-ui"
    },
    {
      id: 5,
      title: "Agro-Tech Innovation Pitch Day",
      description: "Final year students showcase their projects aimed at solving agricultural challenges using technology.",
      startDate: "2025-06-10",
      endDate: "2025-06-10",
      venue: "NLNG Building",
      thumbnail: "agro-tech.jpg",
      slug: "agro-tech-pitch-day"
    }
];  
  

function Events() {
  return (
    <div className="px-4 md:px-20 py-10 mt-12">
      <h2 className="text-4xl font-bold mb-8">Events</h2>
      <div className="grid gap-10 md:grid-cols-2">
        {eventList.map(event => (
          <div key={event.id} className="border-b border-gray-400 pb-6">
            <img src={event.thumbnail} alt={event.title} className="w-full h-64 object-cover mb-4" />
            <h3 className="text-xl font-semibold">{event.title}</h3>
            <p className="text-gray-600 mt-2">{event.description}</p>
            <div className="mt-4 text-sm text-gray-500">
              <p><strong>Time:</strong> {event.startDate} - {event.endDate}</p>
              <p>{event.venue}</p>
            </div>
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(event.venue + " University of Ibadan")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block text-green-600 hover:underline"
            >
              View Location →
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Events
