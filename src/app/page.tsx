"use client";

import { galleryList } from "@/store/store";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { MdOutlineClose } from "react-icons/md";

export default function Home() {
  const [selectedId, setSelectedId] = useState<null | number>(null);

  const selectedItem = galleryList.find((item) => item.id === selectedId);

  return (
    <section id="home" className="my-10 md:my-16">
      <h1 className="mb-8 text-2xl font-medium tracking-tighter">
        Hello, I am Ahram Kim 👋
      </h1>

      {/* introduction */}
      <div className="introduction space-y-4 leading-relaxed text-gray-700 dark:text-gray-300 text-base">
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
        <p>
          It has survived not only five centuries, but also the leap into
          electronic typesetting, remaining essentially unchanged.It was
          popularised in the 1960s with the release of Letraset sheets
          containing Lorem Ipsum passages, and more recently with desktop
          publishing software like Aldus PageMaker including versions of Lorem
          Ipsum.
        </p>
        <p>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English.
        </p>
      </div>

      {/* gallery */}
      <div className="gallery grid grid-cols-2 grid-rows-4 sm:grid-rows-3 sm:grid-cols-3 gap-4 my-8">
        {galleryList.map((item) => (
          <div
            key={item.id}
            className={`relative ${
              {
                1: "h-40",
                2: "sm:row-span-2 row-span-1",
                4: "row-span-2",
                5: "row-span-2",
                6: "h-40",
              }[item.id] || ""
            }`}
          >
            <Image
              onClick={() => setSelectedId(item.id)}
              alt={item.alt}
              src={item.src}
              fill
              sizes="(max-width: 768px) 213px, 33vw"
              className={`grayscale transition duration-300 hover:grayscale-0 rounded-lg object-cover ${
                {
                  2: "sm:object-top sm:object-center",
                  4: "sm:object-center",
                }[item.id] || ""
              }`}
            />
          </div>
        ))}
      </div>

      {/* Popup Modal */}
      <AnimatePresence>
        {selectedId !== null && selectedItem && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedId(null)}
          >
            <motion.div
              className="relative bg-white rounded-lg shadow-lg"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="max-w-xl w-auto max-h-[80vh] overflow-hidden">
                <Image
                  src={selectedItem.src}
                  alt={selectedItem.alt}
                  width={0}
                  height={0}
                  sizes="(max-width: 768px) 90vw, 80vw"
                  className="rounded-md object-contain w-full h-full"
                />
              </div>
              <button
                className="absolute top-4 right-4 bg-white hover:bg-black text-black hover:text-white w-6 h-6 border-black border-2 rounded-full"
                onClick={() => setSelectedId(null)}
              >
                <MdOutlineClose
                  width={100}
                  height={100}
                  className=" rounded-full w-full h-full p-0.5"
                />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
