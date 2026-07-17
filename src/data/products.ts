export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  category: string;
  image: string;
  images: string[];
  isCustomizable: boolean;
  badge?: string;
  details: {
    material: string;
    fit: string;
    care: string;
    turnaround: string;
  };
}

export interface CartItem extends Product {
  quantity: number;
  measurements?: Measurements;
}

export interface Measurements {
  chest?: number;
  waist?: number;
  hips?: number;
  shoulder?: number;
  sleeve?: number;
  length?: number;
  neck?: number;
  inseam?: number;
  notes?: string;
}

export const categories = [
  "All",
  "Jacket",
  "Ready to Wear",
  "Senator Rider",
  "Royal Agbada",
  "Bespoke Suit",
];

export const products: Product[] = [
  {
    id: "1",
    name: "The Heritage Bomber",
    description:
      "A meticulously crafted cream wool bomber jacket featuring a double-breasted silhouette with dark horn buttons, exaggerated sleeves, and a ribbed hem. This piece merges old-world tailoring with contemporary street elegance. Hand-cut and stitched by our master artisans in Lagos.",
    price: 185000,
    originalPrice: 200000,
    category: "Jacket",
    image: "/products/cream-double-jacket.jpg",
    images: [
      "/products/cream-double-jacket.jpg",
      "/products/cream-jacket-back.jpg",
    ],
    isCustomizable: true,
    badge: "Bestseller",
    details: {
      material: "100% Premium Wool Blend with Silk Lining",
      fit: "Relaxed Oversized - Tailored to Your Measurements",
      care: "Dry Clean Only",
      turnaround: "10-14 Business Days",
    },
  },
  {
    id: "2",
    name: "Olive Manor Blazer",
    description:
      "A distinguished olive green plaid blazer showcasing heritage British tailoring techniques adapted for the modern African gentleman. Features a structured shoulder, notch lapels, and intricate pocket detailing. Perfect for formal occasions that demand understated sophistication.",
    price: 220000,
    originalPrice: 235000,
    category: "Bespoke Suit",
    image: "/products/olive-plaid-blazer.jpg",
    images: [
      "/products/olive-plaid-blazer.jpg",
      "/products/olive-blazer-detail.jpg",
      "/products/olive-blazer-shoulder.jpg",
    ],
    isCustomizable: true,
    badge: "New Arrival",
    details: {
      material: "Italian Wool Plaid - Super 120s",
      fit: "Classic Structured Fit",
      care: "Professional Dry Clean",
      turnaround: "12-16 Business Days",
    },
  },
  {
    id: "3",
    name: "The Sovereign Collection",
    description:
      "An exclusive lineup of five impeccably tailored three-piece suits in ivory, steel grey, camel, navy, and charcoal. Each suit is fully canvassed with hand-finished details. The ultimate power dressing statement for the man who accepts nothing less than perfection.",
    price: 350000,
    originalPrice: 375000,
    category: "Bespoke Suit",
    image: "/products/suits-collection.jpg",
    images: ["/products/suits-collection.jpg"],
    isCustomizable: true,
    badge: "Premium",
    details: {
      material: "Premium Worsted Wool - Various Weights",
      fit: "Fully Custom - Bespoke Measurements",
      care: "Dry Clean & Press",
      turnaround: "14-18 Business Days",
    },
  },
  {
    id: "4",
    name: "The Odogwu Agbada",
    description:
      "As seen on Afrobeats legend Tekno. This flowing emerald green Agbada set features intricate gold embroidery at the chest, representing the confluence of Yoruba royal tradition and contemporary luxury. Includes matching inner garment and trousers.",
    price: 275000,
    originalPrice: 290000,
    category: "Royal Agbada",
    image: "/products/green-agbada.jpg",
    images: ["/products/green-agbada.jpg"],
    isCustomizable: true,
    details: {
      material: "Premium Silk-Cotton Blend with Gold Thread",
      fit: "Regal Flowing Silhouette - Custom Draped",
      care: "Hand Wash or Dry Clean",
      turnaround: "10-14 Business Days",
    },
  },
  {
    id: "5",
    name: "Chelsea Pinstripe",
    description:
      "A sharp navy pinstripe suit that channels the boardrooms of London and Lagos alike. Cut from fine wool with a subtle sheen, featuring peak lapels, double vents, and fully functional button cuffs. The modern gentleman's armor.",
    price: 195000,
    originalPrice: 210000,
    category: "Bespoke Suit",
    image: "/products/navy-pinstripe-suit.jpg",
    images: ["/products/navy-pinstripe-suit.jpg"],
    isCustomizable: true,
    details: {
      material: "Super 100s Wool - Navy Pinstripe",
      fit: "Slim Contemporary",
      care: "Dry Clean Only",
      turnaround: "10-14 Business Days",
    },
  },
  {
    id: "6",
    name: "The Statesman Three-Piece",
    description:
      "A warm camel three-piece suit that exudes quiet confidence and generational wealth. The waistcoat adds a layer of formality while the tailored cut keeps it modern. Perfect for weddings, galas, and moments that matter.",
    price: 240000,
    originalPrice: 255000,
    category: "Bespoke Suit",
    image: "/products/camel-three-piece.jpg",
    images: ["/products/camel-three-piece.jpg"],
    isCustomizable: true,
    details: {
      material: "Luxury Camel Wool Blend",
      fit: "Tailored Regular with Waistcoat",
      care: "Professional Dry Clean",
      turnaround: "12-16 Business Days",
    },
  },
  {
    id: "7",
    name: "The Yellow Admiral Set",
    description:
      "A striking yellow and gold traditional set that commands attention in any room. Features intricate embroidery and a structured silhouette that bridges ancestral craftsmanship with contemporary design sensibility.",
    price: 140000,
    originalPrice: 145000,
    category: "Ready to Wear",
    image: "/products/cream-jacket-back.jpg",
    images: ["/products/cream-jacket-back.jpg"],
    isCustomizable: true,
    badge: "Popular",
    details: {
      material: "Premium Cotton with Gold Embroidery",
      fit: "Relaxed Traditional",
      care: "Hand Wash or Dry Clean",
      turnaround: "7-10 Business Days",
    },
  },
  {
    id: "8",
    name: "The Beng GAZAY",
    description:
      "An avant-garde take on traditional menswear, blending bold patterns with impeccable construction. This piece is for the fashion-forward man who appreciates cultural heritage expressed through a modern lens.",
    price: 130000,
    originalPrice: 135000,
    category: "Senator Rider",
    image: "/products/olive-blazer-shoulder.jpg",
    images: ["/products/olive-blazer-shoulder.jpg"],
    isCustomizable: true,
    details: {
      material: "Patterned Silk Blend",
      fit: "Modern Slim",
      care: "Dry Clean Only",
      turnaround: "8-12 Business Days",
    },
  },
  {
    id: "9",
    name: "The Aposh Royale",
    description:
      "Our most exclusive creation — a masterfully constructed statement piece featuring the finest materials and most intricate handwork. Limited production ensures exclusivity. For the gentleman who sets trends, not follows them.",
    price: 240000,
    originalPrice: 250000,
    category: "Royal Agbada",
    image: "/products/olive-blazer-detail.jpg",
    images: ["/products/olive-blazer-detail.jpg"],
    isCustomizable: true,
    badge: "Limited",
    details: {
      material: "Premium Handwoven Textile",
      fit: "Bespoke - Fully Custom",
      care: "Professional Care Only",
      turnaround: "18-21 Business Days",
    },
  },
  {
    id: "10",
    name: "The Gentleman's Quartet",
    description:
      "A curated selection of four distinguished check-patterned suits in grey, forest green, royal blue, and charcoal. Each piece is tailored to perfection with structured shoulders and clean lines. As featured on our X collection — these are the suits that built our reputation.",
    price: 320000,
    originalPrice: 350000,
    category: "Bespoke Suit",
    image: "/products/four-grid-suits.jpg",
    images: ["/products/four-grid-suits.jpg"],
    isCustomizable: true,
    badge: "200K Each",
    details: {
      material: "Super 120s Wool - Check Weave Collection",
      fit: "Classic Tailored - Individual Measurements",
      care: "Dry Clean Only",
      turnaround: "12-16 Business Days",
    },
  },
  {
    id: "11",
    name: "The Atelier Collection",
    description:
      "Step into our world. This showcase piece represents the full spectrum of Klassiq Kulture's bespoke offerings — from olive green to burgundy, navy to charcoal, displayed in our flagship showroom. Every color tells a story of craftsmanship.",
    price: 280000,
    originalPrice: 300000,
    category: "Bespoke Suit",
    image: "/products/showroom-ties.jpg",
    images: ["/products/showroom-ties.jpg"],
    isCustomizable: true,
    details: {
      material: "Premium Italian Wool - Multiple Weights",
      fit: "Fully Bespoke - Showroom Quality",
      care: "Professional Dry Clean & Press",
      turnaround: "14-18 Business Days",
    },
  },
  {
    id: "12",
    name: "The Masculine Line",
    description:
      "Embrace masculinity with this powerful duo. A commanding navy pinstripe double-breasted blazer paired with a navy sport coat featuring gold buttons. These pieces exude authority and refined taste for the modern man who leads.",
    price: 255000,
    originalPrice: 270000,
    category: "Bespoke Suit",
    image: "/products/embrace-masculinity.jpg",
    images: ["/products/embrace-masculinity.jpg", "/products/double-breasted-pair.jpg"],
    isCustomizable: true,
    badge: "$170",
    details: {
      material: "Super 130s Wool with Gold Hardware",
      fit: "Sharp Double-Breasted Cut",
      care: "Dry Clean Only",
      turnaround: "10-14 Business Days",
    },
  },
  {
    id: "13",
    name: "The Executive Suite",
    description:
      "The definitive boardroom wardrobe. Four meticulously tailored suits ranging from charcoal to royal blue, cream to steel grey. Each features our signature lapel pin and comes with a perfectly matched silk tie. Power dressing, redefined.",
    price: 300000,
    originalPrice: 325000,
    category: "Bespoke Suit",
    image: "/products/shop-collection.jpg",
    images: ["/products/shop-collection.jpg"],
    isCustomizable: true,
    badge: "Premium",
    details: {
      material: "Luxury Worsted Wool - Four Distinct Weaves",
      fit: "Executive Slim with Comfort Stretch",
      care: "Dry Clean & Professional Press",
      turnaround: "12-16 Business Days",
    },
  },
  {
    id: "14",
    name: "The Azure Detail",
    description:
      "A masterclass in sky blue tailoring. This double-breasted beauty features intricate construction details — from the precisely stacked sleeve buttons to the ticket pocket and peak lapels. A closer look reveals the craftsmanship that defines Klassiq Kulture.",
    price: 220000,
    originalPrice: 235000,
    category: "Bespoke Suit",
    image: "/products/sky-blue-detail.jpg",
    images: ["/products/sky-blue-detail.jpg"],
    isCustomizable: true,
    badge: "New Arrival",
    details: {
      material: "Sky Blue Super 110s Wool",
      fit: "Contemporary Double-Breasted",
      care: "Dry Clean Only",
      turnaround: "10-14 Business Days",
    },
  },
  {
    id: "15",
    name: "The Heritage Senator",
    description:
      "A glimpse into the Klassiq Kulture atelier. This piece showcases traditional Nigerian senator wear — a rich burgundy set with intricate white embroidery alongside a cream and gold ensemble. Worn by Klassiq Tunez himself in his creative space.",
    price: 150000,
    originalPrice: 165000,
    category: "Senator Rider",
    image: "/products/klassiq-atelier.jpg",
    images: ["/products/klassiq-atelier.jpg"],
    isCustomizable: true,
    details: {
      material: "Premium Cotton with Traditional Embroidery",
      fit: "Relaxed Senator Cut - Custom Fitted",
      care: "Hand Wash or Dry Clean",
      turnaround: "7-10 Business Days",
    },
  },
  {
    id: "16",
    name: "The Trinity Collection",
    description:
      "Three impeccable suits in navy, grey, and black — displayed in our luxury showroom. Each represents a pillar of the modern gentleman's wardrobe. Choose your color, provide your measurements, and let our artisans craft your perfect suit.",
    price: 350000,
    originalPrice: 380000,
    category: "Bespoke Suit",
    image: "/products/three-suits-showroom.jpg",
    images: ["/products/three-suits-showroom.jpg"],
    isCustomizable: true,
    badge: "Best Value",
    details: {
      material: "Premium Wool - Navy, Grey, Black",
      fit: "Tailored Modern with Waistcoat Option",
      care: "Dry Clean Only",
      turnaround: "14-18 Business Days",
    },
  },
  {
    id: "17",
    name: "The Ready-to-Wear Edit",
    description:
      "Behind the scenes at Klassiq Kulture. Klassiq Tunez personally inspects every garment before it reaches you. This edit features two fresh suits in garment bags — a pinstripe double-breaster and a houndstooth masterpiece, ready for immediate dispatch.",
    price: 200000,
    originalPrice: 220000,
    category: "Ready to Wear",
    image: "/products/klassiq-garment-bags.jpg",
    images: ["/products/klassiq-garment-bags.jpg"],
    isCustomizable: false,
    badge: "Ready Now",
    details: {
      material: "Premium Wool Blend - Pre-Crafted",
      fit: "Standard Sizes with Alteration Service",
      care: "Dry Clean Only",
      turnaround: "3-5 Business Days",
    },
  },
  {
    id: "18",
    name: "The Magnificent Seven",
    description:
      "Seven suits. Seven statements. From olive to navy, burgundy to charcoal, grey to forest green — this is the ultimate wardrobe overhaul. Each suit is fully canvassed and hand-finished. The collection that proves you can never have too much excellence.",
    price: 400000,
    originalPrice: 450000,
    category: "Bespoke Suit",
    image: "/products/seven-suits.jpg",
    images: ["/products/seven-suits.jpg"],
    isCustomizable: true,
    badge: "Ultimate Set",
    details: {
      material: "Italian Wool - Seven Distinct Fabrics",
      fit: "Individually Tailored Per Suit",
      care: "Professional Dry Clean & Storage",
      turnaround: "18-24 Business Days",
    },
  },
  {
    id: "19",
    name: "The Blue Ambassador Set",
    description:
      "The signature look. Klassiq Tunez in his element — draped in sky blue traditional wear with our signature embroidery, surrounded by freshly crafted garments in his atelier. This is the authentic Klassiq Kulture experience, delivered to your door.",
    price: 175000,
    originalPrice: 190000,
    category: "Royal Agbada",
    image: "/products/klassiq-seated.jpg",
    images: ["/products/klassiq-seated.jpg"],
    isCustomizable: true,
    details: {
      material: "Premium Sky Blue Cotton with KK Embroidery",
      fit: "Traditional Flowing with Modern Cut",
      care: "Hand Wash or Dry Clean",
      turnaround: "7-10 Business Days",
    },
  },
  {
    id: "20",
    name: "The Evening Edit",
    description:
      "For the man who owns the night. A classic black shawl-collar tuxedo paired with a navy double-breasted blazer featuring gold hardware. Whether it's a gala, wedding, or red carpet — these pieces ensure you arrive with presence.",
    price: 300000,
    originalPrice: 320000,
    category: "Bespoke Suit",
    image: "/products/tuxedo-collection.jpg",
    images: ["/products/tuxedo-collection.jpg"],
    isCustomizable: true,
    badge: "Formal",
    details: {
      material: "Black Tie Wool & Navy Super 130s",
      fit: "Formal Double-Breasted & Tuxedo",
      care: "Professional Care Only",
      turnaround: "12-16 Business Days",
    },
  },
  {
    id: "21",
    name: "The Double-Breasted Duo",
    description:
      "Two interpretations of the double-breasted masterpiece. Left: a bold navy pinstripe with peak lapels and cream trousers. Right: a solid navy with brass buttons and confident styling. $170 of pure sartorial excellence.",
    price: 255000,
    originalPrice: 270000,
    category: "Bespoke Suit",
    image: "/products/double-breasted-pair.jpg",
    images: ["/products/double-breasted-pair.jpg", "/products/embrace-masculinity.jpg"],
    isCustomizable: true,
    badge: "$170",
    details: {
      material: "Super 130s Wool - Pinstripe & Solid",
      fit: "Classic Double-Breasted",
      care: "Dry Clean Only",
      turnaround: "10-14 Business Days",
    },
  },
  {
    id: "22",
    name: "The Urban Casual Edit",
    description:
      "Not every day calls for a suit. This curated casual collection features earth-toned statement pieces — from embroidered utility shirts to relaxed trousers in cream, khaki, and brown. For the days when comfort meets consciousness.",
    price: 85000,
    originalPrice: 95000,
    category: "Ready to Wear",
    image: "/products/casual-collection.jpg",
    images: ["/products/casual-collection.jpg"],
    isCustomizable: false,
    badge: "Casual",
    details: {
      material: "Premium Cotton & Linen Blend",
      fit: "Relaxed Contemporary",
      care: "Machine Wash Cold or Dry Clean",
      turnaround: "5-7 Business Days",
    },
  },
];

export const WHATSAPP_LINK = "https://api.whatsapp.com/message/HWYG34B235J2L1?autoload=1&app_absent=0";
