import { Products } from "../data/Products";

const Marquee = () => {
  return (
    <div className="overflow-hidden bg-gray-400">
      <div className="flex w-max animate-marquee">
        {[...Array(2)].map((_, batch) => (
          <div key={batch} className="flex gap-5 pr-5 shrink-0">
            {Products.map((product, index) => (
              <div
                key={`${batch}-${index}`}
                className="shrink-0 whitespace-nowrap"
              >
                {product}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
