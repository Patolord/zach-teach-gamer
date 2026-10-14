import type messages from "../../messages/en-CA";
import type { locales } from "./config";

declare module "next-intl" {
  interface AppConfig {
    Locale: (typeof locales)[number];
    Messages: typeof messages;
  }
}
