/**
 * Central testimonial library. Tags control where random picks are drawn from.
 */

export type TestimonialTag =
  | "student"
  | "parent"
  | "educator"
  | "training"
  | "intro-multiverse"
  | "level-1"
  | "level-2"
  | "level-3"
  | "handbook"
  | "hero"
  | "marquee";

export type Testimonial = {
  id: string;
  quote: string;
  author: string;
  tags: TestimonialTag[];
};

export const testimonials: Testimonial[] = [
  // —— Student & parent (marquee / youth voices) ——
  {
    id: "heidi-hartley",
    quote:
      "Hartley is more decisive as a result of taking part in Life-SKills with Role-Playing Games. The fact that he is constantly strategizing has made him more confident in his ability to make decisions on the spot. Additionally, his writing abilities have greatly improved as he now develops his characters with great thought and clarity. In an age where devices have taken over, we have been privileged to find a program that both honors and endorses the deep reservoir of the human imagination.",
    author: "Heidi Bassett-Blair (mother of Hartley, age 12)",
    tags: ["parent", "marquee", "hero"],
  },
  {
    id: "shanti-15",
    quote:
      "It's really interesting to adapt your play-style to your characters, especially as they sometimes contrast your own personality. Though the game is based around fantasy, you end up learning how to think realistically and critically. Honestly, my only complaint is that the classes don't go on for longer.",
    author: "Shanti (age 15)",
    tags: ["student", "marquee"],
  },
  {
    id: "kaesha-homeschool",
    quote:
      "I learnt the importance of evaluating a situation before jumping to conclusions, the helpfulness of working with others whom have skills I do not possess, and how fun it is to blindly run into the hands of danger.",
    author: "Kaesha (homeschooler)",
    tags: ["student", "marquee"],
  },
  {
    id: "eron-10",
    quote:
      "I love going on an adventure and discovering new things. It's fun. You can use spells, craft and fight. You'll probably freak out when you die.",
    author: "Eron (age 10)",
    tags: ["student", "marquee"],
  },
  {
    id: "julian-10",
    quote:
      "It's fun and we learn lots of things, like strategy, team work, assessing the situation and making terrains.",
    author: "Julian (age 10)",
    tags: ["student", "marquee"],
  },
  {
    id: "eve-12",
    quote:
      "I learned to try new things. Originally I thought I would not like this thematic but actually I learnt a lot about trying new things.",
    author: "Eve (age 12)",
    tags: ["student", "marquee"],
  },
  {
    id: "william-19",
    quote:
      "Three takeaways: it really encourages you to use your imagination; I came out with a few more friends than I started with; and we read a pretty good book in the class — The Wheel of Time.",
    author: "William (age 19, reflecting on RPG class at Green School)",
    tags: ["student", "marquee", "hero"],
  },
  {
    id: "hartley-legacy",
    quote:
      "Our son Hartley has a greater level of confidence in his skill to take initiative and control over his actions. He also notices that he has a more active and aware mind after the class since he is making choices constantly.",
    author: "Heidi (mother of Hartley, age 12)",
    tags: ["parent", "marquee"],
  },

  // —— Training: Intro to Multiverse ——
  {
    id: "beki-stoiber",
    quote:
      "Zach is incredibly patient and manages to break everything down into the manageable chunks each individual needs. He fosters a beautiful sense of belonging with the trainees.",
    author: "Beki Stoiber",
    tags: ["training", "intro-multiverse", "hero", "marquee"],
  },
  {
    id: "eduardo-sel-character",
    quote:
      "The way we create a character while learning is definitely unique... throughout the process, we not only develop a well-structured character but also gain valuable insights into SEL (Social Emotional Learning).",
    author: "Eduardo Vancsek Andreoli",
    tags: ["training", "intro-multiverse", "hero"],
  },
  {
    id: "bruno-rpg-potential",
    quote:
      "One of the most valuable things I've learned in this course is: The potential of RPGs in learning environments. They're not just games — they are dynamic frameworks for exploring knowledge in ways that are participatory and meaningful.",
    author: "Bruno Cobbi Silva",
    tags: ["training", "intro-multiverse"],
  },
  {
    id: "bruno-self-awareness",
    quote:
      "One of the most valuable things I've learned in this course is: Self-awareness through roleplay. RPGs become mirrors for our inner world — they help us explore emotions, values, and even hidden fears or desires in a safe and playful context.",
    author: "Bruno Cobbi Silva",
    tags: ["training", "intro-multiverse"],
  },
  {
    id: "bruno-teamwork",
    quote:
      "One of the most valuable things I've learned in this course is: Teamwork and co-creation. The most magical moments happen not when one person shines, but when the group creates a story none of us could have built alone.",
    author: "Bruno Cobbi Silva",
    tags: ["training", "intro-multiverse"],
  },
  {
    id: "dennis-feedback",
    quote:
      "The most valuable things I've learned in this course are: To be open and to accept suggestions and criticism at moments of Feedback; To be attentive for other people's strengths and shortcomings, and that we can learn a lot while still having fun.",
    author: "Dennis Grillo de Albuquerque",
    tags: ["training", "intro-multiverse"],
  },
  {
    id: "eduardo-lifeskills-rpg",
    quote:
      "For me, one of the most valuable things I've learned in this course is how you can bring life skills and debates about real issues with characters and fictional world details in RPGs.",
    author: "Eduardo Vancsek Andreoli",
    tags: ["training", "intro-multiverse"],
  },
  {
    id: "bruno-meta-gaming",
    quote:
      "The most helpful aspect of the course has been the conversations about gaming and meta-gaming. They open up layers of meaning beneath the surface of play — connecting the mechanics of the game with emotional, social, and educational dynamics.",
    author: "Bruno Cobbi Silva",
    tags: ["training", "intro-multiverse"],
  },
  {
    id: "reynaldo-better-teacher",
    quote:
      "This experience has been a wonderful journey of learning how to be a better teacher, not just a teacher-gamer. It is teaching me to pay attention to what students are saying and doing, and more importantly, what they are not saying and not doing.",
    author: "Reynaldo Barochelo Jr.",
    tags: ["training", "intro-multiverse", "hero"],
  },

  // —— Training: Level 1 ——
  {
    id: "eduardo-methods-l1",
    quote:
      "I really like the methods used so far. The way the discussions about various topics naturally emerge from simple concepts of character and world-building is highly effective for learning. Zach is an excellent teacher, and everyone studying alongside me has been great as well.",
    author: "Eduardo Vancsek Andreoli",
    tags: ["training", "level-1", "hero"],
  },
  {
    id: "eduardo-safe-space-l1",
    quote:
      "The course provides a safe space where we can openly discuss emerging topics, be ourselves, and let emotions flow. We experience firsthand how emotional and social care is crucial and powerful for learning, as it is an integral part of the lessons.",
    author: "Eduardo Vancsek Andreoli",
    tags: ["training", "level-1", "hero"],
  },

  // —— Training: Level 2 ——
  {
    id: "eduardo-level-2-sel",
    quote:
      "I have never had a training experience like this before. The integration of SEL into the lessons and the way broader discussions naturally arise from the simple goal of creating a character make this course truly different.",
    author: "Eduardo Vancsek Andreoli",
    tags: ["training", "level-2", "hero"],
  },

  // —— Educators & partners (general / handbook / hero) ——
  {
    id: "angela-einstein",
    quote:
      "Honestly, for me, he is the Einstein of Teacher-Gamers. The pages of his Handbook are all falling out because I think what he is providing for young people and teachers is remarkable and exciting.",
    author: "Angela L. Fubler, Founder, Chatmore British International School",
    tags: ["educator", "handbook", "hero", "marquee"],
  },
  {
    id: "angela-thrills",
    quote:
      "The many Teacher-Gamer approaches to developing basic and advanced lifeskills, creative writing and even knowledge-based information like geography, history and art — it is literally still one of the few examples of learning that thrills me intensely!",
    author: "Angela L. Fubler, Founder, Chatmore British International School",
    tags: ["educator", "handbook", "marquee"],
  },
  {
    id: "angela-engaged",
    quote:
      "We observed students who were fully engaged, problem-solving, laughing, curious, inventing, researching, and 100% interacting.",
    author: "Angela L. Fubler, Founder, Chatmore British International School",
    tags: ["educator", "marquee", "hero"],
  },
  {
    id: "angela-sideline",
    quote:
      "Even students typically choosing more sideline learning stances were at the table participating and learning together with peers in a way that was comfortable and enjoyable for everyone.",
    author: "Angela L. Fubler, Founder, Chatmore British International School",
    tags: ["educator", "marquee"],
  },
  {
    id: "angela-small-school",
    quote:
      "I want to encourage schools and especially the Small School community to explore this experience. It's the principles and practice that make this a special and perhaps missing component of learning.",
    author: "Angela L. Fubler, Founder, Chatmore British International School",
    tags: ["educator", "hero"],
  },
  {
    id: "angela-highly-recommend",
    quote: "Highly recommend Zachary Reznichek and the Teacher-Gamer experience!",
    author: "Angela Fubler, Founder of Chatmore British International School",
    tags: ["educator", "hero", "marquee"],
  },
  {
    id: "josh-wizard",
    quote:
      "Zach is a true wizard. His magical mind inspires me deeply. I have learned a lot from him — we worked together on some projects and he opened up my hidden side I did not realize I could do.",
    author: "Josh Handani, Circular Economy Manager",
    tags: ["educator", "hero", "marquee"],
  },
  {
    id: "josh-indonesia",
    quote:
      "Zach is not only my teacher and mentor but also my buddy. I have shared his concept to Indonesia Good Principals Award in Yogyakarta and they appreciated so much.",
    author: "Josh Handani, Circular Economy Manager",
    tags: ["educator", "hero"],
  },
  {
    id: "noan-rpg-attention",
    quote:
      "I have enjoyed working alongside Zach for a while, and now get to see from the other angle... as my kids go through his courses. The whole realm of RPGs as a learning device is one that needs way more attention!",
    author: "Noan Fesnoux, Curriculum Designer",
    tags: ["educator", "hero", "marquee"],
  },
  {
    id: "aaron-ten-years",
    quote:
      "I taught with Zach 10 years ago and saw the magic firsthand. There is so much to learn from him and the Teacher-Gamer approach.",
    author: "Aaron Eden, Education Transformation Designer and Coach",
    tags: ["educator", "hero", "marquee"],
  },
  {
    id: "aaron-experience-designer",
    quote:
      "The best teachers are experience designers. Master gamer and visionary educator Zachary Reznichek has produced a guide to help teacher gamers bring adventure, camaraderie, true teamwork, and the authoring of one's quest back into our learning spaces.",
    author: "Aaron Eden, Executive Director, Brightworks School",
    tags: ["educator", "handbook", "hero"],
  },
  {
    id: "aaron-brightworks",
    quote:
      "Opportunities to get real with engaging education through gaming, with a master at weaving the two together. This is not gamification; it's imagination, storytelling, literary and creative thinking, team building and evolving.",
    author: "Aaron Eden, Brightworks",
    tags: ["educator", "hero"],
  },
  {
    id: "daisy-playful",
    quote: "So much to be gained from the playful / role-play approach!",
    author: "Daisy Fretwell, Director of Cultivate School UK",
    tags: ["educator", "marquee", "hero"],
  },
  {
    id: "rosina-wizard-global",
    quote:
      "Zach's system is amazing. He truly is a wizard. I feel so honoured to have worked with him and learnt with him over these last 5 years and I am really excited to see him expand the Teacher Gamer Revolution across the globe.",
    author: "Rosina Dorelli, Da Vinci Life Skills CIC",
    tags: ["educator", "hero", "marquee"],
  },
  {
    id: "jennipher-rpg-impact",
    quote:
      "Zachary Reznichek has guided my own children, as well as many of my students, in RPG adventures over the years. No amount of AI learning can replace the dynamic, engaging, challenging, transformative impacts of the RPG experiences that Zach creates.",
    author: "Jennipher Spector, Founder of Synapse Tutors",
    tags: ["educator", "handbook", "hero"],
  },
  {
    id: "ben-riggs-plot-points",
    quote:
      "Imagine a world where teachers used RPGs as teaching tools. That is the world the Teacher-Gamer Handbook aims to bring about.",
    author: "Ben Riggs, Plot Points Podcast",
    tags: ["educator", "handbook", "marquee"],
  },
  {
    id: "glenn-middle-school",
    quote:
      "Students reported that among 15 collaborative skills they worked with, they developed the most enrichment in communication, critical thinking, storytelling, creativity, empathy, risk assessment and a clearer understanding between general skill and expertise.",
    author: "Glenn Chickering, Middle School Division Head",
    tags: ["educator", "hero"],
  },
  {
    id: "glenn-perfect-attendance",
    quote:
      "The students had a blast: There was perfect attendance by all 12 students for the first five classes and 100% of them reported that they liked learning how to play role-playing games.",
    author: "Glenn Chickering, Middle School Division Head",
    tags: ["educator", "marquee"],
  },
  {
    id: "glenn-passion",
    quote:
      "Zach embraced this daily challenge with a notable respect for what it represents to the future of education; his deep passion for this particular process of learning stands out among his peers.",
    author: "Glenn Chickering, Middle School Division Head",
    tags: ["educator", "hero"],
  },
  {
    id: "glenn-recommend",
    quote:
      "I have worked with Zach closely and appreciate his dedication to integrate academia, Mindfulness, peer-to-peer training and life-skills into role-playing games. We recommend his unique vision, passion and commitment to youth education.",
    author: "Glenn Chickering, Middle School Division Head",
    tags: ["educator", "hero"],
  },
  {
    id: "glenn-green-school",
    quote:
      "Former Green School teacher Zachary Reznichek has been expanding his roleplaying game syllabus. The results were great for the students and as a complement to our holistic curriculum.",
    author: "Glenn Chickering, Middle School Division Head",
    tags: ["educator", "handbook"],
  },
  {
    id: "danny-lifebeat",
    quote:
      "You made it really accessible and it seemed to offer a safe space that appealed to many. Campers were deeply engaged and many were in costume with props — deeply imaginatively stimulated and engaged. Well done for the sessions.",
    author: "Danny Balla, Camp Co-Director LIFEbeat UK",
    tags: ["educator", "marquee"],
  },
  {
    id: "james-kerr-quest",
    quote:
      "Zach's unique approach — and his holistic, humanistic, playful spirit — has been really helpful in helping our son rediscover his inner strength, gain confidence, and begin to once again enjoy playing with others.",
    author: "James Kerr, Coach and Author of Legacy",
    tags: ["parent", "hero", "marquee"],
  },
  {
    id: "matt-leggett-energising",
    quote:
      "Zach's teaching style draws on a deep well of experience and passion for education that is clearly reflected in the way his students engage with the world around them — working alongside Zach is a truly energising experience!",
    author: "Matt Leggett, Wildlife Conservation Society",
    tags: ["educator", "hero", "marquee"],
  },
  {
    id: "matt-leggett-innovation",
    quote:
      "For anyone interested in educational innovation and taking an entirely new look at how kids are inspired to learn, the work of Zachary Reznichek is seriously worth exploring.",
    author: "Matt Leggett",
    tags: ["educator", "hero"],
  },
  {
    id: "roy-leighton",
    quote:
      "If you are interested in the power of gaming as a tool for teaching, learning, collaboration and pupil engagement Zachary Reznichek is the man.",
    author: "Roy Leighton, Undiscovered Country",
    tags: ["educator", "hero", "marquee"],
  },
  {
    id: "chris-colley-ace",
    quote: "Great ACE Conference… great keynote Zachary Reznichek",
    author: "Chris Colley, Pedagogical Consultant in EdTech integration",
    tags: ["educator", "marquee"],
  },
  {
    id: "genevieve-ace",
    quote: "A dynamic ACE Spring Conference! Thank you Zachary Reznichek for an inspiring keynote!",
    author: "Geneviève Ducharme, MEd, Pedagogical Consultant",
    tags: ["educator", "marquee"],
  },
  {
    id: "eduardo-better-world",
    quote:
      "The world needs to change, to be more human, less machine and education is the basis for this. This article from Zachary Reznichek is fantastic and clearly indicates the path we must take to make a better world tomorrow.",
    author: "Eduardo Vancsek Andreoli",
    tags: ["educator", "hero"],
  },
  {
    id: "kevin-jennings-podcast",
    quote:
      "We had a great time speaking with you on the Teacher-Gamer Podcast. It is always fun to nerd-out on RPGs and Game-Based Learning. I look forward to collaborating with you in the future.",
    author: "Dr. Kevin Jennings",
    tags: ["educator", "hero", "marquee"],
  },
  {
    id: "gregorio-hildebrand",
    quote:
      "Zachary Reznichek — amazing educator, blending school, play, makers labs, social emotional skills! all in one twist.",
    author: "Gregorio von Hildebrand",
    tags: ["educator", "marquee"],
  },
  {
    id: "jo-falk-handbook",
    quote:
      "This book is a labour of love and adventure! It is beautifully illustrated and has lots of detailed explanations and insight. As an educator, I see so many possibilities and positive ways role play games and Zach's way of working empowers kids.",
    author: "Jo Falk",
    tags: ["educator", "handbook", "marquee"],
  },
  {
    id: "noan-handbook",
    quote:
      "As a teacher and a gamer this handbook is a pretty amazing tome of knowledge. Zach provides practical advice mixed with storytelling — a new approach to education that flips gamification on its head.",
    author: "Noan Fesnoux",
    tags: ["educator", "handbook", "marquee"],
  },
  {
    id: "angela-colleague",
    quote:
      "Zachary Reznichek is a colleague and friend. I have tried endlessly to absorb it all between bursts of excitement and impatience.",
    author: "Angela L. Fubler, Founder, Chatmore British International School",
    tags: ["educator", "handbook", "hero"],
  },
  {
    id: "podcast-guest",
    quote: "Thanks for coming to talk with Zachary Reznichek. It was such a wonderful conversation.",
    author: "Teacher-Gamer Podcast Guest",
    tags: ["educator", "marquee"],
  },
  {
    id: "belinda-handbook",
    quote:
      "The depth of material, ideas, resources and detail in this book is staggering. I cannot begin to imagine the amount of time that has been dedicated to making such a comprehensive and well laid out guide to RPGs.",
    author: "Belinda Sircombe-Jellett",
    tags: ["educator", "handbook", "marquee"],
  },
  {
    id: "bruno-handbook-dtrpg",
    quote:
      "If you've ever believed RPGs could be more than just a game, this book gives you the map to make that belief real. The Teacher Gamer Handbook isn't a manual to follow — it's an invitation to create, mess up, laugh, and learn alongside your student-players.",
    author: "Bruno Cobbi",
    tags: ["educator", "handbook", "hero"],
  },
  {
    id: "noan-son-growth",
    quote:
      "My son has been playing role play games with Zach over the last few years and has grown as a thinker, strategist and in his creativity through his programme.",
    author: "Noan Fesnoux",
    tags: ["educator", "handbook", "parent"],
  },
];
