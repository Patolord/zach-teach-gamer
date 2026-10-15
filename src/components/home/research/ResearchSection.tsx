import { ExternalLink } from "lucide-react";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import ShinyText from "@/components/ui/shinytext";
import { Link } from "@/i18n/navigation";
import { MEDIA } from "@/lib/media";

// Using global CSS theme variables

interface ResearchSectionProps {
  sectionIndex?: number;
}

// Published paper titles, authors and journals are proper names and stay as-is.
// Abstracts and view counts are translated under `home.research.articles.<id>`.
const articles = [
  {
    id: "multiverse",
    title: "Multiverse - Role-Playing Games as an Educational Discipline",
    authors: "Reznichek, Z.",
    journal: "Academia Letters",
    year: "2021",
    link: "https://www.academia.edu/50948753/Multiverse_Role_Playing_Games_as_an_Educational_Discipline",
  },
  {
    id: "authenticEducation",
    title: "What is 'Authentic Education'?",
    authors: "Reznichek, Z.",
    journal: "Academia Letters",
    year: "2021",
    link: "https://www.academia.edu/47832669/What_is_Authentic_Education",
  },
  {
    id: "authenticEducationAi",
    title: "What is 'Authentic Education'? – Insights into the Age of AI",
    authors: "Reznichek, Z.",
    journal: "INDIRE",
    year: "2025",
    link: "https://indire.net/Publications/162",
  },
  {
    id: "selfDetermination",
    title:
      "Self-Determination Theory and the Case Against Extrinsic Goals in Education",
    authors: "Reznichek, Z.",
    journal: "Academia.edu",
    year: "2021",
    link: "https://www.academia.edu/125946814/Self_Determination_Theory_and_the_Case_Against_Extrinsic_Goals_in_Education",
  },
  {
    id: "writingJourney",
    title: "Start The Writing Journey",
    authors: "Reznichek, Z. & Jennings, K.",
    journal: "Academia.edu",
    year: "2025",
    link: "https://www.academia.edu/125946814/Self_Determination_Theory_and_the_Case_Against_Extrinsic_Goals_in_Education",
  },
  {
    id: "authenticityMatters",
    title:
      "As if Authenticity Matters: The Fall of Contemplation and The Rise of The Social Realm",
    authors: "Reznichek, Z.",
    journal: "Education Thesis",
    year: "2010",
    link: "https://www.academia.edu/8662975/As_if_Authenticity_Matters_The_Fall_of_Contemplation_and_The_Rise_of_The_Social_Realm",
  },
] as const;

