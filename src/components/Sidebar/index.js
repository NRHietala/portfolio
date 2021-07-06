import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SideBtnWrap,
  SidebarRoute,
} from "./SidebarElements";

const Sidebar = ({ isOpen, toggleMenu }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggleMenu}>
      <Icon>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="about" onClick={toggleMenu}>
            About
          </SidebarLink>
          <SidebarLink to="skills" onClick={toggleMenu}>
            Skills
          </SidebarLink>
          <SidebarLink to="projects" onClick={toggleMenu}>
            Projects
          </SidebarLink>
          <SidebarLink to="contact" onClick={toggleMenu}>
            Contact
          </SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute
            href="https://drive.google.com/file/d/1gpHT_yp3q7gtsW5ocn7GAItCioCC4Nsz/view?usp=sharing"
            target="_blank"
            aria-label="resume link"
            rel="noopener noreferrer"
          >
            Resume
          </SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
