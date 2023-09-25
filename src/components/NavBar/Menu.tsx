import { useState } from 'react';
import DropdownIcon from '@/components/Icons/drop-down';
import ArrowHeaderSelected from '@/components/Icons/arrow-header-selected';
import ArrowHeader from "@/components/Icons/arrow-header";
import BookSymbol from '../Icons/book';

const Menu = () => {
    const [subMenuOpen, setSubMenuOpen] = useState(false);
    const [hoveredIndex, setHoveredIndex] = useState(-1);
    const toggleSubMenu = () => {
        setSubMenuOpen(!subMenuOpen);
    };

    const mockSubmenu = [
        { name: 'Hoodie', isHovered: false },
        { name: 'T-shirt', isHovered: false },
        { name: 'Shoes', isHovered: false },
    ];

    const handleHoverOn = (index: number) => {
        setHoveredIndex(index);
    };

    const handleHoverOff = () => {
        setHoveredIndex(-1);
    };

    return (
        <div className="relative">
            <button
                className="flex items-center text-right text-gray-700 hover:text-gray-900 focus:outline-none w-full text-left py-2 px-4"
                onClick={toggleSubMenu}
            >
                <BookSymbol/>
                <p className='ml-2'>Men</p>
                <span className='ml-auto'>
                    <DropdownIcon />
                </span>
            </button>
            <div
                className={`overflow-hidden transition-all duration-300 ${subMenuOpen ? 'h-auto' : 'h-0'}`}
            >
                <ul className="bg-white shadow-lg rounded">
                    {mockSubmenu.map((item, index) => (
                        <li key={index}>
                            <a
                                className={`flex items-center px-4 py-2 space-x-[10px] ${item.isHovered ? 'bg-orange text-white' : 'hover:bg-orange hover:text-white'}`}
                                href="#"
                                onClick={() => toggleSubMenu()}
                                onMouseEnter={() => handleHoverOn(index)}
                                onMouseLeave={() => handleHoverOff()}
                            >
                                {index===hoveredIndex ? <ArrowHeaderSelected /> : <ArrowHeader/>}
                                <p>{item.name}</p>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Menu;
