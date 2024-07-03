import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Footer(props) {
  const handleScrollToTop = () => {
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }, 300);
  };
  return (
    <footer className="footer">
      <div className="container px-6 pt-12 pb-3 mx-auto">
        <div className="grid grid-cols-2 gap-6 mt-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
          <div>
            <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">
              Product
            </h3>
            <div className="flex flex-col items-start mt-4 space-y-4">
              <Link
                to="/payInfo"
                onClick={handleScrollToTop}
                className="text-gray-700 transition-colors duration-200 dark:text-gray-200 dark:hover:text-blue-400 hover:underline hover:text-blue-600"
              >
                Оплата
              </Link>
              <Link
                to="/deliveryInfo"
                onClick={handleScrollToTop}
                className="text-gray-700 transition-colors duration-200 dark:text-gray-200 dark:hover:text-blue-400 hover:underline hover:text-blue-600"
              >
                Доставка и сборка
              </Link>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">
              Company
            </h3>
            <div className="flex flex-col items-start mt-4 space-y-4">
              <Link
                to="/about"
                onClick={handleScrollToTop}
                className="text-gray-700 transition-colors duration-200 dark:text-gray-200 dark:hover:text-blue-400 hover:underline hover:text-blue-600"
              >
                О Магазине
              </Link>
              <Link
                to="/privacy"
                onClick={handleScrollToTop}
                className="text-gray-700 transition-colors duration-200 dark:text-gray-200 dark:hover:text-blue-400 hover:underline hover:text-blue-600"
              >
                Политика о конфиденциальности
              </Link>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">
              Resources
            </h3>
            <div className="flex flex-col items-start mt-4 space-y-4">
              <a
                href="tel:+996552020633"
                className="text-gray-700 transition-colors duration-200 dark:text-gray-200 dark:hover:text-blue-400 hover:underline hover:text-blue-600"
              >
                +996707178620
              </a>
              <p className="text-gray-700 transition-colors duration-200 dark:text-gray-200">
                Работаем с 09:00 до 22:00
              </p>
            </div>
          </div>
        </div>
        <hr className="my-6 border-[#4E4D93] md:my-8"></hr>
        <div className="footer-flex">
          <div>
            <p className="copyright">Copyright 2023 AJAR MEBEL LTD</p>
          </div>
          <div className="icons">
            <a href="tel:+996707178620" className="whatsapp spin-animation">
              <ion-icon name="logo-whatsapp"></ion-icon>
            </a>
            <a
              href="https://www.instagram.com/stol_stulya_kg?igsh=NWV2OHp6NTFua3po"
              className="instagram spin-animation"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ion-icon name="logo-instagram"></ion-icon>
            </a>
            <a
              href="https://t.me/+-6ooyVjediE2YWYy"
              className="telegram spin-animation"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="28"
                height="28"
                viewBox="0,0,255.99768,255.99768"
              >
                <g
                  fill="#ffffff"
                  fillRule="nonzero"
                  stroke="none"
                  strokeWidth="1"
                  strokeLinecap="butt"
                  strokeLinejoin="miter"
                  strokeMiterlimit="10"
                  strokeDasharray=""
                  strokeDashoffset="0"
                  fontFamily="none"
                  fontWeight="none"
                  fontSize="none"
                  textAnchor="none"
                  style={{ mixBlendMode: "normal" }}
                >
                  <g transform="scale(5.12,5.12)">
                    <path d="M44.37695,5.98633c-0.48705,0.02137 -0.96114,0.15692 -1.38867,0.32813c-0.42317,0.17006 -2.8594,1.20989 -6.45703,2.74805c-3.59763,1.53816 -8.27429,3.54117 -12.91016,5.52734c-9.27174,3.97235 -18.38281,7.88086 -18.38281,7.88086l0.06641,-0.02539c0,0 -0.5499,0.18381 -1.10742,0.57227c-0.27876,0.19423 -0.57866,0.44498 -0.82422,0.81055c-0.24556,0.36557 -0.42507,0.88366 -0.35742,1.43164c0.23762,1.92475 2.23242,2.4707 2.23242,2.4707l0.00781,0.00391l8.90234,3.04688c0.22697,0.75718 2.70012,9.01167 3.24414,10.75977c0.30045,0.96647 0.58167,1.52398 0.875,1.9043c0.14679,0.19032 0.30062,0.3376 0.4707,0.44531c0.06758,0.04279 0.13865,0.0749 0.20898,0.10352c0.0015,0.00066 0.00241,-0.00066 0.00391,0c0.00864,0.00381 0.01677,0.00415 0.02539,0.00781l-0.02344,-0.00586c0.01634,0.0066 0.03247,0.01771 0.04883,0.02344c0.03174,0.01112 0.05119,0.01074 0.0918,0.01953c1.01954,0.35598 1.86328,-0.30469 1.86328,-0.30469l0.03516,-0.02734l5.46875,-5.07227l8.875,6.91992l0.11133,0.05078c1.55345,0.68975 2.95832,0.30493 3.73633,-0.32812c0.77801,-0.63306 1.08398,-1.44922 1.08398,-1.44922l0.0332,-0.08594l6.52148,-33.99023c0.16687,-0.76044 0.19058,-1.41775 0.0332,-2.01172c-0.15738,-0.59397 -0.53974,-1.1103 -1.01953,-1.39648c-0.47979,-0.28619 -0.9817,-0.37879 -1.46875,-0.35742zM44.42969,8.01953c0.1978,-0.00916 0.34441,0.01345 0.39062,0.04102c0.04621,0.02756 0.06696,0.02394 0.11133,0.19141c0.04437,0.16747 0.0684,0.52021 -0.05273,1.07227l-0.00391,0.01172l-6.48437,33.79297c-0.01535,0.03402 -0.15047,0.34662 -0.45898,0.59766c-0.31473,0.25609 -0.66477,0.45599 -1.59375,0.06641l-9.70508,-7.56836l-0.27344,-0.21484l-0.00586,0.00586l-2.90234,-2.17773l16.31055,-19.18945c0.25603,-0.30045 0.31139,-0.72339 0.1413,-1.0796c-0.17009,-0.35622 -0.5338,-0.57906 -0.92841,-0.56883c-0.18875,0.0049 -0.37226,0.06314 -0.5293,0.16797l-23.60156,15.73438l-8.91602,-3.05273c0,0 -0.88536,-0.49268 -0.92773,-0.83594c-0.00235,-0.01902 -0.0128,-0.0018 0.0332,-0.07031c0.04601,-0.06849 0.16165,-0.18413 0.30664,-0.28516c0.28998,-0.20204 0.62109,-0.32422 0.62109,-0.32422l0.0332,-0.01172l0.0332,-0.01367c0,0 9.11155,-3.90871 18.38281,-7.88086c4.63563,-1.98607 9.31146,-3.98761 12.9082,-5.52539c3.59582,-1.53738 6.19406,-2.64398 6.41406,-2.73242c0.25046,-0.1003 0.49946,-0.14123 0.69727,-0.15039zM33.61328,18.79297l-12.36914,14.55273l-0.00586,0.00586c-0.01931,0.02325 -0.03756,0.04736 -0.05469,0.07227c-0.01962,0.02706 -0.03787,0.05509 -0.05469,0.08398c-0.06949,0.11795 -0.11403,0.24891 -0.13086,0.38477c-0.00001,0.0026 -0.00001,0.00521 0,0.00781l-1.61133,7.24609c-0.02679,-0.07829 -0.04555,-0.10693 -0.07422,-0.19922v-0.00195c-0.51179,-1.64446 -2.84514,-9.42921 -3.16797,-10.50586zM22.64063,35.73047l2.22266,1.66797l-3.26562,3.02734z"></path>
                  </g>
                </g>
              </svg>
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=100067854746410&ref=xav_ig_profile_web"
              className="facebook spin-animation"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ion-icon name="logo-facebook"></ion-icon>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
