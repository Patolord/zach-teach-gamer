import { createNavigation } from "next-intl/navigation";
import { routing } from "./routing";

/**
 * Locale-aware drop-ins for next/link and next/navigation. `Link` and
 * `router.push` add the `/pt` prefix automatically; `usePathname` returns the
 * path without it.
 */
export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);
