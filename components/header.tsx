import Image from "next/image";
import Link from "next/link";
import { ThemeToggler } from "./ThemeToggler";
import SearchInput from "./SearchInput";
import GenreDropdown from "./GenreDropdown";


const Header = () => {

    return (
        <header className="sticky w-full z-20 top-0 items-center justify-between flex p-5 bg-gradient-to-t from-gray-200/0 via-gray-900/25 to-gray-900">
            <Link href='/' className="mr-10"><Image src='https://links.papareact.com/a943ae' alt='Disney' height={100} width={120} className="cursor-pointer invert-0 dark:invert" /></Link>

            <div className="flex space-x-2">
                {/* Genre Dropdown */}
                <GenreDropdown />

                {/* Search Bar */}
                <SearchInput />

                {/* Theme Toggler */}
                <ThemeToggler />
            </div>
        </header>
    )
}

export default Header;