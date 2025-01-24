"use client";
import { Button, Image } from "@heroui/react";

import { BasicVectorTopRight } from "@/components/icons";

export interface IItemBlockProps {
  image: string;
  title: string;
  subTitle: string;
  description: string;
  buttonName: string;
}

const ItemBlock = (props: IItemBlockProps) => {
  const { image, title, subTitle, description, buttonName } = props;

  return (
    <div className="flex flex-col gap-4 h-fit">
      <Image alt="item1" src={image} />
      <div className="flex flex-col gap-4">
        <p className=" text-[#F2542D] font-medium text-[20px]">{title}</p>
        <p className=" text-[#562C2C] font-medium text-[28px]">{subTitle}</p>
        <p className="text-[#562C2C] font-normal text-[18px]">{description}</p>
      </div>
      <Button
        className="w-fit px-8 rounded-3xl"
        color="secondary"
        endContent={<BasicVectorTopRight className="text-[#0E9594]" />}
        size="sm"
        variant="bordered"
      >
        {buttonName}
      </Button>
    </div>
  );
};

export { ItemBlock };
