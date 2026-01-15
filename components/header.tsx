"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, Sparkles } from "lucide-react"
import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()
  const { scrollY } = useScroll()

  const logoRotate = useTransform(scrollY, [0, 200], [0, 360])

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const getActiveItem = (href: string) => {
    if (href === "/") {
      return pathname === "/"
    }
    if (href.startsWith("/#")) {
      return pathname === "/" && false
    }
    return pathname === href
  }

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/workshops", label: "Courses" },
    { href: "/persona", label: "Persona" },
  ]

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
      className={`fixed top-0 z-50 w-full transition-all duration-500 ${scrolled ? "shadow-2xl shadow-primary/5" : ""}`}
    >
      <div
        className={`relative transition-all duration-500 ${
          scrolled ? "mx-2 mt-2 rounded-2xl border border-white/20 sm:mx-4 sm:mt-4" : "border-b border-white/10"
        }`}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/90 to-background/95 backdrop-blur-2xl" />

        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 opacity-50"
          animate={{
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
          }}
          transition={{
            duration: 5,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          style={{
            backgroundSize: "200% 100%",
          }}
        />

        <div className="relative container mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:h-20 sm:px-6 lg:h-24 lg:px-8">
          <Link href="/" className="group flex items-center gap-2 transition-all hover:gap-3 sm:gap-3 sm:hover:gap-4">
            <motion.div style={{ rotate: scrollY ? logoRotate : 0 }} className="relative">
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary via-accent to-primary blur-xl opacity-60 transition-opacity group-hover:opacity-100 sm:rounded-2xl" />
              <div className="relative flex h-10 w-auto items-center justify-center rounded-xl transition-transform group-hover:scale-110 sm:h-12 sm:w-auto sm:rounded-2xl">
                <img src='/images/hl_logo.png' className="h-18 w-auto text-white" />
                <motion.div
                  className="absolute -right-1 -top-1"
                  animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 180, 360],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                >
                  <Sparkles className="h-3 w-3 text-accent sm:h-4 sm:w-4" />
                </motion.div>
              </div>
            </motion.div>

            <div className="flex flex-col">
              <span className="bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-base font-extrabold tracking-tight text-transparent sm:text-xl lg:text-2xl">
                Harvard Learning
              </span>
              <span className="hidden text-xs font-medium text-muted-foreground sm:block">Excellence in Education</span>
            </div>
          </Link>

          <nav className="hidden items-center gap-2 lg:flex">
            <div className="relative flex items-center gap-1 rounded-full border border-border/40 bg-muted/30 p-1.5 backdrop-blur-sm">
              {navItems.map((item) => {
                const isActive = getActiveItem(item.href)
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="group relative z-10 px-4 py-2.5 text-sm font-semibold transition-colors xl:px-6"
                  >
                    {isActive && (
                      <motion.div
                        layoutId="navbar-indicator"
                        className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-accent shadow-lg"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}

                    <span
                      className={`relative z-10 ${isActive ? "text-white" : "text-muted-foreground group-hover:text-foreground"}`}
                    >
                      {item.label}
                    </span>
                  </Link>
                )
              })}
            </div>
          </nav>

          <div className="flex items-center gap-2 sm:gap-4">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="hidden lg:block">
              <Link href="/enroll">
                <Button
                  className="group relative overflow-hidden bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_100%] px-6 py-5 text-sm font-bold text-white shadow-2xl shadow-primary/50 transition-all duration-300 hover:bg-[position:100%_0] hover:shadow-primary/70 xl:px-8 xl:py-6 xl:text-base"
                  size="lg"
                >
                  <motion.span
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                    animate={{
                      x: ["-200%", "200%"],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "linear",
                      repeatDelay: 1,
                    }}
                  />
                  <span className="relative flex items-center gap-2">
                    Enroll Now
                    <Sparkles className="h-4 w-4" />
                  </span>
                </Button>
              </Link>
            </motion.div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative flex h-10 w-10 items-center justify-center rounded-xl border-2 border-border/40 bg-muted/30 backdrop-blur-sm transition-all hover:border-primary/40 hover:bg-primary/10 sm:h-12 sm:w-12 lg:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait">
                {isMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="h-5 w-5 text-foreground sm:h-6 sm:w-6" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="h-5 w-5 text-foreground sm:h-6 sm:w-6" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="absolute left-2 right-2 top-20 sm:left-4 sm:right-4 sm:top-24 lg:hidden"
          >
            <div className="overflow-hidden rounded-2xl border border-white/20 bg-background/95 shadow-2xl backdrop-blur-2xl">
              <div className="bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 p-3 sm:p-4">
                <p className="text-xs font-semibold text-muted-foreground sm:text-sm">Navigate to</p>
              </div>

              <nav className="flex flex-col gap-2 p-3 sm:p-4">
                {navItems.map((item, index) => {
                  const isActive = getActiveItem(item.href)
                  return (
                    <motion.div
                      key={item.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link
                        href={item.href}
                        className={`group relative flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-semibold transition-all sm:px-5 sm:py-4 sm:text-base ${
                          isActive
                            ? "bg-gradient-to-r from-primary/20 to-accent/20 text-foreground shadow-lg"
                            : "text-muted-foreground hover:bg-muted/50 hover:text-foreground"
                        }`}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <motion.div
                          className={`h-2 w-2 rounded-full transition-colors ${
                            isActive ? "bg-gradient-to-r from-primary to-accent" : "bg-muted-foreground/30"
                          }`}
                          animate={
                            isActive
                              ? {
                                  scale: [1, 1.3, 1],
                                }
                              : {}
                          }
                          transition={{
                            duration: 2,
                            repeat: Number.POSITIVE_INFINITY,
                          }}
                        />
                        {item.label}
                      </Link>
                    </motion.div>
                  )
                })}

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                  className="pt-2"
                >
                  <Link href="/enroll" onClick={() => setIsMenuOpen(false)}>
                    <Button className="w-full bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_100%] py-5 text-sm font-bold shadow-xl shadow-primary/30 transition-all duration-300 hover:bg-[position:100%_0] sm:py-6 sm:text-base">
                      <span className="flex items-center justify-center gap-2">
                        Enroll Now
                        <Sparkles className="h-4 w-4" />
                      </span>
                    </Button>
                  </Link>
                </motion.div>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
