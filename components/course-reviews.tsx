"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "./ui/button"

interface Review {
  name: string
  location: string
  text: string
  rating: number
}

interface CourseReviewsProps {
  reviews: Review[]
}

export function CourseReviews({ reviews }: CourseReviewsProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
    }),
  }

  const swipeConfidenceThreshold = 10000
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity
  }

  const paginate = (newDirection: number) => {
    setDirection(newDirection)
    setCurrentIndex((prevIndex) => {
      let newIndex = prevIndex + newDirection
      if (newIndex < 0) newIndex = reviews.length - 1
      if (newIndex >= reviews.length) newIndex = 0
      return newIndex
    })
  }

  // Auto-play functionality
  useEffect(() => {
    const timer = setInterval(() => {
      paginate(1)
    }, 5000) // Change slide every 5 seconds

    return () => clearInterval(timer)
  }, [currentIndex])

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-background via-muted/30 to-background py-16 sm:py-20 lg:py-28">
      {/* Animated Background */}
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          className="absolute left-1/4 top-20 h-96 w-96 rounded-full bg-gradient-to-br from-primary/30 to-transparent blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{ duration: 12, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          className="absolute bottom-20 right-1/4 h-96 w-96 rounded-full bg-gradient-to-br from-accent/30 to-transparent blur-3xl"
        />
      </div>

      <div className="container relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="space-y-12 sm:space-y-16"
        >
          {/* Section Header */}
          <div className="space-y-4 text-center sm:space-y-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mx-auto inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 px-4 py-2 sm:px-6 sm:py-3"
            >
              <Star className="h-4 w-4 fill-primary text-primary sm:h-5 sm:w-5" />
              <span className="text-sm font-semibold text-primary sm:text-base">Success Stories</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl"
            >
              What Our Learners Say
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mx-auto max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg"
            >
              Real transformations from professionals who've experienced growth through our courses
            </motion.p>
          </div>

          {/* Carousel */}
          <div className="relative">
            {/* Reviews Carousel */}
            <div className="relative mx-auto max-w-5xl overflow-hidden px-12 sm:px-16">
              <AnimatePresence initial={false} custom={direction} mode="wait">
                <motion.div
                  key={currentIndex}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.3 },
                    scale: { duration: 0.3 },
                  }}
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={1}
                  onDragEnd={(e, { offset, velocity }) => {
                    const swipe = swipePower(offset.x, velocity.x)

                    if (swipe < -swipeConfidenceThreshold) {
                      paginate(1)
                    } else if (swipe > swipeConfidenceThreshold) {
                      paginate(-1)
                    }
                  }}
                  className="w-full"
                >
                  <Card className="border-2 shadow-2xl transition-all duration-300 hover:shadow-3xl">
                    <CardContent className="flex flex-col gap-6 p-8 sm:p-10 lg:p-12">
                      {/* Quote Icon */}
                      <motion.div
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-primary via-accent to-primary shadow-xl"
                      >
                        <Quote className="h-8 w-8 text-primary-foreground" />
                      </motion.div>

                      {/* Rating */}
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.3 }}
                        className="flex gap-1"
                      >
                        {[...Array(reviews[currentIndex].rating)].map((_, i) => (
                          <motion.div
                            key={i}
                            initial={{ scale: 0, rotate: -180 }}
                            animate={{ scale: 1, rotate: 0 }}
                            transition={{ duration: 0.3, delay: 0.4 + i * 0.1 }}
                          >
                            <Star className="h-6 w-6 fill-primary text-primary" />
                          </motion.div>
                        ))}
                      </motion.div>

                      {/* Review Text */}
                      <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        className="text-pretty text-lg leading-relaxed text-muted-foreground sm:text-xl lg:text-2xl"
                      >
                        "{reviews[currentIndex].text}"
                      </motion.p>

                      {/* Reviewer Info */}
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        className="flex items-center gap-4 border-t border-border pt-6"
                      >
                        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-primary/20 to-accent/20 text-xl font-bold text-primary">
                          {reviews[currentIndex].name[0]}
                        </div>
                        <div>
                          <p className="text-lg font-bold text-foreground">{reviews[currentIndex].name}</p>
                          <p className="text-sm text-muted-foreground">{reviews[currentIndex].location}</p>
                        </div>
                      </motion.div>
                    </CardContent>
                  </Card>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation Buttons */}
            <div className="absolute left-0 right-0 top-1/2 flex -translate-y-1/2 items-center justify-between">
              <Button
                variant="outline"
                size="icon"
                onClick={() => paginate(-1)}
                className="h-12 w-12 rounded-full border-2 bg-background/80 shadow-lg backdrop-blur-sm transition-all hover:scale-110 hover:border-primary hover:bg-background"
              >
                <ChevronLeft className="h-6 w-6" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={() => paginate(1)}
                className="h-12 w-12 rounded-full border-2 bg-background/80 shadow-lg backdrop-blur-sm transition-all hover:scale-110 hover:border-primary hover:bg-background"
              >
                <ChevronRight className="h-6 w-6" />
              </Button>
            </div>

            {/* Dots Indicator */}
            <div className="mt-8 flex justify-center gap-2">
              {reviews.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setDirection(index > currentIndex ? 1 : -1)
                    setCurrentIndex(index)
                  }}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "w-8 bg-primary"
                      : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
                  }`}
                  aria-label={`Go to review ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
