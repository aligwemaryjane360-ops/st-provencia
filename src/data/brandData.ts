import { Product, FeatureCard, Testimonial, JournalArticle } from '../types';

import sparklingImg from '../assets/images/sparkling_water_cloudinary.jpg';
import stillImg from '../assets/images/still_water_cloudinary.jpg';
import springImg from '../assets/images/australian_spring_landscape_1785879866552.jpg';
import diningImg from '../assets/images/hospitality_dining_table_1785879876953.jpg';

export const PRODUCTS: Product[] = [
  {
    id: 'sparkling',
    name: 'St. Provencia Sparkling',
    subtitle: 'Deep Sapphire Glass • Natural Effervescence',
    bottleColor: 'Deep Sapphire Blue',
    accentHex: '#214E9F',
    badge: 'Signature Sparkling',
    volume: '750ml / 330ml Glass Bottle',
    ph: '7.4 pH',
    tds: '240 mg/L TDS',
    description: 'Artfully carbonated with micro-refined bubbles that caress the palate without overpowering delicate flavors. Enclosed in our custom Deep Sapphire Blue glass bottle to shield pure mineral integrity from light exposure.',
    tastingNotes: ['Crisp crushed quartz entry', 'Subtle natural salinity', 'Velvety persistent micro-effervescence', 'Clean refreshing finish'],
    bestPairedWith: ['Fresh Pacific Oysters', 'Oscietra Caviar', 'Grilled Sea Bass', 'Dry Champagne & Blanc de Blancs'],
    image: sparklingImg,
    bottleDetails: {
      origin: 'Victorian Highlands Aquifer, Australia',
      filtration: '50-Year Natural Basalt Rock Percolation',
      bubbles: 'Micro-Refined Natural Effervescence (4.8g/L)',
      mouthfeel: 'Crisp, buoyant, structured mineral balance',
      packaging: 'UV-Protected Sapphire UV-Shield Glass',
    },
  },
  {
    id: 'still',
    name: 'St. Provencia Still',
    subtitle: 'Deep Burgundy Glass • Silky Pure Minerality',
    bottleColor: 'Deep Burgundy Wine Bottle',
    accentHex: '#6B2338',
    badge: 'Signature Still',
    volume: '750ml / 330ml Glass Bottle',
    ph: '7.8 pH',
    tds: '210 mg/L TDS',
    description: 'An exceptionally smooth still natural mineral water boasting an alkaline balance and silky texture. Housed in an iconic Deep Burgundy wine silhouette designed to elevate luxury table settings.',
    tastingNotes: ['Silky cashmere mouthfeel', 'Soft limestone undertones', 'Zero astringency', 'Pure palate-cleansing hydration'],
    bestPairedWith: ['Dry-Aged Wagyu Ribeye', 'Truffle Tagliatelle', 'Vintage Cabernet Sauvignon', 'Fine Artisanal Cheeses'],
    image: stillImg,
    bottleDetails: {
      origin: 'Victorian Highlands Aquifer, Australia',
      filtration: 'Natural Subterranean Sandstone & Volcanic Basalt',
      mouthfeel: 'Silky, rounded, perfectly balanced softness',
      packaging: 'Heavy-Weight Deep Burgundy Heavy Glass',
    },
  },
];

export const BRAND_STORY = {
  tagline: 'Crafted by Nature Over Five Decades',
  title: 'The Subterranean Journey of Australian Purity',
  lead: 'Beneath the ancient, untouched granite peaks of the Victorian Highlands lies a pristine subterranean aquifer formed millions of years ago.',
  paragraphs: [
    'Every drop of St. Provencia begins as rainwater falling over cloud-kissed Australian rainforests. For fifty years, the water trickles gently downward through thousands of meters of natural volcanic basalt, crystalline quartz, and mineral-rich limestone.',
    'This painstaking subterranean journey naturally purifies the water while imbuing it with a rare balance of essential minerals—Calcium, Magnesium, Potassium, and Silica—without artificial intervention or heavy industrial processing.',
    'Bottled directly at our protected estate source in custom sapphire and burgundy glass, St. Provencia preserves nature’s pristine intent from the deep earth straight to the world’s most extraordinary dining tables.',
  ],
  quote: '"True luxury is understated. It is water exactly as nature intended—pure, balanced, and timeless."',
  heroImage: springImg,
  diningImage: diningImg,
};

export const MINERAL_PROFILE = [
  { name: 'pH Balance', val: '7.4 - 7.8', desc: 'Slightly alkaline for optimal palate balance and hydration' },
  { name: 'Calcium (Ca²⁺)', val: '38 mg/L', desc: 'Imparts a smooth, velvety texture on the tongue' },
  { name: 'Magnesium (Mg²⁺)', val: '18 mg/L', desc: 'Adds gentle complexity and mineral structure' },
  { name: 'Silica (SiO₂)', val: '42 mg/L', desc: 'Provides a crisp, refreshing, signature silkiness' },
  { name: 'Bicarbonates', val: '145 mg/L', desc: 'Naturally neutralizes palate acidity during dining' },
  { name: 'Sodium', val: '< 8 mg/L', desc: 'Extremely low sodium for pure natural taste' },
];

