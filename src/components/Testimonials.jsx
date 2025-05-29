import { testimonials } from "./data";

const Testimonials = () => {
  return (
    <>
      <div className="bg-gradient-to-r from-indigo-600 to-green-600">
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center dark:text-white mb-12">
              What Our Customers Say
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="bg-white p-6 rounded-lg shadow-md"
                >
                  <p className="mb-4 text-gray-800">{testimonial.testimony}</p>
                  <p className="font-semibold text-gray-800">
                    {testimonial.userProfile}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Testimonials;
