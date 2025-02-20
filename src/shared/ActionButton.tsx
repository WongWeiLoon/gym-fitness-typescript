import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { PagesEnum } from './types.ts';

type ButtonProps = {
    children: React.ReactNode;
    setSelectedPage: (value: PagesEnum) => void;
}

const ActionButton = ({ children, setSelectedPage }: ButtonProps) => {
  return (
    <AnchorLink
        className='rounded-md bg-secondary-500 px-10 py-2 hover:bg-primary-500 hover:text-white'
        onClick={() => setSelectedPage(PagesEnum.ContactUs)}
        href={`#${PagesEnum.ContactUs}`}
    >
        {children}
    </AnchorLink>
  )
}

export default ActionButton