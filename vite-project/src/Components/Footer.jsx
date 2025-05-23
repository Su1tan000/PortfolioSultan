import React from "react";
const Footer = () => {
    return (
        <footer
            id="contact"
            className="w-full flex items-center pt-6 border-t border-light-gray/20 pb-1 mt-5"
        >
            <div className="flex items-center gap-2 text-light-gray hover:text-white">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    stroke="none"
                    className="tabler-icon tabler-icon-mail-filled"
                >
                    <path d="M22 7.535v9.465a3 3 0 0 1 -2.824 2.995l-.176 .005h-14a3 3 0 0 1 -2.995 -2.824l-.005 -.176v-9.465l9.445 6.297l.116 .066a1 1 0 0 0 .878 0l.116 -.066l9.445 -6.297z"></path>
                    <path d="M19 4c1.08 0 2.027 .57 2.555 1.427l-9.555 6.37l-9.555 -6.37a2.999 2.999 0 0 1 2.354 -1.42l.201 -.007h14z"></path>
                </svg>
                <a href="mailto:sultanzumabekov1@gmail.com">sultanzumabekov1@gmail.com</a>
            </div>
        </footer>
    );
};

export default Footer;