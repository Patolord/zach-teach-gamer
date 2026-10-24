"use client";

import { getCalApi } from "@calcom/embed-react";
import { useTranslations } from "next-intl";
import { useEffect } from "react";
import { CAL_CONFIG, getCalConfig, getCalUIConfig } from "./cal-config";

interface CalendarModalProps {
  buttonText?: string;
}

export default function CalendarModal({ buttonText }: CalendarModalProps) {
  const t = useTranslations("home.calendar");

  useEffect(() => {
    (async () => {
      const cal = await getCalApi({ namespace: CAL_CONFIG.username });
      cal("ui", getCalUIConfig());
    })();
  }, []);

  return (
    <button
      type="button"
      data-cal-namespace={CAL_CONFIG.username}
      data-cal-link={CAL_CONFIG.username}
      data-cal-config={JSON.stringify(getCalConfig())}
      className="bg-yellow-500 text-black px-4 py-2 rounded-md text-center w-full"
    >
      {buttonText ?? t("modalButton")}
    </button>
  );
}
