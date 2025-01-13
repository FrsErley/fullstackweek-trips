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

      <div className="flex w-full justify-between mt-4">
        <div className="flex flex-col items-center gap-1">
          <Image width={35} height={35} src="/hotel.png" alt="Hotel" />
          <p className="text-sm text-grayPrimary">Hotel</p>
        </div>

        <div className="flex flex-col items-center gap-1">
          <Image width={35} height={35} src="/farm.png" alt="Fazenda" />
          <p className="text-sm text-grayPrimary">Fazenda</p>
        </div>

        <div className="flex flex-col items-center gap-1">
          <Image width={35} height={35} src="/chale.png" alt="Chalé" />
          <p className="text-sm text-grayPrimary">Chalé</p>
        </div>

        <div className="flex flex-col items-center gap-1">
          <Image width={35} height={35} src="/bed.png" alt="Pousada" />
          <p className="text-sm text-grayPrimary">Pousada</p>
        </div>
      </div>
    </div>
  );
};

export default QuickSearch;
