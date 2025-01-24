"use client";
import { Button, Image, Tooltip } from "@heroui/react";
import { useState } from "react";

import { TitleBlock } from "@/components/titleBlock";
import Map from "@/images/block2/Map.png";
import {
  CrossHair,
  FishingIcon,
  MapPinCrossHair,
  MapPinFishing,
  MapPinMountain,
  MountainsBasic,
} from "@/components/icons";

export interface IBlockTwoProps {}
interface Location {
  name: string;
  top: number;
  left: number;
  icon: JSX.Element;
}

const BlockTwo = (props: IBlockTwoProps) => {
  const locationPin = [
    { name: "Location 1", top: 10, left: 10, icon: <MapPinMountain /> },
    { name: "Location 2", top: 60, left: 60, icon: <MapPinCrossHair /> },
    { name: "Location 3", top: 90, left: 120, icon: <MapPinFishing /> },
  ];

  const [selectedLocation, setSelectedLocation] = useState<Location | null>(
    null
  );

  return (
    <div className="flex flex-col gap-12 w-full my-10 bg-slate-200/50 items-center px-6">
      <TitleBlock name="Titre Bloc 2" subName="Sous- titre" />
      <div className="flex flex-wrap gap-4 justify-center">
        <Button
          color="secondary"
          size="md"
          startContent={<CrossHair className="text-[#562C2C]" />}
          variant="bordered"
          onPress={() => setSelectedLocation(locationPin[0])}
        >
          Activities 1
        </Button>
        <Button
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
        </Button>
      </div>
      <div className="relative">
        <Image
          alt="map"
          className="block"
          height={Map.height}
          src={Map.src}
          width={Map.width}
        />
        {locationPin.map((location) => (
          <Tooltip
            key={location.name}
            content={location.name}
            isOpen={selectedLocation?.name === location.name} // Hiển thị nếu pinmap được chọn
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
