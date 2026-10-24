"use client";

import {
  ExternalLink,
  Headphones,
  Image as ImageIcon,
  Play,
  Volume2,
} from "lucide-react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { useState } from "react";

// Podcast episodes - Replace with your actual Podbean episode IDs
type PodcastEpisodeId = "powerOfGbl" | "ep1JesseDriver" | "ep8HandbookIntro";

interface PodcastEpisode {
  id: PodcastEpisodeId;
  title: string;
  embedId: string;
  duration: string;
  url?: string;
}

// Titles are proper episode titles; descriptions and dates live in messages/*/media.json
const podcastEpisodes: PodcastEpisode[] = [
  {
    id: "powerOfGbl",
    title: "The Power of Game-Based Learning",
    embedId: "pb-fudp4-17a3ee4", // Replace with your actual Podbean embed ID
    duration: "45 min",
  },
  {
    id: "ep1JesseDriver",
    title:
      "TGPC - ep 1 - Jesse Driver - International Teacher-Gamer at Green School Bali",
    embedId: "pb-fudp4-17a3ee4",
    duration: "",
    url: "https://teachergamer.podbean.com/e/tgpc-episode-1-jesse-driver-international-teacher-gamer-at-green-school-bali/",
  },
  {
    id: "ep8HandbookIntro",
    title:
      "TGPC - E08 - Zach Reads the Teacher-Gamer Handbook Intro with Testimonials",
    embedId: "pb-fudp4-17a3ee4",
    duration: "",
    url: "https://teachergamer.podbean.com/e/tgpc-e08-s03-zach-reznichek-reads-the-teacher-gamer-handbook-zach-reads-the-tghb-intro-with-testimonials-about-teacher-gamer-training/",
  },
];

// Podcast platforms
const podcastPlatforms = [
  {
    name: "Apple Podcasts",
    url: "https://podcasts.apple.com/us/podcast/teacher-gamer-revolution-podcast/id1599936351",
    icon: "https://pbcdn1.podbean.com/fs1/site/images/admin5/apple-podcast.png",
  },
  {
    name: "Podbean App",
    url: "https://teachergamer.podbean.com/page/2/",
    icon: "https://pbcdn1.podbean.com/fs1/site/images/admin5/podbean-app.png",
  },
  {
    name: "Spotify",
    url: "https://open.spotify.com/show/6KNqulWYuAG205kEXsYYX1",
    icon: "https://pbcdn1.podbean.com/fs1/site/images/admin5/spotify.png",
  },
  {
    name: "Amazon Music",
    url: "https://music.amazon.com/podcasts/dd6a036a-12d5-4e0d-912e-a21204a7b9ee",
    icon: "https://pbcdn1.podbean.com/fs1/site/images/admin5/AmazonMusic.png",
  },
  {
    name: "iHeartRadio",
    url: "https://iheart.com/podcast/90514051/",
    icon: "https://pbcdn1.podbean.com/fs1/site/images/admin5/iHeartRadio.png",
  },
  {
    name: "PlayerFM",
    url: "https://player.fm/series/3517249",
    icon: "https://pbcdn1.podbean.com/fs1/site/images/admin5/PlayerFM.png",
  },
  {
    name: "Podchaser",
    url: "https://www.podchaser.com/podcasts/teacher-gamer-4370797",
    icon: "https://pbcdn1.podbean.com/fs1/site/images/admin5/Podchaser.webp",
  },
  {
    name: "BoomPlay",
    url: "https://www.boomplaymusic.com/podcasts/79564",
    icon: "https://pbcdn1.podbean.com/fs1/site/images/admin5/BoomPlay.png",
  },
];

