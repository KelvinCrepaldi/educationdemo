import Link, { LinkProps } from "next/link";
import { ReactNode } from "react";

const CustomLink = ({
  children,
  props,
}: {
  children: ReactNode;
  props: LinkProps;
}) => {
  return <Link {...props}>{children}</Link>;
};

export default CustomLink;
