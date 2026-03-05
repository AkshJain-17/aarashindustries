// Logo animation timing
window.addEventListener('load', function() {
  const logoAnimation = document.getElementById('logo-animation');
  // Logo animation displays for 3.4 seconds (matching CSS animation), then hide
  setTimeout(() => {
    logoAnimation.style.display = 'none';
  }, 3400);
});

// Convert product image to base64 for WhatsApp sharing
function getImageAsBase64(imageSrc) {
  return new Promise((resolve) => {
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.onload = function() {
      const canvas = document.createElement('canvas');
      canvas.width = img.naturalWidth;
      canvas.height = img.naturalHeight;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(img, 0, 0);
      try {
        resolve(canvas.toDataURL('image/png'));
      } catch(e) {
        resolve(null);
      }
    };
    img.onerror = () => resolve(null);
    img.src = imageSrc;
  });
}

const products = [
  // TRIPLY
  { 
    name: "Triply Kadhai", 
    details: "Width : 20 – 30 cm | Thickness : 2.5 mm", 
    category: "triply",
    description: "Premium high-quality triply steel construction for perfect heat distribution and durability. Ideal for making traditional curries, stews, and deep-fried preparations.",
    longDescription: "Our Triply Kadhai features a revolutionary three-layer construction (stainless steel exterior, aluminum core, stainless steel interior) that ensures perfect heat distribution across the entire cookware. The heavy-duty construction prevents warping and ensures longevity. The spacious design makes it perfect for family cooking and bulk preparations.",
    features: "Even heating, Durable base, Ergonomic handles, Non-reactive, Induction compatible",
    sizes: ["20 cm", "22 cm", "24 cm", "26 cm", "28 cm", "30 cm"],
    image: "ss/triply kadhai.png"
  },
  { 
    name: "Triply Sauce Pan", 
    details: "Width : 14,16,18 cm | Thickness : 2.5 mm", 
    category: "triply",
    description: "Perfect for cooking sauces, gravies and delicate preparations with precision. The ergonomic handle ensures comfortable grip.",
    longDescription: "Designed specifically for sauce preparation, this Triply Sauce Pan with a pouring spout makes it ideal for everything from hollandaise to gravy. The precise measurements on the inner wall help in accurate cooking. Multiple size options cater to different quantity needs.",
    features: "Precise pouring spout, Sturdy handles, Multiple sizes, Graduated measurements, Triply construction",
    sizes: ["14 cm", "16 cm", "18 cm"],
    image: "ss/triply saucepan.png"
  },
  { 
    name: "Triply Fry Pan", 
    details: "Width : 18 – 24 cm | Thickness : 2.5 mm", 
    category: "triply",
    description: "Ideal for frying, sautéing, and browning foods with excellent heat control and minimal oil usage.",
    longDescription: "Our Triply Fry Pan's large flat surface and shallow sides are perfect for achieving that perfect golden-brown finish. The anti-warp design ensures even cooking across all heat sources including induction. Professional chefs trust this pan for consistent results every time.",
    features: "Anti-warp design, Superior heat retention, Non-reactive, Even heating, Splash guard included",
    sizes: ["18 cm", "20 cm", "22 cm", "24 cm"],
    image: "ss/triply frypan.png"
  },
  { 
    name: "Triply Tasla", 
    details: "Width : 18 – 30 cm | Thickness : 2.5 mm", 
    category: "triply",
    description: "Traditional yet modern design for versatile cooking applications. Deep sides perfect for stir-frying and mixing.",
    longDescription: "The Triply Tasla combines traditional Indian cooking design with modern materials. Its deep curved sides are perfect for stir-frying vegetables, mixing batters, and making thick gravies. The heat-resistant handles remain cool during cooking.",
    features: "Deep sides, Sturdy construction, Heat resistant handles, Ergonomic, Versatile cooking",
    sizes: ["18 cm", "20 cm", "22 cm", "24 cm", "26 cm", "28 cm", "30 cm"],
    image: "ss/triply tasla.png"
  },
  { 
    name: "Triply Casserole", 
    details: "Width : 18 – 24 cm | Thickness : 2.5 mm", 
    category: "triply",
    description: "Perfect for roasting, baking and serving at the table. Oven-safe construction for versatile cooking.",
    longDescription: "Elevate your cooking with this elegant Triply Casserole. Perfect for both stovetop and oven cooking, you can prepare and serve directly from this beautiful piece. The triply construction ensures even heat distribution for perfectly roasted meats and vegetables.",
    features: "Oven-safe, Heat distribution, Beautiful finish, Induction compatible, Serving-ready design",
    sizes: ["18 cm", "20 cm", "22 cm", "24 cm"],
    image: "ss/triply casserole.png"
  },
  { 
    name: "Triply Tope", 
    details: "Width : 14 – 28 cm", 
    category: "triply",
    description: "Essential cooking vessel for daily meal preparation with superior performance and energy efficiency.",
    longDescription: "The Triply Tope is a versatile cooking pot suitable for boiling, simmering, and slow cooking. Its tight-fitting lid ensures moisture retention for tender cooking results. Available in multiple capacities to suit families of all sizes.",
    features: "Multiple capacities, Tight-fitting lid, Energy-efficient, Even heating, Durable base",
    sizes: ["14 cm - 1.5L", "16 cm - 2L", "18 cm - 3L", "20 cm - 4L", "22 cm - 5L", "28 cm - 7L"],
    image: "ss/triply tope.png"
  },

  // HONEYCOMB
  { 
    name: "Honeycomb Dosa Tawa", 
    details: "Width : 28 cm | Thickness : 4.0 mm", 
    category: "honeycomb",
    description: "Create perfect golden dosas with exceptional non-stick surface and quick heating properties.",
    longDescription: "The revolutionary honeycomb pattern on this tawa provides superior heat distribution and exceptional non-stick properties. Make restaurant-quality dosas without oil, featuring crispy edges and perfectly cooked interiors.",
    features: "Honeycomb pattern, Quick heating, Easy cleaning, Non-stick surface, Thermal handles",
    sizes: ["26 cm", "28 cm", "30 cm"],
    image: "ss/honeycomb dosatawa.png"
  },
  { 
    name: "Honeycomb Roti Tawa", 
    details: "Width : 26,28 cm | Thickness : 4.0 mm", 
    category: "honeycomb",
    description: "Prepare soft, fluffy rotis and flatbreads with consistent heating and professional-grade construction.",
    longDescription: "Perfect for making soft, fluffy rotis, parathas, and naans. The even heat distribution from the honeycomb pattern ensures uniform cooking throughout. The smooth, non-stick surface makes flipping and cooking a breeze.",
    features: "Even heat distribution, Durable coating, Professional grade, Non-stick honeycomb, Perfect for breads",
    sizes: ["26 cm", "28 cm"],
    image: "ss/honeycomb tawa.png"
  },
  { 
    name: "Honeycomb Fry Pan", 
    details: "Width : 20 – 24 cm | Thickness : 2.5 mm", 
    category: "honeycomb",
    description: "Superior frying performance with reduced oil requirement. Health-conscious cooking without compromising taste.",
    longDescription: "The honeycomb pattern creates air pockets that reduce oil absorption while maintaining flavor. Fry foods with up to 70% less oil. The sturdy construction withstands high temperatures and frequent use.",
    features: "Health-conscious cooking, Anti-stick surface, Easy maintenance, Oil-reducing design, Professional quality",
    sizes: ["20 cm", "22 cm", "24 cm"],
    image: "ss/honeycomb frypan.png"
  },
  { 
    name: "Honeycomb Kadhai", 
    details: "Width : 22 – 28 cm | Thickness : 2.5 mm", 
    category: "honeycomb",
    description: "Modern design for traditional Indian cooking with advanced non-stick features and heat retention.",
    longDescription: "This honeycomb kadhai bridges traditional Indian cooking with modern technology. Perfect for preparing curries, achieving that perfect caramelized exterior, and heat retention that keeps food warm longer.",
    features: "Heat retention, Non-stick honeycomb, Comfortable handles, Modern design, Versatile cooking",
    sizes: ["22 cm", "24 cm", "26 cm", "28 cm"],
    image: "ss/honeycomb kadhai.png"
  },

  // PRESSURE COOKER
  { 
    name: "Aluminum Pressure Cooker (Classic Design)", 
    details: "Size : 2,3,5 L", 
    category: "pressure",
    description: "Reliable and efficient pressure cooking for quick meal preparation. ISI certified with multiple safety mechanisms.",
    longDescription: "Our Classic Pressure Cooker combines traditional design with modern safety features. Perfect for families, it cooks meals 70% faster than conventional cooking. Multiple capacity options available to suit your family size.",
    features: "ISI certified, Safety valve, Induction compatible, Whistle indicator, Durable construction",
    sizes: ["2 Liter", "3 Liter", "5 Liter"],
    image: "ss/al cooker classic.png"
  },
  { 
    name: "Aluminum Pressure Cooker (Matki Design)", 
    details: "Size : 2,3,5 L", 
    category: "pressure",
    description: "Traditional matka design with modern safety features. Perfect for authentic Indian cooking.",
    longDescription: "The unique matka shape distributes heat from all sides, ensuring even cooking. This traditional design combined with modern pressure cooking technology makes it ideal for dal, rice, and meat preparations.",
    features: "Unique design, Even cooking, Multiple capacities, Traditional shape, Modern safety",
    sizes: ["2 Liter", "3 Liter", "5 Liter"],
    image: "ss/al cooker matki.png"
  },
  { 
    name: "Aluminum Pressure Cooker (Elantra Design)", 
    details: "Size : 2,3,5 L", 
    category: "pressure",
    description: "Premium pressure cooker with advanced safety mechanisms including whistle-free options.",
    longDescription: "The Elantra is our flagship pressure cooker featuring advanced sealing technology and multiple safety layers. Choose from whistle or silent operation modes. Perfect for modern, noise-conscious kitchens.",
    features: "Whistle-free option, Wider range of sizes, Ergonomic, Advanced safety, Premium quality",
    sizes: ["2 Liter", "3 Liter", "5 Liter"],
    image: "ss/al cooker elantra.png"
    },{ 
    name: "Hard Anodised Pressure Cooker (Classic Design)", 
    details: "Size : 2,3,5 L", 
    category: "pressure",
    description: "Reliable and efficient pressure cooking for quick meal preparation. ISI certified with multiple safety mechanisms.",
    longDescription: "Our Classic Pressure Cooker combines traditional design with modern safety features. Perfect for families, it cooks meals 70% faster than conventional cooking. Multiple capacity options available to suit your family size.",
    features: "ISI certified, Safety valve, Induction compatible, Whistle indicator, Durable construction",
    sizes: ["2 Liter", "3 Liter", "5 Liter"],
    image: "ss/ha cooker classic.png"
  },
    { 
    name: "Hard Anodised Pressure Cooker (Matki Design)", 
    details: "Size : 2,3,5 L", 
    category: "pressure",
    description: "Traditional matka design with modern safety features. Perfect for authentic Indian cooking.",
    longDescription: "The unique matka shape distributes heat from all sides, ensuring even cooking. This traditional design combined with modern pressure cooking technology makes it ideal for dal, rice, and meat preparations.",
    features: "Unique design, Even cooking, Multiple capacities, Traditional shape, Modern safety",
    sizes: ["2 Liter", "3 Liter", "5 Liter"],
    image: "ss/ha cooker matki.png"
  },
    { 
    name: "Hard Anodised Pressure Cooker (Elantra Design)", 
    details: "Size : 2,3,5 L", 
    category: "pressure",
    description: "Premium pressure cooker with advanced safety mechanisms including whistle-free options.",
    longDescription: "The Elantra is our flagship pressure cooker featuring advanced sealing technology and multiple safety layers. Choose from whistle or silent operation modes. Perfect for modern, noise-conscious kitchens.",
    features: "Whistle-free option, Wider range of sizes, Ergonomic, Advanced safety, Premium quality",
    sizes: ["2 Liter", "3 Liter", "5 Liter"],
    image: "ss/ha cooker elantra.png"
  },{ 
    name: "Steel Triply Pressure Cooker (Classic Design)", 
    details: "Size : 2,3,5 L", 
    category: "pressure",
    description: "Reliable and efficient pressure cooking for quick meal preparation. ISI certified with multiple safety mechanisms.",
    longDescription: "Our Classic Pressure Cooker combines traditional design with modern safety features. Perfect for families, it cooks meals 70% faster than conventional cooking. Multiple capacity options available to suit your family size.",
    features: "ISI certified, Safety valve, Induction compatible, Whistle indicator, Durable construction",
    sizes: ["2 Liter", "3 Liter", "5 Liter"],
    image: "ss/steel triply cooker classic.png"
  },{ 
    name: "Steel Sandwich Bottom Pressure Cooker (Matki Design)", 
    details: "Size : 2,3,5,6.5 L", 
    category: "pressure",
    description: "Reliable and efficient pressure cooking for quick meal preparation. ISI certified with multiple safety mechanisms.",
    longDescription: "Our Classic Pressure Cooker combines traditional design with modern safety features. Perfect for families, it cooks meals 70% faster than conventional cooking. Multiple capacity options available to suit your family size.",
    features: "ISI certified, Safety valve, Induction compatible, Whistle indicator, Durable construction",
    sizes: ["2 Liter", "3 Liter", "5 Liter", "6.5 Liter"],
    image: "ss/steel cooker sandwich bottom matki.png"
  },

  // NON-STICK
  { 
    name: "Non-Stick Fry Pan", 
    details: "Width : 20 – 26 cm | Thickness : 2.5 mm", 
    category: "nonstick",
    description: "Health-conscious cooking with premium non-stick ceramic coating. Use minimal oil or no oil at all.",
    longDescription: "Our ceramic non-stick coating is PTFE-free and safe for the whole family. The smooth surface prevents food from sticking while allowing proper heat distribution. Perfect for eggs, pancakes, and delicate preparations.",
    features: "Reduced oil usage, Easy cleanup, Ceramic topped, PTFE-free, Health-conscious",
    sizes: ["20 cm", "22 cm", "24 cm", "26 cm"],
    image: "ss/nonstick frypan.png"
  },
  { 
    name: "Non-Stick Dosa Tawa", 
    details: "Width : 25 – 30 cm | Thickness : 2.5 mm", 
    category: "nonstick",
    description: "Make delicious dosas with minimal oil and hassle-free cooking. Professional non-stick coating.",
    longDescription: "The smooth non-stick surface allows you to make crispy dosas with minimal oil. The large surface area accommodates bigger dosas. Easy flipping and serving with the 30cm option.",
    features: "Smooth surface, Temperature indicators, Non-toxic, Large cooking area, Easy cleaning",
    sizes: ["25 cm", "26 cm", "28 cm", "30 cm"],
    image: "ss/nonstick dosapan.png"
  },
  { 
    name: "Non-Stick Deep Kadhai", 
    details: "Width : 22 – 28 cm | Thickness : 2.5 mm", 
    category: "nonstick",
    description: "Deep kadhai perfect for curries and deep frying with non-stick advantage. Healthier cooking option.",
    longDescription: "Deep sides with non-stick coating make this ideal for preparing thick curries, frying with less oil, and stewing. The sloped sides aid in easy stirring and serving.",
    features: "Deep sides, Even heating, Durable coating, Non-stick advantage, Healthier frying",
    sizes: ["22 cm", "24 cm", "26 cm", "28 cm"],
    image: "ss/nonstick kadhai.png"
  },

  // HARD ANODISED
  { 
    name: "Hard Anodised Tope", 
    details: "Width : 10 – 24 cm | Thickness : 3.0 mm", 
    category: "hard",
    description: "Ultra-durable hard anodised cookware for professional kitchens. Non-reactive and scratch-resistant.",
    longDescription: "Hard anodization creates a dense oxide layer that's 4x harder than steel. Completely non-reactive with acidic foods. Perfect for commercial kitchens and serious home cooks.",
    features: "Non-reactive, Scratch-resistant, Long-lasting, Lightweight, Professional grade",
    sizes: ["10 cm", "12 cm", "14 cm", "16 cm", "18 cm", "20 cm", "22 cm", "24 cm"],
    image: "ss/ha tope.png"
  },{ 
    name: "Hard Anodised Spartan", 
    details: "Width : 9 - 12 inch | Thickness : 3.0 mm", 
    category: "hard",
    description: "Ultra-durable hard anodised cookware for professional kitchens. Non-reactive and scratch-resistant.",
    longDescription: "Hard anodization creates a dense oxide layer that's 4x harder than steel. Completely non-reactive with acidic foods. Perfect for commercial kitchens and serious home cooks.",
    features: "Non-reactive, Scratch-resistant, Long-lasting, Lightweight, Professional grade",
    sizes: ["9 inch", "10 inch", "11 inch", "12 inch"],
    image: "ss/ha spartan.png"
  },{ 
    name: "Hard Anodised Lip Saucepan", 
    details: "Width : 9 - 12 inch | Thickness : 3.0 mm", 
    category: "hard",
    description: "Ultra-durable hard anodised cookware for professional kitchens. Non-reactive and scratch-resistant.",
    longDescription: "Hard anodization creates a dense oxide layer that's 4x harder than steel. Completely non-reactive with acidic foods. Perfect for commercial kitchens and serious home cooks.",
    features: "Non-reactive, Scratch-resistant, Long-lasting, Lightweight, Professional grade",
    sizes: ["9 inch", "10 inch", "11 inch", "12 inch"],
    image: "ss/ha lip saucepan.png"
  },{ 
    name: "Hard Anodised Deep Kadhai", 
    details: "Size : 11 - 15 | Thickness : 3.0 mm", 
    category: "hard",
    description: "Ultra-durable hard anodised cookware for professional kitchens. Non-reactive and scratch-resistant.",
    longDescription: "Hard anodization creates a dense oxide layer that's 4x harder than steel. Completely non-reactive with acidic foods. Perfect for commercial kitchens and serious home cooks.",
    features: "Non-reactive, Scratch-resistant, Long-lasting, Lightweight, Professional grade",
    sizes: ["11 inch", "12 inch", "13 inch", "14 inch", "15 inch"],
    image: "ss/ha kadhai.png"
  },{ 
    name: "Hard Anodised Tasra", 
    details: "Width : 11 - 15| Thickness : 3.0 mm", 
    category: "hard",
    description: "Ultra-durable hard anodised cookware for professional kitchens. Non-reactive and scratch-resistant.",
    longDescription: "Hard anodization creates a dense oxide layer that's 4x harder than steel. Completely non-reactive with acidic foods. Perfect for commercial kitchens and serious home cooks.",
    features: "Non-reactive, Scratch-resistant, Long-lasting, Lightweight, Professional grade",
    sizes: ["11", "12", "13", "14", "15"],
    image: "ss/ha tasra.png"
  },
  { 
    name: "Hard Anodised Handi", 
    details: "Size : 2.5 - 4.5 L | Thickness : 3.0 mm", 
    category: "hard",
    description: "Heavy-duty handi for traditional and modern cooking methods. Excellent for stewing and slow cooking.",
    longDescription: "The Hard Anodised Handi combines traditional design with modern durability. Perfect for slow-cooked curries, biryanis, and traditional preparations. The robust construction ensures years of reliable cooking.",
    features: "Robust construction, Heat retention, Great for stewing, Non-reactive, Traditional design",
    sizes: ["2.5 L", "3.5 L", "4.5 L"],
    image: "ss/ha handi.png"
  },{ 
    name: "Hard Anodised Deep Fryer Pan", 
    details: "Width : 10 - 12 | Thickness : 3.0 mm", 
    category: "hard",
    description: "Ultra-durable hard anodised cookware for professional kitchens. Non-reactive and scratch-resistant.",
    longDescription: "Hard anodization creates a dense oxide layer that's 4x harder than steel. Completely non-reactive with acidic foods. Perfect for commercial kitchens and serious home cooks.",
    features: "Non-reactive, Scratch-resistant, Long-lasting, Lightweight, Professional grade",
    sizes: ["10 inch", "11 inch", "12 inch"],
    image: "ss/ha fryerpan.png"
  },{ 
    name: "Hard Anodised Taper Fryer Pan", 
    details: "Width : 10 - 12 | Thickness : 3.0 mm", 
    category: "hard",
    description: "Ultra-durable hard anodised cookware for professional kitchens. Non-reactive and scratch-resistant.",
    longDescription: "Hard anodization creates a dense oxide layer that's 4x harder than steel. Completely non-reactive with acidic foods. Perfect for commercial kitchens and serious home cooks.",
    features: "Non-reactive, Scratch-resistant, Long-lasting, Lightweight, Professional grade",
    sizes: ["10 inch", "11 inch", "12 inch"],
    image: "ss/ha taper fryerpan.png"
  },{ 
    name: "Hard Anodised Tadka Pan", 
    details: "Size : 1 - 2 | Thickness : 3.0 mm", 
    category: "hard",
    description: "Ultra-durable hard anodised cookware for professional kitchens. Non-reactive and scratch-resistant.",
    longDescription: "Hard anodization creates a dense oxide layer that's 4x harder than steel. Completely non-reactive with acidic foods. Perfect for commercial kitchens and serious home cooks.",
    features: "Non-reactive, Scratch-resistant, Long-lasting, Lightweight, Professional grade",
    sizes: ["11 inch", "12 inch", "13 inch", "14 inch", "15 inch"],
    image: "ss/ha tadkapan.png"
  },
  { 
    name: "Hard Anodised Roti Tawa", 
    details: "Width : 9 – 12 inch | Thickness : 4 mm", 
    category: "hard",
    description: "Professional-grade tawa for perfect rotis and flatbreads. Even surface and superior heat distribution.",
    longDescription: "The thick hard-anodised surface provides even heat distribution for perfectly cooked rotis every single time. The non-reactive coating ensures safety with any dough type.",
    features: "Even surface, Non-stick properties, Premium material, Professional-grade, Durable finish",
    sizes: ["9 inch", "10 inch", "11 inch", "12 inch"],
    image: "ss/ha rotitawa.png"
  },{ 
    name: "Hard Anodised Dosa Tawa", 
    details: "Width : 10 – 12 inch | Thickness : 4 mm", 
    category: "hard",
    description: "Professional-grade tawa for perfect rotis and flatbreads. Even surface and superior heat distribution.",
    longDescription: "The thick hard-anodised surface provides even heat distribution for perfectly cooked rotis every single time. The non-reactive coating ensures safety with any dough type.",
    features: "Even surface, Non-stick properties, Premium material, Professional-grade, Durable finish",
    sizes: ["10 inch", "11 inch", "12 inch"],
    image: "ss/ha dosatawa.png"
  },{ 
    name: "Hard Anodised Stew Pan", 
    details: "Width : 9 - 15 inch | Thickness : 3.0 mm", 
    category: "hard",
    description: "Ultra-durable hard anodised cookware for professional kitchens. Non-reactive and scratch-resistant.",
    longDescription: "Hard anodization creates a dense oxide layer that's 4x harder than steel. Completely non-reactive with acidic foods. Perfect for commercial kitchens and serious home cooks.",
    features: "Non-reactive, Scratch-resistant, Long-lasting, Lightweight, Professional grade",
    sizes: ["9 inch", "10 inch", "11 inch", "12 inch", "13 inch", "14 inch", "15 inch"],
    image: "ss/ha stewpan.png"
  },

  // MIRROR POLISH
  { 
    name: "Mirror Polish Deep Kadhai", 
    details: "Size : 1 – 5 | Thickness : 2.6 mm", 
    category: "mirror",
    description: "Sleek mirror-polished finish with excellent cooking performance. Corrosion-resistant and elegant.",
    longDescription: "The stunning mirror-polished exterior makes this a statement piece in your kitchen. The glossy finish not only looks beautiful but also resists corrosion. Cooking performance matches its aesthetic appeal.",
    features: "Shiny aesthetic, Corrosion-resistant, High-quality steel, Mirror finish, Elegant design",
    sizes: ["1", "2", "3", "4", "5"],
    image: "ss/mirror kadhai.png"
  },{ 
    name: "Mirror Polish Bon Ton Kadhai", 
    details: "Size : 1 – 5 | Thickness : 2.6 mm", 
    category: "mirror",
    description: "Sleek mirror-polished finish with excellent cooking performance. Corrosion-resistant and elegant.",
    longDescription: "The stunning mirror-polished exterior makes this a statement piece in your kitchen. The glossy finish not only looks beautiful but also resists corrosion. Cooking performance matches its aesthetic appeal.",
    features: "Shiny aesthetic, Corrosion-resistant, High-quality steel, Mirror finish, Elegant design",
    sizes: ["1", "2", "3", "4", "5"],
    image: "ss/mirror bonton.png"
  },
  { 
    name: "Mirror Polish Tasla", 
    details: "Size : 1 – 5 | Thickness : 2.6 mm", 
    category: "mirror",
    description: "Beautiful mirror-polished tasla for elegant table-to-stove cooking. Perfect for serving too.",
    longDescription: "Cook on the stove and serve directly from this beautiful mirror-polished tasla. The elegant design makes it perfect for entertaining. Corrosion-resistant coating ensures longevity.",
    features: "Premium finish, Even heating, Versatile sizes, Mirror polish, Multi-functional",
    sizes: ["1", "2", "3", "4", "5"],
    image: "ss/mirror tasla.png"
  },
  { 
    name: "Mirror Polish Saucepan (Patti)", 
    details: "Width : 9 – 12 inch | Thickness : 2.6 mm", 
    category: "mirror",
    description: "Refined mirror-polished saucepan for precise cooking. Professional appearance with spillproof lid.",
    longDescription: "This elegant saucepan features a precision spout for accurate pouring and a spillproof lid. The mirror-polished surface combines beauty with functionality for the discerning cook.",
    features: "Professional appearance, Temperature control, Spillproof lid, Elegant design, Precision spout",
    sizes: ["9 inch", "10 inch", "11 inch", "12 inch"],
    image: "ss/mirror patti.png"
  },{ 
    name: "Mirror Polish Saucepan (Lip)", 
    details: "Width : 9 – 12 inch | Thickness : 2.6 mm", 
    category: "mirror",
    description: "Refined mirror-polished saucepan for precise cooking. Professional appearance with spillproof lid.",
    longDescription: "This elegant saucepan features a precision spout for accurate pouring and a spillproof lid. The mirror-polished surface combines beauty with functionality for the discerning cook.",
    features: "Professional appearance, Temperature control, Spillproof lid, Elegant design, Precision spout",
    sizes: ["9 inch", "10 inch", "11 inch", "12 inch"],
    image: "ss/mirror lip.png"
  },{ 
    name: " Mirror Polish Roti Tawa", 
    details: "Width : 9 – 12 inch | Thickness : 4 mm", 
    category: "mirror",
    description: "Professional-grade tawa for perfect rotis and flatbreads. Even surface and superior heat distribution.",
    longDescription: "The thick surface provides even heat distribution for perfectly cooked rotis every single time. The non-reactive coating ensures safety with any dough type.",
    features: "Even surface, Non-stick properties, Premium material, Professional-grade, Durable finish",
    sizes: ["9 inch", "10 inch", "11 inch", "12 inch"],
    image: "ss/mirror tawa.png"
  },{ 
    name: "Mirror Polish Urli", 
    details: "Size : 1 x 5 | Thickness : 2.6 mm", 
    category: "mirror",
    description: "Professional-grade tawa for perfect rotis and flatbreads. Even surface and superior heat distribution.",
    longDescription: "The thick surface provides even heat distribution for perfectly cooked rotis every single time. The non-reactive coating ensures safety with any dough type.",
    features: "Even surface, Non-stick properties, Premium material, Professional-grade, Durable finish",
    sizes: ["9 inch", "10 inch", "11 inch", "12 inch"],
    image: "ss/mirror urli.png"
  },{ 
    name: "Mirror Polish Tope", 
    details: "Size : 7,10,19 | Thickness : 2.6 mm", 
    category: "mirror",
    description: "Professional-grade tope with mirror polish finish. Even surface and superior heat distribution.",
    longDescription: "The thick surface provides even heat distribution for perfectly cooked rotis every single time. The non-reactive coating ensures safety with any dough type.",
    features: "Even surface, Non-stick properties, Premium material, Professional-grade, Durable finish",
    sizes: ["7 x 9", "10 x 18", "19 x 24"],
    image: "ss/mirror tope.png"
  },{ 
    name: "Mirror Polish Fry Pan", 
    details: "Width : 9 – 12 inch | Thickness : 2.6 mm", 
    category: "mirror",
    description: "Refined mirror-polished fry pan for precise cooking. Professional appearance with spillproof lid.",
    longDescription: "This elegant fry pan features a precision spout for accurate pouring and a spillproof lid. The mirror-polished surface combines beauty with functionality for the discerning cook.",
    features: "Professional appearance, Temperature control, Spillproof lid, Elegant design, Precision spout",
    sizes: ["9 inch", "10 inch", "11 inch", "12 inch"],
    image: "ss/mirror frypan.png"
  },{ 
    name: "Mirror Polish Stew Pan", 
    details: "Size : 1 – 5 | Thickness : 2.6 mm", 
    category: "mirror",
    description: "Beautiful mirror-polished stew pan for elegant table-to-stove cooking. Perfect for serving too.",
    longDescription: "Cook on the stove and serve directly from this beautiful mirror-polished stew pan. The elegant design makes it perfect for entertaining. Corrosion-resistant coating ensures longevity.",
    features: "Premium finish, Even heating, Versatile sizes, Mirror polish, Multi-functional",
    sizes: ["1", "2", "3", "4", "5"],
    image: "ss/mirror stewpan.png"
  },{ 
    name: "Mirror Polish Handi", 
    details: "Size : 1 x 3 | Thickness : 2.6 mm", 
    category: "mirror",
    description: "Beautiful mirror-polished handi for elegant table-to-stove cooking. Perfect for serving too.",
    longDescription: "Cook on the stove and serve directly from this beautiful mirror-polished handi. The elegant design makes it perfect for entertaining. Corrosion-resistant coating ensures longevity.",
    features: "Premium finish, Even heating, Versatile sizes, Mirror polish, Multi-functional",
    sizes: ["1 x 3"],
    image: "ss/mirror handi.png"
  },

  // POWDER COATING
  { 
    name: "Powder Coated Fry Pan", 
    details: "Size : 10 – 12 inch | Thickness : 2.6 mm", 
    category: "powder",
    description: "Modern powder-coated design for contemporary kitchens. Colored finish with thermal bakelite handles.",
    longDescription: "Add a pop of color to your kitchen with our powder-coated fry pan. The durable coating protects the cookware while looking stylish. Thermal bakelite handles stay cool during cooking.",
    features: "Colored finish, Thermal bakelite handles, Easy identification, Modern design, Durable coating",
    sizes: ["10 Inch", "11 Inch", "12 Inch"],
    image: "ss/powder frypan.png"
    },
  { 
    name: "Powder Coated Saucepan", 
    details: "Size : 9 – 12 inch | Thickness : 2.6 mm", 
    category: "powder",
    description: "Modern powder-coated design for contemporary kitchens. Colored finish with thermal bakelite handles.",
    longDescription: "Add a pop of color to your kitchen with our powder-coated fry pan. The durable coating protects the cookware while looking stylish. Thermal bakelite handles stay cool during cooking.",
    features: "Colored finish, Thermal bakelite handles, Easy identification, Modern design, Durable coating",
    sizes: ["9 Inch", "10 Inch", "11 Inch", "12 Inch"],
    image: "ss/powder saucepan.png"
  },{ 
    name: "Powder Coated Stew Pan", 
    details: "Size : 1 x 5 | Thickness : 2 mm", 
    category: "powder",
    description: "Modern powder-coated design for contemporary kitchens. Colored finish with thermal bakelite handles.",
    longDescription: "Add a pop of color to your kitchen with our powder-coated fry pan. The durable coating protects the cookware while looking stylish. Thermal bakelite handles stay cool during cooking.",
    features: "Colored finish, Thermal bakelite handles, Easy identification, Modern design, Durable coating",
    sizes: ["1 x 5"],
    image: "ss/powder stewpan.png"
  },{ 
    name: "Powder Coated Deep Kadhai", 
    details: "Size : 1 x 5 | Thickness : 2.6 mm", 
    category: "powder",
    description: "Modern powder-coated design for contemporary kitchens. Colored finish with thermal bakelite handles.",
    longDescription: "Add a pop of color to your kitchen with our powder-coated fry pan. The durable coating protects the cookware while looking stylish. Thermal bakelite handles stay cool during cooking.",
    features: "Colored finish, Thermal bakelite handles, Easy identification, Modern design, Durable coating",
    sizes: ["1 x 5"],
    image: "ss/powder deep kadhai.png"
  },{ 
    name: "Powder Coated Urli", 
    details: "Size : 1 - 5 | Thickness : 2.6 mm", 
    category: "powder",
    description: "Modern powder-coated design for contemporary kitchens. Colored finish with thermal bakelite handles.",
    longDescription: "Add a pop of color to your kitchen with our powder-coated fry pan. The durable coating protects the cookware while looking stylish. Thermal bakelite handles stay cool during cooking.",
    features: "Colored finish, Thermal bakelite handles, Easy identification, Modern design, Durable coating",
    sizes: ["1", "2", "3", "4", "5"],
    image: "ss/powder urli.png"
  },{ 
    name: "Powder Coated Tope", 
    details: "Size : 10 - 18 & 19 - 24 | Thickness : 2.6 mm", 
    category: "powder",
    description: "Modern powder-coated design for contemporary kitchens. Colored finish with thermal bakelite handles.",
    longDescription: "Add a pop of color to your kitchen with our powder-coated fry pan. The durable coating protects the cookware while looking stylish. Thermal bakelite handles stay cool during cooking.",
    features: "Colored finish, Thermal bakelite handles, Easy identification, Modern design, Durable coating",
    sizes: ["10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24"],
    image: "ss/powder tope.png"
  },
  { 
    name: "Powder Coated Handi", 
    details: "Size :1 – 3 | Thickness : 2.6 mm", 
    category: "powder",
    description: "Stylish powder-coated handi with practical functionality. Multiple vibrant colors available.",
    longDescription: "Combine style with substance with our colorful powder-coated handi. Perfect for meal prep and storage. The heat-resistant exterior ensures safe handling even during cooking.",
    features: "Multiple colors, Heat-resistant exterior, Durable coating, Stylish design, Practical size",
    sizes: ["1", "2", "3"],
    image: "ss/powder handi.png"
  },

  // SANDWICH BOTTOM
  { 
    name: "Sandwich Bottom Fry Pan", 
    details: "Size : 10 - 15", 
    category: "sandwich",
    description: "Premium sandwich bottom cookware with superior heat distribution and non-stick properties. Perfect for everyday cooking.",
    longDescription: "Our Sandwich Bottom Fry Pan features a three-layer sandwich bottom construction that provides exceptional heat distribution and retention. The non-stick coating ensures effortless cooking and easy cleaning. Induction compatible and built for long-lasting durability.",
    features: "Sandwich bottom construction, Superior heat distribution, Non-stick coating, Induction compatible, Durable finish",
    sizes: ["10 cm", "12 cm", "14 cm"],
    image: "ss/sandwich frypan.png"
  },
  { 
    name: "Sandwich Bottom Saucepan", 
    details: "Size : 10 - 15", 
    category: "sandwich",
    description: "Versatile sandwich bottom saucepan ideal for cooking sauces, soups, and gravies with precision temperature control.",
    longDescription: "Designed for everyday kitchen needs, this sandwich bottom saucepan delivers consistent heating performance. The even heat distribution prevents hotspots and ensures perfectly cooked dishes every time. Features sturdy handles and a precision pouring spout.",
    features: "Sandwich bottom, Even heating, Precision spout, Sturdy handles, Non-reactive interior",
    sizes: ["10 cm", "12 cm", "14 cm"],
    image: "ss/sandwich saucepan.png"
  },
  { 
    name: "Sandwich Bottom Kadhai", 
    details: "Size : 11 - 16", 
    category: "sandwich",
    description: "Large capacity sandwich bottom kadai perfect for making traditional dishes and bulk cooking preparations.",
    longDescription: "Experience superior cooking performance with our sandwich bottom kadai. The expanded base design ensures maximum surface area for even cooking. Ideal for curries, stews, and deep-fried preparations. The high walls provide safety and convenience during cooking.",
    features: "Sandwich bottom, Large capacity, High walls, Heat resistant handles, Perfect for curries",
    sizes: ["24 cm", "26 cm", "28 cm", "30 cm", "32 cm"],
    image: "ss/sandwich kadhai.png"
  },{ 
    name: "Sandwich Bottom Casserole", 
    details: "Size : 1 - 5", 
    category: "sandwich",
    description: "Large capacity sandwich bottom casserole perfect for making traditional dishes and bulk cooking preparations.",
    longDescription: "Experience superior cooking performance with our sandwich bottom casserole. The expanded base design ensures maximum surface area for even cooking. Ideal for curries, stews, and deep-fried preparations. The high walls provide safety and convenience during cooking.",
    features: "Sandwich bottom, Large capacity, High walls, Heat resistant handles, Perfect for curries",
    sizes: ["1", "2", "3", "4", "5"],
    image: "ss/sandwich casserole.png"
  },{ 
    name: "Sandwich Bottom Tope", 
    details: "Size : 10 - 18", 
    category: "sandwich",
    description: "Large capacity sandwich bottom tope perfect for making traditional dishes and bulk cooking preparations.",
    longDescription: "Experience superior cooking performance with our sandwich bottom tope. The expanded base design ensures maximum surface area for even cooking. Ideal for curries, stews, and deep-fried preparations. The high walls provide safety and convenience during cooking.",
    features: "Sandwich bottom, Large capacity, High walls, Heat resistant handles, Perfect for curries",
    sizes: ["10 cm", "12 cm", "14 cm", "16 cm", "18 cm"],
    image: "ss/sandwich tope.png"
  }
];

