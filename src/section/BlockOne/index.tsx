"use client";

import { ItemBlock } from "./components/ItemBlock";

import { TitleBlock } from "@/components/titleBlock";
import Item1 from "@/images/block1/item1.png";

const BlockOne = (response: any) => {
  return (
    <div className="flex flex-col gap-12 w-full my-10 max-w-5xl px-6">
      <TitleBlock name={response.lang.title} subName={response.lang.subTitle} />
      <div className="flex flex-col md:flex-row gap-5">
        {response.lang.cases.map((e: any, index: any) => {
          return (
            <div
              key={index}
              className={index === 1 ? "relative pb-8 translate-y-[-16px]" : ""}
            >
              <ItemBlock
                buttonName={"Forfait 1"}
                description={e.description}
                image={Item1.src}
                subTitle={e.tagline}
                title={e.category}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export { BlockOne };
