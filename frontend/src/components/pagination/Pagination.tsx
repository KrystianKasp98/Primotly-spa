import { usePeopleContext } from 'context/usePeopleContext';

export const Pagination = () => {
  const { pagination, paginateNext, paginatePrevious } = usePeopleContext();
  console.log({ pagination, paginateNext, paginatePrevious });
  return (
    <div className="pagination" data-testid="pagination">
      <button
        onClick={paginatePrevious}
        type="button"
        disabled={!pagination.previous}
      >
        previous
      </button>
      <button onClick={paginateNext} type="button" disabled={!pagination.next}>
        next
      </button>
    </div>
  );
};
