"use client";

import dayGridPlugin from "@fullcalendar/daygrid";
import FullCalendar from "@fullcalendar/react";
import { Input } from "@heroui/react";
import { useMemo } from "react";

import { EditorTest } from "./component/editor";

export interface IBlockThreeProps {}

const FormBlockThree = () => {
  const onSubmit = (e: any) => {
    e.preventDefault();
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-row gap-8 items-center">
        <p className="min-w-20">Nom:</p>
        <Input fullWidth name="nom" placeholder="Entrez votre nom" />
      </div>
      <div className="flex flex-row gap-8 items-center">
        <p className="min-w-20">Email:</p>
        <Input
          fullWidth
          // className="shadow-md shadow-[#F2542D] p-1 bg-white"
          name="email"
          placeholder="Enter your email"
          type="email"
        />
      </div>
      <div className="flex flex-row gap-8 items-center">
        <p className="min-w-20">Message:</p>
        <div className="border border-default-500 rounded-md">
          <EditorTest />
        </div>
      </div>
      <div className="flex flex-row gap-8 items-center">
        <p className="min-w-20">Fichier:</p>
        <Input accept="*.pdf" type="file" />
      </div>
    </div>
  );
};

const Calendar = () => {
  const disabledDates = useMemo(() => {
    return ["2025-01-10", "2025-01-15", "2025-01-20"];
  }, []);

  const isDisabledDate = (date: string) => {
    return disabledDates.includes(date);
  };
  const events = useMemo(() => {
    return [
      {
        title: "Libre",
        date: "2025-01-12",
        description: "Libre",
      },
      {
        title: "Libre",
        date: "2025-01-15",
        description: "Libre",
      },
      {
        title: "Conference Call",
        date: "Libre",
        description: "Libre",
      },
    ];
  }, []);
  const currentMonth = new Date().getMonth();
  const currentYear = new Date().getFullYear();

  return (
    <div className="max-w-5xl h-[553px] border border-solid border-default-500 rounded-3xl p-4">
      <FullCalendar
        dayCellClassNames={(info) => {
          const date = new Date(info.date);
          const formattedDate = date.toISOString().split("T")[0];

          if (isDisabledDate(formattedDate)) {
            return "disabled-day";
          }

          if (
            date.getMonth() !== currentMonth ||
            date.getFullYear() !== currentYear
          ) {
            return "current-month-day";
          }

          return "enable-day";
        }}
        eventClassNames={(event) => {
          return "";
        }}
        events={events}
        initialView="dayGridMonth"
        plugins={[dayGridPlugin]}
      />
    </div>
  );
};

const BlockThree = (props: IBlockThreeProps) => {
  return (
    <div className="flex flex-col gap-12 w-full my-10 max-w-5xl px-6">
      <Calendar />
      <FormBlockThree />
    </div>
  );
};

export { BlockThree };
