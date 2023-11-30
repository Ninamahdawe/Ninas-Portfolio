import { Link, Events, scrollSpy } from 'react-scroll';
import { useState, useEffect } from 'react';

const Nav = () => {
    const [navItems, setNavItems] = useState(['Home', 'About me', 'Portfolio', 'Projects', 'Contact']);
    const [backgroundColor, setBackgroundColor] = useState('transparent');

    useEffect(() => {
        Events.scrollEvent.register('begin', function () {
            setBackgroundColor('transparent');
        });

        Events.scrollEvent.register('end', function () {
            if (window.scrollY > 50) {
                setBackgroundColor('#f0f0f0');
            } else {
                setBackgroundColor('transparent');
            }
        });

        scrollSpy.update();

        return () => {
            Events.scrollEvent.remove('begin');
            Events.scrollEvent.remove('end');
        };
    }, []);

    return (
        <nav style={{ backgroundColor }}>
            <ul className="nav-list">
                {navItems.map((item, index) => (
                    <li key={index}>
                        <Link
                            activeClass="active"
                            to={item.toLowerCase().replace(/\s/g, '')} // remove spaces for the 'to' prop
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                        >
                            {item}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Nav;