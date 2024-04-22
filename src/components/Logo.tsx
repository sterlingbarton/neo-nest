import Image from "next/image";
import LogoImage from "../images/logos/neonest.png";

export function Logo(props: React.ComponentPropsWithoutRef<"svg">) {
  return <Image src={LogoImage} alt={"logo"} height={50} />;
}
