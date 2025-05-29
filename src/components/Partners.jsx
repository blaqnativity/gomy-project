import utmostcare from "../assets/images/utmostcare.jpg";
import cross from "../assets/images/cross.jpg";
import biogene from "../assets/images/biogene.jpg";
import who from "../assets/images/who.jpg";
import medic from "../assets/images/medic.jpg";

const Partners = () => {
  return (
    <>
      <div className="container p-8 mx-auto w-full max-w-5xl xl:px-0 my-20">
        <div className="flex flex-col justify-center">
          <div className="text-xl text-center text-semibold text-gray-700">
            <h2 className="text-2xl font-bold tracking-wide text-gray-700/90">
              Some Of Our Partner Laboratories
            </h2>
            <span></span>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-5 mt-10 md:justify-around">
            <div className="">
              <img src={utmostcare} alt="" width="120" height="31" />
            </div>
            <div className="">
              <img src={medic} alt="" width="120" height="31" />
            </div>
            <div className="">
              <img src={cross} alt="" width="120" height="31" />
            </div>
            <div className="">
              <img src={who} alt="" width="120" height="31" />
            </div>
            <div className="">
              <img src={biogene} alt="" width="120" height="31" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Partners;
