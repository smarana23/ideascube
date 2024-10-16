import React, { useState } from "react";
import { GETCARDS } from "./content.js";

const Cards = ({ item }) => {
  // const [contentData, setContentData] = useState(GETCARDS);

  return (
    <>
      <div class="relative bg-gray-50 px-6 pt-16 pb-20 lg:px-8 lg:pt-24 lg:pb-28">
        <div class="absolute inset-0">
          <div class="h-1/3 bg-white sm:h-2/3"></div>
        </div>
        <div class="relative mx-auto max-w-7xl">
          <div class="text-center">
            <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Column me neatly.
            </h2>
            <p class="mx-auto mt-3 max-w-2xl text-xl text-gray-500 sm:mt-4">
              This is your life and it's ending one minute @ a time...
            </p>
          </div>

          <div>
            <div class="mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3">
              {GETCARDS.map((card, index) => (
                <div
                  key={index}
                  class="flex flex-col overflow-hidden rounded-lg shadow-lg"
                >
                  <div class="flex-shrink-0">
                    <img
                      class="h-48 w-full object-cover"
                      src={card.image}
                      alt=""
                    />
                  </div>
                  <div class="flex flex-1 flex-col justify-between bg-white p-6">
                    <div class="flex-1">
                      <p class="text-sm font-medium text-indigo-600">
                        <a href="#" class="hover:underline">
                          {card.genre}
                        </a>
                      </p>
                      <a href="#" class="mt-2 block">
                        <p class="text-xl font-semibold text-gray-900">
                          {card.title}
                        </p>
                        <p class="mt-3 text-base text-gray-500">
                          {card.description}
                        </p>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
