import type { locales } from "./config";
import type messages from "../../messages/en-CA";

declare module "next-intl" {
  interface AppConfig {
    Locale: (typeof locales)[number];
    Messages: typeof messages;
  }
}
