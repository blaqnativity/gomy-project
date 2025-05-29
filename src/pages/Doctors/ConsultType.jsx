import { FaBriefcaseMedical } from "react-icons/fa6";
import { typesConsultation } from "./data";
import { useDispatch } from "react-redux";
import { addToCart } from "../../store/cartSlice";
import { toast } from "react-toastify";

const ConsultType = () => {
  const dispatch = useDispatch();

  const handleAddToCart = (item) => {
    dispatch(
      addToCart({
        id: item.id,
        name: item.title,
        price: item.price,
        testsInculdes: item.testsInculdes,
      }),
      toast.success("Item successfully added to cart!")
    );
  };

  return (
    <section className="p-4 md:p-8" id="consultType">
      <div className="py-8 max-w-screen-xl mx-auto lg:py-16">
        <div className="text-center pb-12 md:pb-20 text-gray-700">
          <h2 className="text-3xl font-bold sm:text-4xl mb-4">
            Virtual or Physical
          </h2>
          <p className="text-xl">
            Enjoy convenient medical consultations and doorstep medication
            delivery
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {typesConsultation.map((item) => (
            <form
              key={item.id} // Make sure `item` has a unique `id`
              className="bg-teal-100/10 border border-gray-200 rounded shadow text-gray-600 p-10 space-y-4"
              onSubmit={(e) => {
                e.preventDefault();
                handleAddToCart(item);
              }}
            >
              <span className="text-green-700/90 text-2xl md:text-3xl block">
                <FaBriefcaseMedical />
              </span>
              <h3 className="text-3xl font-bold text-gray-600">{item.title}</h3>
              <h4 className="md:text-lg font-light">{item.desc}</h4>
              <span className="text-2xl font-extrabold tracking-wide">
                ₦{item.price}
              </span>
              <span className="font-bold text-gray-600 tracking-wider block mt-4">
                Per consultation
              </span>

              <ul className="font-light tracking-wide space-y-3 text-sm">
                {item.testsInculdes.map((test, index) => (
                  <li key={index} className="list-disc ml-4">
                    {test}
                  </li>
                ))}
              </ul>

              <button
                type="submit"
                className="py-3 px-6 bg-green-700/90 hover:bg-green-700 transition duration-300 text-white font-bold rounded"
              >
                Book Consultation
              </button>
            </form>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ConsultType;
