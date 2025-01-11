import Image from "next/image";

const QuickSearch = () => {
  return (
    <div className="container mx-auto p-5">
      <div className="flex items-center">
        <div className="w-full h-[2px] bg-grayPrimary"></div>
        <h2 className="px-5 font-medium text-grayPrimary whitespace-nowrap">
          Tente pesquisar por
        </h2>
        <div className="w-full h-[2px] bg-grayPrimary"></div>
      </div>

      <div className="flex">
        <div className="flex flex-col">
          <Image width={30} height={30} src="/hotel.png" alt="Hotel" />
          <p className="text-sm text-grayPrimary">Hotel</p>
        </div>
      </div>
    </div>
  );
};

export default QuickSearch;
