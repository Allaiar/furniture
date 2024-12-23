import React from "react";
import rightimg from "./img/photo_5_2024-01-16_15-53-01.jpg";
import "./style.css";

function Header({ scrollToComponent }) {
  return (
    <header className="header lg:flex justify-center ">
      <div className="header-left flex flex-col justify-between lg:p-16 p-8 pt-12 lg:w-1/2">
        <div className="flex flex-col gap-y-8 items-start">
          <h1 className="text-lg text-white sm:text-left text-center">
            Стильдүү жана сапаттуу ajarmebel.kg дүйнөсүнө кош келиңиз – сиз үчүн
            эң мыкты столдор жана стулдар!
          </h1>
    
        </div>
        <div className="flex flex-col gap-y-8">
          <p className="text-lg text-white sm:text-left text-center font-sans lg:w-[40vw] mt-4">
            Биздин компания 10 жылдан ашык тажрыйбага ээ болуп, сизге заманбап, сапаттуу жана узак мөөнөт бою кызмат кыла турган стол жана стулдарды сунуштайт. Ар бир бөлмө үчүн идеалдуу тандоо: үйүңүздүн, офисиңиздин же конок бөлмөңүздүн эмеректери. Биз сизге эң жогорку сапаттагы жана өзгөчө дизайндагы эмеректерди сунуштайбыз.<br />
            Биз ар бир деталга көңүл буруп, эмеректердин колдонууга ыңгайлуулугун жана стильдүү көрүнүшүн камсыздайбыз. Биз сизге ыңгайлуу шарттарды сунуштайбыз: банк аркылуу бөлүп төлөө, жеткирүү жана жеке кеңеш берүү.
          </p>
          <div>

           <p className="text-lg text-white sm:text-left text-center">Биздин негизги артыкчылыктар:
           </p>
          <ul className="text-lg text-white sm:text-left text-center ml-5 mt-4">
            <li>- 10 жылдык тажрыйба</li>
            <li>- 1 жылдык сапат кепилдиги</li>
            <li>- Оптовый баалар</li>
            <li>- Тез жана ишенимдүү жеткирүү</li>
          </ul>
          </div>
          <button
            onClick={scrollToComponent}
            className="header-button text-[16px] py-[16px] px-[32px]"
          >
            Посмотреть коллекцию
          </button>
        </div>
      </div>
      <div className="header-right hidden lg:flex">
        <img src={rightimg} alt="img" className="w-[40vw]" />
      </div>
    </header>
  );
}

export default Header;
