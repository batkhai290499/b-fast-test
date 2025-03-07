import { Suspense } from "react";

import { BlockOne } from "@/section/BlockOne";
import { BlockTwo } from "@/section/BlockTwo";
import { BlockThree } from "@/section/BlockThree";

async function fetchDataLang(lang: string) {
  try {
    const response = await fetch(
      `https://api.test.soa-dev.net/api/v1/pages?lang=${lang}`
    );

    const data = await response.json();

    return { data };
  } catch (error) {
    console.error(error);
  }
}
type paramsType = Promise<{ lang: string }>;

export default async function MindMapPage({ params }: { params: paramsType }) {
  const { lang } = await params;

  const response = await fetchDataLang(lang);

  console.log(response);

  return (
    <Suspense fallback={<div>Loading mind map...</div>}>
      <div className="flex flex-col gap-4 justify-center items-center">
        <BlockOne lang={response?.data[0].bloc_1} />
        <BlockTwo lang={response?.data[0].bloc_2} />
        <BlockThree />
      </div>
    </Suspense>
  );
}
