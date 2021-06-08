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
            href="https://drive.google.com/file/d/16bc6w74QgC_ybLyOJor5jdaT_K-P5Dtj/view?usp=sharing"
            target="_blank"
          >
            Resume
          </SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
