import React from "react";

const HobbyContainer = () => {
  return (
    <div className="flex flex-col text-black w-full ">
      <div className="flex flex-row justify-center p-5 ">
        <div className="flex flex-col flex-[3_3_0%] bg-white">
          <span
            className="text-[50px]"
            style={{ fontFamily: "Playfair Display, sans-serif" }}
          >
            my hobby pallete
          </span>
          <span>
            Reflecting over my brief yet a rich & diverse past, I've held firm
            to the belief that every individual should nurture a certain
            creative & imaginative acumen that empowers you to think outside the
            box and lends you a new lens to view the world with. This is why I
            try to develop and polish such skills. After all, life's brevity
            compels us to seize every moment, exploring every avenue that might
            enrich our existence. The hobbies and pursuits I've engaged in over
            the years have not only shaped my personality but also stand as a
            testament to the diverse paths our lives can take. It's through
            these endeavors that we often stumble upon our true passions,
            perhaps even defining what we ultimately choose to do with our
            lives.
          </span>
        </div>
        <div className="flex flex-[2_2_0%] flex-col bg-green-400">
          <span className="text-[25px]">Sports</span>
          <span>
            Sports, especially football has been a major factor of my life. What
            it has taught me and still continues to, till date, is priceless and
            I will forever be grateful for that! I've dedicated a huge part of
            my life to sports and will continue to do so, striving to push my
            limits, both on the field and beyond.
          </span>
        </div>
        <div className="flex flex-[2_2_0%] bg-green-300 flex-col">
          <span className="text-[25px]">Travelling</span>
          <span>
            Traveling and exploring the wonders of our planet is a privilege I
            deeply cherish. Immersing myself in diverse cultures, living amongst
            unique communities, and interacting with a tapestry of individuals
            has broadened my horizons in profound ways. Ultimately, it's the
            richness of these experiences that shapes us and becomes a treasure
            trove of memories to revisit in the years to come.
          </span>
        </div>
      </div>
      <div className="flex flex-row items-center justify-center p-5">
        <div className="flex flex-col flex-[2_2_0%] bg-white">
          <span>Exploring my Curiosity</span>
          <span>
            Imagine a world devoid of curiosity. A world where Newton, struck by
            a falling apple, felt no urge to unravel the mystery of its descent.
            A world where Neanderthals remained in perpetual darkness, never
            questioning the spark that could ignite from friction. This inherent
            human desire to explore and understand fuels progress. Engineering
            thrives on the relentless pursuit of unraveling complex systems, and
            its true beauty lies in its ability to bridge disciplines.
            Thankfully, information is more accessible than ever, acting as a
            springboard for curious minds like yours. This ever-growing well of
            knowledge allows me to delve into diverse concepts and
            collaboratively push the boundaries of discovery. Therefore,
            curiosity isn't merely a privilege; it's the very lifeblood of human
            advancement, the fire that ignites the path towards a brighter
            future.
          </span>
        </div>
        <div className="flex flex-[3_3_0%] bg-green-400 flex-col">
          <span>Watching Movies</span>
          <span>
            Movies have always been a cornerstone of my upbringing. My dad has
            always stressed upon their importance in broadening our horizons and
            nurturing creativity. He believed, and I've come to agree, that
            they're not just entertainment but a vital tool for enhancing our
            creative intellect. Through the art of cinema, we're invited into
            diverse worlds, exposed to different perspectives, and inspired by
            the endless possibilities of storytelling. This has ingrained in me
            a deep appreciation for film as a powerful medium for education,
            empathy, and, most importantly, envisioning the limitless bounds of
            our imagination.
          </span>
        </div>
      </div>
    </div>
  );
};

export default HobbyContainer;
