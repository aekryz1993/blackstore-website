import styled, { css } from "styled-components";
import { Container } from "../../../styles/layout/Container";

export const TableContainer = styled(Container)`
  background-color: ${(props) => props.theme.colors.primary.darkGreen};
  width: 90%;
  max-height: 90%;
  color: ${(props) => props.theme.colors.primary.light};
  border-radius: 0.1rem;
  font-size: 0.8rem;
  box-shadow: 1px 1px 4px 0.5px ${(props) => props.theme.colors.primary.green},
    -1px -1px 4px 0.5px ${(props) => props.theme.colors.primary.green};
`;

export const OuterContainer = styled(Container)``;

export const InnerContainer = styled(Container)`
  overflow-x: auto;
  margin-left: 100px;
`;

export const Table = styled.table`
  table-layout: fixed;
  width: 100%;
  *margin-left: -100px;
`;

const commonTdTh = css`
  vertical-align: top;
  border-top: 1px solid ${(props) => props.theme.colors.primary.dark};
  padding: 30px 10px;
  width: 200px;
`;

export const Td = styled.td`
  ${commonTdTh}
`;

export const Th = styled.th`
  ${commonTdTh}
  min-width:100px;
  text-align: left;
  padding: 10px 10px;
`;

const commonFixedCol = css`
  position: absolute;
  *position: relative;
  left: 0;
  width: 100px;
`;

export const FixedColTd = styled.td`
  ${commonTdTh}
  ${commonFixedCol}
`;

export const FixedColTh = styled.th`
  ${commonTdTh}
  ${commonFixedCol}
  min-width:100px;
  text-align: left;
  padding: 10px 10px;
`;

export const Footer = styled(Container)`
  height: 2rem;
  width: 100%;
`;
