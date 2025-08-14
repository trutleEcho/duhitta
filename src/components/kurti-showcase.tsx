"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Image from "next/image";

interface Kurti {
  id: number
  name: string
  price: number
  originalPrice?: number
  image: string
  colors: string[]
  sizes: string[]
  fabric: string
  pattern: string
  occasion: string
}

const kurtis: Kurti[] = [
  {
    id: 1,
    name: "Floral Block Print Kurti",
    price: 1299,
    // originalPrice: 1599,
    image: "/img.png",
    colors: ["Blue", "Pink", "White"],
    sizes: ["S", "M", "L", "XL"],
    fabric: "Cotton",
    pattern: "Block Print",
    occasion: "Casual",
  },
  {
    id: 2,
    name: "Embroidered Silk Kurti",
    price: 2499,
    image: "/img_1.png",
    colors: ["Maroon", "Navy", "Emerald"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    fabric: "Silk",
    pattern: "Embroidered",
    occasion: "Festive",
  },
  {
    id: 3,
    name: "Chikankari Cotton Kurti",
    price: 1799,
    image: "/img_2.png",
    colors: ["White", "Cream", "Light Blue"],
    sizes: ["S", "M", "L", "XL"],
    fabric: "Cotton",
    pattern: "Chikankari",
    occasion: "Traditional",
  }
]

export function KurtiShowcase() {
  const [selectedKurti, setSelectedKurti] = useState<Kurti | null>(null)

  return (
    <div className="container mx-auto px-4 py-12" id="collection">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-foreground mb-4">Elegant Kurtis Collection</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Discover our curated collection of traditional and contemporary kurtis, crafted with premium fabrics and
          timeless designs
        </p>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 lg:mx-24">
        {kurtis.map((kurti) => (
          <Card
            key={kurti.id}
            className="group cursor-pointer transition-all duration-300 hover:shadow-lg border-border/50"
            onClick={() => setSelectedKurti(kurti)}
          >
            <CardContent className="p-0">
              {/* Product Image */}
              <div className="relative overflow-hidden rounded-xl px-5">
                <img
                  src={kurti.image || "/placeholder-n947r.png"}
                  alt={kurti.name}
                  className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                {kurti.originalPrice && (
                  <Badge className="absolute top-3 left-3 bg-destructive text-destructive-foreground mx-4 text-white">Sale</Badge>
                )}
              </div>

              {/* Product Details */}
              <div className="p-4">
                <h3 className="font-semibold text-foreground mb-2 line-clamp-2">{kurti.name}</h3>

                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xl font-bold text-foreground">₹{kurti.price}</span>
                  {kurti.originalPrice && (
                    <span className="text-sm text-muted-foreground line-through">₹{kurti.originalPrice}</span>
                  )}
                </div>

                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex justify-between">
                    <span>Fabric:</span>
                    <span className="font-medium">{kurti.fabric}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Pattern:</span>
                    <span className="font-medium">{kurti.pattern}</span>
                  </div>
                </div>

                {/* Color Options */}
                <div className="flex gap-2 mt-3">
                  {kurti.colors.slice(0, 3).map((color, index) => (
                    <div
                      key={index}
                      className="w-4 h-4 rounded-full border border-border"
                      style={{
                        backgroundColor:
                          color.toLowerCase() === "white"
                            ? "#ffffff"
                            : color.toLowerCase() === "cream"
                              ? "#f5f5dc"
                              : color.toLowerCase() === "light blue"
                                ? "#add8e6"
                                : color.toLowerCase(),
                      }}
                    />
                  ))}
                  {kurti.colors.length > 3 && (
                    <span className="text-xs text-muted-foreground">+{kurti.colors.length - 3}</span>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Product Detail Modal */}
      {selectedKurti && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <Card className="max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <CardContent className="">
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-2xl font-bold text-foreground">{selectedKurti.name}</h2>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setSelectedKurti(null)}
                  className="text-muted-foreground hover:text-foreground"
                >
                  ✕
                </Button>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <img
                    src={selectedKurti.image || "/placeholder-n947r.png"}
                    alt={selectedKurti.name}
                    className="w-full h-96 object-cover rounded-lg"
                  />
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl font-bold text-foreground">₹{selectedKurti.price}</span>
                    {selectedKurti.originalPrice && (
                      <span className="text-lg text-muted-foreground line-through">₹{selectedKurti.originalPrice}</span>
                    )}
                  </div>

                  <div className="space-y-3">
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Details</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Fabric:</span>
                          <span className="font-medium">{selectedKurti.fabric}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Pattern:</span>
                          <span className="font-medium">{selectedKurti.pattern}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Occasion:</span>
                          <span className="font-medium">{selectedKurti.occasion}</span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Available Colors</h4>
                      <div className="flex gap-2">
                        {selectedKurti.colors.map((color, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {color}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Available Sizes</h4>
                      <div className="flex gap-2">
                        {selectedKurti.sizes.map((size, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {size}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>

                  <Button disabled className="w-full mt-6">Coming Soon</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  )
}
