import { FaAngleDown } from "react-icons/fa";
import { questionsAccordion } from "./data";

const FAQ = () => {
  return (
    <div class="bg-gradient-to-r from-indigo-600 to-green-600">
      <div class="w-full max-w-4xl px-2 mx-auto py-12 dark:bg-transparent dark:text-gray-200">
        <div className="text-center space-y-4">
          <h3 class="text-xl font-light text-gray-800 md:text-2xl dark:text-gray-100">
            Got Questions?
          </h3>
          <h3 class="text-xl font-bold text-gray-800 md:text-2xl dark:text-gray-100">
            We have answers
          </h3>
        </div>
        <div class="grid max-w-full mx-auto mt-6 divide-y divide-gray-200 ">
          {questionsAccordion.map((item) => (
            <details class="group py-4">
              <summary class="flex items-center justify-between font-medium list-none cursor-pointer">
                <span>{item.question}</span>
                <span class="transition group-open:rotate-180">
                  <FaAngleDown />
                </span>
              </summary>
              <p class="mt-3 text-gray-600 group-open:animate-fadeIn dark:text-gray-300">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
