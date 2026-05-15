/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { motion } from "framer-motion";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  ChevronLeft,
  ChevronRight,
  MoreHorizontal,
  MoreVertical,
  ChevronUp,
  ChevronDown,
} from "lucide-react";

export type Column<T, R=any> = {
  header: string | React.ReactNode;
  accessor?: keyof T;
  render?: (value: T[keyof T] | undefined, row: T) => React.ReactNode;
};

export type ActionConfig<T> = {
  label: string;
  icon?: React.ReactNode;
  onClick: (row: T, event?: React.MouseEvent) => void;
  show?: (row: T) => boolean;
};

interface DataTableProps<T, R = any> {
  data: T[];
  columns: Column<T, R>[];
  caption?: string;
  footer?: React.ReactNode;
  actions?: ActionConfig<T>[];
  selectable?: boolean;
  onSelectionChange?: (rows: T[]) => void;
  pageSize?: number;
  topControls?: React.ReactNode;
  onRowClick?: (row: T) => void;
  // New props for server-side pagination
  disableInternalPagination?: boolean;
  totalRecords?: number;
  currentPage?: number;
  onPageChange?: (page: number) => void;
}

export function DataTable<T extends Record<string, any>>({
  data,
  columns,
  caption,
  footer,
  actions = [],
  selectable = false,
  onSelectionChange,
  pageSize = 10,
  topControls,
  onRowClick,
  disableInternalPagination = false,
  totalRecords,
  currentPage: externalCurrentPage,
  onPageChange,
}: DataTableProps<T>) {
  const [selectedRows, setSelectedRows] = useState<Set<number>>(new Set());
  const [internalCurrentPage, setInternalCurrentPage] = useState(1);
  const [sortConfig, setSortConfig] = useState<{
    key: keyof T;
    direction: "asc" | "desc";
  } | null>(null);

  const hasActions = actions.length > 0;
  const currentPage = externalCurrentPage ?? internalCurrentPage;

  const sortedFullData = React.useMemo(() => {
    if (!sortConfig) return data;
    return [...data].sort((a, b) => {
      const aVal = a[sortConfig.key];
      const bVal = b[sortConfig.key];

      if (aVal == null) return 1;
      if (bVal == null) return -1;

      if (typeof aVal === "number" && typeof bVal === "number") {
        return sortConfig.direction === "asc" ? aVal - bVal : bVal - aVal;
      }

      return sortConfig.direction === "asc"
        ? String(aVal).localeCompare(String(bVal))
        : String(bVal).localeCompare(String(aVal));
    });
  }, [data, sortConfig]);

  let sortedData: T[];
  let totalPages: number;

  if (disableInternalPagination) {
    sortedData = sortedFullData;
    totalPages = totalRecords ? Math.ceil(totalRecords / pageSize) : 1;
  } else {
    totalPages = Math.ceil(sortedFullData.length / pageSize);
    const startIdx = (currentPage - 1) * pageSize;
    const endIdx = startIdx + pageSize;
    sortedData = sortedFullData.slice(startIdx, endIdx);
  }

  React.useEffect(() => {
    if (!disableInternalPagination && currentPage > totalPages && totalPages > 0) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setInternalCurrentPage(1);
    }
  }, [totalPages, currentPage, disableInternalPagination]);

  const toggleRow = (index: number) => {
    const updated = new Set(selectedRows);
    updated.has(index) ? updated.delete(index) : updated.add(index);
    setSelectedRows(updated);
    onSelectionChange?.(sortedData.filter((_, i) => updated.has(i)));
  };

  const toggleAll = () => {
    if (selectedRows.size === sortedData.length) {
      setSelectedRows(new Set());
      onSelectionChange?.([]);
    } else {
      const all = new Set(sortedData.map((_, i) => i));
      setSelectedRows(all);
      onSelectionChange?.(sortedData);
    }
  };

  const goToPage = (page: number) => {
    if (page < 1 || page > totalPages) return;
    if (disableInternalPagination && onPageChange) {
      onPageChange(page);
    } else {
      setInternalCurrentPage(page);
    }
    setSelectedRows(new Set());
  };

  return (
    <div className="w-full rounded-lg overflow-hidden border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 shadow-sm">
      <Table className="w-full border-collapse">
        {caption && (
          <TableCaption className="text-left text-xs text-slate-500 dark:text-slate-400">
            {caption}
          </TableCaption>
        )}

        <TableHeader>
          <TableRow className="bg-slate-100 dark:bg-slate-800">
            {selectable && (
              <TableHead className="w-10 py-2">
                <Checkbox
                  checked={
                    selectedRows.size === sortedData.length &&
                    sortedData.length > 0
                  }
                  onCheckedChange={toggleAll}
                />
              </TableHead>
            )}
            {columns.map((col, idx) => (
              <TableHead
                key={idx}
                className="text-xs font-semibold text-slate-700 dark:text-slate-200 py-2 cursor-pointer select-none"
                onClick={() => {
                  if (!col.accessor) return;
                  setSortConfig((prev) => ({
                    key: col.accessor!,
                    direction:
                      prev?.key === col.accessor && prev!.direction === "asc"
                        ? "desc"
                        : "asc",
                  }));
                }}
              >
                <div className="flex items-center gap-1">
                  {col.header}
                  {sortConfig?.key === col.accessor ? (
                    sortConfig?.direction === "asc" ? (
                      <ChevronUp className="h-3 w-3" />
                    ) : (
                      <ChevronDown className="h-3 w-3" />
                    )
                  ) : null}
                </div>
              </TableHead>
            ))}
            {hasActions && (
              <TableHead className="text-right py-2 text-slate-700 dark:text-slate-200 text-xs">
                Actions
              </TableHead>
            )}
          </TableRow>
        </TableHeader>

        <TableBody>
          {sortedData.length === 0 ? (
            <TableRow>
              <TableCell
                colSpan={
                  columns.length + (selectable ? 1 : 0) + (hasActions ? 1 : 0)
                }
                className="text-center py-6 text-slate-500 dark:text-slate-400 text-xs"
              >
                No data available
              </TableCell>
            </TableRow>
          ) : (
            sortedData.map((row, rowIdx) => (
              <motion.tr
                key={rowIdx}
                className="border-b border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-white/5 cursor-pointer transition-colors"
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: rowIdx * 0.03 }}
                onClick={() => onRowClick?.(row)}
              >
                {selectable && (
                  <TableCell className="py-2">
                    <Checkbox
                      checked={selectedRows.has(rowIdx)}
                      onCheckedChange={() => toggleRow(rowIdx)}
                    />
                  </TableCell>
                )}

                {columns.map((col, colIdx) => (
                  <TableCell
                    key={colIdx}
                    className="text-xs text-slate-800 dark:text-slate-200 py-2"
                  >
                    {col.render
                      ? col.render(
                          col.accessor ? row[col.accessor] : undefined,
                          row,
                        )
                      : col.accessor && row[col.accessor]}
                  </TableCell>
                ))}

                {hasActions && (
                  <TableCell className="text-right py-2">
                    <div className="flex justify-end items-center gap-1">
                      {actions
                        .filter((action) => !action.show || action.show(row))
                        .slice(0, 2)
                        .map((action, idx) => (
                          <Button
                            key={idx}
                            variant="outline"
                            size="icon"
                            onClick={(e) => {
                              e.stopPropagation();
                              action.onClick(row, e);
                            }}
                            className="h-6 w-6 p-0 text-xs"
                          >
                            {action.icon ?? action.label}
                          </Button>
                        ))}

                      {actions.filter(
                        (action) => !action.show || action.show(row),
                      ).length > 2 && (
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button
                              variant="outline"
                              size="icon"
                              className="h-6 w-6 p-0 ml-1 flex items-center justify-center"
                              title="More actions"
                            >
                              <MoreVertical className="h-3 w-3" />
                              <span className="sr-only">More actions</span>
                            </Button>
                          </DropdownMenuTrigger>

                          <DropdownMenuContent
                            align="end"
                            sideOffset={5}
                            className="bg-white dark:bg-slate-900 shadow-lg rounded-md p-1 z-50 min-w-[150px] border"
                          >
                            {actions
                              .filter(
                                (action) => !action.show || action.show(row),
                              )
                              .slice(2)
                              .map((action, idx) => (
                                <DropdownMenuItem
                                  key={idx}
                                  onClick={() => action.onClick(row)}
                                  className="flex items-center gap-2 px-3 py-1.5 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer transition-colors text-xs"
                                >
                                  {action.icon && (
                                    <span className="h-5 w-5 flex items-center justify-center">
                                      {action.icon}
                                    </span>
                                  )}
                                  <span className="text-xs text-slate-800 dark:text-blue-200">
                                    {action.label}
                                  </span>
                                </DropdownMenuItem>
                              ))}
                          </DropdownMenuContent>
                        </DropdownMenu>
                      )}
                    </div>
                  </TableCell>
                )}
              </motion.tr>
            ))
          )}
        </TableBody>

        {footer && (
          <TableFooter>
            <TableRow className="border-t border-slate-200 dark:border-slate-700">
              <TableCell
                colSpan={
                  columns.length + (selectable ? 1 : 0) + (hasActions ? 1 : 0)
                }
                className="py-2 font-medium text-slate-800 dark:text-slate-200 text-xs"
              >
                {footer}
              </TableCell>
            </TableRow>
          </TableFooter>
        )}
      </Table>

      {/* Pagination Controls */}
      <div
        className={`flex justify-end items-center flex-wrap gap-2 ${
          totalPages > 1 || topControls
            ? "px-4 py-2 border-b border-slate-200 dark:border-slate-700"
            : "border-b border-slate-200 dark:border-slate-700"
        }`}
      >
        {topControls && <div className="flex justify-end">{topControls}</div>}

        {!disableInternalPagination && totalPages > 1 && (
          <div className="flex items-center gap-1 flex-wrap text-xs">
            <Button
              size="icon"
              variant="outline"
              onClick={() => goToPage(currentPage - 1)}
              disabled={currentPage === 1}
            >
              <ChevronLeft className="h-3 w-3" />
            </Button>

            <Button
              size="icon"
              variant={currentPage === 1 ? "default" : "outline"}
              onClick={() => goToPage(1)}
            >
              1
            </Button>

            {currentPage > 3 && (
              <span className="px-1">
                <MoreHorizontal className="h-3 w-3" />
              </span>
            )}

            {Array.from({ length: totalPages }, (_, i) => i + 1)
              .filter((page) => page > 1 && page < totalPages)
              .filter(
                (page) =>
                  page === currentPage ||
                  page === currentPage - 1 ||
                  page === currentPage + 1,
              )
              .map((page) => (
                <motion.div
                  key={page}
                  initial={{ opacity: 0, y: -3 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -3 }}
                  transition={{ duration: 0.2 }}
                >
                  <Button
                    size="icon"
                    variant={currentPage === page ? "default" : "outline"}
                    onClick={() => goToPage(page)}
                    className={`transition-transform duration-200 ${
                      currentPage === page ? "scale-105" : ""
                    }`}
                  >
                    {page}
                  </Button>
                </motion.div>
              ))}

            {currentPage < totalPages - 2 && (
              <span className="px-1">
                <MoreHorizontal className="h-3 w-3" />
              </span>
            )}

            {totalPages > 1 && (
              <Button
                size="icon"
                variant={currentPage === totalPages ? "default" : "outline"}
                onClick={() => goToPage(totalPages)}
              >
                {totalPages}
              </Button>
            )}

            <Button
              size="icon"
              variant="outline"
              onClick={() => goToPage(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              <ChevronRight className="h-3 w-3" />
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}