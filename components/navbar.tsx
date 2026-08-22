"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, ArrowRight, Phone } from "lucide-react";

import { Logo } from "@/components/logo";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { mainNav, siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = React.useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 12);
  });

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled ? "navbar-glass shadow-sm" : "bg-transparent"
      )}
    >
      <div className="container flex h-[4.5rem] items-center justify-between py-3">
        <Logo />

        <nav className="hidden lg:flex items-center gap-1">
          {mainNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "relative px-4 py-2 text-sm font-medium rounded-full transition-colors duration-200",
                isActive(item.href)
                  ? "text-primary hover:bg-primary/15 active:bg-primary/25"
                  : "text-foreground/80 hover:bg-foreground/5 hover:text-primary active:bg-foreground/10"
              )}
            >
              {item.label}
              {isActive(item.href) && (
                <motion.span
                  layoutId="nav-active"
                  className="absolute inset-0 -z-10 rounded-full bg-primary/10"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-2">
          <ThemeToggle className="hover:bg-foreground/5 active:bg-foreground/10" />
          <Button variant="ghost" size="sm" className="hover:bg-foreground/5 active:bg-foreground/10" asChild>
            <Link href="/login">Log In</Link>
          </Button>
          <Button size="sm" className="btn-gradient text-white border-0 rounded-full" asChild>
            <Link href="/demo">
              Book a Demo
              <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
            </Link>
          </Button>
        </div>

        <div className="flex items-center gap-1 lg:hidden">
          <ThemeToggle className="hover:bg-foreground/5 active:bg-foreground/10" />
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                aria-label="Open menu"
                className="hover:bg-foreground/5 active:bg-foreground/10"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full sm:max-w-sm flex flex-col">
              <SheetHeader>
                <SheetTitle>
                  <Logo />
                </SheetTitle>
              </SheetHeader>
              <nav className="mt-6 flex flex-col gap-1">
                {mainNav.map((item) => (
                  <SheetClose asChild key={item.href}>
                    <Link
                      href={item.href}
                      className={cn(
                        "rounded-xl px-4 py-3 text-base font-medium transition-colors duration-200",
                        isActive(item.href)
                          ? "bg-primary/10 text-primary hover:bg-primary/15 active:bg-primary/25"
                          : "text-foreground hover:bg-foreground/5 active:bg-foreground/10"
                      )}
                    >
                      {item.label}
                    </Link>
                  </SheetClose>
                ))}
              </nav>
              <div className="mt-auto flex flex-col gap-3 pt-6 border-t">
                <a href={siteConfig.contact.phoneHref} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Phone className="h-4 w-4" /> {siteConfig.contact.phone}
                </a>
                <SheetClose asChild>
                  <Button variant="outline" asChild>
                    <Link href="/login">Log In</Link>
                  </Button>
                </SheetClose>
                <SheetClose asChild>
                  <Button className="btn-gradient text-white border-0" asChild>
                    <Link href="/demo">
                      Book a Demo
                      <ArrowRight className="ml-1.5 h-4 w-4" />
                    </Link>
                  </Button>
                </SheetClose>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
