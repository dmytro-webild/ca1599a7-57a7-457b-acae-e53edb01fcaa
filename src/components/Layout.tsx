import FooterBasic from '@/components/sections/footer/FooterBasic';
import NavbarCentered from '@/components/ui/NavbarCentered';
import SectionErrorBoundary from "@/components/ui/SectionErrorBoundary";
import SiteBackgroundSlot from "@/components/ui/SiteBackgroundSlot";
import { Outlet } from 'react-router-dom';
import { StyleProvider } from "@/components/ui/StyleProvider";

export default function Layout() {
  const navItems = [
  {
    "name": "Services",
    "href": "#services"
  },
  {
    "name": "Portfolio",
    "href": "#showcase"
  },
  {
    "name": "Team",
    "href": "#team"
  },
  {
    "name": "Contact",
    "href": "#contact"
  },
  {
    "name": "Hero",
    "href": "#hero"
  },
  {
    "name": "Metrics",
    "href": "#metrics"
  },
  {
    "name": "Testimonials",
    "href": "#testimonials"
  },
  { name: "About Vision Web", href: "/about-vision-web" },

];

  return (
    <StyleProvider buttonVariant="magnetic" siteBackground="floatingGradient" heroBackground="lightRaysCenter">
      <SiteBackgroundSlot />
      <SectionErrorBoundary name="navbar">
        <NavbarCentered
      logo="VisionWeb"
      ctaButton={{
        text: "Get Started",
        href: "#contact",
      }}
     navItems={navItems} />
      </SectionErrorBoundary>
      <main className="flex-grow">
        <Outlet />
      </main>
      <SectionErrorBoundary name="footer">
        <FooterBasic
      columns={[
        {
          title: "contact",
          items: [
            {
              label: "About Us",
              href: "#",
            },
            {
              label: "Case Studies",
              href: "#",
            },
          ],
        },
        {
          title: "Services",
          items: [
            {
              label: "Design",
              href: "#",
            },
            {
              label: "Development",
              href: "#",
            },
          ],
        },
        {
          title: "Legal",
          items: [
            {
              label: "Privacy Policy",
              href: "#",
            },
            {
              label: "Terms of Service",
              href: "#",
            },
          ],
        },
      ]}
      leftText="© 2026 VisionWeb Agency. All rights reserved."
      rightText="Crafted with passion in the digital realm."
    />
      </SectionErrorBoundary>
    </StyleProvider>
  );
}