const container = document.getElementById("products");
let currentProduct = null;

function displayProducts(list) {
  container.innerHTML = "";
  list.forEach((p, index) => {
    setTimeout(() => {
      const card = document.createElement("div");
      card.className = "product";
      card.onclick = () => openProductModal(p);
      card.innerHTML = `
        <div class="product-image">
          <img src="${p.image}" alt="${p.name}">
        </div>
        <h3>${p.name}</h3>
        <p><strong>Specifications:</strong> ${p.details}</p>
        <p>${p.description}</p>
        <div class="product-details">
          <strong>Features:</strong> ${p.features}
        </div>
        <div class="view-details-btn">View Details</div>
      `;
      container.appendChild(card);
    }, index * 50);
  });
}

function openProductModal(product) {
  currentProduct = product;
  
  document.getElementById("modalProductImage").src = product.image;
  document.getElementById("modalProductName").textContent = product.name;
  document.getElementById("modalProductCategory").textContent = product.category.toUpperCase();
  document.getElementById("modalProductDescription").textContent = product.longDescription;
  document.getElementById("modalProductSpecs").textContent = product.details;
  document.getElementById("modalProductFeatures").textContent = product.features;
  
  // Display available sizes as checkboxes
  const sizesContainer = document.getElementById("modalSizeCheckboxes");
  sizesContainer.innerHTML = '';
  
  if (product.sizes && product.sizes.length > 0) {
    product.sizes.forEach(size => {
      const label = document.createElement('label');
      label.className = 'size-checkbox-label';
      
      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.value = size;
      
      const span = document.createElement('span');
      span.textContent = size;
      
      label.appendChild(checkbox);
      label.appendChild(span);
      sizesContainer.appendChild(label);
    });
  }
  
  document.getElementById("productModal").style.display = "block";
}

