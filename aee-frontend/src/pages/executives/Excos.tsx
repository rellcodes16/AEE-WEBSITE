import ExcosCard, { Exco } from "./ExcosCard"

const topExcos: Exco[] =[
    {
        image: "https://randomuser.me/api/portraits/men/32.jpg",
        name: "John Doe",
        position: "President"
    },
    {
        image: "https://randomuser.me/api/portraits/men/32.jpg",
        name: "John Doe",
        position: "Vice President"
    },
]

const otherExcos: Exco[] = [
    {
        image: "https://randomuser.me/api/portraits/men/32.jpg",
        name: "John Doe",
        position: "Secretary"
    },
    {
        image: "https://randomuser.me/api/portraits/men/32.jpg",
        name: "John Doe",
        position: "Public Relations Officer"
    },
    {
        image: "https://randomuser.me/api/portraits/men/32.jpg",
        name: "John Doe",
        position: "Welfare Officer"
    },
    {
        image: "https://randomuser.me/api/portraits/men/32.jpg",
        name: "John Doe",
        position: "Financial Secretary"
    },
    {
        image: "https://randomuser.me/api/portraits/men/32.jpg",
        name: "John Doe",
        position: "Asst Financial Secretary"
    },
    {
        image: "https://randomuser.me/api/portraits/men/32.jpg",
        name: "John Doe",
        position: "Asst Welfare Officer"
    },
]

function Excos() {
  return (
    <div className="px-4 md:px-24 py-10 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-2">
        Meet Our Student Executives!
      </h1>
      <p className="text-gray-600 text-lg">
        Passionate leaders dedicated to representing and uplifting the student body.
      </p>
      <div className="flex justify-center gap-6 mb-10 pt-7 px-4 flex-wrap">
        {topExcos.map((exco, index) => (
            <div className="w-full sm:w-[45%] md:w-[40%] lg:w-[35%] xl:w-[30%]">
                <ExcosCard key={index} {...exco} />
            </div>
        ))}
      </div>


      {/* Other excos */}
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
        {otherExcos.map((exco, index) => (
          <ExcosCard key={index + 2} {...exco} />
        ))}
      </div>
    </div>
  )
}

export default Excos
