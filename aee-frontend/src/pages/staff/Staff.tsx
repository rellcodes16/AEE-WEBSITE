import StaffCard, { Staff } from "./StaffCard"

const staff: Staff[] = [
  {
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    name: "John Doe",
    position: "Lecturer",
    email: "johndoe@university.edu",
    specialization: "Soil Science"
  },
  {
    image: "https://randomuser.me/api/portraits/women/45.jpg",
    name: "Jane Smith",
    position: "Senior Lecturer",
    email: "janesmith@university.edu",
    specialization: "Environmental Engineering"
  },
  {
    image: "https://randomuser.me/api/portraits/men/12.jpg",
    name: "Robert Johnson",
    position: "Professor",
    email: "janesmith@university.edu",
    specialization: "Environmental Engineering"
  },
  {
    image: "https://randomuser.me/api/portraits/women/22.jpg",
    name: "Emily Davis",
    position: "Assistant Lecturer",
    email: "janesmith@university.edu",
    specialization: "Environmental Engineering"
  },
  {
    image: "https://randomuser.me/api/portraits/men/77.jpg",
    name: "Michael Brown",
    position: "Lecturer",
    email: "janesmith@university.edu",
    specialization: "Environmental Engineering"
  },
  {
    image: "https://randomuser.me/api/portraits/women/66.jpg",
    name: "Laura Wilson",
    position: "Department Head",
    email: "janesmith@university.edu",
    specialization: "Environmental Engineering"
  },
  {
    image: "https://randomuser.me/api/portraits/men/89.jpg",
    name: "David Lee",
    position: "Lab Coordinator",
    email: "janesmith@university.edu",
    specialization: "Environmental Engineering"
  },
  {
    image: "https://randomuser.me/api/portraits/women/99.jpg",
    name: "Sophia Martinez",
    position: "Research Assistant",
    email: "janesmith@university.edu",
    specialization: "Environmental Engineering"
  },
]

function StaffDirectory() {
  return (
    <section className="px-4 md:px-24 py-10 bg-gray-100 min-h-screen">
      <div className="mb-10">
        <h1 className="text-4xl font-bold mb-2">Meet Our Staff!</h1>
        <p className="text-gray-600 text-lg">
          Dedicated professionals committed to academic excellence and innovation.
        </p>
      </div>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
        {staff.map((member, idx) => (
          <StaffCard key={`${member.name}-${idx}`} {...member} />
        ))}
      </div>
    </section>
  )
}

export default StaffDirectory
