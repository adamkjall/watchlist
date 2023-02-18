import { useEffect, useRef } from "react";
import Spinner from "./Spinner";
import { BASE_IMG_URL } from "~/lib/themoviedb";

export default function Modal({
  loading,
  backdropPath,
  handleClose,
  children,
}) {
  const overviewRef = useRef();

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => (document.body.style.overflow = "unset");
  }, []);

  const clickOnOverlay = (event) => {
    const isClickOnOverlay =
      overviewRef.current && !overviewRef.current.contains(event.target);

    if (isClickOnOverlay) handleClose();
  };

  return (
    <div
      className="fixed inset-0 bg-gray-600/75 flex justify-center md:px-16 md:py-12"
      onClick={clickOnOverlay}
    >
      <div
        className="relative text-shadow-lg min-h-full w-full max-w-screen-xl overflow-hidden"
        ref={overviewRef}
      >
        <div
          className="overflow-scroll bg-cover bg-no-repeat bg-center text-white p-4 md:rounded-xl mb-16 h-full bg-gray-700"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${BASE_IMG_URL}/original${backdropPath})`,
          }}
        >
          {loading ? <Spinner /> : children}
        </div>
      </div>
    </div>
  );
}
