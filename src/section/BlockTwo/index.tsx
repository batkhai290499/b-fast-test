"use client";

import { Button, Image, Tooltip } from "@heroui/react";
import { useState } from "react";

import {
  CrossHair,
  MapPinCrossHair,
  MapPinFishing,
  MapPinMountain,
} from "@/components/icons";
import { TitleBlock } from "@/components/titleBlock";
import Map from "@/images/block2/Map.png";

export interface IBlockTwoProps {}
interface Location {
  name?: string;
  top: number;
  left: number;
  icon: JSX.Element;
}

const BlockTwo = (response: any) => {
  const locationPin = [
    { top: 10, left: 10, icon: <MapPinMountain /> },
    { top: 60, left: 60, icon: <MapPinCrossHair /> },
    { top: 90, left: 120, icon: <MapPinFishing /> },
  ];

  const editData = response.lang.cases.map((name: any, index: any) => ({
    name,
    ...locationPin[index],
  }));
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(
    null
  );

  return (
    <div className="flex flex-col gap-12 w-full my-10 bg-slate-200/50 items-center px-6">
      <TitleBlock name={response.lang.title} subName={response.lang.subTitle} />
      <div className="flex flex-wrap gap-4 justify-center">
        {editData.map((e: any, index: any) => (
          <Button
            key={e.name}
            color="secondary"
            size="md"
            startContent={<CrossHair className="text-[#562C2C]" />}
            variant="bordered"
            onPress={() => setSelectedLocation(editData[index])}
          >
            {e.name}
          </Button>
        ))}

        {/* <Button
          color="secondary"
          size="md"
          startContent={<FishingIcon className="text-[#562C2C]" />}
          variant="bordered"
          onPress={() => setSelectedLocation(locationPin[1])}
        >
          Activities 2
        </Button>
        <Button
          color="secondary"
          size="md"
          startContent={<MountainsBasic className="text-[#562C2C]" />}
          variant="bordered"
          onPress={() => setSelectedLocation(locationPin[2])}
        >
          Activities 3
        </Button> */}
      </div>
      <div className="relative">
        <Image
          alt="map"
          className="block"
          height={Map.height}
          src={Map.src}
          width={Map.width}
        />
        {editData.map((location: any) => (
          <Tooltip
            key={location.name}
            content={location.name}
            isOpen={selectedLocation?.name === location.name}
            placement="top"
          >
            <div
              className="absolute z-10 cursor-pointer"
              style={{
                top: location.top,
                left: location.left,
              }}
            >
              {location.icon}
            </div>
          </Tooltip>
        ))}
      </div>
    </div>
  );
};

export { BlockTwo };