// YouTube videos - Add more videos here
const moreVideos = [
  {
    id: "5g2jO3NZAkU",
    title:
      "Wild Mind Training: Teacher-Gamer Testimonials 1 (Kate and Patrick)",
  },
  // Add more videos here:
  {
    id: "TLzdJeYFwUI",
    title: "As if Authenticity Matters presentation [Re]Learn 2020",
  },
  {
    id: "CfxFaytYC7E",
    title:
      "Teacher-Gamer Handbook (TGHB) Screen Tutorial - how to put the Teacher-Gamer Screen panels in order",
  },
  {
    id: "NOdnQMx74Kg",
    title:
      "Teacher-Gamer Handbook (TGHB) Screen Tutorial - how to put the Teacher-Gamer Screen panels in order",
  },
];

// Gallery images from ImageKit
const GALLERY_BASE_URL = "https://ik.imagekit.io/TeacherGamer/Gallery/";

// All gallery images
const galleryImages = [
  { filename: "DSC01241.jpg", id: "gamingSession", category: "sessions" },
  { filename: "DSC01266.jpg", id: "groupActivity", category: "sessions" },
  { filename: "D_D 024b.jpg", id: "dndAdventure", category: "sessions" },
  { filename: "D_D 055.jpg", id: "tabletopGaming", category: "sessions" },
  { filename: "FVMV8019.JPG", id: "learningMoment", category: "learning" },
  {
    filename: "IMG_0186_2177x1633.jpg",
    id: "classroomSession",
    category: "learning",
  },
  { filename: "IMG_1332.JPG", id: "studentEngagement", category: "learning" },
  { filename: "IMG_1782.JPG", id: "creativePlay", category: "sessions" },
  { filename: "IMG_2452.JPG", id: "workshopActivity", category: "workshops" },
  {
    filename: "IMG_2461c.JPG",
    id: "gameMasterTeaching",
    category: "workshops",
  },
  {
    filename: "IMG_2510.JPG",
    id: "collaborativeLearning",
    category: "learning",
  },
  { filename: "IMG_2553.JPG", id: "rpgSession", category: "sessions" },
  {
    filename: "IMG_2936bb.jpg",
    id: "characterBuilding",
    category: "workshops",
  },
  {
    filename: "IMG_2945b.jpg",
    id: "storytellingSession",
    category: "sessions",
  },
  { filename: "IMG_2956.JPG", id: "teamCollaboration", category: "learning" },
  { filename: "IMG_2990.JPG", id: "adventurePlanning", category: "sessions" },
  { filename: "IMG_3228b.jpg", id: "gameSetup", category: "sessions" },
  { filename: "IMG_3301.JPG", id: "studentFocus", category: "learning" },
  {
    filename: "IMG_3337b.jpg",
    id: "interactiveLearning",
    category: "learning",
  },
  { filename: "IMG_3461.JPG", id: "groupDiscussion", category: "workshops" },
  {
    filename: "IMG_3758a.jpg",
    id: "creativeExpression",
    category: "workshops",
  },
  { filename: "IMG_3768b.jpg", id: "problemSolving", category: "learning" },
  { filename: "IMG_4842.JPG", id: "gamingFun", category: "sessions" },
  { filename: "IMG_5101.JPG", id: "classroomAdventure", category: "learning" },
  { filename: "IMG_5152b.JPG", id: "teamBuilding", category: "workshops" },
  { filename: "IMG_5273.JPG", id: "imaginationAtWork", category: "sessions" },
  { filename: "IMG_5358.JPG", id: "learningThroughPlay", category: "learning" },
  { filename: "IMG_5394.JPG", id: "gameMastering", category: "workshops" },
  { filename: "IMG_5467.JPG", id: "studentCreativity", category: "learning" },
  { filename: "IMG_5672.JPG", id: "adventureTime", category: "sessions" },
  {
    filename: "IMG_5888 (2).JPG",
    id: "collaborativeStory",
    category: "sessions",
  },
  { filename: "IMG_5909n.jpg", id: "workshopMoment", category: "workshops" },
  {
    filename: "IMG_6022b.JPG",
    id: "teacherGamerSession",
    category: "sessions",
  },
  { filename: "IMG_6082d.jpg", id: "engagedLearners", category: "learning" },
  {
    filename: "IMG_6123paint.JPG",
    id: "miniaturePainting",
    category: "workshops",
  },
  { filename: "IMG_6515b.JPG", id: "rolePlayingFun", category: "sessions" },
  {
    filename: "IMG_6776bpan.jpg",
    id: "panoramicSession",
    category: "sessions",
  },
  { filename: "IMG_6781b.JPG", id: "gamingGroup", category: "sessions" },
  { filename: "IMG_7477.JPG", id: "teachingMoment", category: "learning" },
  { filename: "IMG_7717.JPG", id: "studentAchievement", category: "learning" },
  { filename: "IMG_9471b.JPG", id: "gameNight", category: "sessions" },
  { filename: "LGVT5638b.jpg", id: "specialEvent", category: "workshops" },
  {
    filename: "ZachZoomTeach1.png",
    id: "onlineTeaching",
    category: "learning",
  },
  { filename: "_ZAR2710b.jpg", id: "behindTheScenes", category: "workshops" },
] as const;

