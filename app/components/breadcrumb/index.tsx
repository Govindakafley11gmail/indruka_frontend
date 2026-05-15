import { BreadcrumbLink } from "@/components/ui/breadcrumb";
import { ChevronRight } from "lucide-react";
import { Lato } from "next/font/google";

const lato = Lato({ subsets: ["latin"], weight: ["400", "700"] });

interface BreadcrumbItem {
  label: string;
  href?: string; // optional, last item can be plain text
}

interface MyBreadcrumbProps {
  items: BreadcrumbItem[];
}

export const Breadcrumb = ({ items }: MyBreadcrumbProps) => {
  return (
    <nav
      className={`${lato.className} flex items-center text-sm space-x-1`}
      aria-label="breadcrumb"
    >
      {items.map((item, idx) => {
        const isLast = idx === items.length - 1;

        return (
          <div key={idx+1} className="flex items-center">
            {item.href && !isLast ? (
              <BreadcrumbLink
                href={item.href}
                className="text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors font-medium"
              >
                {item.label}
              </BreadcrumbLink>
            ) : (
              <span className="text-gray-700 dark:text-gray-100 font-semibold">
                {item.label}
              </span>
            )}

            {!isLast && (
              <ChevronRight
                size={16}
                className="mx-1 text-gray-400 dark:text-gray-500"
              />
            )}
          </div>
        );
      })}
    </nav>
  );
};
