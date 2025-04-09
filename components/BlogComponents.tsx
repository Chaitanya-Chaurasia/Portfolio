import Link from "next/link";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import art1 from "../public/art1.jpg"
import art2 from "../public/art2.jpg"
import art3 from "../public/art3.jpg"
import art4 from "../public/art4.jpg"
import art5 from "../public/art5.jpg"

export const BlogTitle = () => {
  return (
    <h1 className="font-bold tracking-tighter text-5xl">Across the Web</h1>
  );
};

export const Instagram = () => {
  return <>Ig</>;
};

export const LinkedIn = () => {
  return <>Ig</>;
};

export const XPosts = () => {
  return <div>X</div>;
};

interface Post {
  title: string;
  link: string;
  date: string;
  image: string;
}

export const MediumPosts = () => {
  // Added image property to each post
  const posts = [
    {
      title: "Quantum Computing is the Future, and the Future is Now! (is it?)",
      link: "https://medium.com/@chaitanyalvis/quantum-computing-is-the-future-and-the-future-is-now-is-it-1883d644dbc7",
      date: "Dec 13, 2024",
      image: art1,
    },
    {
      title: "Echoes of the Cosmos: How Our Universe Came into Being",
      link: "https://medium.com/@chaitanyalvis/echoes-of-the-cosmos-how-our-universe-came-into-being-ff57b9aa2aa9",
      date: "Mar 21, 2025",
      image: art2,
    },
    {
      title: "React.js: Meta's Biggest Boon",
      link: "https://medium.com/@chaitanyalvis/react-js-metas-biggest-boon-a3d32d4e2b4b",
      date: "Jan 27, 2025",
      image: art3,
    },
    {
      title: "Joie de Vivre: A Relentless Pursuit of Happiness",
      link: "https://medium.com/@chaitanyalvis/joie-de-vivre-a-relentless-pursuit-of-happiness-61e153ee5d4c",
      date: "Jan 6, 2025",
      image: art4,
    },
    {
      title: "People and The Adroit Art of Equivocating",
      link: "https://medium.com/@chaitanyalvis/people-and-the-adroit-art-of-equivocating-865ca457988f",
      date: "Dec 17, 2024",
      image: art5,
    },
  ];

  return (
    <div className="w-full max-w-6xl mx-auto py-12 px-4">
      <div className="mb-10 text-center">
        <h2 className="text-3xl font-bold tracking-tight mb-2">
          My Medium Articles
        </h2>
        <p className="text-muted-foreground">
          Thoughts, ideas, and explorations
        </p>
      </div>

      {/* Bento Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-auto">
        {/* Featured Article (Larger) */}
        <Link
          href={posts[0].link}
          target="_blank"
          rel="noopener noreferrer"
          className="md:col-span-2 md:row-span-2 group relative overflow-hidden rounded-xl"
        >
          <div className="absolute inset-0 bg-black/60 z-10 transition-opacity group-hover:bg-black/70" />
          <Image
            src={posts[0].image || "/placeholder.svg"}
            alt={posts[0].title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute bottom-0 left-0 right-0 p-6 z-20 text-white">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm text-zinc-300 mb-2">{posts[0].date}</p>
                <h3 className="font-bold text-xl md:text-2xl">
                  {posts[0].title}
                </h3>
              </div>
              <ExternalLink className="h-5 w-5 text-zinc-300 group-hover:text-white transition-colors flex-shrink-0 mt-1" />
            </div>
          </div>
        </Link>

        {/* Regular Articles */}
        {posts.slice(1).map((post, index) => (
          <Link
            href={post.link}
            key={index}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative overflow-hidden rounded-xl h-64"
          >
            <div className="absolute inset-0 bg-black/60 z-10 transition-opacity group-hover:bg-black/70" />
            <Image
              src={post.image || "/placeholder.svg"}
              alt={post.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute bottom-0 left-0 right-0 p-4 z-20 text-white">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-xs text-zinc-300 mb-1">{post.date}</p>
                  <h3 className="font-medium text-sm md:text-base">
                    {post.title}
                  </h3>
                </div>
                <ExternalLink className="h-4 w-4 text-zinc-300 group-hover:text-white transition-colors flex-shrink-0 mt-1" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export const Photography = () => {
  return <div>Photos</div>;
};