function closeProductModal() {
  document.getElementById("productModal").style.display = "none";
  currentProduct = null;
  selectedSize = null;
  selectedColor = null;
}

function getSelectedSizes() {
  const checkboxes = document.querySelectorAll('#modalSizeCheckboxes input[type="checkbox"]:checked');
  return Array.from(checkboxes).map(cb => cb.value);
}

async function addToCart() {
  if (!currentProduct) {
    alert('Please select a product first.');
    return;
  }
  
  const selectedSizes = getSelectedSizes();
  if (selectedSizes.length === 0) {
    alert('Please select at least one size.');
    return;
  }

  // Show loading state on button
  const btn = document.querySelector('.add-to-cart-btn');
  const originalText = btn.textContent;
  btn.textContent = 'Preparing...';
  btn.disabled = true;
  
  // Try to convert product image to base64
  let imageData = null;
  if (currentProduct.image) {
    imageData = await getImageAsBase64(currentProduct.image);
  }

  btn.textContent = originalText;
  btn.disabled = false;
  
  // Pass product details to contact page via URL parameters
  const params = new URLSearchParams();
  
  params.set('product', currentProduct.name);
  params.set('specs', currentProduct.details);
  params.set('category', currentProduct.category);
  params.set('selectedSizes', selectedSizes.join(', '));
  
  // Pass base64 image if available, otherwise fall back to image path
  if (imageData) {
    params.set('image', imageData);
  } else if (currentProduct.image) {
    params.set('image', currentProduct.image);
  }
  
  window.open('contact.html?' + params.toString(), 'OrderEnquiry', 'width=800,height=600,scrollbars=yes');
  closeProductModal();
}

// Close modal when clicking outside of it
window.onclick = function (event) {
  const modal = document.getElementById("productModal");
  if (event.target === modal) {
    closeProductModal();
  }
}

function filterProducts(category) {
  if (category === "all") {
    displayProducts(products);
  } else {
    displayProducts(products.filter(p => p.category === category));
  }
}

// Display all products on page load

displayProducts(products);
