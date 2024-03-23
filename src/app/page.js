import Image from "next/image";
import brand from "../../public/brands.png";
import hero from "../../public/hero.gif";

export default function Home() {
  return (
    <div className="py-5 md:py-10 lg:py-20">
      <div className="flex gap-[100px]">
        <div className="lg:flex-1 flex flex-col gap-[50px]">
          <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold">
            Creative Thoughts Agency
          </h1>
          <p className="text-lg md:text-xl">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non
            temporibus distinctio sit, placeat reiciendis quibusdam
          </p>
          <div className="flex gap-5">
            <button className="p-5 min-w-[120px] cursor-pointer border-none rounded-[5px] bg-[var(--btn)] text-[var(--text)]">
              Learn More
            </button>
            <button className="p-5 min-w-[120px] cursor-pointer border-none rounded-[5px] bg-[var(--text)] text-[var(--bg)]">
              Contact
            </button>
          </div>
          <div className="relative w-[300px] md:w-[500px] h-[30px] md:h-[50px] filter grayscale">
            <Image src={brand} alt="brand" fill className="" />
          </div>
        </div>
        <div className="hidden lg:block relative flex-1">
          <Image src={hero} alt="hero image" fill />
        </div>
      </div>
    </div>
  );
}
