const Header = () => {
  return (
    <div className="bg-stone-200  flex flex-col justify-between items-center sm:flex-row">
        {/* bg-[#29773E] */}
      <div className="flex items-center gap-x-4">
        <img
          src="https://brandlogos.net/wp-content/uploads/2012/10/breaking-bad-logo-vector.png"
          className="w-16 h-16 ml-1 md:w-24 md:h-24 md:ml-4"
        />
        <span className="ml-4 text-slate-800 text-xl md:text-5xl uppercase font-bold">Characters</span>
      </div>
      <a className=" text-md md:text-xl mr-4 font-bold cursor-pointer" >CODE</a>
    </div>
  );
};

export default Header;
