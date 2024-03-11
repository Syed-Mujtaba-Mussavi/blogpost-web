import React from "react";
import contact from "../../../public/contact.png";
import Image from "next/image";

const ContactPage = () => {
  return (
    <div className="py-5 md:py-10 lg:py-20">
      <div className="flex flex-col lg:flex-row items-center gap-[100px]">
        <div className="hidden lg:block relative h-[500px] flex-1">
          <Image src={contact} alt="contact" fill className="object-contain" />
        </div>
        <div className="w-full md:flex-1">
          <form className="flex flex-col gap-5">
            <input
              type="text"
              placeholder="Name and surname"
              className="p-5 rounded-[5px] border-none outline-none bg-[var(--bgSoft)] text-[var(--text)]"
            />
            <input
              type="text"
              placeholder="Email Address"
              className="p-5 rounded-[5px] border-none outline-none bg-[var(--bgSoft)] text-[var(--text)]"
            />
            <input
              type="text"
              placeholder="Phone Number (Optional)"
              className="p-5 rounded-[5px] border-none outline-none bg-[var(--bgSoft)] text-[var(--text)]"
            />
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="Message"
              className="p-5 rounded-[5px] border-none outline-none bg-[var(--bgSoft)] text-[var(--text)]"
            ></textarea>
            <button className="p-5 bg-[var(--btn)] text-[var(--text)] font-bold border-none rounded-[5px] cursor-pointer">
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
