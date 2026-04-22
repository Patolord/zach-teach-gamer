"use client";

import { ArrowLeft, Award, Instagram, Linkedin, MapPin, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  ZoomableGroup,
} from "react-simple-maps";
import { Button } from "@/components/ui/button";
import { MEDIA } from "@/lib/media";

// GeoJSON URL for world map
const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

const SOCIAL_PLATFORMS = [
  { key: "instagram", label: "Instagram", icon: Instagram, base: "https://instagram.com/" },
  { key: "linkedin", label: "LinkedIn", icon: Linkedin, base: "https://linkedin.com/in/" },
] as const;

type TeacherSocialOverrides = Partial<Record<(typeof SOCIAL_PLATFORMS)[number]["key"], string>>;

interface TeacherProfile {
  id: number;
  name: string;
  city: string;
  country: string;
  coordinates: [number, number];
  specialties: string[];
  certificates: string[];
  avatar: string;
  social?: TeacherSocialOverrides;
}

// Real Teacher Gamer locations
const teacherLocations: TeacherProfile[] = [
  {
    id: 1,
    name: "Bruno Cobbi",
    city: "São Paulo",
    country: "Brazil",
    coordinates: [-46.6333, -23.5505] as [number, number],
    specialties: [
      "Game-Based Learning",
      "RPG-Based Facilitation",
      "Narrative Design",
      "Professional DMing",
      "Creative Strategy & Innovation",
      "Community Building",
      "Corporate Training & Facilitation",
      "Public Speaking",
      "Digital Marketing",
      "Copywriting",
      "Translation (EN → PT-BR)",
      "Martial Arts",
      "Human-Centered Design & Innovation",
      "Decentralized Leadership",
    ],
    certificates: [
      "BA in Multimedia Design",
      "Target Teal — Corporate Facilitation",
      "Target Teal — Culture Hacking",
      "Future of Storytelling (University of Potsdam)",
      "Business Experience (Tracksale)",
      "Humanized Marketing (Liliane Ferrari)",
      "Teacher-Gamer — Intro to Multiverse",
      "Teacher-Gamer — Level 1",
    ],
    avatar: "/teachers/bruno-cobbi.jpg",
    social: {
      instagram: "https://www.instagram.com/brunocobbi?igsh=MTIzamZ6ZmNxZTdiYg==",
      linkedin: "https://www.linkedin.com/in/brunocobbi",
    },
  },
  {
    id: 2,
    name: "Zachary Reznichek",
    city: "Montreal",
    country: "Canada",
    coordinates: [-73.5673, 45.5017] as [number, number],
    specialties: [
      "Teacher Training",
      "Curriculum Development",
      "Social Emotional Learning (SEL)",
      "Game-Based Learning (GBL)",
      "Project Based Learning (PBL)",
      "RPG-Based Facilitation",
      "Improv Facilitation",
      "Narrative Design",
      "Professional DMing",
      "Community Building",
      "Corporate Training & Facilitation",
      "Keynote Speaking",
    ],
    certificates: [
      "BS in Design",
      "MA in Education",
      "ESL Teaching Certificate",
      "Mindfulness Training Certificate",
      "Founder — Teacher-Gamer",
      "Author — Teacher-Gamer Handbook",
      "Co-Founder — Da Vinci Life Skills Curriculum",
    ],
    avatar:
      "https://api.dicebear.com/7.x/croodles-neutral/svg?seed=ZacharyReznichekMTL&backgroundColor=fef3c7,fde68a,fed7aa,fbcfe8,ddd6fe,bfdbfe",
  },
  {
    id: 3,
    name: "Zachary Reznichek",
    city: "Bayonne",
    country: "France",
    coordinates: [-1.4748, 43.4929] as [number, number],
    specialties: [
      "Teacher Training",
      "Curriculum Development",
      "Social Emotional Learning (SEL)",
      "Game-Based Learning (GBL)",
      "Project Based Learning (PBL)",
      "RPG-Based Facilitation",
      "Improv Facilitation",
      "Narrative Design",
      "Professional DMing",
      "Community Building",
      "Corporate Training & Facilitation",
      "Keynote Speaking",
    ],
    certificates: [
      "BS in Design",
      "MA in Education",
      "ESL Teaching Certificate",
      "Mindfulness Training Certificate",
      "Founder — Teacher-Gamer",
      "Author — Teacher-Gamer Handbook",
      "Co-Founder — Da Vinci Life Skills Curriculum",
    ],
    avatar:
      "https://api.dicebear.com/7.x/croodles-neutral/svg?seed=ZacharyReznichekBAY&backgroundColor=fef3c7,fde68a,fed7aa,fbcfe8,ddd6fe,bfdbfe",
  },
  {
    id: 4,
    name: "Zachary Reznichek",
    city: "Los Angeles",
    country: "USA",
    coordinates: [-118.2437, 34.0522] as [number, number],
    specialties: [
      "Teacher Training",
      "Curriculum Development",
      "Social Emotional Learning (SEL)",
      "Game-Based Learning (GBL)",
      "Project Based Learning (PBL)",
      "RPG-Based Facilitation",
      "Improv Facilitation",
      "Narrative Design",
      "Professional DMing",
      "Community Building",
      "Corporate Training & Facilitation",
      "Keynote Speaking",
    ],
    certificates: [
      "BS in Design",
      "MA in Education",
      "ESL Teaching Certificate",
      "Mindfulness Training Certificate",
      "Founder — Teacher-Gamer",
      "Author — Teacher-Gamer Handbook",
      "Co-Founder — Da Vinci Life Skills Curriculum",
    ],
    avatar:
      "https://api.dicebear.com/7.x/croodles-neutral/svg?seed=ZacharyReznichekLA&backgroundColor=fef3c7,fde68a,fed7aa,fbcfe8,ddd6fe,bfdbfe",
  },
  {
    id: 5,
    name: "Dennis Grillo de Albuquerque",
    city: "Johnson City",
    country: "USA",
    coordinates: [-82.3534, 36.3134] as [number, number],
    specialties: [
      "Game-Based Learning (GBL)",
      "Project Based Learning (PBL)",
      "RPG-Based Facilitation",
      "Narrative Design",
      "Professional DMing",
      "Creative Strategy & Innovation",
      "Community Building",
      "Corporate Training & Facilitation",
      "Public Speaking",
      "Digital Marketing",
      "Copywriting",
      "Translation (EN → PT-BR → EN)",
    ],
    certificates: [
      "BA in Nursing",
      "Teacher-Gamer — Intro to Multiverse",
      "Teacher-Gamer — Level 1",
      "Da Vinci Life Skills — Intro",
      "Da Vinci Life Skills — Level 1",
    ],
    avatar:
      "https://api.dicebear.com/7.x/croodles-neutral/svg?seed=DennisGrilloJC&backgroundColor=fef3c7,fde68a,fed7aa,fbcfe8,ddd6fe,bfdbfe",
  },
  {
    id: 6,
    name: "Dennis Grillo de Albuquerque",
    city: "Pigeon Forge",
    country: "USA",
    coordinates: [-83.5545, 35.7884] as [number, number],
    specialties: [
      "Role-Playing Games",
      "Teaching",
      "Nursing",
    ],
    certificates: [
      "Teacher-Gamer Certified",
    ],
    avatar:
      "https://api.dicebear.com/7.x/croodles-neutral/svg?seed=DennisGrilloPF&backgroundColor=fef3c7,fde68a,fed7aa,fbcfe8,ddd6fe,bfdbfe",
  },
];

