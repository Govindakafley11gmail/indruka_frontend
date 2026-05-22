import Image from "next/image";

type imageArtributes = {
  src: string;
  alt: string;
};

type Props = {
  images: imageArtributes[];
};

export default function SimilarPackages({ images }: Props) {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="bg-blue-900 rounded border text-center">
        <h1 className="text-base font-bold px-3 p-2 text-white">
          Similar Packages
        </h1>
      </div>

      <div className="flex  justify-center max-w-4xl gap-4 mt-6">
        {images.map((image, index) => (
          <div
            key={index}
            className="group relative h-40 w-96 aspect-video overflow-hidden rounded-xl"
          >
            <Image
              src={image.src}
              alt={image.alt}
              width={600}
              height={400}
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        ))}
      </div>

    </div>
  );
}