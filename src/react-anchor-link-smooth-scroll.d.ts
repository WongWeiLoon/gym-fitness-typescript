declare module "react-anchor-link-smooth-scroll" {
    import React from "react";
  
    interface AnchorLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
      href: string;
    }
  
    const AnchorLink: React.FC<AnchorLinkProps>;
    export default AnchorLink;
}