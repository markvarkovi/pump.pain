export default function Header() {
  return (
    <header className="text-gray-50 pt-16 mb-0 px-4 lg:px-8 w-full flex items-center justify-center">
      <div className="flex items-center space-x-60 tracking-widest text-2xl cursor-pointer">
        <div id="pictures" className="flex">
          <img
            src="https://i.ibb.co/cXM63M5/N-vtelen-terv-20.png"
            className="w-40 h-40 rounded-full border border-4 border-yellow-800"
            onClick={() => window.location.reload()}
          />
        </div>
        <div>ABOUT</div>
        <div>LIST OF RUG RATS</div>
        <div>SOCIALS</div>
      </div>
    </header>
  );
}
