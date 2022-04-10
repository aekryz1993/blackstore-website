import { NavLink, NavLinkProps } from "react-router-dom";
import styled, { useTheme } from "styled-components";

interface Props {
  className?: string;
}
interface IProps extends NavLinkProps {
  className?: string;
}

const SidebarHelper: React.FC<Props> = ({ className, children }) => (
  <nav className={`${className} flex flex-col`}>{children}</nav>
);

export const Sidebar = styled(SidebarHelper)``;

const SidebarItemHelper: React.FC<IProps> = (props) => {
  const theme = useTheme();
  return (
    <NavLink
      {...props}
      style={({ isActive }: { isActive: boolean }) => {
        if (isActive)
          return {
            backgroundColor: theme.colors.primary.darkGreen,
            color: theme.colors.primary.light,
          };
        return {
          backgroundColor: "transparent",
          color: theme.colors.primary.gray,
        };
      }}
      className={`${props.className} flex justify-center items-center py-4`}
    >
      {props.children}
    </NavLink>
  );
};

export const SidebarItem = styled(SidebarItemHelper)`
  font-weight: bolder;
  text-decoration: none;
`;