type Teacher = (typeof teacherLocations)[number];

function getTeacherSocials(teacher: Teacher) {
  const handle = teacher.name.toLowerCase().replace(/\s+/g, "");
  return SOCIAL_PLATFORMS.map((platform) => ({
    ...platform,
    url: teacher.social?.[platform.key] ?? `${platform.base}${handle}`,
  }));
}

interface Particle {
  left: string;
  top: string;
  animationDelay: string;
  animationDuration: string;
}

export default function TeachersMapPage() {
  const [selectedTeacher, setSelectedTeacher] = useState<Teacher | null>(null);
  const [hoveredTeacher, setHoveredTeacher] = useState<Teacher | null>(null);
  const [particles, setParticles] = useState<Particle[]>([]);

  // Generate particles only on client to avoid hydration mismatch
  useEffect(() => {
    const generatedParticles = [...Array(20)].map(() => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      animationDelay: `${Math.random() * 3}s`,
      animationDuration: `${2 + Math.random() * 3}s`,
    }));
    setParticles(generatedParticles);
  }, []);

  const totalTeachers = teacherLocations.length;
  const totalCertificates = teacherLocations.reduce(
    (acc, t) => acc + t.certificates.length,
    0,
  );

  return (
    <main className="relative min-h-screen overflow-hidden text-lighter">
      {/* Background */}
      <div
        className="fixed inset-0 bg-cover bg-center -z-20"
        style={{ backgroundImage: `url('${MEDIA.backgrounds.courses}')` }}
      />
      <div className="fixed inset-0 bg-gradient-to-b from-black/85 via-black/75 to-black/90 -z-10" />

      {/* Full Screen Map Layer */}
      <div className="fixed inset-0 z-0">
        <ComposableMap
          projection="geoMercator"
          projectionConfig={{
            scale: 140,
            center: [0, 20],
          }}
          style={{ width: "100%", height: "100%" }}
        >
          <ZoomableGroup>
            <Geographies geography={geoUrl}>
              {({ geographies }) =>
                geographies.map((geo) => (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    fill="var(--color-dark)"
                    stroke="var(--color-medium)"
                    strokeWidth={0.5}
                    style={{
                      default: { outline: "none", opacity: 0.8 },
                      hover: { fill: "var(--color-medium)", outline: "none", opacity: 1 },
                      pressed: { outline: "none" },
                    }}
                  />
                ))
              }
            </Geographies>

            {/* Teacher Markers */}
            {teacherLocations.map((teacher) => (
              <Marker
                key={teacher.id}
                coordinates={teacher.coordinates}
                onMouseEnter={() => setHoveredTeacher(teacher)}
                onMouseLeave={() => setHoveredTeacher(null)}
                onClick={() => setSelectedTeacher(teacher)}
              >
                <g transform="translate(-12, -24)" style={{ cursor: "pointer" }}>
                  {/* Pulse animation ring */}
                  <circle
                    cx="12"
                    cy="20"
                    r="8"
                    fill="none"
                    stroke="var(--color-accent)"
                    strokeWidth="2"
                    opacity="0.4"
                    className="animate-ping"
                    style={{ transformOrigin: "12px 20px" }}
                  />
                  {/* Main pin */}
                  <path
                    d="M12 0C7.58 0 4 3.58 4 8c0 5.5 8 16 8 16s8-10.5 8-16c0-4.42-3.58-8-8-8z"
                    fill={
                      hoveredTeacher?.id === teacher.id ||
                      selectedTeacher?.id === teacher.id
                        ? "var(--color-accent)"
                        : "var(--color-accent-dark)"
                    }
                    stroke="var(--color-background)"
                    strokeWidth="1"
                  />
                  {/* Inner circle */}
                  <circle cx="12" cy="8" r="3" fill="var(--color-white)" />
                </g>
              </Marker>
            ))}
          </ZoomableGroup>
        </ComposableMap>

        {/* Hover Tooltip (positioned absolute relative to screen) */}
        {hoveredTeacher && !selectedTeacher && (
          <div className="absolute top-24 right-4 md:right-8 bg-background/90 backdrop-blur-sm rounded-lg p-4 border border-accent/30 pointer-events-none z-50 max-w-xs shadow-xl animate-in fade-in zoom-in-95 duration-200">
            <p className="text-accent font-semibold text-lg">{hoveredTeacher.name}</p>
            <p className="text-lighter/90">
              {hoveredTeacher.city}, {hoveredTeacher.country}
            </p>
            <p className="text-lighter/60 text-sm mt-1">
              {hoveredTeacher.specialties.slice(0, 2).join(" • ")}
              {hoveredTeacher.specialties.length > 2 &&
                ` + ${hoveredTeacher.specialties.length - 2} more`}
            </p>
          </div>
        )}

        {/* Map Legend */}
        <div className="absolute bottom-4 right-4 bg-background/80 backdrop-blur-sm rounded-lg p-3 border border-lighter/10 z-10 hidden md:block">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full bg-accent animate-pulse" />
            <span className="text-lighter/70 text-xs">Teacher Location</span>
          </div>
          <p className="text-lighter/50 text-xs mt-1">Click marker for details</p>
        </div>
      </div>

      {/* Animated background particles (on top of map for depth) */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-1">
        {particles.map((particle, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-accent/30 rounded-full animate-pulse"
            style={{
              left: particle.left,
              top: particle.top,
              animationDelay: particle.animationDelay,
              animationDuration: particle.animationDuration,
            }}
          />
        ))}
      </div>

      {/* Floating UI Layer */}
      <div className="fixed inset-0 pointer-events-none z-10 p-4 md:p-6">
        {/* Header - Top Left */}
        <div className="absolute top-4 left-4 md:top-6 md:left-6 pointer-events-auto">
          <Link
            href="/home"
            className="inline-flex items-center gap-2 text-lighter/80 hover:text-lighter transition-colors bg-background/20 backdrop-blur-sm px-4 py-2 rounded-full border border-white/5 hover:bg-background/40"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Home
          </Link>
        </div>

        {/* Title & Stats - Bottom Left Sidebar Card */}
        <div className="absolute bottom-24 left-0 w-full max-w-[250px] pointer-events-none px-4 md:bottom-8 md:px-6">
          <div className="bg-background/80 backdrop-blur-md rounded-2xl p-4 border border-white/10 text-left pointer-events-auto shadow-2xl">
            <h1 className="text-xl font-bold text-lighter mb-3 leading-tight">
              Teacher Gamers <span className="block text-accent text-2xl">Worldwide</span>
            </h1>
            
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-3 pt-3 border-t border-white/10">
              <div>
                <p className="text-lighter/60 text-[10px] uppercase tracking-wider mb-0.5">Teachers</p>
                <div className="flex items-center gap-1.5">
                  <span className="text-xl font-bold text-accent">{totalTeachers}</span>
                  <MapPin className="w-3.5 h-3.5 text-accent/70" />
                </div>
              </div>
              
              <div>
                <p className="text-lighter/60 text-[10px] uppercase tracking-wider mb-0.5">Education / Certificates</p>
                <div className="flex items-center gap-1.5">
                  <span className="text-xl font-bold text-accent">{totalCertificates}</span>
                  <Award className="w-3.5 h-3.5 text-accent/70" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer CTA - Bottom Center (Compact) */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-full max-w-md px-4 pointer-events-none">
          <div className="bg-background/90 backdrop-blur-md rounded-xl p-4 border border-accent/20 shadow-2xl flex items-center justify-between gap-4 pointer-events-auto">
             <div className="text-left">
               <h3 className="text-base font-bold text-lighter">Join the Network</h3>
               <p className="text-xs text-lighter/70">Become a certified Teacher Gamer</p>
             </div>
             <Button
               size="sm"
               className="bg-accent hover:bg-accent-light text-background font-semibold shrink-0"
               asChild
             >
               <Link href="/home#courses-section">Get Certified</Link>
             </Button>
          </div>
        </div>
      </div>

      {/* Selected Teacher Modal */}
      {selectedTeacher && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/60 backdrop-blur-sm"
          onClick={() => setSelectedTeacher(null)}
        >
          <div
            className="relative bg-gradient-to-br from-dark to-background rounded-2xl p-6 md:p-8 max-w-lg w-full max-h-[90vh] overflow-y-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden border border-accent/30 shadow-2xl animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setSelectedTeacher(null)}
              className="absolute top-4 right-4 text-lighter/60 hover:text-lighter transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Avatar */}
            <div className="flex justify-center mb-6">
              <div className="relative">
                <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-accent/50 bg-lighter/90">
                  <img
                    src={selectedTeacher.avatar}
                    alt={selectedTeacher.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-2 -right-2 bg-accent rounded-full p-2">
                  <MapPin className="w-4 h-4 text-background" />
                </div>
              </div>
            </div>

            {/* Teacher Info */}
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-lighter mb-1">
                {selectedTeacher.name}
              </h2>
              <p className="text-accent font-medium">
                {selectedTeacher.city}, {selectedTeacher.country}
              </p>
            </div>

            {/* Details */}
            <div className="space-y-4">
              <div className="bg-lighter/5 rounded-lg p-4">
                <p className="text-lighter/50 text-sm mb-2">Specialties</p>
                <ul className="flex flex-wrap gap-1.5">
                  {selectedTeacher.specialties.map((item) => (
                    <li
                      key={item}
                      className="text-xs font-medium text-lighter bg-accent/15 border border-accent/25 rounded-full px-2.5 py-1"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-lighter/5 rounded-lg p-4">
                <p className="text-lighter/50 text-sm mb-2">Education / Certificates</p>
                <ul className="space-y-1.5">
                  {selectedTeacher.certificates.map((cert) => {
                    const isTeacherGamer = cert.startsWith("Teacher-Gamer");
                    return (
                      <li
                        key={cert}
                        className="flex items-start gap-2 text-sm font-medium text-lighter"
                      >
                        <Award
                          className={`w-4 h-4 shrink-0 mt-0.5 ${
                            isTeacherGamer ? "text-accent" : "text-primary"
                          }`}
                        />
                        <span className="flex-1">{cert}</span>
                        {isTeacherGamer && (
                          <span className="shrink-0 text-[10px] uppercase tracking-wider font-bold bg-accent text-accent-foreground rounded-full px-2 py-0.5">
                            TG
                          </span>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-6">
              <p className="text-lighter/50 text-sm mb-3 text-center">
                Connect with {selectedTeacher.name.split(" ")[0]}
              </p>
              <ul className="flex items-center justify-center gap-3 flex-wrap">
                {getTeacherSocials(selectedTeacher).map((social) => {
                  const Icon = social.icon;
                  return (
                    <li key={social.key}>
                      <a
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${selectedTeacher.name} on ${social.label}`}
                        title={social.label}
                        className="group flex items-center justify-center w-11 h-11 rounded-full bg-lighter/5 border border-lighter/10 text-lighter/80 hover:text-background hover:bg-accent hover:border-accent transition-colors"
                      >
                        <Icon className="w-5 h-5" />
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
