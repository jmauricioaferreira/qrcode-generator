"use client";
import { useEffect } from "react";

const Adsense = () => {
  useEffect(() => {
    try {
      ((window as unknown as { adsbygoogle: unknown[] }).adsbygoogle =
        (window as unknown as { adsbygoogle: unknown[] }).adsbygoogle ||
        []).push({});
    } catch (err) {
      console.error(err);
    }
  }, []);

  return (
    <ins
      className="adsbygoogle"
      style={{ display: "block" }}
      data-ad-client="ca-pub-1113577441435329"
      data-ad-slot="2960169125"
      data-ad-format="auto"
      data-full-width-responsive="true"
    ></ins>
  );
};

export default Adsense;
