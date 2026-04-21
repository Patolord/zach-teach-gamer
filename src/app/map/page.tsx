"use client";

import { ArrowLeft, Award, MapPin, X } from "lucide-react";
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

// TG certificate course names
const TG_COURSES = {
  intro: "Intro to Multiverse",
  level1: "Teacher Gamer Level 1",
} as const;

// Dummy teacher data with locations around the world
const teacherLocations = [
  {
    id: 1,
    name: "Sarah Mitchell",
    city: "New York",
    country: "USA",
    coordinates: [-74.006, 40.7128] as [number, number],
    specialty: "Elementary RPG Education",
    certificates: [TG_COURSES.intro, TG_COURSES.level1],
    avatar: "https://api.dicebear.com/7.x/adventurer/svg?seed=Sarah",
  },
  {
    id: 2,
    name: "James Chen",
    city: "San Francisco",
    country: "USA",
    coordinates: [-122.4194, 37.7749] as [number, number],
    specialty: "High School Game-Based Learning",
    certificates: [TG_COURSES.intro],
    avatar: "https://api.dicebear.com/7.x/adventurer/svg?seed=James",
  },
  {
    id: 3,
    name: "Emma Watson",
    city: "London",
    country: "United Kingdom",
    coordinates: [-0.1276, 51.5074] as [number, number],
    specialty: "Middle School Narrative Learning",
    certificates: [TG_COURSES.intro, TG_COURSES.level1],
    avatar: "https://api.dicebear.com/7.x/adventurer/svg?seed=Emma",
  },
  {
    id: 4,
    name: "Hans Mueller",
    city: "Berlin",
    country: "Germany",
    coordinates: [13.405, 52.52] as [number, number],
    specialty: "Youth Workshop Facilitator",
    certificates: [TG_COURSES.intro],
    avatar: "https://api.dicebear.com/7.x/adventurer/svg?seed=Hans",
  },
  {
    id: 5,
    name: "Yuki Tanaka",
    city: "Tokyo",
    country: "Japan",
    coordinates: [139.6917, 35.6895] as [number, number],
    specialty: "Social-Emotional Learning",
    certificates: [TG_COURSES.intro, TG_COURSES.level1],
    avatar: "https://api.dicebear.com/7.x/adventurer/svg?seed=Yuki",
  },
  {
    id: 6,
    name: "Maria Silva",
    city: "São Paulo",
    country: "Brazil",
    coordinates: [-46.6333, -23.5505] as [number, number],
    specialty: "Creative Storytelling",
    certificates: [TG_COURSES.intro],
    avatar: "https://api.dicebear.com/7.x/adventurer/svg?seed=Maria",
  },
  {
    id: 7,
    name: "Olga Petrov",
    city: "Moscow",
    country: "Russia",
    coordinates: [37.6173, 55.7558] as [number, number],
    specialty: "Critical Thinking Games",
    certificates: [TG_COURSES.intro, TG_COURSES.level1],
    avatar: "https://api.dicebear.com/7.x/adventurer/svg?seed=Olga",
  },
  {
    id: 8,
    name: "Ahmed Hassan",
    city: "Cairo",
    country: "Egypt",
    coordinates: [31.2357, 30.0444] as [number, number],
    specialty: "Mindfulness & Gaming",
    certificates: [TG_COURSES.intro],
    avatar: "https://api.dicebear.com/7.x/adventurer/svg?seed=Ahmed",
  },
  {
    id: 9,
    name: "Sophie Laurent",
    city: "Paris",
    country: "France",
    coordinates: [2.3522, 48.8566] as [number, number],
    specialty: "Collaborative Play",
    certificates: [TG_COURSES.intro, TG_COURSES.level1],
    avatar: "https://api.dicebear.com/7.x/adventurer/svg?seed=Sophie",
  },
  {
    id: 10,
    name: "Raj Patel",
    city: "Mumbai",
    country: "India",
    coordinates: [72.8777, 19.076] as [number, number],
    specialty: "Empathy Building",
    certificates: [TG_COURSES.intro, TG_COURSES.level1],
    avatar: "https://api.dicebear.com/7.x/adventurer/svg?seed=Raj",
  },
  {
    id: 11,
    name: "Lisa Anderson",
    city: "Sydney",
    country: "Australia",
    coordinates: [151.2093, -33.8688] as [number, number],
    specialty: "Adventure-Based Learning",
    certificates: [TG_COURSES.intro],
    avatar: "https://api.dicebear.com/7.x/adventurer/svg?seed=Lisa",
  },
  {
    id: 12,
    name: "Carlos Mendez",
    city: "Mexico City",
    country: "Mexico",
    coordinates: [-99.1332, 19.4326] as [number, number],
    specialty: "Cultural Storytelling",
    certificates: [TG_COURSES.intro],
    avatar: "https://api.dicebear.com/7.x/adventurer/svg?seed=Carlos",
  },
];

type Teacher = (typeof teacherLocations)[number];

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
            <p className="text-lighter/60 text-sm mt-1">{hoveredTeacher.specialty}</p>
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
            className="relative bg-gradient-to-br from-dark to-background rounded-2xl p-8 max-w-md w-full border border-accent/30 shadow-2xl animate-in zoom-in-95 duration-200"
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
                <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-accent/50 bg-dark">
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
                <p className="text-lighter/50 text-sm mb-1">Specialty</p>
                <p className="text-lighter font-medium">{selectedTeacher.specialty}</p>
              </div>

              <div className="bg-lighter/5 rounded-lg p-4">
                <p className="text-lighter/50 text-sm mb-2">Education / Certificates</p>
                <ul className="space-y-1.5">
                  {selectedTeacher.certificates.map((cert) => (
                    <li
                      key={cert}
                      className="text-lighter font-medium flex items-center gap-2"
                    >
                      <Award className="w-4 h-4 text-accent shrink-0" />
                      <span>{cert}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* CTA */}
            <Button
              className="w-full mt-6 bg-accent hover:bg-accent-light text-background font-semibold"
              asChild
            >
              <Link href="/contact">Connect with {selectedTeacher.name.split(" ")[0]}</Link>
            </Button>
          </div>
        </div>
      )}
    </main>
  );
}
