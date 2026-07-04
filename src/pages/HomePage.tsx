import ContactCta from '@/components/sections/contact/ContactCta';
import FaqTwoColumn from '@/components/sections/faq/FaqTwoColumn';
import FeaturesBorderGlow from '@/components/sections/features/FeaturesBorderGlow';
import FeaturesRevealCardsBento from '@/components/sections/features/FeaturesRevealCardsBento';
import HeroBillboardBrand from '@/components/sections/hero/HeroBillboardBrand';
import MetricsSimpleCards from '@/components/sections/metrics/MetricsSimpleCards';
import TeamOverlayCards from '@/components/sections/team/TeamOverlayCards';
import TestimonialColumnMarqueeCards from '@/components/sections/testimonial/TestimonialColumnMarqueeCards';
import { Code, Layout, Target } from "lucide-react";
import SectionErrorBoundary from "@/components/ui/SectionErrorBoundary";

export default function HomePage() {
  return (
    <>
  <div id="hero" data-section="hero">
    <SectionErrorBoundary name="hero">
          <HeroBillboardBrand
      brand="VisionWeb"
      description="Your Vision, Built Digital. VisionWeb transforms ambitious ideas into high-performing websites. We combine strategic design with conversion-focused development to drive real business results."
      primaryButton={{
        text: "Start Your Project",
        href: "#contact",
      }}
      secondaryButton={{
        text: "View Case Studies",
        href: "#showcase",
      }}
      imageSrc="http://img.b2bpic.net/free-photo/group-graphic-designers-working-together_1170-1094.jpg"
      textAnimation="fade-blur"
    />
    </SectionErrorBoundary>
  </div>

  <div id="services" data-section="services">
    <SectionErrorBoundary name="services">
          <FeaturesBorderGlow
      tag="Our Expertise"
      title="Comprehensive Digital Solutions"
      description="We blend creativity with technical excellence to build powerful web solutions that accelerate growth."
      features={[
        {
          icon: Layout,
          title: "Web Design",
          description: "Crafting intuitive and aesthetically pleasing digital experiences that resonate with your target users.",
        },
        {
          icon: Code,
          title: "Web Development",
          description: "High-performance code built for scalability, security, and exceptional user experience on every device.",
        },
        {
          icon: Target,
          title: "Digital Strategy",
          description: "Data-backed planning to ensure your website directly contributes to business objectives and ROI.",
        },
      ]}
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>

  <div id="showcase" data-section="showcase">
    <SectionErrorBoundary name="showcase">
          <FeaturesRevealCardsBento
      tag="Portfolio"
      title="Projects That Drive Results"
      description="Explore how we've helped SMBs scale through design-led innovation."
      items={[
        {
          title: "Tech Platform Redesign",
          description: "Increased lead generation by 45%.",
          href: "#contact",
          imageSrc: "http://img.b2bpic.net/free-photo/still-life-graphic-design-office_23-2151345406.jpg",
        },
        {
          title: "E-commerce Optimization",
          description: "Reduced bounce rates by 30%.",
          href: "#contact",
          imageSrc: "http://img.b2bpic.net/free-photo/programming-background-collage_23-2149901779.jpg",
        },
        {
          title: "Global SaaS Dashboard",
          description: "Streamlined user workflows significantly.",
          href: "#contact",
          imageSrc: "http://img.b2bpic.net/free-photo/global-business-strategy-planning-icon-concept_53876-120444.jpg",
        },
        {
          title: "Brand Identity Refresh",
          description: "Modernizing a legacy company brand.",
          href: "#contact",
          imageSrc: "http://img.b2bpic.net/free-vector/20-digital-marketing-solid-glyph-icon-presentation-vector-icons-illustration_1142-17871.jpg",
        },
        {
          title: "Interactive Content Hub",
          description: "Driving audience engagement.",
          href: "#contact",
          imageSrc: "http://img.b2bpic.net/free-photo/modern-smartphone-with-blank-screen-studio_187299-46431.jpg",
        },
        {
          title: "B2B Lead Portal",
          description: "Optimized lead capture funnels.",
          href: "#contact",
          imageSrc: "http://img.b2bpic.net/free-photo/support-consulting-help-graphic-icon-word_53876-124360.jpg",
        },
        {
          title: "Custom App Interface",
          description: "Intuitive mobile application design.",
          href: "#contact",
          imageSrc: "http://img.b2bpic.net/free-photo/globe-internet-icon-line-connection-circuit-board_1379-893.jpg",
        },
      ]}
      textAnimation="fade-blur"
    />
    </SectionErrorBoundary>
  </div>

  <div id="metrics" data-section="metrics">
    <SectionErrorBoundary name="metrics">
          <MetricsSimpleCards
      tag="Performance"
      title="Impact by the Numbers"
      description="Our work is measured by the tangible improvements in business performance."
      metrics={[
        {
          value: "100+",
          description: "Successful projects launched",
        },
        {
          value: "200%",
          description: "Average conversion lift",
        },
        {
          value: "45%",
          description: "Reduced customer acquisition costs",
        },
        {
          value: "95%",
          description: "Client retention rate",
        },
      ]}
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>

  <div id="team" data-section="team">
    <SectionErrorBoundary name="team">
          <TeamOverlayCards
      tag="The Visionaries"
      title="Meet the Team Behind Your Results"
      description="We are a tight-knit team of strategists, designers, and developers dedicated to your success."
      members={[
        {
          name: "Sarah Miller",
          role: "Creative Director",
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-handsome-bearded-man-with-ear-bandage-art-studio_23-2149705903.jpg",
        },
        {
          name: "David Chen",
          role: "Lead Developer",
          imageSrc: "http://img.b2bpic.net/free-photo/businesswoman-planning-financial-investment-report_482257-77714.jpg",
        },
        {
          name: "Emily Rodriguez",
          role: "Strategy Lead",
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-confident-business-woman-with-executive-job-working-with-management-marketing-statistics-computer-office-worker-analyzing-research-charts-data-reports_482257-41126.jpg",
        },
      ]}
      textAnimation="fade-blur"
    />
    </SectionErrorBoundary>
  </div>

  <div id="testimonials" data-section="testimonials">
    <SectionErrorBoundary name="testimonials">
          <TestimonialColumnMarqueeCards
      tag="Social Proof"
      title="Trusted by Growing Businesses"
      description="Hear what our clients have to say about the impact VisionWeb has made on their organizations."
      testimonials={[
        {
          name: "Alex Rivers",
          role: "CEO, Rivers Tech",
          quote: "VisionWeb transformed our digital presence. We saw immediate ROI after the redesign.",
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-smiley-business-woman_23-2148603029.jpg",
        },
        {
          name: "Maria Garcia",
          role: "Marketing VP, Sol Solutions",
          quote: "Their strategic approach is unique. They don't just build websites; they build businesses.",
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-competitive-employee_1098-2870.jpg",
        },
        {
          name: "John Doe",
          role: "Founder, CloudPeak",
          quote: "The development team is top-tier. Extremely professional and communicative throughout the process.",
          imageSrc: "http://img.b2bpic.net/free-photo/successful-business-people-with-announcement_53876-15202.jpg",
        },
        {
          name: "Sarah L.",
          role: "CMO, GrowthSpurt",
          quote: "VisionWeb is our long-term partner for everything digital.",
          imageSrc: "http://img.b2bpic.net/free-photo/lady-grey-suit-smiling-camera-background-stylish-cafe-with-lights_291650-637.jpg",
        },
        {
          name: "Tom Baker",
          role: "Founder, FinTech Dynamics",
          quote: "The conversion results exceeded our expectations by far.",
          imageSrc: "http://img.b2bpic.net/free-photo/positive-hipster-entrepreneur-it-expert-software-developer_74855-3635.jpg",
        },
      ]}
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>

  <div id="faq" data-section="faq">
    <SectionErrorBoundary name="faq">
          <FaqTwoColumn
      tag="FAQ"
      title="Frequently Asked Questions"
      description="Answers to the common questions our clients ask during the onboarding process."
      items={[
        {
          question: "What is your typical project timeline?",
          answer: "Typical projects range from 8 to 12 weeks depending on scope and complexity.",
        },
        {
          question: "Do you offer ongoing support?",
          answer: "Yes, we provide flexible monthly maintenance and growth partnerships.",
        },
        {
          question: "How do you handle pricing?",
          answer: "We provide transparent, fixed-price proposals based on scope and deliverables.",
        },
        {
          question: "What industries do you serve?",
          answer: "We focus on technology, professional services, and high-growth retail brands.",
        },
      ]}
      textAnimation="fade-blur"
    />
    </SectionErrorBoundary>
  </div>

  <div id="contact" data-section="contact">
    <SectionErrorBoundary name="contact">
          <ContactCta
      tag="Get Started"
      text="Ready to build your digital future? Let's discuss your next project."
      primaryButton={{
        text: "Book a Consultation",
        href: "#contact",
      }}
      secondaryButton={{
        text: "Email Us",
        href: "mailto:hello@visionweb.agency",
      }}
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>
    </>
  );
}