export const FEATURES: FeatureCard[] = [
  {
    id: 'naturally-sourced',
    title: 'Naturally Sourced',
    subtitle: 'Victorian Highlands Aquifer',
    description: 'Drawn from a deep, protected subterranean spring 180 meters beneath untouched Australian granite.',
    iconName: 'Droplet',
    metric: '180m Aquifer Depth',
  },
  {
    id: 'premium-purity',
    title: 'Uncompromised Purity',
    subtitle: 'Zero Chemical Alteration',
    description: 'Bottled directly at the source with zero chemical additives, preservatives, or artificial mineral adjustments.',
    iconName: 'Sparkles',
    metric: '100% Direct Bottling',
  },
  {
    id: 'balanced-minerals',
    title: 'Balanced Minerals',
    subtitle: 'Optimal TDS Architecture',
    description: 'An ideal 210-240 mg/L Total Dissolved Solids ratio crafted specifically to complement fine food and vintage wines.',
    iconName: 'Scale',
    metric: '225 mg/L Avg TDS',
  },
  {
    id: 'australian-quality',
    title: 'Australian Quality',
    subtitle: 'World-Class Standards',
    description: 'Certified carbon-neutral bottling operation adhering to rigorous international luxury food safety benchmarks.',
    iconName: 'ShieldCheck',
    metric: 'Carbon-Neutral Certified',
  },
  {
    id: 'hospitality-ready',
    title: 'Hospitality Ready',
    subtitle: 'Sommelier Recommended',
    description: 'Designed in consultation with top international sommeliers for seamless wine pairing and service ergonomics.',
    iconName: 'Utensils',
    metric: '5-Star Hospitality Standard',
  },
  {
    id: 'elegant-presentation',
    title: 'Elegant Presentation',
    subtitle: 'Sapphire & Burgundy Glass',
    description: 'Iconic, UV-shielding heavy glass bottles that anchor luxury banquet tables with commanding visual prestige.',
    iconName: 'Crown',
    metric: 'Custom Bespoke Glass',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    quote: 'St. Provencia has become our house mineral water across all our dining rooms. The sparkling has micro-bubbles that cleanse the palate perfectly between complex tasting courses.',
    author: 'Jean-Luc Laurent',
    role: 'Head Sommelier',
    venue: 'L’Étoile Dining Room',
    location: 'Sydney, Australia',
  },
  {
    id: '2',
    quote: 'The Burgundy glass bottle for Still water is an absolute masterpiece of luxury design. Guests immediately notice the weight, texture, and pristine water taste.',
    author: 'Victoria Sterling',
    role: 'Director of Hospitality',
    venue: 'The Grand Pavilion Hotel',
    location: 'Melbourne, Australia',
  },
  {
    id: '3',
    quote: 'Finding a natural mineral water with low sodium and high silica that doesn’t compete with rare vintage Pinot Noirs was a revelation. St. Provencia is unmatched.',
    author: 'Marcus Vance',
    role: 'Master of Wine & Cellar Curator',
    venue: 'Vance & Co. Private Cellars',
    location: 'Brisbane, Australia',
  },
];

export const JOURNAL_ARTICLES: JournalArticle[] = [
  {
    id: 'art-of-pairing',
    title: 'The Art of Mineral Water Pairing in Haute Cuisine',
    category: 'Sommelier Guide',
    readTime: '4 min read',
    date: 'August 2026',
    excerpt: 'Why leading Michelin-starred chefs consider water selection as vital to the dining experience as wine pairing.',
    content: `Water is no longer just a beverage; in high-end dining, it serves as the ultimate palette cleanser and flavor canvas. When pairing mineral water with multi-course menus, sommeliers look closely at Total Dissolved Solids (TDS) and bubble structure. 

St. Provencia Sparkling features micro-fine carbonation that delicate raw seafood like Hiramasa kingfish or Oscietra caviar demands. The micro-bubbles lift residual oils without blistering the tongue. Conversely, St. Provencia Still offers a velvety calcium-magnesium balance that softens rich wagyu fat and heavy truffle reductions. Selecting the correct water ensures every wine sip and culinary bite tastes exactly as the chef intended.`,
    image: diningImg,
    author: 'Antoine Moreau, International Water Sommelier',
  },
  {
    id: 'geological-origin',
    title: 'Fifty Years Beneath the Great Dividing Range',
    category: 'Origin & Terroir',
    readTime: '6 min read',
    date: 'July 2026',
    excerpt: 'Tracing the 50-year subterranean journey of St. Provencia through ancient volcanic basalt and quartz aquifers.',
    content: `High in the Victorian Alps of Australia, ancient volcanic basalt formations act as a monumental natural filter. Rain falling today will not reach the subterranean St. Provencia aquifer for half a century.

As gravity draws the water down through layers of porous rock, mineral exchange occurs slowly and continuously. Silica dissolves into the stream, providing its soft mouthfeel, while natural calcium and bicarbonates stabilize the pH at a harmonious 7.6. Protected from industrial airborne particulates by hundreds of meters of solid stone, the water emerges at a constant 14°C, untouched by man.`,
    image: springImg,
    author: 'Dr. Evelyn Hayes, Hydrogeologist',
  },
  {
    id: 'sustainable-luxury',
    title: 'Redefining Luxury Packaging Through Glass Architecture',
    category: 'Design & Sustainability',
    readTime: '5 min read',
    date: 'June 2026',
    excerpt: 'How custom Sapphire and Burgundy glass bottles protect mineral purity while achieving 100% circular sustainability.',
    content: `Single-use plastic has no place in the world of luxury. St. Provencia custom glass bottles are designed for endless recyclability and reuse in high-end hospitality venues.

The signature Deep Sapphire Blue bottle filters 99.4% of ultraviolet light waves, preventing light-induced mineral oxidation and preserving the water's crisp natural effervescence. Meanwhile, the ergonomic neck tapering was engineered alongside seasoned restaurant captains to ensure a spill-free, balanced pour with single-handed service ease.`,
    image: sparklingImg,
    author: 'Charles Beaumont, Head of Design',
  },
];
