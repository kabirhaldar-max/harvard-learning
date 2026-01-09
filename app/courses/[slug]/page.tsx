import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CourseDetailHero } from "@/components/course-detail-hero"
import { CourseAbout } from "@/components/course-about"
import { CoursePricing } from "@/components/course-pricing"
import { CourseReviews } from "@/components/course-reviews"
import { CourseEnrollForm } from "@/components/course-enroll-form"
import { notFound } from "next/navigation"
import type { Metadata } from "next"

const coursesData = {
  "self-confidence-building": {
    title: "Self-Confidence Building Training",
    tagline: "Build unshakable self-esteem and master the art of self-efficacy",
    image: "/confident-person-standing-strong.jpg",
    about: {
      intro:
        "This immersive program empowers participants to unlock their inner confidence and eliminate self-doubt. Through a blend of positive psychology, practical tools, and guided self-reflection, participants will explore how beliefs and self-perceptions shape their actions and achievements.",
      details:
        "The training incorporates real-world case studies, role-playing scenarios, and confidence-boosting exercises to build lasting self-esteem. Participants will also learn proven strategies to silence the inner critic, embrace authenticity, and project confidence in professional and personal interactions. Whether you're preparing for leadership roles, seeking to advance your career, or striving to live boldly, this course will help you cultivate unshakable self-confidence that endures in any situation.",
    },
    highlights: [
      { title: "Overcome Self-Doubt", description: "Learn to silence your inner critic" },
      { title: "Project Confidence", description: "Master verbal & non-verbal communication" },
      { title: "Build Self-Esteem", description: "Develop lasting positive self-perception" },
      { title: "Real-World Practice", description: "Role-playing and practical exercises" },
    ],
    pricing: {
      range: "25,000 to 15,000",
      description: "Tailored solutions starting from ₹25,000 to ₹15,000, designed to fit your goals and budget.",
    },
    duration: "60-90 days",
    level: "Beginner to Advanced",
    reviews: [
      {
        name: "Arjun Nair",
        location: "Kochi, Kerala",
        text: "The training gave me practical tools to build self-belief and handle pressure better. I've started speaking up in meetings and presenting ideas more clearly. The counselor support throughout the course was excellent.",
        rating: 5,
      },
      {
        name: "Priya Sharma",
        location: "Mumbai, Maharashtra",
        text: "This course transformed how I view myself. I used to second-guess every decision, but now I trust my abilities. The exercises were practical and the community support was amazing.",
        rating: 5,
      },
      {
        name: "Rajesh Kumar",
        location: "Bangalore, Karnataka",
        text: "Best investment in myself! The techniques I learned here helped me ace my job interview and now I lead a team of 10. Highly recommend for anyone struggling with confidence.",
        rating: 5,
      },
      {
        name: "Neha Kapoor",
        location: "Delhi, NCR",
        text: "I was skeptical at first, but this course exceeded all expectations. The personalized feedback and supportive environment made all the difference. I'm more assertive and comfortable in my own skin now.",
        rating: 5,
      },
    ],
  },
  "resilience-coach": {
    title: "Resilience Coach Training",
    tagline: "Master the science of bouncing back and help others thrive through adversity",
    image: "/person-overcoming-obstacles.jpg",
    about: {
      intro:
        "Become a certified resilience coach and learn to guide individuals through life's toughest challenges. This comprehensive program combines cutting-edge neuroscience, positive psychology, and proven coaching methodologies to equip you with the tools needed to foster mental toughness and emotional agility.",
      details:
        "You'll explore the neuroscience of stress and recovery, learn evidence-based resilience-building techniques, and develop coaching skills to support clients through setbacks, trauma, and transitions. Through practical exercises, case studies, and supervised coaching practice, you'll gain hands-on experience helping others develop coping strategies, reframe negative thought patterns, and build sustainable resilience. Perfect for coaches, therapists, HR professionals, and anyone passionate about supporting others through challenging times.",
    },
    highlights: [
      { title: "Neuroscience of Resilience", description: "Understand brain patterns & recovery" },
      { title: "Coaching Certification", description: "Professional resilience coach credentials" },
      { title: "Evidence-Based Tools", description: "Proven techniques for mental toughness" },
      { title: "Supervised Practice", description: "Real coaching sessions with feedback" },
    ],
    pricing: {
      range: "15,000 to 10,000",
      description: "Flexible coaching certification from ₹15,000 to ₹10,000, tailored to your experience level.",
    },
    duration: "60-90 days",
    level: "Intermediate",
    reviews: [
      {
        name: "Meera Iyer",
        location: "Chennai, Tamil Nadu",
        text: "This certification changed my coaching practice completely. The neuroscience component gave me credibility, and the practical tools work incredibly well with my clients. Worth every penny!",
        rating: 5,
      },
      {
        name: "Rohan Desai",
        location: "Pune, Maharashtra",
        text: "As an HR professional, this course equipped me to support employees through organizational change. The supervised practice sessions were invaluable. Highly recommend!",
        rating: 5,
      },
      {
        name: "Sanjana Gupta",
        location: "Delhi, NCR",
        text: "The perfect blend of theory and practice. I now have a thriving resilience coaching practice, and my clients see real results. The investment has paid for itself many times over.",
        rating: 5,
      },
      {
        name: "Amit Patel",
        location: "Ahmedabad, Gujarat",
        text: "I was already a life coach, but this added a crucial dimension to my work. The resilience frameworks are brilliant, and the certification boosted my credibility significantly.",
        rating: 5,
      },
    ],
  },
  "motivational-speaker": {
    title: "Motivational Speaker Training",
    tagline: "Master the stage, inspire audiences, and build a profitable speaking career",
    image: "/speaker-on-stage-inspiring-audience.jpg",
    about: {
      intro:
        "Transform your ideas into powerful presentations that move audiences to action. This intensive training program takes you from nervous beginner to confident speaker, teaching you the storytelling, stagecraft, and business skills needed to launch a successful speaking career.",
      details:
        "You'll learn how to craft compelling speeches, develop your unique speaking style, master stage presence and body language, and handle Q&A sessions with confidence. The program includes video analysis of your performances, one-on-one coaching, and opportunities to speak in front of live audiences. We'll also cover the business side: marketing yourself, pricing your talks, booking gigs, and building a sustainable speaking practice. Whether you dream of keynoting conferences, delivering TEDx talks, or becoming a sought-after corporate speaker, this course provides the complete roadmap.",
    },
    highlights: [
      { title: "Speechcraft Mastery", description: "Write compelling, memorable speeches" },
      { title: "Stage Presence", description: "Command any room with confidence" },
      { title: "Live Performance", description: "Practice with real audiences" },
      { title: "Speaker Business", description: "Book gigs & build your brand" },
    ],
    pricing: {
      range: "45,000 to 30,000",
      description: "Professional speaker training from ₹45,000 to ₹30,000, based on your career goals.",
    },
    duration: "60-90 days",
    level: "Advanced",
    reviews: [
      {
        name: "Vikram Malhotra",
        location: "Mumbai, Maharashtra",
        text: "I went from terrified of public speaking to booking my first paid gig within 3 months! The live performance practice was intense but incredibly effective. This course is a game-changer.",
        rating: 5,
      },
      {
        name: "Kavita Reddy",
        location: "Hyderabad, Telangana",
        text: "The business module alone was worth the investment. I now charge ₹50,000 per talk and have a 6-month booking pipeline. Thank you for making my dream career a reality!",
        rating: 5,
      },
      {
        name: "Abhishek Singh",
        location: "Jaipur, Rajasthan",
        text: "As a corporate trainer, this elevated my speaking to the next level. The storytelling techniques and stage presence coaching transformed my presentations. Audiences love my new style!",
        rating: 5,
      },
      {
        name: "Pooja Sharma",
        location: "Bangalore, Karnataka",
        text: "I delivered my first TEDx talk 6 months after completing this course! The video feedback sessions helped me refine every gesture and word. Incredible training program.",
        rating: 5,
      },
    ],
  },
  "body-language-expert": {
    title: "Body Language Expert Training",
    tagline: "Decode non-verbal cues and master the silent language of influence",
    image: "/body-language-communication-gestures.jpg",
    about: {
      intro:
        "Unlock the secrets of non-verbal communication and become an expert in reading and using body language. This advanced program teaches you to decode facial expressions, gestures, posture, and microexpressions with scientific precision, giving you a powerful edge in negotiations, leadership, and interpersonal relationships.",
      details:
        "Drawing from psychology, neuroscience, and law enforcement techniques, you'll learn to identify deception, build instant rapport, project authority, and influence others without saying a word. The training includes extensive video analysis, live practice sessions, and real-world applications across business, security, coaching, and personal contexts. You'll master the FACS (Facial Action Coding System), understand cultural variations in body language, and learn to control your own non-verbal signals for maximum impact. This certification opens doors to consulting, training, and specialized professional services.",
    },
    highlights: [
      { title: "Microexpression Reading", description: "Detect emotions in milliseconds" },
      { title: "Deception Detection", description: "Identify lies & hidden motives" },
      { title: "Influence Techniques", description: "Use body language to persuade" },
      { title: "Professional Certification", description: "Recognized expert credentials" },
    ],
    pricing: {
      range: "75,000 to 50,000",
      description: "Premium expert certification from ₹75,000 to ₹50,000, for serious professionals.",
    },
    duration: "60-90 days",
    level: "Advanced",
    reviews: [
      {
        name: "Rajesh Khanna",
        location: "Mumbai, Maharashtra",
        text: "As a business negotiator, this training has been invaluable. I can read clients' true feelings and adjust my approach in real-time. My closing rate has increased by 40%!",
        rating: 5,
      },
      {
        name: "Anjali Menon",
        location: "Kochi, Kerala",
        text: "The microexpression module blew my mind! I now offer body language consulting to executives and it's become my most profitable service. The certification gives me tremendous credibility.",
        rating: 5,
      },
      {
        name: "Siddharth Rao",
        location: "Bangalore, Karnataka",
        text: "I work in security, and this course has transformed how I assess situations and individuals. The deception detection techniques are remarkably accurate. Best professional investment I've made.",
        rating: 5,
      },
      {
        name: "Nisha Kapoor",
        location: "Delhi, NCR",
        text: "As a therapist, understanding body language has deepened my work with clients. I pick up on emotions they can't verbalize. This training should be mandatory for all helping professionals!",
        rating: 5,
      },
    ],
  },
  "personal-branding": {
    title: "Personal Branding Strategist Training",
    tagline: "Build magnetic personal brands that attract opportunities and influence",
    image: "/personal-brand-professional-image.jpg",
    about: {
      intro:
        "Learn to craft and position personal brands that stand out in today's crowded marketplace. This strategic program teaches you the frameworks, tools, and tactics used by top brand strategists to build authentic, compelling personal brands for clients across industries.",
      details:
        "You'll master brand positioning, storytelling, visual identity, content strategy, and digital presence optimization. Through hands-on projects, you'll learn to conduct brand audits, develop unique value propositions, create brand guidelines, and build strategic roadmaps for personal brand growth. The course covers social media strategy, thought leadership development, reputation management, and monetization pathways. Perfect for marketers, coaches, consultants, and entrepreneurs who want to help others (or themselves) build standout personal brands. You'll leave with a complete toolkit and certification to launch your own branding consultancy.",
    },
    highlights: [
      { title: "Brand Positioning", description: "Craft unique value propositions" },
      { title: "Visual Identity", description: "Design cohesive brand aesthetics" },
      { title: "Content Strategy", description: "Build thought leadership platforms" },
      { title: "Monetization Plans", description: "Turn brands into revenue streams" },
    ],
    pricing: {
      range: "65,000 to 40,000",
      description: "Strategic branding training from ₹65,000 to ₹40,000, customized for your business goals.",
    },
    duration: "60-90 days",
    level: "Intermediate to Advanced",
    reviews: [
      {
        name: "Priya Mehta",
        location: "Mumbai, Maharashtra",
        text: "I launched my branding consultancy right after this course and landed 3 clients in the first month! The frameworks are brilliant and clients love the structured approach. ROI was immediate!",
        rating: 5,
      },
      {
        name: "Arjun Desai",
        location: "Pune, Maharashtra",
        text: "As a marketing professional, this added a lucrative service to my offerings. The personal branding module gave me tools that agencies charge lakhs for. Absolutely worth the investment!",
        rating: 5,
      },
      {
        name: "Sneha Krishnan",
        location: "Bangalore, Karnataka",
        text: "I used these techniques on my own brand first—grew my LinkedIn from 500 to 15,000 followers in 4 months! Now I'm helping executives do the same. This course is pure gold.",
        rating: 5,
      },
      {
        name: "Rahul Sharma",
        location: "Delhi, NCR",
        text: "The monetization strategies alone paid for the course. I now charge ₹1 lakh+ for brand positioning projects. The certification and frameworks give me immense confidence with clients.",
        rating: 5,
      },
    ],
  },
  "mindset-mastery": {
    title: "Mindset Mastery Training",
    tagline: "Rewire your thinking patterns and unlock your full potential",
    image: "/mindset-growth-mental-strength.jpg",
    about: {
      intro:
        "Transform your relationship with success, failure, and growth through proven mindset principles. This transformative program combines neuroscience, cognitive behavioral techniques, and growth mindset frameworks to help you break through mental barriers and achieve what once seemed impossible.",
      details:
        "You'll learn to identify and reframe limiting beliefs, develop a growth-oriented mindset, build mental resilience, and cultivate habits that support long-term success. The training includes practical exercises for overcoming imposter syndrome, managing perfectionism, developing self-compassion, and maintaining motivation through challenges. Drawing from the work of Carol Dweck, Martin Seligman, and modern neuroscience, this course provides a complete system for mental transformation. Whether you're stuck in your career, struggling with self-doubt, or ready to level up in every area of life, this program gives you the tools to make it happen.",
    },
    highlights: [
      { title: "Limit Breaking", description: "Identify & overcome mental barriers" },
      { title: "Growth Frameworks", description: "Adopt a winning mindset" },
      { title: "Resilience Building", description: "Bounce back from any setback" },
      { title: "Habit Architecture", description: "Design success-supporting routines" },
    ],
    pricing: {
      range: "20,000 to 12,000",
      description: "Transformative mindset training from ₹20,000 to ₹12,000, tailored to your journey.",
    },
    duration: "60-90 days",
    level: "Beginner to Intermediate",
    reviews: [
      {
        name: "Neha Agarwal",
        location: "Jaipur, Rajasthan",
        text: "This course literally changed my life. I went from chronic self-doubt to launching my dream business in 6 months. The limit-breaking exercises were incredibly powerful!",
        rating: 5,
      },
      {
        name: "Karan Singh",
        location: "Chandigarh, Punjab",
        text: "I've read all the mindset books, but this course made it practical and actionable. The daily exercises created real shifts in how I think and approach challenges. Game-changer!",
        rating: 5,
      },
      {
        name: "Divya Reddy",
        location: "Hyderabad, Telangana",
        text: "Struggled with imposter syndrome for years. This training gave me tools that actually work! I now lead with confidence and my career has skyrocketed. Thank you!",
        rating: 5,
      },
      {
        name: "Amit Kumar",
        location: "Lucknow, Uttar Pradesh",
        text: "The neuroscience component made everything click for me. Understanding how my brain works helped me take control of my thoughts. Best investment in personal development I've made!",
        rating: 5,
      },
    ],
  },
  "relationship-coaching": {
    title: "Relationship Coaching Training",
    tagline: "Guide couples and individuals to build fulfilling, lasting connections",
    image: "/couple-relationship-counseling.jpg",
    about: {
      intro:
        "Become a certified relationship coach and help others create the loving, healthy partnerships they deserve. This comprehensive program teaches proven frameworks, communication tools, and coaching methodologies drawn from attachment theory, the Gottman Method, and emotionally focused therapy.",
      details:
        "You'll learn to guide clients through relationship challenges, improve communication patterns, heal from past wounds, navigate conflicts constructively, and build deeper intimacy. The training covers dating coaching, premarital preparation, marriage enhancement, and breakup recovery. Through supervised practice sessions, case studies, and role-playing, you'll develop the skills to facilitate breakthroughs in your clients' relationships. Whether you want to add relationship coaching to your practice, help friends and family, or build a full-time coaching business, this certification provides the complete toolkit and credentials you need.",
    },
    highlights: [
      { title: "Proven Frameworks", description: "Gottman Method & attachment theory" },
      { title: "Communication Tools", description: "Facilitate breakthrough conversations" },
      { title: "Conflict Resolution", description: "Turn fights into connection" },
      { title: "Coaching Certification", description: "Professional credentials & practice" },
    ],
    pricing: {
      range: "15,000 to 10,000",
      description: "Relationship coaching certification from ₹15,000 to ₹10,000, flexible for your path.",
    },
    duration: "60-90 days",
    level: "Intermediate",
    reviews: [
      {
        name: "Meera Nair",
        location: "Kochi, Kerala",
        text: "I now run a thriving relationship coaching practice helping 20+ couples monthly. The Gottman techniques work like magic! This course gave me both skills and confidence.",
        rating: 5,
      },
      {
        name: "Rohan Joshi",
        location: "Mumbai, Maharashtra",
        text: "As a therapist, this added crucial relationship-focused tools to my practice. The supervised practice sessions were invaluable. My couples work has become my most rewarding service!",
        rating: 5,
      },
      {
        name: "Anjali Sharma",
        location: "Delhi, NCR",
        text: "Started as a life coach, added relationship coaching after this course—it's now 60% of my income! The frameworks are practical and clients see results quickly. Highly recommend!",
        rating: 5,
      },
      {
        name: "Vikram Reddy",
        location: "Bangalore, Karnataka",
        text: "The course first helped me transform my own marriage, then I became certified to help others. Nothing feels better than helping couples rediscover their love. Incredible training!",
        rating: 5,
      },
    ],
  },
  "decision-making": {
    title: "Decision Making Mastery Training",
    tagline: "Master the art and science of making high-stakes decisions with confidence",
    image: "/decision-making-strategy-planning.jpg",
    about: {
      intro:
        "Learn to make better decisions faster by mastering frameworks used by top executives, strategists, and thought leaders. This intensive program combines cognitive psychology, behavioral economics, and strategic thinking to help you navigate complexity and uncertainty with clarity.",
      details:
        "You'll explore decision-making biases, learn to assess risk intelligently, use mental models for complex problems, and develop intuition through structured practice. The training covers individual and group decision-making, crisis decisions, strategic planning, and long-term thinking. Through case studies from business, military, and political contexts, you'll analyze high-stakes decisions and learn what separates great decision-makers from average ones. You'll leave with a personal decision-making system, mental model library, and the confidence to make tough calls when it matters most. Perfect for leaders, entrepreneurs, investors, and anyone facing consequential choices.",
    },
    highlights: [
      { title: "Mental Models", description: "Use proven thinking frameworks" },
      { title: "Bias Recognition", description: "Spot and overcome decision traps" },
      { title: "Risk Assessment", description: "Calculate & manage uncertainty" },
      { title: "Strategic Thinking", description: "Plan for long-term success" },
    ],
    pricing: {
      range: "25,000 to 15,000",
      description: "Strategic decision training from ₹25,000 to ₹15,000, optimized for your leadership level.",
    },
    duration: "60-90 days",
    level: "Intermediate",
    reviews: [
      {
        name: "Rahul Saxena",
        location: "Gurgaon, Haryana",
        text: "As a startup founder, this course has saved me from countless bad decisions. The mental models alone are worth 10x the investment. My board noticed the improvement immediately!",
        rating: 5,
      },
      {
        name: "Priya Deshmukh",
        location: "Pune, Maharashtra",
        text: "The bias recognition module was eye-opening! I now catch myself before making emotional decisions. My career trajectory changed when my decision-making improved. Priceless training!",
        rating: 5,
      },
      {
        name: "Sanjay Iyer",
        location: "Chennai, Tamil Nadu",
        text: "I lead a 100-person team and make million-dollar decisions regularly. This course gave me frameworks that brought clarity to chaos. My confidence under pressure has skyrocketed!",
        rating: 5,
      },
      {
        name: "Kavita Malhotra",
        location: "Mumbai, Maharashtra",
        text: "The strategic thinking component transformed how I approach business planning. I now see 5 moves ahead like a chess master. This is essential training for any leader!",
        rating: 5,
      },
    ],
  },
  "adaptive-leadership": {
    title: "Adaptive Leadership Excellence",
    tagline: "Master the art of leading through change with resilience and strategic vision",
    image: "/leader-guiding-team-forward.jpg",
    about: {
      intro:
        "In an era of constant disruption, adaptive leadership is no longer optional—it's essential. This advanced program equips leaders with the frameworks, mindsets, and skills needed to navigate complexity, inspire teams through uncertainty, and drive organizational transformation.",
      details:
        "Drawing from Harvard Business School's Adaptive Leadership model and contemporary case studies, this course explores how to diagnose challenges, mobilize stakeholders, and orchestrate change in dynamic environments. You'll learn to balance the technical and adaptive aspects of leadership, develop emotional intelligence, and build resilient teams that thrive under pressure. Through interactive simulations, peer coaching, and personalized feedback, you'll hone your ability to lead with confidence in the face of ambiguity. Ideal for senior managers, executives, and emerging leaders preparing for complex leadership roles.",
    },
    highlights: [
      { title: "Navigate Complexity", description: "Lead confidently through uncertainty" },
      { title: "Emotional Intelligence", description: "Develop advanced EQ skills" },
      { title: "Team Resilience", description: "Build teams that thrive under pressure" },
      { title: "Strategic Vision", description: "Drive organizational transformation" },
    ],
    pricing: {
      range: "20,000 to 12,000",
      description: "Premium leadership training from ₹20,000 to ₹12,000, tailored to your career trajectory.",
    },
    duration: "60-90 days",
    level: "Intermediate to Advanced",
    reviews: [
      {
        name: "Vikram Singh",
        location: "Delhi, NCR",
        text: "This course fundamentally changed how I approach leadership challenges. The adaptive framework gave me tools to navigate our company's restructuring with confidence. My team felt supported throughout the transition.",
        rating: 5,
      },
      {
        name: "Anjali Desai",
        location: "Pune, Maharashtra",
        text: "The best leadership training I've attended. It's not about rigid formulas but developing the capacity to respond to whatever comes your way. The peer learning component was invaluable.",
        rating: 5,
      },
      {
        name: "Sanjay Malhotra",
        location: "Mumbai, Maharashtra",
        text: "Harvard's adaptive leadership framework is brilliant, and this course brings it to life. I've successfully led 3 major change initiatives since completing the program. Highly recommended for senior leaders.",
        rating: 5,
      },
      {
        name: "Divya Krishnan",
        location: "Chennai, Tamil Nadu",
        text: "As a newly promoted VP, this course came at the perfect time. The emotional intelligence modules and stakeholder management strategies have been game-changing for me.",
        rating: 5,
      },
    ],
  },
  "ai-productivity-powerup": {
    title: "AI Productivity Power-Up",
    tagline: "Supercharge your workflow with cutting-edge AI tools and automation",
    image: "/artificial-intelligence-productivity-technology.jpg",
    about: {
      intro:
        "Transform how you work by harnessing the full power of AI. This comprehensive course teaches you to integrate advanced AI tools into every aspect of your workflow, dramatically increasing your output while reducing time and effort.",
      details:
        "You'll master ChatGPT, Claude, Midjourney, Notion AI, and dozens of specialized AI tools for content creation, data analysis, project management, design, coding, and more. Learn to build custom AI workflows, automate repetitive tasks, and leverage AI for strategic decision-making. The program includes hands-on projects where you'll apply AI to real business challenges, from marketing campaigns to product development. You'll also explore emerging AI technologies and learn to stay ahead of the curve as new tools emerge. Whether you're an entrepreneur, professional, or team leader, this course will multiply your productivity and give you an unfair competitive advantage.",
    },
    highlights: [
      { title: "Master AI Tools", description: "ChatGPT, Claude, Midjourney & more" },
      { title: "Workflow Automation", description: "Build custom AI-powered systems" },
      { title: "Strategic Applications", description: "Use AI for high-level decisions" },
      { title: "Hands-On Projects", description: "Real business AI implementations" },
    ],
    pricing: {
      range: "60,000 to 40,000",
      description: "Premium AI training from ₹60,000 to ₹40,000, for serious productivity gains.",
    },
    duration: "60-90 days",
    level: "Beginner to Advanced",
    reviews: [
      {
        name: "Arjun Kapoor",
        location: "Bangalore, Karnataka",
        text: "This course is a cheat code for productivity! I now do in 2 hours what used to take me 2 days. My boss thinks I hired a team. The AI automation workflows are mind-blowing!",
        rating: 5,
      },
      {
        name: "Sneha Reddy",
        location: "Hyderabad, Telangana",
        text: "I'm a solopreneur and this course essentially gave me a full team. I use AI for content, design, research, and customer service. Revenue is up 300% with the same hours worked!",
        rating: 5,
      },
      {
        name: "Rohan Mehta",
        location: "Mumbai, Maharashtra",
        text: "As a marketing director, this transformed our entire department's output. We produce 10x more content at higher quality. The ROI on this course was immediate and massive!",
        rating: 5,
      },
      {
        name: "Priya Singh",
        location: "Delhi, NCR",
        text: "I was intimidated by AI before this course. Now I'm the AI expert at my company! The hands-on approach made everything click. This is the most valuable skill I've learned in years.",
        rating: 5,
      },
    ],
  },
  "everyday-ai-toolkit": {
    title: "The Everyday AI Toolkit",
    tagline: "Practical AI applications for everyday tasks and workflows",
    image: "/ai-tools-everyday-applications.jpg",
    about: {
      intro:
        "Demystify AI and learn to use it in your daily life—no technical background required. This beginner-friendly course introduces practical AI tools that anyone can use to save time, make better decisions, and enhance their personal and professional lives.",
      details:
        "You'll learn to use AI for writing emails, creating presentations, organizing information, managing schedules, researching topics, generating ideas, and solving everyday problems. The course focuses on accessible, free or affordable AI tools with simple interfaces. Through guided tutorials and practice exercises, you'll gain confidence using AI assistants, discover lesser-known AI gems, and learn to craft effective prompts that get you the results you need. Perfect for professionals, students, parents, and anyone curious about AI but unsure where to start. By the end, you'll have a personal AI toolkit that makes your life easier every single day.",
    },
    highlights: [
      { title: "Beginner-Friendly", description: "No technical knowledge needed" },
      { title: "Practical Tools", description: "Free & affordable AI applications" },
      { title: "Daily Applications", description: "AI for common tasks & problems" },
      { title: "Prompt Mastery", description: "Get better results from AI tools" },
    ],
    pricing: {
      range: "45,000 to 30,000",
      description: "Accessible AI training from ₹45,000 to ₹30,000, perfect for beginners.",
    },
    duration: "60-90 days",
    level: "Beginner",
    reviews: [
      {
        name: "Meera Gupta",
        location: "Jaipur, Rajasthan",
        text: "I'm not tech-savvy at all, but this course made AI feel approachable and fun! I now use AI daily for work emails, trip planning, and even recipe ideas. It's like having a personal assistant!",
        rating: 5,
      },
      {
        name: "Rajesh Sharma",
        location: "Lucknow, Uttar Pradesh",
        text: "Perfect introduction to AI! The practical focus meant I could apply what I learned immediately. I've saved hours every week on administrative tasks. Highly recommend for non-techies!",
        rating: 5,
      },
      {
        name: "Kavita Nair",
        location: "Kochi, Kerala",
        text: "As a teacher, this course opened my eyes to how AI can enhance education. I now create better lesson plans, presentations, and student materials in fraction of the time. Thank you!",
        rating: 5,
      },
      {
        name: "Amit Desai",
        location: "Pune, Maharashtra",
        text: "I was skeptical about AI, but this course won me over. The tools are genuinely useful and the instructor made everything clear. My teenage kids are impressed that I'm now the 'AI parent'!",
        rating: 5,
      },
    ],
  },
  "confidence-charisma": {
    title: "Confidence and Charisma Training",
    tagline: "Develop magnetic presence and commanding confidence in any setting",
    image: "/charismatic-person-confident-presence.jpg",
    about: {
      intro:
        "Master the art of personal magnetism and learn to captivate any room you enter. This transformative program combines confidence-building with charisma development, teaching you to project authentic presence, connect deeply with others, and leave lasting positive impressions.",
      details:
        "You'll learn the psychology of charisma, develop powerful body language, master storytelling and conversation skills, and build genuine self-confidence from the inside out. Through video analysis, role-playing, and real-world practice, you'll refine your personal style and learn to adapt your presence for different contexts—from networking events to boardrooms to social gatherings. The training covers overcoming social anxiety, developing gravitas, building instant rapport, and creating memorable interactions. Drawing from research on charismatic leaders and entertainers, you'll discover that charisma isn't innate—it's a learnable skill. Perfect for entrepreneurs, executives, sales professionals, and anyone who wants to enhance their social and professional influence.",
    },
    highlights: [
      { title: "Magnetic Presence", description: "Command attention authentically" },
      { title: "Social Intelligence", description: "Read & connect with anyone" },
      { title: "Storytelling Power", description: "Captivate with your words" },
      { title: "Authentic Confidence", description: "Build unshakable self-belief" },
    ],
    pricing: {
      range: "62,500 to 40,000",
      description: "Premium presence training from ₹62,500 to ₹40,000, for serious transformation.",
    },
    duration: "60-90 days",
    level: "Intermediate to Advanced",
    reviews: [
      {
        name: "Vikram Patel",
        location: "Mumbai, Maharashtra",
        text: "I went from wallflower to the person people seek out at events. The confidence techniques worked fast, but the charisma training created lasting change. My career and social life are transformed!",
        rating: 5,
      },
      {
        name: "Ananya Krishnan",
        location: "Bangalore, Karnataka",
        text: "As a female executive, this course helped me command respect in male-dominated spaces. I now walk into boardrooms with gravitas and people listen. The ROI on this training is infinite!",
        rating: 5,
      },
      {
        name: "Rohan Malhotra",
        location: "Delhi, NCR",
        text: "The storytelling module alone changed my sales career—I'm closing deals 50% faster! The entire course is brilliantly designed. I feel like a different person—confident, magnetic, authentic.",
        rating: 5,
      },
      {
        name: "Priya Iyer",
        location: "Chennai, Tamil Nadu",
        text: "This course gave me permission to be my authentic self while amplifying my natural strengths. The video analysis was uncomfortable but transformative. People now describe me as 'captivating'!",
        rating: 5,
      },
    ],
  },
  "confidence-personal-growth": {
    title: "Self-Confidence Building Training",
    tagline: "Build unshakable self-esteem and master the art of self-efficacy",
    image: "/confident-person-standing-strong.jpg",
    about: {
      intro:
        "This immersive program empowers participants to unlock their inner confidence and eliminate self-doubt. Through a blend of positive psychology, practical tools, and guided self-reflection, participants will explore how beliefs and self-perceptions shape their actions and achievements.",
      details:
        "The training incorporates real-world case studies, role-playing scenarios, and confidence-boosting exercises to build lasting self-esteem. Participants will also learn proven strategies to silence the inner critic, embrace authenticity, and project confidence in professional and personal interactions. Whether you're preparing for leadership roles, seeking to advance your career, or striving to live boldly, this course will help you cultivate unshakable self-confidence that endures in any situation.",
    },
    highlights: [
      { title: "Overcome Self-Doubt", description: "Learn to silence your inner critic" },
      { title: "Project Confidence", description: "Master verbal & non-verbal communication" },
      { title: "Build Self-Esteem", description: "Develop lasting positive self-perception" },
      { title: "Real-World Practice", description: "Role-playing and practical exercises" },
    ],
    pricing: {
      range: "25,000 to 15,000",
      description: "Tailored solutions starting from ₹25,000 to ₹15,000, designed to fit your goals and budget.",
    },
    duration: "6 weeks",
    level: "All Levels",
    reviews: [
      {
        name: "Arjun Nair",
        location: "Kochi, Kerala",
        text: "The training gave me practical tools to build self-belief and handle pressure better. I've started speaking up in meetings and presenting ideas more clearly. The counselor support throughout the course was excellent.",
        rating: 5,
      },
      {
        name: "Priya Sharma",
        location: "Mumbai, Maharashtra",
        text: "This course transformed how I view myself. I used to second-guess every decision, but now I trust my abilities. The exercises were practical and the community support was amazing.",
        rating: 5,
      },
      {
        name: "Rajesh Kumar",
        location: "Bangalore, Karnataka",
        text: "Best investment in myself! The techniques I learned here helped me ace my job interview and now I lead a team of 10. Highly recommend for anyone struggling with confidence.",
        rating: 5,
      },
      {
        name: "Neha Kapoor",
        location: "Delhi, NCR",
        text: "I was skeptical at first, but this course exceeded all expectations. The personalized feedback and supportive environment made all the difference. I'm more assertive and comfortable in my own skin now.",
        rating: 5,
      },
    ],
  },
  "ai-productivity-mastery": {
    title: "AI Productivity Mastery",
    tagline: "Harness AI tools to automate workflows and boost your productivity exponentially",
    image: "/artificial-intelligence-productivity-technology.jpg",
    about: {
      intro:
        "In today's fast-paced digital world, AI has become an essential tool for professionals looking to stay ahead. This comprehensive course teaches you how to leverage cutting-edge AI technologies to streamline your workflow, automate repetitive tasks, and unlock new levels of productivity.",
      details:
        "You'll explore practical applications of AI tools across various domains including content creation, data analysis, project management, and communication. Learn to integrate ChatGPT, Midjourney, Notion AI, and other powerful platforms into your daily routine. Through hands-on projects and real-world scenarios, you'll discover how to delegate mundane tasks to AI, freeing up your time for strategic thinking and creative work. Perfect for professionals, entrepreneurs, and anyone looking to work smarter, not harder.",
    },
    highlights: [
      { title: "AI Tools Mastery", description: "ChatGPT, Midjourney, Notion AI & more" },
      { title: "Workflow Automation", description: "Automate repetitive daily tasks" },
      { title: "Content Creation", description: "Generate high-quality content faster" },
      { title: "Data Analysis", description: "Leverage AI for insights & decisions" },
    ],
    pricing: {
      range: "20,000 to 12,000",
      description: "Flexible pricing from ₹20,000 to ₹12,000, customized based on your learning objectives.",
    },
    duration: "4 weeks",
    level: "Beginner",
    reviews: [
      {
        name: "Rahul Mehta",
        location: "Bangalore, Karnataka",
        text: "As a startup founder, this course was a game-changer. I've automated 60% of my routine tasks and can now focus on strategy and growth. The AI tools covered are incredibly practical.",
        rating: 5,
      },
      {
        name: "Sneha Patel",
        location: "Ahmedabad, Gujarat",
        text: "I was skeptical about AI at first, but this course made it accessible and fun. Now I use AI daily for content creation, research, and planning. My productivity has tripled!",
        rating: 5,
      },
      {
        name: "Amit Deshmukh",
        location: "Pune, Maharashtra",
        text: "The hands-on approach was perfect. Within 2 weeks, I had automated my email management, content scheduling, and report generation. Worth every rupee!",
        rating: 5,
      },
      {
        name: "Kavya Reddy",
        location: "Hyderabad, Telangana",
        text: "As a marketing professional, this course opened my eyes to what's possible with AI. I now create campaigns in half the time with better results. Absolutely transformative!",
        rating: 5,
      },
    ],
  },
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const course = coursesData[params.slug as keyof typeof coursesData]

  if (!course) {
    return {
      title: "Course Not Found",
    }
  }

  return {
    title: `${course.title} - Harvard Learning`,
    description: course.tagline,
  }
}

export default function CoursePage({ params }: { params: { slug: string } }) {
  const course = coursesData[params.slug as keyof typeof coursesData]

  if (!course) {
    notFound()
  }

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <CourseDetailHero title={course.title} tagline={course.tagline} image={course.image} />
        <CourseAbout intro={course.about.intro} details={course.about.details} highlights={course.highlights} />
        <CoursePricing pricing={course.pricing} duration={course.duration} level={course.level} />
        <CourseReviews reviews={course.reviews} />
        <CourseEnrollForm courseTitle={course.title} />
      </main>
      <Footer />
    </div>
  )
}

export function generateStaticParams() {
  return [
    { slug: "self-confidence-building" },
    { slug: "resilience-coach" },
    { slug: "motivational-speaker" },
    { slug: "body-language-expert" },
    { slug: "personal-branding" },
    { slug: "mindset-mastery" },
    { slug: "relationship-coaching" },
    { slug: "decision-making" },
    { slug: "adaptive-leadership" },
    { slug: "ai-productivity-powerup" },
    { slug: "everyday-ai-toolkit" },
    { slug: "confidence-charisma" },
    // Legacy slugs for backward compatibility
    { slug: "confidence-personal-growth" },
    { slug: "ai-productivity-mastery" },
  ]
}
