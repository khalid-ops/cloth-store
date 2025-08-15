import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ShoppingBag,
  Truck,
  Shield,
  RotateCcw,
  Star,
  Menu,
  Search,
  User,
  Heart,
  ArrowRight,
  Sparkles,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { getImage } from "@/api/images"

export default function ClothingStoreLanding() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-rose-100 bg-white/80 backdrop-blur-md supports-[backdrop-filter]:bg-white/80">
        <div className="container flex h-20 items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link href="/" className="flex items-center space-x-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-rose-400 to-pink-500">
                <Sparkles className="h-5 w-5 text-white" />
              </div>
              <span className="font-bold text-2xl bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent">
                Modest Muse
              </span>
            </Link>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="#"
              className="text-sm font-medium text-gray-700 hover:text-rose-600 transition-colors relative group"
            >
              Hijabs
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-rose-600 transition-all group-hover:w-full"></span>
            </Link>
            <Link
              href="#"
              className="text-sm font-medium text-gray-700 hover:text-rose-600 transition-colors relative group"
            >
              Dupattas
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-rose-600 transition-all group-hover:w-full"></span>
            </Link>
            <Link
              href="#"
              className="text-sm font-medium text-gray-700 hover:text-rose-600 transition-colors relative group"
            >
              Abayas
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-rose-600 transition-all group-hover:w-full"></span>
            </Link>
            <Link
              href="#"
              className="text-sm font-medium text-gray-700 hover:text-rose-600 transition-colors relative group"
            >
              Accessories
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-rose-600 transition-all group-hover:w-full"></span>
            </Link>
            {/* <Link
              href="#"
              className="text-sm font-medium text-rose-600 hover:text-rose-700 transition-colors relative group"
            >
              Sale
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-rose-600 transition-all group-hover:w-full"></span>
            </Link> */}
          </nav>

          <div className="flex items-center space-x-3">
            <Button variant="ghost" size="icon" className="hidden md:flex hover:bg-rose-50 hover:text-rose-600">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="hover:bg-rose-50 hover:text-rose-600 relative">
              <Heart className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="hover:bg-rose-50 hover:text-rose-600">
              <User className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="hover:bg-rose-50 hover:text-rose-600 relative">
              <ShoppingBag className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 h-4 w-4 bg-rose-500 text-white text-xs rounded-full flex items-center justify-center">
                2
              </span>
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative w-full py-16 md:py-24 lg:py-32 xl:py-40 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50"></div>
          <div className="absolute inset-0 opacity-40">
            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/20 to-transparent"></div>
          </div>

          <div className="container px-4 md:px-6 relative">
            <div className="grid gap-8 lg:grid-cols-[1fr_500px] lg:gap-16 xl:grid-cols-[1fr_600px] items-center">
              <div className="flex flex-col justify-center space-y-6">
                <div className="space-y-4">
                  <Badge
                    variant="secondary"
                    className="w-fit bg-gradient-to-r from-rose-100 to-pink-100 text-rose-700 border-rose-200 hover:from-rose-200 hover:to-pink-200"
                  >
                    ✨ New Spring Collection 2024
                  </Badge>
                  <h1 className="text-4xl font-bold tracking-tight sm:text-6xl xl:text-7xl/none bg-gradient-to-r from-gray-900 via-rose-800 to-pink-800 bg-clip-text text-transparent">
                    Elevate Your
                    <span className="block text-rose-600">Feminine Style</span>
                  </h1>
                  <p className="max-w-[600px] text-gray-600 text-lg md:text-xl leading-relaxed">
                    Discover our curated collection of premium women&apos;s fashion. From elegant Hijabs, modest Abayas to stylish Dupattas,
                    find pieces that celebrate your unique femininity and empower your everyday style.
                  </p>
                </div>
                <div className="flex flex-col gap-4 min-[400px]:flex-row">
                  <Button
                    size="lg"
                    className="h-14 px-8 bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 group"
                  >
                    Shop Collection
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="h-14 px-8 border-2 border-rose-200 text-rose-700 hover:bg-rose-50 hover:border-rose-300 transition-all duration-300 bg-transparent"
                  >
                    View Lookbook
                  </Button>
                </div>
                <div className="flex items-center space-x-6 text-sm text-gray-500 pt-4">
                  <div className="flex items-center space-x-2">
                    <div className="h-8 w-8 rounded-full bg-rose-100 flex items-center justify-center">
                      <Truck className="h-4 w-4 text-rose-600" />
                    </div>
                    <span>Free shipping over $100</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="h-8 w-8 rounded-full bg-rose-100 flex items-center justify-center">
                      <RotateCcw className="h-4 w-4 text-rose-600" />
                    </div>
                    <span>30-day returns</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center relative">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-rose-200 to-pink-200 rounded-3xl transform rotate-6 scale-105 opacity-20"></div>
                  <Image
                    src={getImage("landing-page/hero-section-img1.jpg")}
                    width="500"
                    height="700"
                    alt="Stylish woman wearing elegant fashion"
                    className="aspect-[5/7] overflow-hidden rounded-3xl object-cover shadow-2xl relative z-10"
                  />
                  <small className="absolute bottom-4 left-4 text-xs text-gray-600">Photo by <a href="https://unsplash.com/@dagallery_?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Dana Al-Hawitey</a> on <a href="https://unsplash.com/photos/a-woman-sitting-on-a-bench-covering-her-face-mtlWsEdtMV4?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a></small>

                  <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl p-4 shadow-lg z-20">
                    <div className="flex items-center space-x-2">
                      <div className="flex -space-x-2">
                        <div className="h-8 w-8 rounded-full bg-rose-400"></div>
                        <div className="h-8 w-8 rounded-full bg-pink-400"></div>
                        <div className="h-8 w-8 rounded-full bg-purple-400"></div>
                      </div>
                      <div className="text-sm">
                        <div className="font-semibold text-gray-900">2.5k+</div>
                        <div className="text-gray-500">Happy customers</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Collections */}
        <section className="w-full py-16 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-6 text-center mb-16">
              <div className="space-y-4">
                <Badge variant="outline" className="border-rose-200 text-rose-700">
                  Shop by Category
                </Badge>
                <h2 className="text-3xl font-bold tracking-tight sm:text-5xl bg-gradient-to-r from-gray-900 to-rose-800 bg-clip-text text-transparent">
                  Curated Collections
                </h2>
                <p className="max-w-[800px] text-gray-600 text-lg md:text-xl leading-relaxed">
                  Explore our carefully curated collections designed for the modern woman&apos;s lifestyle.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-6xl items-center gap-8 lg:grid-cols-3">
              <Card className="group cursor-pointer overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 border-0 bg-gradient-to-br from-white to-rose-50">
                <CardContent className="p-0">
                  <div className="relative overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=400&width=400&text=Elegant+Dresses"
                      width="400"
                      height="400"
                      alt="Elegant Dresses Collection"
                      className="aspect-square w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-6 left-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <h3 className="text-2xl font-bold mb-1">Dresses</h3>
                      <p className="text-sm opacity-90 mb-3">From casual to cocktail</p>
                      <Button
                        size="sm"
                        className="bg-white text-gray-900 hover:bg-gray-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100"
                      >
                        Shop Now
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="group cursor-pointer overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 border-0 bg-gradient-to-br from-white to-pink-50">
                <CardContent className="p-0">
                  <div className="relative overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=400&width=400&text=Professional+Workwear"
                      width="400"
                      height="400"
                      alt="Professional Workwear Collection"
                      className="aspect-square w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-6 left-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <h3 className="text-2xl font-bold mb-1">Workwear</h3>
                      <p className="text-sm opacity-90 mb-3">Professional & Polished</p>
                      <Button
                        size="sm"
                        className="bg-white text-gray-900 hover:bg-gray-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100"
                      >
                        Shop Now
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="group cursor-pointer overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 border-0 bg-gradient-to-br from-white to-purple-50">
                <CardContent className="p-0">
                  <div className="relative overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=400&width=400&text=Casual+Weekend+Style"
                      width="400"
                      height="400"
                      alt="Casual Weekend Collection"
                      className="aspect-square w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-6 left-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <h3 className="text-2xl font-bold mb-1">Casual</h3>
                      <p className="text-sm opacity-90 mb-3">Effortless & Comfortable</p>
                      <Button
                        size="sm"
                        className="bg-white text-gray-900 hover:bg-gray-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100"
                      >
                        Shop Now
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="w-full py-16 md:py-24 lg:py-32 bg-gradient-to-br from-gray-50 to-rose-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-6 text-center mb-16">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tight sm:text-5xl bg-gradient-to-r from-gray-900 to-rose-800 bg-clip-text text-transparent">
                  Why Choose Modest Muse?
                </h2>
                <p className="max-w-[800px] text-gray-600 text-lg leading-relaxed">
                  We&apos;re committed to providing you with the best shopping experience and quality products.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-6xl items-center gap-8 lg:grid-cols-4">
              <div className="flex flex-col items-center space-y-6 text-center group">
                <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-rose-400 to-pink-500 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                  <Truck className="h-10 w-10 text-white" />
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-gray-900">Free Shipping</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Free delivery on orders over $100. Fast and reliable shipping worldwide.
                  </p>
                </div>
              </div>

              <div className="flex flex-col items-center space-y-6 text-center group">
                <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-400 to-pink-500 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                  <Shield className="h-10 w-10 text-white" />
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-gray-900">Quality Guarantee</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Premium materials and craftsmanship. Every piece is carefully selected.
                  </p>
                </div>
              </div>

              <div className="flex flex-col items-center space-y-6 text-center group">
                <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-pink-400 to-rose-500 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                  <RotateCcw className="h-10 w-10 text-white" />
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-gray-900">Easy Returns</h3>
                  <p className="text-gray-600 leading-relaxed">
                    30-day hassle-free returns. Not satisfied? We&apos;ll make it right.
                  </p>
                </div>
              </div>

              <div className="flex flex-col items-center space-y-6 text-center group">
                <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-rose-500 to-pink-600 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                  <Star className="h-10 w-10 text-white" />
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-gray-900">5-Star Service</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Exceptional customer service. We&apos;re here to help you find your perfect fit.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        {/* <section className="w-full py-16 md:py-24 lg:py-32 bg-gradient-to-br from-rose-600 to-pink-600 relative overflow-hidden">
          <div className="absolute inset-0 opacity-40">
            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/10 to-transparent"></div>
          </div>
          <div className="container grid items-center justify-center gap-6 px-4 text-center md:px-6 relative">
            <div className="space-y-4">
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30 hover:bg-white/30">
                ✨ Join Our Community
              </Badge>
              <h2 className="text-3xl font-bold tracking-tight md:text-5xl text-white">Stay Stylish, Stay Informed</h2>
              <p className="mx-auto max-w-[700px] text-rose-100 text-lg md:text-xl leading-relaxed">
                Join our community of fashion-forward women. Get exclusive access to new arrivals, styling tips, and
                special offers curated just for you.
              </p>
            </div>
            <div className="mx-auto w-full max-w-md space-y-4">
              <form className="flex gap-3">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 h-12 bg-white/10 border-white/20 text-white placeholder:text-rose-200 focus:bg-white/20 focus:border-white/40"
                />
                <Button type="submit" className="h-12 px-6 bg-white text-rose-600 hover:bg-gray-100 font-semibold">
                  Subscribe
                </Button>
              </form>
              <p className="text-sm text-rose-100">
                Get 10% off your first order when you subscribe.{" "}
                <Link href="/privacy" className="underline underline-offset-2 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </p>
            </div>
          </div>
        </section> */}
      </main>

      {/* Footer */}
      <footer className="w-full py-8 bg-gray-900 text-gray-300">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center space-x-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-rose-400 to-pink-500">
                <Sparkles className="h-4 w-4 text-white" />
              </div>
              <span className="font-bold text-xl text-white">Modest Muse</span>
            </div>
            <p className="text-sm text-gray-400">© 2024 Modest Muse. All rights reserved.</p>
            <nav className="flex gap-6">
              <Link href="#" className="text-sm hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link href="#" className="text-sm hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-sm hover:text-white transition-colors">
                Contact Us
              </Link>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  )
}
