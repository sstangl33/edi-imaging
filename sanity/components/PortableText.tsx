import Image from "next/image";
import { urlForImage } from "../lib/image";

const PortableTextComponent = {
  marks: {
    internalLink: ({ value, children }: any) => {
      const { slug = {} } = value;
      const href = `/${slug.current}`;
      return <a href={href}>{children}</a>;
    },
    link: ({ value, children }: any) => {
      const { blank, href } = value;
      return blank ? (
        <a href={href} target="_blank" rel="noopener">
          {children}
        </a>
      ) : (
        <a href={href}>{children}</a>
      );
    },
  },
  types: {
    image: ({ value }: any) => (
      <Image
        src={urlForImage(value)}
        alt={value.alt}
        width={700}
        height={700}
      />
    ),
  },
};

export default PortableTextComponent;
