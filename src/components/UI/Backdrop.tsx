"use client";
import React, { Fragment } from "react";

interface BackdropProps {
    isOpen: boolean;
    onClose: () => void;
    children : any
}

const Backdrop: React.FC<BackdropProps> = ({ isOpen, onClose, children }) => {
    return (
        <Fragment>
            {isOpen && (
                <div className="fixed top-0 left-0 w-full h-full bg-black opacity-50 z-50" onClick={onClose}></div>
            )}
            {isOpen && (
                <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50">
                    {children}
                </div>
            )}
        </Fragment>
    );
};

export default Backdrop;
