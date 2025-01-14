import Image from "next/image";

const QuickSearch = () => {
  return (
    <div className="container mx-auto p-5">
      <div className="flex items-center">
        <div className="w-full h-[1px] bg-grayPrimary"></div>
        <h2 className="px-5 text-grayPrimary whitespace-nowrap">
          Tente pesquisar por
        </h2>
        <div className="w-full h-[1px] bg-grayPrimary"></div>
      </div>

      <div className="flex w-full justify-between mt-4 gap-1">
        <div className="flex flex-col items-center">
          <Image width={35} height={35} src="/hotel.png" alt="Hotel" />
          <p className="text-sm text-grayPrimary mt-auto">Hotel</p>
        </div>

        <div className="flex flex-col items-center gap-1">
          <Image width={35} height={35} src="/farm.png" alt="Fazenda" />
          <p className="text-sm text-grayPrimary mt-auto">Fazenda</p>
        </div>

        <div className="flex flex-col items-center gap-1">
          <Image width={35} height={35} src="/chale.png" alt="Chalé" />
          <p className="text-sm text-grayPrimary mt-auto">Chalé</p>
        </div>

        <div className="flex flex-col items-center gap-1">
          <Image width={25} height={25} src="/bed.png" alt="Pousada" />
          <p className="text-sm text-grayPrimary mt-auto">Pousada</p>
        </div>
      </div>
    </div>
  );
};

export default QuickSearch;
