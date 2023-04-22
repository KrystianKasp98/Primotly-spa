import { usePeopleContext } from 'context/usePeopleContext';
import { NavigateBeforeIcon, NavigateNextIcon } from 'components/common/icons';
import { getLastPage } from 'utils/methods';

import { PaginationButton, PaginationWrapper } from './Pagination.styled';

export const Pagination = () => {
  const { pagination, paginateNext, paginatePrevious } = usePeopleContext();

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
          {pagination.page} of {getLastPage(pagination.count)}
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
