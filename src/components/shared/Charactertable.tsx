// src/components/shared/CharactersTable.tsx
import React from "react";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import type { ApiCharacter } from "@/lib/api";

const columnHelper = createColumnHelper<ApiCharacter>();

const columns = [
  columnHelper.accessor("image", {
    header: "Image",
    cell: (info) => {
      const src = info.getValue() as string;
      return (
        <div className="w-20 h-20 rounded overflow-hidden bg-gray-100 flex items-center justify-center">
          <img
            src={src}
            alt={info.row.original.name}
            className="w-full h-full object-cover"
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).src =
                "https://via.placeholder.com/128?text=No+Image";
            }}
          />
        </div>
      );
    },
    enableSorting: false,
  }),
  columnHelper.accessor("name", {
    header: "Name",
    cell: (info) => <span className="font-medium">{info.getValue()}</span>,
  }),
  columnHelper.accessor("race", {
    header: "Race",
    cell: (info) => <span>{info.getValue() ?? "-"}</span>,
  }),
];

interface Props {
  data: ApiCharacter[];
}

export default function CharactersTable({ data }: Props) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="w-full overflow-x-auto">
      <table className="w-full min-w-[640px] table-auto border-collapse">
        <thead>
          {table.getHeaderGroups().map((hg) => (
            <tr key={hg.id} className="bg-gray-50">
              {hg.headers.map((header) => (
                <th
                  key={header.id}
                  className="text-left px-4 py-3 text-sm text-gray-600"
                >
                  {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.length === 0 ? (
            <tr>
              <td colSpan={columns.length} className="p-6 text-center text-gray-500">
                No data
              </td>
            </tr>
          ) : (
            table.getRowModel().rows.map((row) => (
              <tr key={row.id} className="border-t">
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id} className="px-4 py-4 align-middle">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
