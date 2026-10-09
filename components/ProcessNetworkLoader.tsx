"use client";

import dynamic from "next/dynamic";

const ProcessNetwork = dynamic(() => import("./ProcessNetwork"), { ssr: false });

export default function ProcessNetworkLoader() {
  return <ProcessNetwork />;
}
