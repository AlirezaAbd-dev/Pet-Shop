import { ChevronLeft, ChevronRight } from 'lucide-react';
import ReactPaginate from 'react-paginate';

type PaginationProps = {
  count: number;
  itemPerPage: number;
  page: number;
  onPageChange?: (selected: number) => void;
};

const Pagination = (props: PaginationProps) => {
  return (
    <ReactPaginate
      pageCount={Math.ceil(props.count / props.itemPerPage)}
      onPageChange={(event) => {
        props.onPageChange?.(event.selected);
      }}
      forcePage={props.page}
      containerClassName="flex flex-row gap-2"
      pageClassName="flex justify-center items-center min-w-8 h-8 border border-nature-900 rounded-lg"
      activeClassName="rounded-lg bg-secondary-500 text-white"
      nextLabel={
        <div className="w-8 h-8 border border-nature-900 rounded-lg flex justify-center items-center">
          <ChevronRight className="w-4 h-4" />
        </div>
      }
      previousLabel={
        <div className="w-8 h-8 border border-nature-900 rounded-lg flex justify-center items-center">
          <ChevronLeft className="w-4 h-4" />
        </div>
      }
    />
  );
};

export default Pagination;
