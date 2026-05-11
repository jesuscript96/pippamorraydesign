export interface Work {
  id: string;
  title: string;
  category: string;
  mainImage: string;
  secondaryImages: string[];
  description: string;
  details: { label: string; value: string }[];
}

export const works: Work[] = [
  {
    id: "sundt-desk",
    title: "SUNDT DESK",
    category: "FURNITURE DESIGN",
    mainImage: "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&fit=crop&q=80&w=1600",
    secondaryImages: [
      "https://images.unsplash.com/photo-1505843490538-5133c6c7d0e1?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1541123437800-1c13636f01df?auto=format&fit=crop&q=80&w=800"
    ],
    description: "The 14th century setting for this English elm desk was a vital consideration for the design. A new desk should be a standalone aesthetic that compliments the history of the house. The flooring, as charming as it is, couldn't be relied upon to provide a flat surface. Bespoke metal brackets and fixings retain the desk's overall clean and simple look, and allow the legs to be adjusted to easily fit the floors. And for some modern touches, channels for power cables and more storage were added to streamline the workspace.",
    details: [
      { label: "Metal", value: "John Asprey, Nonesuch Metals" },
      { label: "Carpentry", value: "Dan Hoolahan, Utology" },
      { label: "Photography", value: "Anna Batchelor" }
    ]
  },
  {
    id: "grid-forms",
    title: "GRID FORMS COLLECTION",
    category: "INTERIOR DESIGN",
    mainImage: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80&w=1600",
    secondaryImages: [
      "https://images.unsplash.com/photo-1505693314120-0d443867891c?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&q=80&w=800"
    ],
    description: "A playful exploration of bold geometry and functional seating, offering a statement piece suitable for both modern lofts and traditional homes. The distinct lattice structure provides visual lightness while maintaining structural integrity.",
    details: [
      { label: "Material", value: "Painted Oak & Upholstery" },
      { label: "Year", value: "2023" }
    ]
  },
  {
    id: "offord-hallway",
    title: "OFFORD HALLWAY UNIT",
    category: "BESPOKE CARPENTRY",
    mainImage: "https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&q=80&w=1600",
    secondaryImages: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1582582621959-48d27397dc69?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1558211583-05b18fcc132a?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&q=80&w=800"
    ],
    description: "A tailored organizational solution for an active family. This hallway unit integrates varied storage solutions, seating, and hidden compartments. The natural grain of the timber creates a warm, inviting entrance to the home.",
    details: [
      { label: "Material", value: "Solid Ash" },
      { label: "Installation", value: "On-site fitting" }
    ]
  },
  {
    id: "commercial-bar",
    title: "PECKHAM BAR FIXTURES",
    category: "COMMERCIAL",
    mainImage: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=1600",
    secondaryImages: [
      "https://images.unsplash.com/photo-1572116469696-31de0f17cc34?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1597075687490-8f673c6c17f6?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1583226224856-11b33fb67425?auto=format&fit=crop&q=80&w=800"
    ],
    description: "An elegant commercial fit-out focusing on durable yet refined surfaces for a high-traffic environment. The bar features a sweeping curve that encourages flow, complemented by bespoke display shelving and ambient lighting integrations.",
    details: [
      { label: "Client", value: "The Peckham Local" },
      { label: "Materials", value: "Walnut & Brass" }
    ]
  },
  {
    id: "modern-kitchen",
    title: "SKYLIGHT KITCHEN",
    category: "INTERIOR DESIGN",
    mainImage: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80&w=1600",
    secondaryImages: [
      "https://images.unsplash.com/photo-1556909212-d5b604d0c90d?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1556909211-3698720b160a?auto=format&fit=crop&q=80&w=800"
    ],
    description: "A dark, sophisticated kitchen extension designed to contrast with the bright natural light pouring through the expansive skylights. Featuring seamless cabinetry and concrete worktops for a contemporary, robust cooking space.",
    details: [
      { label: "Contractor", value: "Manning Builds" },
      { label: "Surfaces", value: "Polished Concrete" }
    ]
  },
  {
    id: "lounge-chair",
    title: "THE NORDIC CHAIR",
    category: "FURNITURE DESIGN",
    mainImage: "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?auto=format&fit=crop&q=80&w=1600",
    secondaryImages: [
      "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1617364052961-3a46fb3eb526?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1536859355448-76f92ebdc3b2?auto=format&fit=crop&q=80&w=800"
    ],
    description: "Inspired by minimalist Scandinavian aesthetics, this chair combines comfort with structural honesty. The exposed joinery highlights the craftsmanship, while the natural linen upholstery provides a tactile contrast to the smooth wood.",
    details: [
      { label: "Material", value: "Birch & Linen" },
      { label: "Year", value: "2022" }
    ]
  },
  {
    id: "arch-bookshelf",
    title: "ARCHITECTURAL SHELVING",
    category: "BESPOKE CARPENTRY",
    mainImage: "https://images.unsplash.com/photo-1594620302200-9a762244a156?auto=format&fit=crop&q=80&w=1600",
    secondaryImages: [
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1582582621959-48d27397dc69?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1558211583-05b18fcc132a?auto=format&fit=crop&q=80&w=800"
    ],
    description: "A floor-to-ceiling shelving unit designed to house an extensive collection of art books and ceramics. The varying shelf heights and subtle arch detailing create a rhythm that breaks up the mass of the storage wall.",
    details: [
      { label: "Material", value: "European Oak" },
      { label: "Finish", value: "White Oil" }
    ]
  },
  {
    id: "studio-table",
    title: "ARTIST WORKTABLE",
    category: "FURNITURE DESIGN",
    mainImage: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&q=80&w=1600",
    secondaryImages: [
      "https://images.unsplash.com/photo-1585834898144-8843513a0fc3?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1585833777595-b040989f81fd?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=800"
    ],
    description: "Built for a ceramics studio, this sturdy table is designed to withstand heavy use and messy processes. The thick top is resilient to scratches and water, while the robust legs ensure absolute stability during intensive work.",
    details: [
      { label: "Material", value: "Reclaimed Pine" },
      { label: "Edition", value: "One-off commission" }
    ]
  }
];
