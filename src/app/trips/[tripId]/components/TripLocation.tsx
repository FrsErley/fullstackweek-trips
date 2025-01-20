import Button from "@/components/Button";
import Image from "next/image";

interface TripLocationProps {
  location: string;
  locationDescription: string;
}

const TripLocation = ({ location, locationDescription }: TripLocationProps) => {
  return (
    <div className="p-5">
      <h2 className="font-semibold text-primaryDarker mb-5">Localização</h2>
      <div className="relative h-[280px] w-full">
        <Image
          style={{
            objectFit: "cover",
          }}
          src="/map-mobile.png"
          alt={location}
          fill
          className="rounded-lg shadow-md"
        />
      </div>

      <h3 className="text-primaryDarker text-sm front-semibold mt-3">
        {location}
      </h3>

      <p className="text-xs text-primaryDarker mt-2 leading-5">
        {locationDescription}
      </p>
      <Button variant="outlined" className="w-full mt-5">
        Ver no google Maps
      </Button>
    </div>
  );
};

export default TripLocation;
