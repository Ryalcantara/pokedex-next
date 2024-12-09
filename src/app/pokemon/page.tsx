import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

export default function Pokemons() {
  return (
    <Pagination className=" rounded px-4 py-2 w-fit">
      <PaginationContent className="gap-2">
        <PaginationItem>
          <PaginationPrevious
            href="#"
            className="text-black hover:text-black/80 hover:bg-transparent"
          />
        </PaginationItem>
        {[690, 691, 692, 693, 694, 695, 696, 697, 698, 699].map((page) => (
          <PaginationItem key={page}>
            <PaginationLink
              href="#"
              className="text-black hover:text-black/80 hover:bg-transparent min-w-[24px] h-6 p-0 flex items-center justify-center"
            >
              {page}
            </PaginationLink>
          </PaginationItem>
        ))}
        <PaginationItem>
          <PaginationNext
            href="#"
            className="text-black hover:text-black/80 hover:bg-transparent"
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
