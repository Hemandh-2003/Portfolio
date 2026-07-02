import { useRef, useState } from "react";
import { FaPlay } from "react-icons/fa";

const ProjectMedia = ({ project }) => {
  const videoRef = useRef(null);

  const [playing, setPlaying] = useState(false);

  const handlePlay = () => {
    if (!playing) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }

    setPlaying(!playing);
  };

  return (
    <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-black">

      {!playing && (
        <>
          <img
            src={project.image}
            alt={project.title}
            className="aspect-video w-full object-cover transition duration-500 group-hover:scale-105"
          />

          <div
            className="
              absolute
              inset-0
              flex
              items-center
              justify-center
              bg-black/40
              opacity-0
              transition
              duration-300
              group-hover:opacity-100
            "
          >
            <button
              onClick={handlePlay}
              className="
                flex
                items-center
                gap-3
                rounded-full
                bg-white
                px-6
                py-4
                font-semibold
                text-black
                transition
                hover:scale-105
              "
            >
              <FaPlay />

              Watch Demo
            </button>
          </div>
        </>
      )}

      <video
        ref={videoRef}
        src={project.video}
        className={`${playing ? "block" : "hidden"} aspect-video w-full`}
        controls
        muted
        loop
        preload="none"
        playsInline
        onEnded={() => setPlaying(false)}
      />
    </div>
  );
};

export default ProjectMedia;