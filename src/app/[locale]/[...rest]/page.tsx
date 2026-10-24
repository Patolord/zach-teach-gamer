import { notFound } from "next/navigation";

/** Any path that no page matched inside a valid locale renders the 404 page. */
export default function CatchAllPage() {
  notFound();
}
