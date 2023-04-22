import { usePeopleContext } from 'context/usePeopleContext';
import { PaginationButton } from 'components/common/mui';

export const Pagination = () => {
  const { pagination, paginateNext, paginatePrevious } = usePeopleContext();
  console.log({ pagination, paginateNext, paginatePrevious }); // remove it later
  return (
    <div className="pagination" data-testid="pagination">
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
    </div>
  );
};
