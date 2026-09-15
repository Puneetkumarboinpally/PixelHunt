import type { Course } from "../data/Products";

type DataProps = {
  data: Course;
};

const CourseCard = ({ data }: DataProps) => {
  return (
    <div
      className="p-4 bg-white/15 group
                    border-2 border-white/20 rounded
                    cursor-pointer transition-all duration-500
                    hover:border-indigo-400 hover:shadow-lg"
    >
      <div className="h-50 w-full rounded overflow-hidden">
        <img
          src={data.image}
          alt={data.title}
          loading="lazy"
          className="w-full h-full object-cover block
                        transition-transform duration-600
                        group-hover:scale-110"
        />
      </div>
      <div className="flex flex-col gap-2">
        <h2 className="text-2xl font-bold mt-2">{data.title}</h2>
        <p className="max-w-60">{data.description}</p>
      </div>
      <button
        className="px-4 py-2 font-bold mt-4 mx-auto
                    bg-indigo-500 rounded text-white
                    active:scale-95 cursor-pointer
                    transition-transform duration-300
                    hover:-translate-y-1"
      >
        More Details
      </button>
    </div>
  );
};

export default CourseCard;
