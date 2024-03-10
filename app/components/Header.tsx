import { getHeaderData } from "@/sanity/lib/sanity-utils";
import Navbar from "./Navbar";

export default async function Header() {
  const headerDataRaw = await getHeaderData();

  return <Navbar {...headerDataRaw} />;
}
