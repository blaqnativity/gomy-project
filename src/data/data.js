import hero from "../assets/images/medicalLab.jpg";
import consultation from "../assets/images/consultation.jpg";
import phoneUser from "../assets/images/phoneUser.jpg";
import sample from "../assets/images/sample.jpg";
import results from "../assets/images/results.jpg";
import testResults from "../assets/images/testResults.jpg";
import affordable from "../assets/images/affordable.jpg";

// consultation page images and data
export const heroImage = hero;
export const consultOne = consultation;
export const consultTwo = affordable;
// end consultation page images and data

// Navbar links and their submenus.
export const navbarLinks = [
  {
    id: 1,
    name: "Home",
    url: "/",
  },
  {
    id: 2,
    name: "Speak to a Doctor",
    url: "/doctors-consultation",
  },

  {
    id: 3,
    name: "Vaccines",
    url: "/vaccinations",
  },
  {
    id: 4,
    name: "All Tests",
    url: "/store",
  },
];
// Navbar links and their submenus end.

// Homepage how it works section start
export const howItWorks = [
  {
    id: 1,
    title: "Book your tests",
    description: "Find your test from more than 500+ test and packages",
    imageUrl: phoneUser,
  },
  {
    id: 1,
    title: "Sample Collection",
    description:
      "Our trained Phlebotomist will collect your samples at the comfort of your home",
    imageUrl: sample,
  },
  {
    id: 1,
    title: "Receive accurate results",
    description:
      "Receive your result in your secure and confidential account within 48hours.",
    imageUrl: results,
  },
  {
    id: 1,
    title: "Get free Doctor's consultation",
    description:
      "To understand your result better get a free Doctor's consultation",
    imageUrl: consultation,
  },
];
// Homepage how it works section end

// Homepage features section
export const features = [
  {
    id: 1,
    title: "Most Affordable Prices",
    description:
      "Affordability with our at-home lab tests, featuring the most competitive prices in the industry.",
    imageUrl: consultTwo,
  },
  {
    id: 2,
    title: "Accredited and Certified Labs",
    description:
      "We take pride in partnering only with accredited and certified labs to ensure the highest standards of quality and accuracy in our services.",
    imageUrl: hero,
  },
  {
    id: 3,
    title: "Painless Sample Collection",
    description:
      "Our sample collection process is designed to be quick, easy, and painless.",
    imageUrl: sample,
  },
  {
    id: 4,
    title: "Free Doctor’s Consultation",
    description:
      "Our doctors are always available to walk you through your test results and recommend the next steps to great health.",
    imageUrl: consultation,
  },
  {
    id: 5,
    title: "Tailored to you and only you",
    description:
      "With our tailor-made health tests , you can get reliable results and insights into your health - quickly and easily.",
    imageUrl: results,
  },
  {
    id: 5,
    title: "Fast, Reliable and Confidential results",
    description:
      "Our innovative technology is designed to provide accurate and reliable results about your health.",
    imageUrl: testResults,
  },
];
// End of Homepage features section

// FAQ Questions [Accordion Component]
export const faqData = [
  {
    id: 1,
    title: "What does AlphaMed do?",
    desc: "AlphaMed is the fastest-growing HealthTech company offering services to identify Communicable and Non- Communicable Diseases (NCDs) altering your health conditions. The primary aim of AlphaMed is to make healthcare accessible and affordable for all. Early detection of health issues helps analyze the condition and take the proper measures to prevent and treat specific diseases.",
  },
  {
    id: 2,
    title: "How to book a test online with AlphaMed?",
    desc: "AlphaMed is the fastest-growing HealthTech company offering services to identify Communicable and Non- Communicable Diseases (NCDs) altering your health conditions. The primary aim of AlphaMed is to make healthcare accessible and affordable for all. Early detection of health issues helps analyze the condition and take the proper measures to prevent and treat specific diseases.",
  },
  {
    id: 3,
    title: "How to check my test booking status?",
    desc: "AlphaMed is the fastest-growing HealthTech company offering services to identify Communicable and Non- Communicable Diseases (NCDs) altering your health conditions. The primary aim of AlphaMed is to make healthcare accessible and affordable for all. Early detection of health issues helps analyze the condition and take the proper measures to prevent and treat specific diseases.",
  },
  {
    id: 4,
    title: "How can I make an online payment for the booking?",
    desc: "AlphaMed is the fastest-growing HealthTech company offering services to identify Communicable and Non- Communicable Diseases (NCDs) altering your health conditions. The primary aim of AlphaMed is to make healthcare accessible and affordable for all. Early detection of health issues helps analyze the condition and take the proper measures to prevent and treat specific diseases.",
  },
  {
    id: 5,
    title: "How will I get my result?",
    desc: "AlphaMed is the fastest-growing HealthTech company offering services to identify Communicable and Non- Communicable Diseases (NCDs) altering your health conditions. The primary aim of AlphaMed is to make healthcare accessible and affordable for all. Early detection of health issues helps analyze the condition and take the proper measures to prevent and treat specific diseases.",
  },
];
// FAQ Questions [Accordion Component]

// Testimonials start
export const testimonials = [
  {
    id: 1,
    testimony:
      "It has made my life so much easier. It's all about convenience and peace of mind. I get the medical advice I need from home, saving time and Stress. Highly recommended!",
    userProfile: "Dele Giwa",
  },
  {
    id: 2,
    testimony:
      "Having to get a laboratory inquiry successfully done without leaving my house makes life way more easier than going to stand in long queues and longer wait times.",
    userProfile: "Tajudeen Moustafa",
  },
];
// Testimonials end

// Doctors Accordions Questions
export const questionsAccordion = [
  {
    id: 1,
    question: "Are your doctors verified?",
    answer:
      "We work with licensed doctors with verifiable years of practice under their belts. You can rest assured of their expertise.",
  },
  {
    id: 2,
    question: "What happens if I miss my appointment?",
    answer:
      "You will have one more option to reschedule for another date. After 2 missed consultations the booking is deactivated and you will have to book/pay for another consultation",
  },
  {
    id: 3,
    question: "Will I get a recording of my session with the doctor?",
    answer: "You can make a request for your session to be recorded",
  },
  {
    id: 4,
    question: "Is my medical information safe with the doctors?",
    answer:
      "Yes. Your medical information is safe. Privacy and confidentiality is guaranteed.",
  },
];
// Doctors Accordions Questions end

// consultation types array
export const typesConsultation = [
  {
    id: 1,
    title: "Physical Consultation",
    desc: "Speak to a doctor in person by visiting our partner facilities",
    price: 50000,
    testsInculdes: [
      "On site Consultation",
      "Secure end-end data Encryption",
      "Experts in a wide range of specializations",
      "One-on-one with a certified doctor",
      "Recommended treatment plans",
    ],
  },
  {
    id: 2,
    title: "Virtual Consultation",
    desc: "Consult with a doctor over a secured call",
    price: 20000,
    testsInculdes: [
      "Convenient & hassle free",
      "Secure end-end data Encryption",
      "Experts in a wide range of specializations",
      "One-on-one with a certified doctor",
      "Recommended treatment plans",
    ],
  },
];
