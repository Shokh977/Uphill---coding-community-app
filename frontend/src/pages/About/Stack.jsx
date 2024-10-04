import React from "react";
import { BookUp2, Code2, Coffee, Settings } from "lucide-react";
import { DiJavascript, DiMongodb } from "react-icons/di";
import { RiNextjsLine, RiNodejsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiExpress, SiExpressvpn, SiMongoose, SiRedux } from "react-icons/si";
import { FiFigma } from "react-icons/fi";
import { FaReact } from "react-icons/fa";

export default function Stack() {
  const StackIcons = [
    { icon: <FaReact size={40} />, label: "React" },
    { icon: <DiJavascript size={40} />, label: "JavaScript" },
    { icon: <RiNextjsLine size={40} />, label: "Next.js" },
    { icon: <SiRedux size={40} />, label: "Redux" },
    { icon: <RiNodejsFill size={40} />, label: "Node.js" },
    { icon: <SiExpress size={40} />, label: "Express" },
    { icon: <DiMongodb size={40} />, label: "MongoDB" },
    { icon: <SiMongoose size={40} />, label: "Mongoose" },
    { icon: <RiTailwindCssFill size={40} />, label: "Tailwind CSS" },
    { icon: <FiFigma size={40} />, label: "Figma" },
  ];

  return (
    <>
      {StackIcons.map((item) => (
        <div>
          <div className="flex flex-col items-center">
            <p className="hover:text-violet-600 transition-transform duration-200 purcor-pointer">
              {item.icon}
            </p>
            <span className="mt-2">{item.label}</span>
          </div>
        </div>
      ))}
    </>

    //   <FaReact
    //     size={100}
    //     className="hover:text-violet-500 hover:scale-110 transition-transform duration-200 cursor-pointer"
    //   />
  );
}
