import AnchorLink from "react-anchor-link-smooth-scroll";
import { PagesEnum } from "@/shared/types";

type PageProps = {
    page: string;
    selectedPage: PagesEnum;
    setSelectedPage: (value: PagesEnum) => void;
}

const Link = ({
    page,
    selectedPage,
    setSelectedPage,
}: PageProps) => {
  const lowerCasePage = page.toLowerCase().replace(/ /g, "") as PagesEnum;

  return (
    <AnchorLink
        className={`${selectedPage === lowerCasePage ? "text-primary-500" : "" }
            transition duration-500 hover:text-primary-300
        `}
        href={`#${lowerCasePage}`}
        onClick={() => setSelectedPage(lowerCasePage)}
    >
        {page}
    </AnchorLink>
  )
}

export default Link