export interface Exco{
    image: string;
    name: string;
    position: string;
}


const ExcosCard:React.FC<Exco> = ({ image, name, position }) =>{
  return (
    <div className="bg-white shadow-md rounded-xl p-4 flex flex-col items-center text-center min-h-[250px]">
      <img src={image} alt={name} className="w-25 h-25 rounded-full object-cover mb-3"/>
      <h3 className="font-semibold text-lg">{name}</h3>
      <p className="text-sm text-gray-500">{position}</p>
    </div>
  )
}

export default ExcosCard
