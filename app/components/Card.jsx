import Image from "next/image";

function Card({ imgUrl, title, description, children }) {
  const className = {
    card: "flex m-3 bg-white rounded-3xl shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 overflow-hidden border border-slate-100",
    img: "w-48 h-full object-cover",
    cardBody: "flex flex-col justify-between p-6 flex-1",
    title: "text-2xl font-bold text-slate-800 mb-3",
    description: "text-slate-500 leading-7",
    cardButton: "flex justify-end mt-6",
  };

  return (
    <div className={className.card}>
      <img
        src={imgUrl}
        alt="logo"
        className={className.img}
        width={100}
        height={100}
      />
      <div className={className.cardBody}>
        <div>
          <h3 className={className.title}>{title}</h3>
          <p className={className.description}>{description}</p>
        </div>
        <div className={className.cardButton}>{children}</div>
      </div>
    </div>
  );
}
export default Card;
