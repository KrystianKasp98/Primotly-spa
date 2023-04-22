import { usePeopleContext } from 'context/usePeopleContext';
import {
  PaginationButton,
  PaginationWrapper
} from 'components/common/mui/components';
import {
  NavigateBeforeIcon,
  NavigateNextIcon
} from 'components/common/mui/icons';

export const Pagination = () => {
  const { pagination, paginateNext, paginatePrevious } = usePeopleContext();
  console.log({ pagination }); // remove it later
  return (
    <PaginationWrapper className="pagination" data-testid="pagination">
      <PaginationButton
        onClick={paginatePrevious}
        type="button"
        disabled={!pagination.previous}
      >
        <NavigateBeforeIcon />
      </PaginationButton>
      <PaginationButton
        onClick={paginateNext}
        type="button"
        disabled={!pagination.next}
      >
        <NavigateNextIcon />
      </PaginationButton>
    </PaginationWrapper>
  );
};
