import { Collections, Products } from "../data/Products";

const Marquee = () => {
  return (
    <div>
      <section className="overflow-hidden bg-gray-400">
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
      </section>

      {/* --- IMAGE MARQUEE --- */}
      <section className="flex items-center overflow-hidden bg-gray-200 mt-4 h-72">
        <div className="flex w-max animate-marquee2">
          {/* First copy */}
          <div className="flex shrink-0 gap-5 pr-5">
            {Collections.map((collection, index) => (
              <div key={index} className="shrink-0">
                <img src={collection.img} className="h-60 w-60 object-cover" />
              </div>
            ))}
          </div>

          {/* Second copy */}
          <div className="flex shrink-0 gap-5 pr-5">
            {Collections.map((collection, index) => (
              <div key={index} className="shrink-0">
                <img src={collection.img} className="h-60 w-60 object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Marquee;
