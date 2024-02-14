import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    
    <header>
         <header className="bg-gray-800 text-white p-4">
        <nav className="container mx-auto flex items-center justify-between">
            <Link>
            <img src="" alt="" className="h-8 w-8 mr-2"  />
            </Link>

            {/* Search Bar*/}
            <div className="flex-grow text-black" >
            <input
            type="text"
            placeholder="Search for products, Categories, etc..."
            className="p-2 border rounded w-full"
          />
            </div>

            {/* Link Block*/}
            <div className="flex items-center space-x-4">
                {/* Login*/}
                <Link to={"/"} className="hover:text-gray-300">
                <i className="fas fa-user mr-1"></i>
                    Login</Link>

                {/* Become a Seller Option*/}
                <Link to={"/" } className="hover:text-gray-300">
                <i className="fas fa-store mr-1"></i>
                    Become a Seller</Link>

                {/* Cart*/}
                <Link to={"/"} className="hover:text-gray-300">
                <i className="fas fa-shopping-cart mr-1"></i>
                
                    Cart</Link>

            </div>
        </nav>
        </header>
    </header>
  )
}

export default Header