type GalleryCategory = (typeof galleryImages)[number]["category"];
type GalleryFilter = "all" | GalleryCategory;

// Generate gallery items from the image list
const galleryItems = galleryImages.map((img, index) => ({
  id: index + 1,
  src: `${GALLERY_BASE_URL}${img.filename}`,
  altKey: img.id,
  category: img.category,
}));

// Get unique categories from gallery items
const categories: GalleryFilter[] = [
  "all",
  ...Array.from(new Set(galleryImages.map((img) => img.category))),
];

const IMAGES_PER_PAGE = 8;

export default function MediaPage() {
  const t = useTranslations("media");
  const [selectedCategory, setSelectedCategory] =
    useState<GalleryFilter>("all");
  const [selectedImage, setSelectedImage] = useState<
    (typeof galleryItems)[0] | null
  >(null);
  const [visibleCount, setVisibleCount] = useState(IMAGES_PER_PAGE);

  const filteredGallery =
    selectedCategory === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.category === selectedCategory);

  // Only show up to visibleCount images
  const displayedGallery = filteredGallery.slice(0, visibleCount);
  const hasMore = visibleCount < filteredGallery.length;

  const loadMore = () => {
    setVisibleCount((prev) => prev + IMAGES_PER_PAGE);
  };

  // Reset visible count when category changes
  const handleCategoryChange = (category: GalleryFilter) => {
    setSelectedCategory(category);
    setVisibleCount(IMAGES_PER_PAGE);
  };

  return (
    <div className="min-h-screen bg-linear-to-b from-zinc-950 via-zinc-900 to-zinc-950">
      {/* Hero Section */}
      <section className="relative pt-12 pb-8 lg:pt-30 lg:pb-12 overflow-hidden">
        {/* Animated background pattern */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent" />
        </div>

        {/* Glowing orbs */}
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[128px] animate-pulse" />
        <div
          className="absolute bottom-20 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-[100px] animate-pulse"
          style={{ animationDelay: "1s" }}
        />

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-linear-to-r from-lighter via-accent to-lighter bg-clip-text text-transparent">
              {t("hero.title")}
            </h1>

            <p className="text-xl text-zinc-400 leading-relaxed max-w-2xl mx-auto">
              {t("hero.description")}
            </p>
          </div>

          {/* Video Embed Container */}
          <div className="max-w-4xl mx-auto mt-16 lg:mt-24">
            <div className="relative group">
              {/* Glow effect */}
              <div className="absolute -inset-1 bg-linear-to-r from-primary via-accent to-primary rounded-2xl opacity-30 blur-lg group-hover:opacity-50 transition-opacity duration-500" />

              <div className="relative bg-zinc-900/90 backdrop-blur-sm border border-accent/30 rounded-2xl overflow-hidden">
                {/* Video Container - 16:9 aspect ratio */}
                <div className="aspect-video w-full  flex items-center justify-center">
                  {/* Replace this iframe src with your actual video embed URL (YouTube, Vimeo, etc.) */}
                  <iframe
                    title={t("hero.introVideoTitle")}
                    src="https://www.youtube.com/embed/TOU90iP2VJY"
                    width="100%"
                    height="100%"
                    className="absolute inset-0 w-full h-full"
                    style={{ border: "none" }}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                </div>
              </div>
            </div>
          </div>

          {/* More Videos Grid */}
          {moreVideos.length > 0 && (
            <div className="mt-16">
              <h3 className="text-2xl font-semibold text-lighter text-center mb-8">
                {t("videos.more")}
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                {moreVideos.slice(0, 2).map((video) => (
                  <div
                    key={video.id}
                    className="group relative bg-zinc-900/60 backdrop-blur-sm border border-zinc-800 hover:border-accent/40 rounded-xl overflow-hidden transition-all duration-300"
                  >
                    <div className="aspect-video w-full">
                      <iframe
                        title={video.title}
                        src={`https://www.youtube.com/embed/${video.id}`}
                        width="100%"
                        height="100%"
                        className="w-full h-full"
                        style={{ border: "none" }}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        loading="lazy"
                        allowFullScreen
                      />
                    </div>
                    <div className="p-4">
                      <p className="text-lighter font-medium text-sm line-clamp-2">
                        {video.title}
                      </p>
                    </div>
                  </div>
                ))}

                {/* Youtube Channel Subscribe Link - In Grid */}
                <div className="md:col-span-2 flex items-center justify-center py-8">
                  <a
                    href="https://www.youtube.com/@zachrez6562"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-linear-to-r from-red-500 to-red-500 text-zinc-900 font-semibold rounded-full hover:from-accent-light hover:to-accent-light transition-all duration-300 hover:shadow-[0_4px_24px_rgba(251,191,36,0.4)]"
                  >
                    {t("videos.subscribe")}
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>

                {moreVideos.slice(2).map((video) => (
                  <div
                    key={video.id}
                    className="group relative bg-zinc-900/60 backdrop-blur-sm border border-zinc-800 hover:border-accent/40 rounded-xl overflow-hidden transition-all duration-300"
                  >
                    <div className="aspect-video w-full">
                      <iframe
                        title={video.title}
                        src={`https://www.youtube.com/embed/${video.id}`}
                        width="100%"
                        height="100%"
                        className="w-full h-full"
                        style={{ border: "none" }}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        loading="lazy"
                        allowFullScreen
                      />
                    </div>
                    <div className="p-4">
                      <p className="text-lighter font-medium text-sm line-clamp-2">
                        {video.title}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Section transitions */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-linear-to-t from-accent/5 to-transparent pointer-events-none" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-accent/50 to-transparent" />
      </section>

      {/* Podcast Section */}
      <section className="relative py-20 lg:py-28">
        {/* Section background */}
        <div className="absolute inset-0 bg-linear-to-b from-zinc-900/50 to-zinc-950/80" />

        {/* Decorative elements */}
        <div className="absolute top-0 left-0 right-0 h-24 bg-linear-to-b from-accent/5 to-transparent pointer-events-none" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex items-center justify-center gap-4 mb-12">
            <div className="h-px flex-1 max-w-32 bg-linear-to-r from-transparent to-accent/50" />
            <div className="flex items-center gap-3">
              <Volume2 className="w-6 h-6 text-accent" />
              <h2 className="text-3xl md:text-4xl font-semibold text-lighter">
                {t.rich("podcast.title", {
                  gradient: (chunks) => (
                    <span className="bg-linear-to-r from-accent to-secondary bg-clip-text text-transparent">
                      {chunks}
                    </span>
                  ),
                })}
              </h2>
            </div>
            <div className="h-px flex-1 max-w-32 bg-linear-to-l from-transparent to-accent/50" />
          </div>

          {/* Featured Episode */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="relative group">
              {/* Glow effect */}
              <div className="absolute -inset-1 bg-linear-to-r from-primary via-accent to-primary rounded-2xl opacity-30 blur-lg group-hover:opacity-50 transition-opacity duration-500" />

              <div className="relative bg-zinc-900/90 backdrop-blur-sm border border-accent/30 rounded-2xl overflow-hidden">
                <div className="p-6 md:p-8">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="px-3 py-1 text-xs font-semibold bg-accent text-zinc-900 rounded-full uppercase tracking-wider">
                      {t("podcast.featured")}
                    </span>
                    <span className="text-zinc-500 text-sm">
                      {t(`podcast.episodes.${podcastEpisodes[0].id}.date`)}
                    </span>
                  </div>

                  <h3 className="text-2xl md:text-3xl font-bold text-lighter mb-3">
                    {podcastEpisodes[0].title}
                  </h3>
                  <p className="text-zinc-400 mb-6 text-lg">
                    {t(`podcast.episodes.${podcastEpisodes[0].id}.description`)}
                  </p>

                  {/* Podbean Embed - Replace src with your actual Podbean player URL */}
                  <div className="aspect-3/1 rounded-xl overflow-hidden bg-zinc-800">
                    <iframe
                      title={t("podcast.playerTitle")}
                      width="100%"
                      height="100%"
                      style={{
                        border: "none",
                        minWidth: "min(100%, 430px)",
                        height: "100%",
                      }}
                      scrolling="no"
                      data-name="pb-iframe-player"
                      src="https://www.podbean.com/player-v2/?from=embed&i=c2a9e-18cbbb7-pb&square=1&share=1&download=1&fonts=Arial&skin=3267a3&font-color=ffffff&rtl=0&logo_link=episode_page&btn-skin=c73a3a&size=300"
                      loading="lazy"
                      allowFullScreen
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Episode Grid */}
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {podcastEpisodes.slice(1).map((episode) => (
              <div
                key={episode.id}
                className="group relative bg-zinc-900/60 backdrop-blur-sm border border-zinc-800 hover:border-accent/40 rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(251,191,36,0.15)]"
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-zinc-500 text-sm">
                      {t(`podcast.episodes.${episode.id}.date`)}
                    </span>
                    <span className="text-accent text-sm font-medium">
                      {episode.duration}
                    </span>
                  </div>

                  <h4 className="text-xl font-semibold text-lighter mb-2 group-hover:text-accent-light transition-colors">
                    {episode.title}
                  </h4>
                  <p className="text-zinc-400 text-sm mb-4 line-clamp-2">
                    {t(`podcast.episodes.${episode.id}.description`)}
                  </p>

                  <a
                    href={episode.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-accent hover:text-accent-light font-medium transition-colors"
                  >
                    <Play className="w-4 h-4 fill-current" />
                    <span>{t("podcast.listenNow")}</span>
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Podcast Platforms */}
          <div className="text-center mt-12">
            <h3 className="text-xl font-medium text-lighter mb-6">
              {t("podcast.platforms")}
            </h3>
            <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
              {podcastPlatforms.map((platform) => (
                <a
                  key={platform.name}
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-transform hover:scale-110 hover:brightness-110"
                  title={platform.name}
                >
                  <div className="relative w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden shadow-lg">
                    <Image
                      src={platform.icon}
                      alt={platform.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 40px, 48px"
                    />
                  </div>
                </a>
              ))}
            </div>

            <div className="mt-8">
              <a
                href="https://teachergamer.podbean.com/page/1/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-zinc-800/50 hover:bg-zinc-700/50 text-zinc-400 hover:text-lighter font-medium rounded-full transition-all duration-300 border border-zinc-700 hover:border-accent/50"
              >
                <Headphones className="w-5 h-5" />
                {t("podcast.viewOnPodbean")}
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Section transitions */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-linear-to-t from-accent/5 to-transparent pointer-events-none" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-accent/50 to-transparent" />
      </section>

      {/* Gallery Section */}
      <section className="relative py-20 lg:py-28">
        {/* Decorative background */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />
        <div className="absolute top-0 left-0 right-0 h-24 bg-linear-to-b from-accent/5 to-transparent pointer-events-none" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-px flex-1 max-w-32 bg-linear-to-r from-transparent to-accent/50" />
            <div className="flex items-center gap-3">
              <ImageIcon className="w-6 h-6 text-accent" />
              <h2 className="text-3xl md:text-4xl font-semibold text-lighter">
                {t("gallery.title")}
              </h2>
            </div>
            <div className="h-px flex-1 max-w-32 bg-linear-to-l from-transparent to-accent/50" />
          </div>

          <p className="text-center text-zinc-400 mb-12 max-w-2xl mx-auto">
            {t("gallery.description")}
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => handleCategoryChange(category)}
                className={`px-5 py-2.5 rounded-full font-medium text-sm transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-accent text-zinc-900 shadow-[0_4px_16px_rgba(251,191,36,0.4)]"
                    : "bg-zinc-800/80 text-zinc-300 hover:bg-zinc-700 hover:text-lighter border border-zinc-700 hover:border-zinc-600"
                }`}
              >
                {t(`gallery.categories.${category}`)}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {displayedGallery.map((item, index) => (
              <button
                type="button"
                key={item.id}
                onClick={() => setSelectedImage(item)}
                className={`group relative aspect-square overflow-hidden rounded-xl cursor-pointer ${
                  index === 0 ? "md:col-span-2 md:row-span-2" : ""
                }`}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {/* Image */}
                <Image
                  src={item.src}
                  alt={t(`gallery.images.${item.altKey}`)}
                  fill
                  loading="lazy"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes={
                    index === 0
                      ? "(max-width: 768px) 100vw, 50vw"
                      : "(max-width: 768px) 50vw, 25vw"
                  }
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-zinc-900/90 via-zinc-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Category tag */}
                <div className="absolute top-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="px-2 py-1 text-xs font-medium bg-accent/90 text-zinc-900 rounded-md">
                    {t(`gallery.categories.${item.category}`)}
                  </span>
                </div>

                {/* Caption */}
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-lighter font-medium text-sm">
                    {t(`gallery.images.${item.altKey}`)}
                  </p>
                </div>

                {/* Border glow on hover */}
                <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-accent/50 transition-colors duration-300" />
              </button>
            ))}
          </div>

          {/* Load More Button */}
          {hasMore && (
            <div className="text-center mt-12">
              <button
                type="button"
                onClick={loadMore}
                className="inline-flex items-center gap-2 px-8 py-3 bg-zinc-800/80 text-zinc-300 hover:bg-zinc-700 hover:text-lighter border border-zinc-700 hover:border-accent/50 font-medium rounded-full transition-all duration-300 hover:shadow-[0_4px_24px_rgba(251,191,36,0.2)]"
              >
                {t("gallery.loadMore")}
                <span className="text-zinc-500 text-sm">
                  {t("gallery.remaining", {
                    n: filteredGallery.length - visibleCount,
                  })}
                </span>
              </button>
            </div>
          )}
        </div>

        {/* Bottom transition */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-linear-to-t from-zinc-950 to-transparent pointer-events-none" />
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-zinc-950/95 backdrop-blur-sm"
          onClick={() => setSelectedImage(null)}
          onKeyDown={(e) => e.key === "Escape" && setSelectedImage(null)}
          role="dialog"
          aria-modal="true"
          aria-label={t("lightbox.aria")}
        >
          <button
            type="button"
            className="absolute top-6 right-6 text-lighter/70 hover:text-lighter transition-colors text-4xl font-light"
            onClick={() => setSelectedImage(null)}
            aria-label={t("lightbox.close")}
          >
            ×
          </button>

          <div className="relative max-w-5xl max-h-[85vh] w-full aspect-4/3">
            <Image
              src={selectedImage.src}
              alt={t(`gallery.images.${selectedImage.altKey}`)}
              fill
              className="object-contain rounded-lg"
              sizes="100vw"
            />
          </div>

          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center">
            <span className="px-3 py-1 text-xs font-medium bg-accent/90 text-zinc-900 rounded-full mr-3">
              {t(`gallery.categories.${selectedImage.category}`)}
            </span>
            <span className="text-lighter font-medium">
              {t(`gallery.images.${selectedImage.altKey}`)}
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
