import React from "react";
import Image from "next/image";
const Preloader = () => {
  return (
    <div>
      <div className="text-center">
        <div className="mb-10">
          <Image src="/img/hero/hero-man.png" alt="Vlad Weby logo" width={563} height={805} />
        </div>
        <span className="fz-30 mati fw-600 text-uppercase">Matias</span>
      </div>
    </div>
  );
};

export default Preloader;
