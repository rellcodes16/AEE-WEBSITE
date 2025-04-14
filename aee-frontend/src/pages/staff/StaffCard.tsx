export interface Staff{
    image: string;
    name: string;
    position: string;
    email?: string;
    specialization?: string;
}

const StaffCard:React.FC<Staff> = ({ image, name, position, specialization, email }) => {
  return (
    <div className="bg-white shadow-md rounded-xl p-4 flex flex-col items-center text-center min-h-[250px]">
      <img src={image} alt={name} className="w-25 h-25 rounded-full object-cover mb-3"/>
      <h3 className="font-semibold text-lg">{name}</h3>
      <p className="text-sm text-gray-500">{position}</p>
      {specialization && (
        <p className="text-sm text-gray-500 mt-1 italic">{specialization}</p>
      )}
      {email && (
        <a
          href={`mailto:${email}`}
          className="mt-3 text-sm text-blue-600 underline"
        >
          {email}
        </a>
      )}
    </div>
  )
}

export default StaffCard
