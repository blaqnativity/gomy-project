import { testimonials } from "./data";

const Testimonials = () => {
  return (
    <>
      <div class="bg-gradient-to-r from-indigo-600 to-green-600">
        <section class="py-20 px-4">
          <div class="container mx-auto">
            <h2 class="text-3xl font-bold text-center dark:text-white mb-12">
              What Our Customers Say
            </h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  class="bg-white p-6 rounded-lg shadow-md"
                >
                  <p class="mb-4 text-gray-800">{testimonial.testimony}</p>
                  <p class="font-semibold text-gray-800">
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
