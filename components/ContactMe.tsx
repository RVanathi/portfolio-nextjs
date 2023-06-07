import React from "react";
import { SocialIcon } from "react-social-icons";
import { PhoneIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";
import { Social } from "@/typings";
type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type Props = { socials: Social[] };

function ContactMe({ socials }: Props) {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:myemailid@mail?subject=${formData.message}`;
  };
  return (
    <div className="h-screen relative flex flex-col text-center md:text-left md:flew-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-[#1f7b70] text-2xl">
        Contact
      </h3>
      <h3 className="absolute top-36 uppercase tracking-[3px] text-[#1f7b70] text-sm">
        Get in Touch
      </h3>
      <div className="flex flex-col space-y-10">
        <h4 className="text-3xl font-semibold text-center">
          I&apos;ve got just what you need. Contact me and{" "}
          <span className="decoration-[#A1C181]/50 underline">{`let's talk`}</span>
        </h4>
        <div className="space-y-10">
          <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className="text-[#A1C181] h-7 w-7 animate-pulse" />
            <p className="text-2xl">vanathisulochana@gmail.com</p>
          </div>
          <div className="flex items-center space-x-5 justify-center animate-pulse">
            {/* <PhoneIcon className="text-[#A1C181] h-7 w-7 animate-pulse" />
            <p className="text-2xl">+123456789</p> */}
            {socials.map((social) => (
              <SocialIcon
                key={social._id}
                url={social.url}
                fgColor="#A1C181"
                bgColor="transparent"
              />
            ))}
            {/* <SocialIcon
              url="https://www.instagram.com/vaanoz/"
              fgColor="#A1C181"
              bgColor="transparent"
            />
            <SocialIcon
              url="https://www.linkedin.com/in/vanathi-rajasekar/"
              fgColor="#A1C181"
              bgColor="transparent"
            />
            <SocialIcon
              url="https://github.com/RVanathi"
              fgColor="#A1C181"
              bgColor="transparent"
            /> */}
          </div>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-2 w-fit mx-auto"
        >
          <div className="flex space-x-2">
            <input
              {...register("name")}
              placeholder="Name"
              className="contactInput"
              type="text"
            />
            <input
              {...register("email")}
              placeholder="Email"
              className="contactInput"
              type="email"
            />
          </div>
          <input
            {...register("subject")}
            placeholder="Subject"
            className="contactInput"
            type="text"
          />
          <textarea
            {...register("message")}
            placeholder="Message"
            className="contactInput"
          />
          <button
            type="submit"
            className="bg-[#A1C181]/80 py-5 px-10 rounded-md text-black font-bold"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactMe;
