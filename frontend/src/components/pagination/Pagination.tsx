import { usePeopleContext } from 'context/usePeopleContext';
import { NavigateBeforeIcon, NavigateNextIcon } from 'components/common/icons';

import { PaginationButton, PaginationWrapper } from './Pagination.styled';

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
      {pagination.page && pagination.count ? (
        <span style={{ color: '#000' }}>
          {pagination.page} of {Math.round(pagination.count / 10)}
        </span>
      ) : null}
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
