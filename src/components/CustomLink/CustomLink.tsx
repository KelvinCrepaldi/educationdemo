import Link, { LinkProps } from "next/link";
import { ReactNode } from "react";
interface CustomLinkProps extends LinkProps {
  children: ReactNode;
}
const CustomLink = ({ children, ...props }: CustomLinkProps): JSX.Element => {
  return (
    <Link
      className="bg-orange-500 rounded-full py-3 px-7 text-sm mx-3 text-white font-bold hover:bg-orange-400 flex items-center justify-center transition min-w-fit"
      {...props}
    >
      {children}
    </Link>
  );
};

export default CustomLink;
