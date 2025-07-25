import {
  Share2,
  Link,
  CheckIcon,
  Twitter,
  Facebook,
  Linkedin,
  X,
} from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

import { AnimatePresence, motion } from "framer-motion";

const InThisarticle = () => {
  const [isCopied, setisCopied] = useState(false);

  const [isShared, setIsShared] = useState(false);

  const handleCopy = () => {
    setisCopied(true);
    navigator.clipboard.writeText(window.location);
    toast.success("Link copied to clipboard!", {
      duration: 2000,
    });
  };

  return (
    <article className="w-full h-fit lg:sticky right-0 top-0 py-16 lg:w-1/3 text-shade1 bg-shade2/10 p-4 rounded-xl">
      <h4 className="uppercase tracking-tighter font-semibold text-xs">
        In this article
      </h4>
      <div className="grid gap-2 mt-4 text-base">
        <a
          href="#"
          className="font-bold capitalize hover:underline opacity-50"
        >
          In the competitive landscape of modern business
        </a>
        <a href="#" className="font-bold capitalize hover:underline ">
          Influencing perceptions, emotions, and behaviors.
        </a>
        <a
          href="#"
          className="font-bold capitalize hover:underline opacity-50"
        >
          From logos and packaging to digital interfaces and physical spaces
        </a>
        <a
          href="#"
          className="font-bold capitalize hover:underline opacity-50"
        >
          In the competitive landscape of modern business
        </a>
        <a
          href="#"
          className="font-bold capitalize hover:underline opacity-50"
        >
          Design plays a pivotal role in shaping these experiences
        </a>
      </div>

      <div className="mt-6 flex gap-2">
        <AnimatePresence>
          <motion.div className="flex gap-2 bg-shade3 rounded-xl">
            {isShared && (
              <>
                <button className="p-4 hover:bg-shade2/50 select-none rounded-xl">
                  <Twitter />
                </button>
                <button className=" p-4 rounded-xl">
                  <Facebook />
                </button>
                <button className=" p-4 rounded-xl">
                  <Linkedin />
                </button>
              </>
            )}
            <button
              onClick={() => setIsShared(!isShared)}
              className=" bg-shade3 p-4 rounded-xl"
            >
              {isShared ? <X /> : <Share2 />}
            </button>
          </motion.div>
        </AnimatePresence>
        <button onClick={handleCopy} className="bg-shade3 p-4 rounded-xl">
          {isCopied ? <CheckIcon /> : <Link />}
        </button>
      </div>
    </article>
  );
};

export default InThisarticle;
