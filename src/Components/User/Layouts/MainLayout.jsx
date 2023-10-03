import React from 'react';
import { HeaderSection } from './HeaderSection';
import { SidebarSection } from './SidebarSection';
import { FooterSection } from './FooterSection';

export const MainLayout = ({ children }) => {
  return (
    <div className="wrapper">
      <HeaderSection />
      <SidebarSection />
      {children}
      <FooterSection />
    </div>
  )
}