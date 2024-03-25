export default function Header() {
    return (
        <header className="bg-gradient-to-r from-blue-900 to-blue-600 text-white py-4">
        <div className="container mx-auto">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold tracking-widest">F R O N T</h1>
            <nav>
              <ul className="flex space-x-6">
                <li><a href="#" className="hover:text-blue-300">Home</a></li>
                <li><a href="#" className="hover:text-blue-300">About</a></li>
                <li><a href="#" className="hover:text-blue-300">Services</a></li>
                <li><a href="#" className="hover:text-blue-300">Contact</a></li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    )
}