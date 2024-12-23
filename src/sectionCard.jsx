import React from "react";

function SectionCard(props) {
  return (
    <div>
      <div class="container flex flex-col mx-auto bg-white">
        <div class="w-full draggable">
          <div class="container flex flex-col items-center mx-auto my-16">
            <h1 className="px-8 text-3xl text-color font-bold">
              Чем отличается наш бренд
            </h1>
            <div class="grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center pt-8">
              <div class="flex flex-col items-start gap-3 px-8 bg-white rounded-3xl shadow-main">
                <p className="text-[38px] h-[38px]">
                  <ion-icon name="bag-check-outline"></ion-icon>
                </p>
                <p class="text-2xl font-semibold text-color">
                  Столдун материалы:
                </p>
                <p class="text-xl text-color">
                  Туркиянын МДФ - сапаттуу жана узак мөөнөттүк колдонууга
                  ыңгайлуу.
                </p>
              </div>
              <div class="flex flex-col items-start gap-3 px-8 bg-white rounded-3xl shadow-main">
                <p className="text-[38px] h-[38px]">
                  <ion-icon name="construct-outline"></ion-icon>
                </p>
                <p class="text-2xl font-semibold text-color">
                  Стулдун материалы:
                </p>
                <p class="text-xl text-color">
                  100% жангак - эң жогорку сапаттагы жана экологиялык таза
                  материал. Итальян боёктору - узак убакыт бою түстөрүн сактайт
                  жана эстетикалык көрүнүшүн камсыз кылат.
                </p>
              </div>
              <div class="flex flex-col items-start gap-3 px-8 bg-white rounded-3xl shadow-main">
                <p className="text-[38px] h-[38px]">
                  <ion-icon name="cash-outline"></ion-icon>
                </p>
                <p class="text-2xl font-semibold text-color">Баалар:</p>
                <p class="text-xl text-color">
                  Столдордун баасы өлчөмүнө жараша болот. Мисалы, 4 метрлик стол
                  – 45,000 сом. Стулдардын баасы 4,800 сомдон 7,200 сомго чейин.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionCard;
