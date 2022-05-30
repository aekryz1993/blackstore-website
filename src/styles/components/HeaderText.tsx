import styled from "styled-components";

interface Props {
  className?: string;
}

const Helper: React.FC<Props> = ({ className, children }) => (
  <h2 className={className}>{children}</h2>
);

export const HeaderText = styled(Helper)`
  color: ${(props) => props.theme.colors.primary.light};
`;
