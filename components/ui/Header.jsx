const Header = () => {
  return (
    <div className="bg-cyan-300 relative">
        {/* bg-[#29773E] */}
      <div className="flex items-center gap-x-4">
        <img
          src="https://brandlogos.net/wp-content/uploads/2012/10/breaking-bad-logo-vector.png"
          className="w-20 h-20 ml-4"
        />
        <span className="ml-4 text-slate-800 text-5xl uppercase font-bold">Characters</span>
      </div>
      <a className="absolute right-4 top-6 text-2xl cursor-pointer" >Code</a>
    </div>
  );
};

export default Header;