export default function ResearchSection({
  sectionIndex,
}: ResearchSectionProps) {
  const t = useTranslations("home.research");

  return (
    <section
      id="research-section"
      data-scroll-section={sectionIndex}
      className="relative w-full flex items-center justify-center py-24"
    >
      {/* Background geral */}
      <div
        className="absolute inset-0 bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: `url('${MEDIA.backgrounds.research}')` }}
      />
      {/* 40% black overlay */}
      <div
        className="absolute inset-0"
        style={{ backgroundColor: "rgba(26, 26, 31, 0.4)" }}
      />

      {/* Transições top/bottom */}
      <div
        className="absolute top-0 left-0 right-0 h-px opacity-60 z-10"
        style={{
          background:
            "linear-gradient(to right, transparent, var(--color-accent), var(--color-secondary), var(--color-accent), transparent)",
        }}
      />
      <div
        className="absolute top-0 left-0 right-0 h-24 pointer-events-none z-10"
        style={{
          background:
            "linear-gradient(to bottom, var(--color-secondary-soft), transparent)",
        }}
      />
      <div
        className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none z-10"
        style={{
          background:
            "linear-gradient(to top, var(--color-secondary-soft), transparent)",
        }}
      />
      <div
        className="absolute bottom-0 left-0 right-0 h-px opacity-60 z-10"
        style={{
          background:
            "linear-gradient(to right, transparent, var(--color-accent), var(--color-secondary), var(--color-accent), transparent)",
        }}
      />

      <div
        data-section-content
        className="container mx-auto px-8 md:px-8 max-w-6xl relative z-10"
      >
        {/* Header */}
        <div data-animate className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4 inline-block whitespace-nowrap">
            <ShinyText
              speed={3}
              delay={1}
              color={"var(--color-accent)"}
              shineColor="#fff"
              spread={30}
              yoyo
            >
              {t("title")}
            </ShinyText>
          </h2>
          <p
            className="text-base md:text-lg mt-4 max-w-3xl mx-auto"
            style={{ color: "var(--color-lighter)" }}
          >
            {t.rich("subtitle", {
              accent: (chunks) => (
                <span
                  className="font-medium"
                  style={{ color: "var(--color-accent)" }}
                >
                  {chunks}
                </span>
              ),
            })}
          </p>
        </div>

        {/* Grid de cartas */}
        <div className="grid gap-8 md:gap-10 grid-cols-1 sm:grid-cols-2 xl:grid-cols-3">
          {articles.map((article, index) => {
            const backgroundImage =
              index % 2 === 0
                ? MEDIA.assets.magicCardBg
                : MEDIA.assets.magicCardBgAlt;

            return (
              <article
                key={article.title}
                className="relative mx-auto w-full max-w-xs aspect-[2/3] group cursor-pointer text-gray-900"
              >
                <Link
                  href={article.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative block h-full cursor-pointer"
                >
                  {/* Card frame */}
                  <div
                    className="absolute inset-0 bg-center bg-contain bg-no-repeat drop-shadow-[0_25px_40px_rgba(0,0,0,0.7)] transition-transform duration-300 group-hover:-translate-y-1 group-hover:scale-[1.02] cursor-pointer"
                    style={{ backgroundImage: `url('${backgroundImage}')` }}
                  />

                  {/* Conteúdo em cima da moldura */}
                  <div className="relative h-full flex flex-col px-12 pt-20 pb-7 cursor-pointer">
                    {/* Título */}
                    <div className="mt-3">
                      <h3 className="text-md font-extrabold leading-snug line-clamp-3 text-center cursor-pointer px-1">
                        {article.title}
                      </h3>
                    </div>

                    {/* Texto (como "caixa de texto" da carta) */}
                    <div className="mt-4 flex-1">
                      <div className=" rounded-md px-3 py-2 text-sm leading-snug text-gray-900 overflow-hidden h-full font-bold cursor-pointer">
                        <p className="line-clamp-7">
                          {t(`articles.${article.id}.abstract`)}
                        </p>
                      </div>
                    </div>

                    {/* Barra "tipo" / autores / ano */}
                    <div
                      className="mt-3 border-2 rounded px-2 mb-6 py-1 flex flex-col gap-1 text-xs cursor-pointer mx-1 backdrop-blur-sm"
                      style={{
                        backgroundColor: "rgba(0, 0, 0, 0.5)",
                        borderColor: "var(--color-accent)",
                        color: "var(--color-lighter)",
                      }}
                    >
                      <div className="flex justify-between gap-2">
                        <span className="font-semibold truncate cursor-pointer">
                          {article.authors}
                        </span>
                        <span
                          className="italic truncate cursor-pointer"
                          style={{ color: "var(--color-accent)" }}
                        >
                          {article.journal}
                        </span>
                      </div>
                      <div
                        className="flex justify-between gap-2 text-sm"
                        style={{ color: "var(--color-accent)" }}
                      >
                        <span>{article.year}</span>
                        <span className="truncate cursor-pointer">
                          {t(`articles.${article.id}.views`)}
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </article>
            );
          })}
        </div>

        {/* Footer Link */}
        <div className="mt-16 text-center">
          <Button
            asChild
            variant="outline"
            size="lg"
            className="gap-2 text-base md:text-lg border-2 hover:bg-white/10 border-white text-(--color-white) bg-transparent"
          >
            <Link
              href="https://concordia.academia.edu/ZacharyReznichek"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("follow")}
              <ExternalLink className="size-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
