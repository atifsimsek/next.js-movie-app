"use client";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

const Tabs = () => {
  const searchParams = useSearchParams();
  const genre = searchParams.get("genre");
  const tabs = [
    {
      name: "Popular",
      url: "popular",
    },
    {
      name: "Top Rated",
      url: "top_rated",
    },
    {
      name: "Upcoming",
      url: "upcoming",
    },
  ];

  return (
    <div className="p-5 font-semibold flex items-center justify-center bg-gray-100 dark:bg-gray-900 m-5 gap-7">
      {tabs.map((tab, index) => (
        <Link
          className={`hover:opacity-75 transition-opacity ${
            tab.url === genre
              ? "underline text-amber-500 underline-offset-8"
              : ""
          }`}
          key={index}
          href={`/?genre=${tab.url}`}
        >
          {" "}
          {tab.name}
        </Link>
      ))}
    </div>
  );
};

export default Tabs;
