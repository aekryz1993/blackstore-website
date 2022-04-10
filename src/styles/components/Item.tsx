import styled from "styled-components";

interface Props {
  className?: string;
}

const Helper: React.FC<Props> = ({ className, children }) => (
  <div className={`${className} flex flex-col`}>{children}</div>
);

export const Item = styled(Helper)`
  width: 100%;
`;
