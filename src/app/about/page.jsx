import Image from "next/image";
import aboutpic from "../../../public/about.png";

const data = [
  {
    id: 1,
    exp: 10,
    desc: "Year of experience",
  },
  {
    id: 1,
    exp: 10,
    desc: "Year of experience",
  },
  {
    id: 1,
    exp: 10,
    desc: "Year of experience",
  },
];
const AboutPage = () => {
  return (
    <div className="py-5 md:py-10 lg:py-20">
      <div className="flex gap-[100px]">
        <div className="flex-1 flex flex-col gap-6 md:gap-[50px]">
          <div className="flex flex-col gap-5 text-center md:text-left">
            <h2 className="text-[var(--btn)] font-bold">About Agency</h2>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              we create digital ideas that are bigger, bolder, braver and
              better.
            </h1>
          </div>
          <p className="text-base md:text-xl font-light text-center md:text-left">
            we create digital ideas that are bigger, bolder, braver and better.
            we believe in good ideas flexibility and precision. We&apos;re
            world&apos;s oure special Team best consulting & finance solution
            provider. Wide range of web adn software development services.
          </p>
          <div className="flex flex-wrap gap-[20px] items-center justify-between">
            {data.map((item) => (
              <div className="flex flex-col gap-[10px]" key={item.id}>
                <h1 className="text-[var(--btn)] font-bold text-2xl">
                  {item.exp}+
                </h1>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="hidden lg:block relative flex-1">
          <Image src={aboutpic} alt="about" fill className="object-contain" />
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
