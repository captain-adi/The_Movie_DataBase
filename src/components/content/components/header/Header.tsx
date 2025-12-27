import { useState } from "react";
import type { IHeader } from "../../type";

function Header({ title, selector }: IHeader) {
  const [type, setType] = useState(selector[0]);
  console.log(type);

  return (
    <div className="flex">
      <h2 className="mr-5 font-semibold text-2xl">{title}</h2>
      <div className="border border-gray-900 rounded-full  flex ">
        {selector.map((item, index) => (
          <div
            key={index}
            onClick={() => setType(item)}
            className={`px-4 py-1 rounded-full cursor-pointer font-semibold transition duration-100 ${
              type === item ? "bg-[var(--primary-color)] text-white " : " "
            }`}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Header;
