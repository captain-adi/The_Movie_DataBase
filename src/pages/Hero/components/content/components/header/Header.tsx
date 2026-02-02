import { memo } from "react";
import type { IHeader } from "../../type";

function Header({ title, selector, value, onChange }: IHeader) {
  return (
    <div className="flex">
      <h2 className="mr-5 font-semibold text-2xl">{title}</h2>
      <div className="border border-gray-900 rounded-full  flex ">
        {selector.map((item, index) => (
          <div
            key={index}
            onClick={() => onChange(item.value)}
            className={`px-4 py-1 rounded-full cursor-pointer font-semibold transition duration-100 ${
              value === item.value
                ? "bg-[var(--primary-color)] text-white "
                : " "
            }`}
          >
            {item.label}
          </div>
        ))}
      </div>
    </div>
  );
}

export default memo(Header);
