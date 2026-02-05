import { memo } from "react";
import CommunityButton from "./components/CommunityButton";
import FooterLogo from "./components/FooterLogo";
import { footerSections, type FooterItem } from "./data/footerdata";

function Footer() {
  return (
    <footer className="bg-[var(--primary-color)] py-18">
      <div className="width-stack space-y-8 flex gap-10">
        <div className="space-y-6">
          <FooterLogo />
          <CommunityButton />
        </div>
        <div className="flex gap-13 text-white">
          {footerSections.map((section) => (
            <div key={section.title} className="mb-8">
              <h3 className="font-bold text-xl">{section.title}</h3>
              <ul>
                {section.items.map((item: FooterItem) => (
                  <li key={item.label} className="">
                    <a href={item.href} className="hover:underline">
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default memo(Footer);
