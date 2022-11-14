import React from 'react';

const Nav = () => {
    return (
        <header >
            <nav>
                <div className="desktop-menu">
                    <a href="#">Users</a>
                    <div className="">

                        <a href="#" className="btn" data-toggle="modal" data-target="#myModal"><i className="fa-solid fa-user-plus"></i></a>
                    </div>
                </div>
                <div className="mobile-menu">
                    <span className="material-symbols-outlined"> menu </span>
                </div>
            </nav>
            

        </header>
        
    );
};

export default Nav;