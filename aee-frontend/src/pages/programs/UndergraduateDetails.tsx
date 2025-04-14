interface Course {
    level: string;
    courses: string[];
  }
  
  const courseData: Course[] = [
    {
      level: "100 Level",
      courses: [
        "Introduction to Engineering",
        "Physics I & II",
        "General Chemistry",
        "Mathematics I & II",
        "Use of English",
      ],
    },
    {
      level: "200 Level",
      courses: [
        "Engineering Mechanics",
        "Fluid Mechanics",
        "Thermodynamics",
        "Agricultural Ecology",
        "Workshop Practice",
      ],
    },
    {
      level: "300 Level",
      courses: [
        "Soil and Water Engineering",
        "Farm Power and Machinery",
        "Engineering Drawing",
        "Environmental Engineering",
      ],
    },
    {
      level: "400 Level",
      courses: [
        "Irrigation Systems",
        "Project Management",
        "Agricultural Processing",
        "Design of Machine Elements",
      ],
    },
    {
      level: "500 Level",
      courses: [
        "Final Year Project",
        "Internship Report",
        "Advanced Environmental Engineering",
        "Seminar",
      ],
    },
  ];
  
  function UndergraduateDetails() {
    return (
      <div className="px-4 md:px-20 py-10 mt-12 space-y-10">
        <h1 className="text-4xl font-bold text-green-700">
          Undergraduate Program Details
        </h1>
        <p className="text-gray-700 text-lg">
          Our 5-year undergraduate program in Agricultural and Environmental Engineering equips students with both theoretical and practical knowledge in solving real-world agricultural and environmental problems using modern engineering techniques.
        </p>
        <div className="bg-gray-100 p-6 rounded-lg shadow">
          <h2 className="text-2xl font-semibold mb-4 text-green-700">Admission Requirements</h2>
          <ul className="list-disc pl-6 text-gray-800 space-y-2">
            <li><strong>WAEC:</strong> At least 5 credits including English, Mathematics, Physics, Chemistry, and one other science-related subject.</li>
            <li><strong>JAMB Subjects:</strong> Mathematics, Physics, Chemistry, and English.</li>
            <li><strong>Post-UTME:</strong> A minimum score of 50% is required.</li>
            <li><strong>Aggregate Cut-off:</strong> Varies yearly based on departmental policies and candidate performance.</li>
          </ul>
        </div>
<div>
  <h2 className="text-2xl font-semibold mb-6">Course Breakdown by Level</h2>

  <div className="space-y-8">
    {courseData.map(({ level, courses }) => (
      <div key={level} className="p-4 rounded-md border border-gray-400 shadow">
        <h3 className="text-xl font-bold mb-4">{level}</h3>

        <table className="w-full table-auto">
          <thead className="">
            <tr>
              <th className="text-left px-4 py-2 border-b border-gray-400">S/N</th>
              <th className="text-left px-4 py-2 border-b border-gray-400">Course Title</th>
            </tr>
          </thead>
          <tbody>
            {courses.map((course, idx) => (
              <tr key={idx} className="">
                <td className="px-4 py-2 border-b border-gray-400">{idx + 1}</td>
                <td className="px-4 py-2 border-b border-gray-400">{course}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    ))}
  </div>
</div>

      </div>
    );
  }
  
  export default UndergraduateDetails;
  