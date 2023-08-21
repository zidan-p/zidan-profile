
import { usePathname } from 'next/navigation'
import Link from 'next/link';
import { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react';

export { NavLink };

type Props  = {
  href: string;
  exact: boolean;
  children: React.ReactNode;
  isNavLinkActive: (arg: boolean)=>any;
} & React.HTMLProps<HTMLButtonElement>

NavLink.defaultProps = {
    exact: false
};

function NavLink({ href, exact, children, isNavLinkActive, ...props } : Props) {
  const pathName = usePathname();
  const isActive = exact ? pathName === href : pathName.startsWith(href);
  isNavLinkActive(isActive);

  return (
    <Link href={href}>
      {children}
    </Link>
  );
}