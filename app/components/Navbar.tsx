"use client"

import * as React from "react"
import Link from "next/link"
import { Menu } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"

const navItems = [
  { title: "Home", href: "#hero" },
  { title: "About", href: "#about" },
  { title: "AI Chat", href: "#ai-chat" },
  { title: "Camera", href: "#camera" },
  { title: "Pricing", href: "#pricing" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <span className="font-bold text-xl">Your Logo</span>
          </Link>
          <nav className="hidden md:flex items-center space-x-6">
            {navItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="text-sm font-medium transition-colors hover:text-primary"
              >
                {item.title}
              </Link>
            ))}
          </nav>
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                className="px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
              >
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="pr-0">
              <MobileNav navItems={navItems} setIsOpen={setIsOpen} />
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}

function MobileNav({ navItems, setIsOpen }: { navItems: Array<{ title: string, href: string }>, setIsOpen: (open: boolean) => void }) {
  return (
    <div className="flex flex-col space-y-3">
      {navItems.map((item, index) => (
        <Link
          key={index}
          href={item.href}
          className="text-sm font-medium transition-colors hover:text-primary"
          onClick={() => setIsOpen(false)}
        >
          {item.title}
        </Link>
      ))}
    </div>
  )
}
