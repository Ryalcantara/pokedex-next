"use client";
import { useRouter } from "next/navigation";
import { Pagination } from "@nextui-org/pagination";

type PokemonResult = {
  name: string;
  url: string;
};

type GetLimit = {
  count: number;
  next: string | null;
  previous: string | null;
  results: PokemonResult[];
};

interface PokemonPaginationProps {
  currentPage: number;
  getLimit: GetLimit;
}

const PokemonPagination = ({
  currentPage,
  getLimit,
}: PokemonPaginationProps) => {
  const router = useRouter();

  const totalPages = getLimit.count ;
  const validatedPage = Math.max(1, Math.min(currentPage, totalPages));

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      router.push(`/pokemon/${page}`);
    }
  };

  return (
    <div className="flex justify-center w-full my-4">
      <Pagination
        classNames={{
          wrapper: "gap-1",
          item: "w-8 h-8",
          cursor: "bg-warning-500",
        }}
        showControls
        total={totalPages}
        initialPage={validatedPage}
        page={validatedPage}
        onChange={handlePageChange}
        color="warning"
        size="lg"
        siblings={1}
        boundaries={1}
        variant="light"
      />
    </div>
  );
};

export default PokemonPagination;
