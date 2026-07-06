import React from "react";

const MapSection = () => {
  return (
    <section id="map">
      <h2 className="text-[#0B0B5C] font-bold text-[20px]  ml-3">Location</h2>
      <p className="text-[#0B0B5C] font-bold text-[20px] ml-3">
        Data 4 Decision International
      </p>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3942.354193723842!2d4.593360714128468!3d8.429768293934672!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1037b2e5d480c3d1%3A0xceb91c4386c31ea8!2sNipco!5e0"
        width="100%"
        height="600"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        title="D4D International"
      />
    </section>
  );
};

export default MapSection;
