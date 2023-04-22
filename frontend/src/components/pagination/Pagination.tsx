import { usePeopleContext } from 'context/usePeopleContext';
import { PaginationButton, PaginationWrapper } from 'components/common/mui';

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
        &lt;
      </PaginationButton>
      <PaginationButton
        onClick={paginateNext}
        type="button"
        disabled={!pagination.next}
      >
        &gt;
      </PaginationButton>
    </PaginationWrapper>
  );
};
