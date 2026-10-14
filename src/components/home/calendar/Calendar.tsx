"use client";

import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
import { CAL_CONFIG, getCalConfig, getCalUIConfig } from "./cal-config";

export default function Calendar() {
  useEffect(() => {
    (async () => {
      const cal = await getCalApi({ namespace: CAL_CONFIG.username });
      cal("ui", getCalUIConfig());
    })();
  }, []);

  return (
    <Cal
      namespace={CAL_CONFIG.username}
      calLink={CAL_CONFIG.username}
      style={CAL_CONFIG.styles}
      config={getCalConfig()}
    />
  );
}
