import noImage from "../../assets/no-image.svg";

const ProductCard = ({
  product: { name = "", brand = "", price = 0, rating = 0 },
}) => {
  return (
    <div className="w-full rounded-md overflow-hidden shadow-md">
      <div className="w-full h-[260px] group overflow-hidden relative">
        <img
          src={noImage}
          alt={name}
          width="100%"
          height="260px"
          className="w-full h-full object-cover group-hover:scale-110 transition-transform"
          loading="lazy"
        />
        <span className="absolute top-4 right-4 rounded-full p-2 bg-primary text-white text-sm font-bold w-9 h-9 text-center">
          {rating}
        </span>
      </div>
      <div className="p-2">
        <h2 className="text-lg font-medium hover:text-primary">{name}</h2>
        <div className="flex items-center justify-between gap-2 flex-wrap">
          <span>{brand}</span>
          <span className="font-medium">${price}</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
