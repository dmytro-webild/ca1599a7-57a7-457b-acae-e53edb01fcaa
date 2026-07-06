import { routes } from "@/routes";
import NavbarCentered from "@/components/ui/NavbarCentered";
import HeroBillboard from "@/components/sections/hero/HeroBillboard";
import AboutTextSplit from "@/components/sections/about/AboutTextSplit";
import FeaturesIconCards from "@/components/sections/features/FeaturesIconCards";
import ContactCta from "@/components/sections/contact/ContactCta";
import FooterMinimal from "@/components/sections/footer/FooterMinimal";

export default function AboutVisionWebPage() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <NavbarCentered
        logo="VisionWeb"
        navItems={routes.map((r) => ({ name: r.label, href: r.path }))}
        ctaButton={{ text: "Get Started", href: "/contact" }}
      />
      
      <main className="flex-grow">
        <HeroBillboard
          tag="About Us"
          title="We Build Websites That Move as Fast as Your Business."
          description="At VisionWeb, we believe a great website shouldn't take weeks to launch. We combine modern design with a streamlined development process to deliver professional, high-converting websites in as little as 24 hours — without cutting corners on quality."
          primaryButton={{ text: "Book Consultation", href: "/contact" }}
          secondaryButton={{ text: "View Portfolio", href: "/portfolio" }}
          textAnimation="fade-blur"
        />

        <AboutTextSplit
          title="Our Story & Mission"
          descriptions={[
            "VisionWeb was founded with one simple idea: businesses shouldn't have to wait a month (or pay a fortune) to get online. Traditional web design is slow, expensive, and often overcomplicated.",
            "We set out to change that with an efficient process built on real design expertise, so our clients get fast, affordable, and beautiful websites that actually perform.",
            "Our Mission: To help local businesses and entrepreneurs establish a powerful online presence — quickly, affordably, and without the usual headaches of web design."
          ]}
          textAnimation="slide-up"
        />

        <FeaturesIconCards
          tag="Why VisionWeb"
          title="What Makes Us Different"
          description="We do things differently to ensure you get the best results in record time."
          features={[
            { icon: "⚡", title: "24-Hour Delivery", description: "Most agencies take weeks. We take a day. Our streamlined process means you can go from idea to live website faster than ever." },
            { icon: "📈", title: "Built to Convert", description: "We don't just make websites look good — we design them to generate leads, bookings, and sales for your business." },
            { icon: "🤝", title: "Personal & Responsive", description: "You're not just a project number. We work closely with every client to understand their goals and bring their vision to life." },
            { icon: "⭐", title: "Expertise You Can Trust", description: "Every website is crafted and refined by our team, ensuring it truly fits your brand and stands out from the competition." }
          ]}
          textAnimation="fade-blur"
        />

        <ContactCta
          tag="Ready to Get Started?"
          text="Let's build something great together. Book a free consultation today and see your new website live within 24 hours."
          primaryButton={{ text: "Book a Free Consultation", href: "/contact" }}
          secondaryButton={{ text: "Learn More", href: "/services" }}
          textAnimation="slide-up"
        />
      </main>

      <FooterMinimal
        brand="VisionWeb"
        copyright="© 2024 VisionWeb. All rights reserved."
      />
    </div>
  );
}