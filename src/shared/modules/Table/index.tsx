import {
  FixedColTd,
  FixedColTh,
  Footer,
  InnerContainer,
  OuterContainer,
  Table,
  TableContainer,
  Td,
  Th,
} from "./style";
import { Container } from "../../../styles/layout/Container";
import { MdSkipNext, MdSkipPrevious } from "react-icons/md";
import { useTheme } from "styled-components";
import { SubText } from "../../../styles/components/Text";
import { MouseEventHandlerType } from "../../../shared/constants/types";

interface TableLayoutType {
  headers: string[];
  fields: { id: string; [key: string]: any }[];
  labels: string[];
  currentPage: number;
  totalPages: number;
  onPrev: MouseEventHandlerType<SVGElement>;
  onNext: MouseEventHandlerType<SVGElement>;
}

const TableLayout = ({
  headers,
  fields,
  labels,
  currentPage,
  totalPages,
  onPrev,
  onNext,
}: TableLayoutType) => {
  const theme = useTheme();
  const primaryColors = theme.colors.primary;

  return (
    <TableContainer>
      <OuterContainer className="relative">
        <InnerContainer>
          <Table>
            <thead>
              <tr>
                {headers &&
                  headers.length &&
                  headers.map((header, index) =>
                    index === 0 ? (
                      <FixedColTh key={header}>{header}</FixedColTh>
                    ) : (
                      <Th key={header}>{header}</Th>
                    )
                  )}
              </tr>
            </thead>
            {fields && fields.length && labels && labels.length ? (
              fields.map((field) => (
                <tbody key={field.id}>
                  <tr>
                    {labels.map((label, index) =>
                      index === 0 ? (
                        <FixedColTd key={label}>{field[label]}</FixedColTd>
                      ) : (
                        <Td key={label}>{field[label].toString()}</Td>
                      )
                    )}
                  </tr>
                </tbody>
              ))
            ) : (
              <></>
            )}
          </Table>
        </InnerContainer>
      </OuterContainer>
      <Footer>
        <Container className="flex justify-between items-center float-right gap-4">
          <MdSkipPrevious
            size={16}
            color={currentPage > 1 ? primaryColors.dark : primaryColors.gray}
            onClick={currentPage > 1 ? onPrev : undefined}
          />
          <SubText>
            {currentPage} of {totalPages} pages
          </SubText>
          <MdSkipNext
            size={16}
            color={
              currentPage < totalPages ? primaryColors.dark : primaryColors.gray
            }
            onClick={currentPage < totalPages ? onNext : undefined}
          />
        </Container>
      </Footer>
    </TableContainer>
  );
};

export default TableLayout;
