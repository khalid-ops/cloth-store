"use client"
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge, ChevronDown, Filter, Grid3X3, Heart, List, Star, X } from "lucide-react";
import { useState } from "react";

// Sample product data

const products = [
  {
    id: 1,
    name: "Elegant Evening Dress",
    price: 189,
    originalPrice: 249,
    image: "/placeholder.svg?height=400&width=300&text=Evening+Dress",
    category: "Evening",
    size: ["XS", "S", "M", "L", "XL"],
    color: "Navy Blue",
    rating: 4.8,
    reviews: 124,
    isNew: true,
    onSale: true,
  },
  {
    id: 2,
    name: "Casual Summer Dress",
    price: 89,
    originalPrice: null,
    image: "/placeholder.svg?height=400&width=300&text=Summer+Dress",
    category: "Casual",
    size: ["S", "M", "L", "XL"],
    color: "Floral Print",
    rating: 4.6,
    reviews: 89,
    isNew: false,
    onSale: false,
  },
  {
    id: 3,
    name: "Professional Midi Dress",
    price: 129,
    originalPrice: null,
    image: "/placeholder.svg?height=400&width=300&text=Midi+Dress",
    category: "Professional",
    size: ["XS", "S", "M", "L"],
    color: "Charcoal Gray",
    rating: 4.9,
    reviews: 156,
    isNew: true,
    onSale: false,
  },
  {
    id: 4,
    name: "Cocktail Party Dress",
    price: 159,
    originalPrice: 199,
    image: "/placeholder.svg?height=400&width=300&text=Cocktail+Dress",
    category: "Party",
    size: ["S", "M", "L"],
    color: "Emerald Green",
    rating: 4.7,
    reviews: 92,
    isNew: false,
    onSale: true,
  },
  {
    id: 5,
    name: "Bohemian Maxi Dress",
    price: 119,
    originalPrice: null,
    image: "/placeholder.svg?height=400&width=300&text=Maxi+Dress",
    category: "Casual",
    size: ["XS", "S", "M", "L", "XL"],
    color: "Sunset Orange",
    rating: 4.5,
    reviews: 67,
    isNew: false,
    onSale: false,
  },
  {
    id: 6,
    name: "Little Black Dress",
    price: 149,
    originalPrice: null,
    image: "/placeholder.svg?height=400&width=300&text=Black+Dress",
    category: "Evening",
    size: ["XS", "S", "M", "L"],
    color: "Classic Black",
    rating: 4.9,
    reviews: 203,
    isNew: false,
    onSale: false,
  },
]
export default function HijabsPage() {

const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [showFilters, setShowFilters] = useState(false)
  const [selectedFilters, setSelectedFilters] = useState({
    category: "all",
    size: "all",
    color: "all",
    priceRange: "all",
  })

  const clearFilters = () => {
    setSelectedFilters({
      category: "all",
      size: "all",
      color: "all",
      priceRange: "all",
    })
  }
    return (
        <div className="flex flex-col min-h-screen bg-white">
            <main className="flex-1">
            <section className="py-12 bg-gradient-to-br from-rose-50 to-rose-50">
                <div className="container px-4 md:px-6">
                    <div className="text-center space-y-4">
                    <h1 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-gray-900 to-sky-700 bg-clip-text text-transparent">
                        Hijabs Collection
                    </h1>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Discover our stunning collection of hijabs for every occasion.
                    </p>
                    <div className="flex items-center justify-center space-x-4 text-sm text-gray-500">
                        {/* <span>Showing {"10"} products</span>
                        <span>•</span> */}
                        <span>Free shipping on orders over $100</span>
                    </div>
                    </div>
                </div>
            </section>

        <div className="border-b border-gray-200 bg-white sticky top-20 z-40">
          <div className="container px-4 md:px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setShowFilters(!showFilters)}
                  className="border-rose-200 text-rose-700 hover:bg-rose-50"
                >
                  <Filter className="h-4 w-4 mr-2" />
                  Filters
                  <ChevronDown className={`h-4 w-4 ml-2 transition-transform ${showFilters ? "rotate-180" : ""}`} />
                </Button>

                {(selectedFilters.category !== "all" ||
                  selectedFilters.size !== "all" ||
                  selectedFilters.color !== "all" ||
                  selectedFilters.priceRange !== "all") && (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={clearFilters}
                    className="text-gray-500 hover:text-rose-600"
                  >
                    <X className="h-4 w-4 mr-1" />
                    Clear all
                  </Button>
                )}
              </div>

              <div className="flex items-center space-x-4">
                <Select defaultValue="featured">
                  <SelectTrigger className="w-48 border-gray-200">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="featured">Featured</SelectItem>
                    <SelectItem value="price-low">Price: Low to High</SelectItem>
                    <SelectItem value="price-high">Price: High to Low</SelectItem>
                    <SelectItem value="newest">Newest First</SelectItem>
                    <SelectItem value="rating">Highest Rated</SelectItem>
                  </SelectContent>
                </Select>

                <div className="flex items-center border border-gray-200 rounded-md">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setViewMode("grid")}
                    className={`px-3 ${viewMode === "grid" ? "bg-rose-50 text-rose-600" : "text-gray-500"}`}
                  >
                    <Grid3X3 className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setViewMode("list")}
                    className={`px-3 ${viewMode === "list" ? "bg-rose-50 text-rose-600" : "text-gray-500"}`}
                  >
                    <List className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Filter Options */}
            {showFilters && (
              <div className="mt-4 p-4 bg-rose-50 rounded-lg">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                    <Select
                      value={selectedFilters.category}
                      onValueChange={(value) => setSelectedFilters({ ...selectedFilters, category: value })}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="All Categories" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Categories</SelectItem>
                        <SelectItem value="evening">Evening</SelectItem>
                        <SelectItem value="casual">Casual</SelectItem>
                        <SelectItem value="professional">Professional</SelectItem>
                        <SelectItem value="party">Party</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Size</label>
                    <Select
                      value={selectedFilters.size}
                      onValueChange={(value) => setSelectedFilters({ ...selectedFilters, size: value })}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="All Sizes" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Sizes</SelectItem>
                        <SelectItem value="xs">XS</SelectItem>
                        <SelectItem value="s">S</SelectItem>
                        <SelectItem value="m">M</SelectItem>
                        <SelectItem value="l">L</SelectItem>
                        <SelectItem value="xl">XL</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Color</label>
                    <Select
                      value={selectedFilters.color}
                      onValueChange={(value) => setSelectedFilters({ ...selectedFilters, color: value })}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="All Colors" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Colors</SelectItem>
                        <SelectItem value="black">Black</SelectItem>
                        <SelectItem value="blue">Blue</SelectItem>
                        <SelectItem value="green">Green</SelectItem>
                        <SelectItem value="red">Red</SelectItem>
                        <SelectItem value="white">White</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Price Range</label>
                    <Select
                      value={selectedFilters.priceRange}
                      onValueChange={(value) => setSelectedFilters({ ...selectedFilters, priceRange: value })}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="All Prices" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Prices</SelectItem>
                        <SelectItem value="0-50">Under $50</SelectItem>
                        <SelectItem value="50-100">$50 - $100</SelectItem>
                        <SelectItem value="100-200">$100 - $200</SelectItem>
                        <SelectItem value="200+">$200+</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Products Grid */}
        <section className="py-8">
          <div className="container px-4 md:px-6">
            <div
              className={`grid gap-6 ${viewMode === "grid" ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" : "grid-cols-1"}`}
            >
              {products.map((product) => (
                <Card
                  key={product.id}
                  className="group cursor-pointer overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-0 bg-white"
                >
                  <CardContent className="p-0">
                    <div className="relative">
                      {/* <Image
                        src={"/placeholder.svg"}
                        width={300}
                        height={400}
                        alt={product.name}
                        className={`w-full object-cover transition-transform duration-500 group-hover:scale-105 ${viewMode === "grid" ? "aspect-[3/4]" : "aspect-square"}`}
                      /> */}

                      {/* Badges */}
                      <div className="absolute top-3 left-3 flex flex-col gap-2">
                        {product.isNew && <Badge className="bg-rose-500 text-white hover:bg-rose-600">New</Badge>}
                        {product.onSale && <Badge className="bg-red-500 text-white hover:bg-red-600">Sale</Badge>}
                      </div>

                      {/* Quick Actions */}
                      <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <Button size="icon" variant="secondary" className="h-8 w-8 bg-white/90 hover:bg-white">
                          <Heart className="h-4 w-4" />
                        </Button>
                      </div>

                      {/* Quick Add to Cart */}
                      <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <Button className="w-full bg-rose-500 hover:bg-rose-600 text-white">Quick Add</Button>
                      </div>
                    </div>

                    <div className="p-4 space-y-3">
                      <div className="space-y-1">
                        <h3 className="font-semibold text-gray-900 group-hover:text-rose-600 transition-colors">
                          {product.name}
                        </h3>
                        <p className="text-sm text-gray-500">{product.category}</p>
                      </div>

                      <div className="flex items-center space-x-1">
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-3 w-3 ${i < Math.floor(product.rating) ? "text-yellow-400 fill-current" : "text-gray-300"}`}
                            />
                          ))}
                        </div>
                        <span className="text-xs text-gray-500">({product.reviews})</span>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <span className="font-bold text-lg text-gray-900">${product.price}</span>
                          {product.originalPrice && (
                            <span className="text-sm text-gray-500 line-through">${product.originalPrice}</span>
                          )}
                        </div>
                        <div className="text-xs text-gray-500">{product.size.length} sizes</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Load More */}
            <div className="text-center mt-12">
              <Button
                variant="outline"
                size="lg"
                className="border-rose-200 text-rose-700 hover:bg-rose-50 bg-transparent"
              >
                Load More Products
              </Button>
            </div>
          </div>
        </section>
      </main>

            
        </div>
    )
}