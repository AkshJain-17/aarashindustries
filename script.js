// =============================================================================
// SECTION 1: apply_red_white — Node.js build script (run with: node script.js apply)
// =============================================================================
if (typeof require !== 'undefined' && typeof module !== 'undefined') {
  const fs = require('fs');
  const path = require('path');

  const styleCssPath = path.join(__dirname, 'style.css');
  const contactHtmlPath = path.join(__dirname, 'contact.html');
  const indexHtmlPath = path.join(__dirname, 'index.html');

  function applyRedWhite() {
    let styleCss = fs.readFileSync(styleCssPath, 'utf8');

    const primaryRed = "#D00000";
    const surfaceWhite = "#FFFFFF";

    // Global Red & White Palette
    styleCss = styleCss.replace(/background: #faf9f6;/g, "background: #ffffff;");
    styleCss = styleCss.replace(/color: #5c5c5c;/g, "color: #1a1a1a;");
    styleCss = styleCss.replace(/'Outfit', sans-serif/g, "'Manrope', sans-serif");
    styleCss = styleCss.replace(/'Playfair Display', serif/g, "'Noto Serif', serif");

    // Logo Center
    styleCss = styleCss.replace(/\.logo \{\s*max-width: 150px;\s*height: auto;\s*margin-bottom: 15px;\s*\}/, ".logo {\n    max-width: 150px;\n    height: auto;\n    display: block;\n    margin: 0 auto 15px auto;\n}");
    styleCss = styleCss.replace(/\.logo-emerge-img \{\s*width: 280px;\s*height: 280px;\s*mix-blend-mode: multiply;/, ".logo-emerge-img {\n    width: 280px;\n    height: 280px;\n    display: block;\n    margin: 0 auto;\n    mix-blend-mode: multiply;");

    // Nav
    styleCss = styleCss.replace(/nav \{\s*background: linear-gradient\(135deg, #c40000 0%, #a00000 100%\);/g, `nav {\n    background: #ffffff;\n    border-bottom: 2px solid ${primaryRed};`);
    styleCss = styleCss.replace(/nav button \{\s*background: white;\s*border: 2px solid transparent;\s*padding: 10px 18px;\s*margin: 5px;\s*cursor: pointer;\s*border-radius: 25px;\s*font-weight: 600;\s*color: #c40000;/g, `nav button {\n    background: #ffffff;\n    border: 1px solid #e0e0e0;\n    padding: 10px 18px;\n    margin: 5px;\n    cursor: pointer;\n    border-radius: 25px;\n    font-weight: 600;\n    color: ${primaryRed};`);
    styleCss = styleCss.replace(/nav button:hover \{\s*background: #c40000;\s*color: white;/g, `nav button:hover {\n    background: ${primaryRed};\n    color: #ffffff;\n    border-color: ${primaryRed};`);

    // Product styling
    styleCss = styleCss.replace(/border-left: 5px solid #c40000;/g, `border-left: 5px solid ${primaryRed};`);
    styleCss = styleCss.replace(/\.product h3 \{\s*color: #c40000;/g, `.product h3 {\n    color: ${primaryRed};`);
    styleCss = styleCss.replace(/background: linear-gradient\(135deg, #c40000 0%, #e63946 100%\);/g, `background: ${primaryRed}; color: #ffffff;`);

    // Size buttons
    if (!styleCss.includes('.size-checkboxes label')) {
      styleCss += `\n.size-checkboxes label {\n    background: ${primaryRed};\n    color: #000000 !important;\n    font-weight: 800;\n    padding: 8px 16px;\n    border-radius: 4px;\n    cursor: pointer;\n    margin: 5px;\n    display: inline-flex;\n    align-items: center;\n    gap: 8px;\n    transition: all 0.2s;\n}\n.size-checkboxes label:hover {\n    opacity: 0.9;\n}\n.size-checkboxes label input {\n    accent-color: #000;\n}`;
    }

    fs.writeFileSync(styleCssPath, styleCss);

    // Contact Page
    let contactHtml = fs.readFileSync(contactHtmlPath, 'utf8');
    contactHtml = contactHtml.replace(/background: linear-gradient\(135deg, #c40000 0%, #e63946 100%\);/g, "background: #f8f9fa;");
    contactHtml = contactHtml.replace(/\.contact-container \{\s*background: white;/g, `.contact-container {\n    background: #ffffff;\n    border-top: 5px solid ${primaryRed};`);
    contactHtml = contactHtml.replace(/\.contact-container h1 \{\s*color: #c40000;/g, `.contact-container h1 {\n    color: ${primaryRed};\n    font-family: 'Noto Serif', serif;`);
    contactHtml = contactHtml.replace(/font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;/g, "font-family: 'Manrope', sans-serif;");
    contactHtml = contactHtml.replace(/border-left: 5px solid #c40000;/g, `border-left: 5px solid ${primaryRed};`);
    contactHtml = contactHtml.replace(/\.contact-label \{\s*color: #c40000;/g, `.contact-label {\n    color: ${primaryRed};`);
    contactHtml = contactHtml.replace(/\.btn-call \{\s*background: linear-gradient\(135deg, #25d366 0%, #128c7e 100%\);/g, `.btn-call {\n    background: ${primaryRed};`);
    contactHtml = contactHtml.replace(/\.btn-close \{\s*background: #f0f0f0;\s*color: #c40000;\s*border: 2px solid #c40000;/g, `.btn-close {\n    background: #ffffff;\n    color: ${primaryRed};\n    border: 1px solid ${primaryRed};`);
    fs.writeFileSync(contactHtmlPath, contactHtml);

    // Font update
    const updateFonts = (html) =>
      html.replace(/family=Outfit:wght@300;400;500;600&family=Playfair\+Display:ital,wght@0,400;0,500;0,600;1,400/g,
        "family=Noto+Serif:ital,wght@0,400;0,700;1,400;1,700&family=Manrope:wght@300;400;500;600;700;800");
    fs.writeFileSync(indexHtmlPath, updateFonts(fs.readFileSync(indexHtmlPath, 'utf8')));
    fs.writeFileSync(contactHtmlPath, updateFonts(fs.readFileSync(contactHtmlPath, 'utf8')));

    console.log('Premium Red & White theme applied globally.');
  }

  // =============================================================================
  // SECTION 2: intensify_red — Node.js build script (run with: node script.js intensify)
  // =============================================================================
  function intensifyRed() {
    const primaryRed = "#D00000";
    const surfaceWhite = "#FFFFFF";

    let styleCss = fs.readFileSync(styleCssPath, 'utf8');

    // Loading Screen: Red Background
    styleCss = styleCss.replace(/background: #ffffff;/g, (match, offset) => {
      return offset < 1000 ? `background: ${primaryRed};` : `background: ${surfaceWhite};`;
    });
    styleCss = styleCss.replace(/background: #ffffff;/g, `background: ${surfaceWhite};`);
    styleCss = styleCss.replace(/body \{\n    font-family: 'Manrope', sans-serif;\n    margin: 0;\n    background: #ffffff;/, `body {\n    font-family: 'Manrope', sans-serif;\n    margin: 0;\n    background: #ffffff;`);
    styleCss = styleCss.replace(/\.logo-animation \{\s*position: fixed;[\s\S]*?background: #ffffff;/, `.logo-animation {\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background: ${primaryRed};`);

    // Loading Screen Icons: White
    styleCss = styleCss.replace(/stroke: #e5e0d8 !important;/g, "stroke: #ffffff !important;");
    styleCss = styleCss.replace(/fill: #e5e0d8 !important;/g, "fill: #ffffff !important;");
    styleCss = styleCss.replace(/rgba\(196,0,0,0.03\)/g, "rgba(255,255,255,0.05)");
    styleCss = styleCss.replace(/rgba\(196,0,0,0.02\)/g, "rgba(255,255,255,0.03)");

    // Header: Red Background, White Text
    styleCss = styleCss.replace(/header \{\s*background: #ffffff;/g, `header {\n    background: ${primaryRed};\n    box-shadow: 0 4px 20px rgba(0,0,0,0.1);`);
    styleCss = styleCss.replace(/header h1 \{\s*color: #ffb68d;/g, `header h1 {\n    color: #ffffff;`);
    styleCss = styleCss.replace(/header p \{\s*color: #b8b8bd;/g, `header p {\n    color: rgba(255,255,255,0.8);`);
    styleCss = styleCss.replace(/\.logo \{/g, ".logo {\n    filter: brightness(0) invert(1);");
    styleCss = styleCss.replace(/header \{\n    padding: 60px 20px;\n    background: #faf9f6;/g, `header {\n    padding: 60px 20px;\n    background: ${primaryRed};`);

    // Nav: Red Background
    styleCss = styleCss.replace(/nav \{\s*background: #ffffff;\n    border-bottom: 2px solid #D00000;/g, `nav {\n    background: ${primaryRed};\n    border-bottom: 1px solid rgba(255,255,255,0.1);`);
    styleCss = styleCss.replace(/nav button \{\s*background: #ffffff;\s*border: 1px solid #e0e0e0;[\s\S]*?color: #D00000;/g, `nav button {\n    background: rgba(255,255,255,0.1);\n    border: 1px solid rgba(255,255,255,0.2);\n    padding: 10px 18px;\n    margin: 5px;\n    cursor: pointer;\n    border-radius: 25px;\n    font-weight: 600;\n    color: #ffffff;`);
    styleCss = styleCss.replace(/nav button:hover \{\s*background: #D00000;\s*color: #ffffff;/g, `nav button:hover {\n    background: #ffffff;\n    color: ${primaryRed};`);

    // Footer: Red Background
    styleCss = styleCss.replace(/footer \{\n    background: #131315;\n    color: #c6c6cb;/g, `footer {\n    background: ${primaryRed};\n    color: #ffffff;`);
    styleCss = styleCss.replace(/footer p \{\n    margin: 5px 0;\n    color: #c6c6cb;/g, `footer p {\n    margin: 5px 0;\n    color: #ffffff;`);

    fs.writeFileSync(styleCssPath, styleCss);

    // Contact Page
    let contactHtml = fs.readFileSync(contactHtmlPath, 'utf8');
    contactHtml = contactHtml.replace(/background: #fdfdfd;/g, `background: #fffafa;`);
    contactHtml = contactHtml.replace(/background: #ffffff;/g, `background: #ffffff;`);
    contactHtml = contactHtml.replace(/border-top: 5px solid #D00000;/g, `border-top: 8px solid #D00000;`);
    fs.writeFileSync(contactHtmlPath, contactHtml);

    console.log('Intensified Red theme applied successfully.');
  }

  // CLI entry point
  const arg = process.argv[2];
  if (arg === 'apply') applyRedWhite();
  else if (arg === 'intensify') intensifyRed();
  else {
    console.log('Usage: node script.js [apply|intensify]');
    console.log('  apply     — Apply the red & white theme');
    console.log('  intensify — Intensify the red theme');
  }
}

// =============================================================================
// SECTION 3: Browser-side application logic
// =============================================================================

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
  {
    "name": "Triply Kadhai",
    "details": "Width : 20 – 30 cm | Thickness : 2.5 mm",
    "category": "triply",
    "description": "Experience unmatched culinary precision with our masterfully crafted triply stainless steel. Premium high-quality triply steel construction for perfect heat distribution and durability. Ideal for making traditional curries, stews, and deep-fried preparations.",
    "longDescription": "Engineered for the professional kitchen and the passionate home chef alike, our triply stainless steel architecture ensures rapid, perfectly even heat distribution. Its robust 2.5mm foundation provides a lifetime of exceptional cooking performance. Our Triply Kadhai features a revolutionary three-layer construction (stainless steel exterior, aluminum core, stainless steel interior) that ensures perfect heat distribution across the entire cookware. The heavy-duty construction prevents warping and ensures longevity. The spacious design makes it perfect for family cooking and bulk preparations.",
    "features": "Even heating, Durable base, Ergonomic handles, Non-reactive, Induction compatible",
    "sizes": [
      "20 cm",
      "22 cm",
      "24 cm",
      "26 cm",
      "28 cm",
      "30 cm"
    ],
    "image": "ss/triply kadhai.png"
  },
  {
    "name": "Triply Sauce Pan",
    "details": "Width : 14,16,18 cm | Thickness : 2.5 mm",
    "category": "triply",
    "description": "Experience unmatched culinary precision with our masterfully crafted triply stainless steel. Perfect for cooking sauces, gravies and delicate preparations with precision. The ergonomic handle ensures comfortable grip.",
    "longDescription": "Engineered for the professional kitchen and the passionate home chef alike, our triply stainless steel architecture ensures rapid, perfectly even heat distribution. Its robust 2.5mm foundation provides a lifetime of exceptional cooking performance. Designed specifically for sauce preparation, this Triply Sauce Pan with a pouring spout makes it ideal for everything from hollandaise to gravy. The precise measurements on the inner wall help in accurate cooking. Multiple size options cater to different quantity needs.",
    "features": "Precise pouring spout, Sturdy handles, Multiple sizes, Graduated measurements, Triply construction",
    "sizes": [
      "14 cm",
      "16 cm",
      "18 cm"
    ],
    "image": "ss/triply saucepan.png"
  },
  {
    "name": "Triply Fry Pan",
    "details": "Width : 18 – 24 cm | Thickness : 2.5 mm",
    "category": "triply",
    "description": "Experience unmatched culinary precision with our masterfully crafted triply stainless steel. Ideal for frying, sautéing, and browning foods with excellent heat control and minimal oil usage.",
    "longDescription": "Engineered for the professional kitchen and the passionate home chef alike, our triply stainless steel architecture ensures rapid, perfectly even heat distribution. Its robust 2.5mm foundation provides a lifetime of exceptional cooking performance. Our Triply Fry Pan's large flat surface and shallow sides are perfect for achieving that perfect golden-brown finish. The anti-warp design ensures even cooking across all heat sources including induction. Professional chefs trust this pan for consistent results every time.",
    "features": "Anti-warp design, Superior heat retention, Non-reactive, Even heating, Splash guard included",
    "sizes": [
      "18 cm",
      "20 cm",
      "22 cm",
      "24 cm"
    ],
    "image": "ss/triply frypan.png"
  },
  {
    "name": "Triply Tasla",
    "details": "Width : 18 – 30 cm | Thickness : 2.5 mm",
    "category": "triply",
    "description": "Experience unmatched culinary precision with our masterfully crafted triply stainless steel. Traditional yet modern design for versatile cooking applications. Deep sides perfect for stir-frying and mixing.",
    "longDescription": "Engineered for the professional kitchen and the passionate home chef alike, our triply stainless steel architecture ensures rapid, perfectly even heat distribution. Its robust 2.5mm foundation provides a lifetime of exceptional cooking performance. The Triply Tasla combines traditional Indian cooking design with modern materials. Its deep curved sides are perfect for stir-frying vegetables, mixing batters, and making thick gravies. The heat-resistant handles remain cool during cooking.",
    "features": "Deep sides, Sturdy construction, Heat resistant handles, Ergonomic, Versatile cooking",
    "sizes": [
      "18 cm",
      "20 cm",
      "22 cm",
      "24 cm",
      "26 cm",
      "28 cm",
      "30 cm"
    ],
    "image": "ss/triply tasla.png"
  },
  {
    "name": "Triply Casserole",
    "details": "Width : 18 – 24 cm | Thickness : 2.5 mm",
    "category": "triply",
    "description": "Experience unmatched culinary precision with our masterfully crafted triply stainless steel. Perfect for roasting, baking and serving at the table. Oven-safe construction for versatile cooking.",
    "longDescription": "Engineered for the professional kitchen and the passionate home chef alike, our triply stainless steel architecture ensures rapid, perfectly even heat distribution. Its robust 2.5mm foundation provides a lifetime of exceptional cooking performance. Elevate your cooking with this elegant Triply Casserole. Perfect for both stovetop and oven cooking, you can prepare and serve directly from this beautiful piece. The triply construction ensures even heat distribution for perfectly roasted meats and vegetables.",
    "features": "Oven-safe, Heat distribution, Beautiful finish, Induction compatible, Serving-ready design",
    "sizes": [
      "18 cm",
      "20 cm",
      "22 cm",
      "24 cm"
    ],
    "image": "ss/triply casserole.png"
  },
  {
    "name": "Triply Tope",
    "details": "Width : 14 – 28 cm",
    "category": "triply",
    "description": "Experience unmatched culinary precision with our masterfully crafted triply stainless steel. Essential cooking vessel for daily meal preparation with superior performance and energy efficiency.",
    "longDescription": "Engineered for the professional kitchen and the passionate home chef alike, our triply stainless steel architecture ensures rapid, perfectly even heat distribution. Its robust 2.5mm foundation provides a lifetime of exceptional cooking performance. The Triply Tope is a versatile cooking pot suitable for boiling, simmering, and slow cooking. Its tight-fitting lid ensures moisture retention for tender cooking results. Available in multiple capacities to suit families of all sizes.",
    "features": "Multiple capacities, Tight-fitting lid, Energy-efficient, Even heating, Durable base",
    "sizes": [
      "14 cm - 1.5L",
      "16 cm - 2L",
      "18 cm - 3L",
      "20 cm - 4L",
      "22 cm - 5L",
      "28 cm - 7L"
    ],
    "image": "ss/triply tope.png"
  },
  {
    "name": "Honeycomb Dosa Tawa",
    "details": "Width : 28 cm | Thickness : 4.0 mm",
    "category": "honeycomb",
    "description": "Discover the future of healthy cooking with our revolutionary non-stick honeycomb technology. Create perfect golden dosas with exceptional non-stick surface and quick heating properties.",
    "longDescription": "By combining the durability of steel with the finest non-stick properties, our proprietary honeycomb matrix requires significantly less oil. Achieve incredible caramelization and perfect release every time, while enjoying effortless cleanup. The revolutionary honeycomb pattern on this tawa provides superior heat distribution and exceptional non-stick properties. Make restaurant-quality dosas without oil, featuring crispy edges and perfectly cooked interiors.",
    "features": "Honeycomb pattern, Quick heating, Easy cleaning, Non-stick surface, Thermal handles",
    "sizes": [
      "26 cm",
      "28 cm",
      "30 cm"
    ],
    "image": "ss/honeycomb dosatawa.png"
  },
  {
    "name": "Honeycomb Roti Tawa",
    "details": "Width : 26,28 cm | Thickness : 4.0 mm",
    "category": "honeycomb",
    "description": "Discover the future of healthy cooking with our revolutionary non-stick honeycomb technology. Prepare soft, fluffy rotis and flatbreads with consistent heating and professional-grade construction.",
    "longDescription": "By combining the durability of steel with the finest non-stick properties, our proprietary honeycomb matrix requires significantly less oil. Achieve incredible caramelization and perfect release every time, while enjoying effortless cleanup. Perfect for making soft, fluffy rotis, parathas, and naans. The even heat distribution from the honeycomb pattern ensures uniform cooking throughout. The smooth, non-stick surface makes flipping and cooking a breeze.",
    "features": "Even heat distribution, Durable coating, Professional grade, Non-stick honeycomb, Perfect for breads",
    "sizes": [
      "26 cm",
      "28 cm"
    ],
    "image": "ss/honeycomb tawa.png"
  },
  {
    "name": "Honeycomb Fry Pan",
    "details": "Width : 20 – 24 cm | Thickness : 2.5 mm",
    "category": "honeycomb",
    "description": "Discover the future of healthy cooking with our revolutionary non-stick honeycomb technology. Superior frying performance with reduced oil requirement. Health-conscious cooking without compromising taste.",
    "longDescription": "By combining the durability of steel with the finest non-stick properties, our proprietary honeycomb matrix requires significantly less oil. Achieve incredible caramelization and perfect release every time, while enjoying effortless cleanup. The honeycomb pattern creates air pockets that reduce oil absorption while maintaining flavor. Fry foods with up to 70% less oil. The sturdy construction withstands high temperatures and frequent use.",
    "features": "Health-conscious cooking, Anti-stick surface, Easy maintenance, Oil-reducing design, Professional quality",
    "sizes": [
      "20 cm",
      "22 cm",
      "24 cm"
    ],
    "image": "ss/honeycomb frypan.png"
  },
  {
    "name": "Honeycomb Kadhai",
    "details": "Width : 22 – 28 cm | Thickness : 2.5 mm",
    "category": "honeycomb",
    "description": "Discover the future of healthy cooking with our revolutionary non-stick honeycomb technology. Modern design for traditional Indian cooking with advanced non-stick features and heat retention.",
    "longDescription": "By combining the durability of steel with the finest non-stick properties, our proprietary honeycomb matrix requires significantly less oil. Achieve incredible caramelization and perfect release every time, while enjoying effortless cleanup. This honeycomb kadhai bridges traditional Indian cooking with modern technology. Perfect for preparing curries, achieving that perfect caramelized exterior, and heat retention that keeps food warm longer.",
    "features": "Heat retention, Non-stick honeycomb, Comfortable handles, Modern design, Versatile cooking",
    "sizes": [
      "22 cm",
      "24 cm",
      "26 cm",
      "28 cm"
    ],
    "image": "ss/honeycomb kadhai.png"
  },
  {
    "name": "Aluminum Pressure Cooker (Classic Design)",
    "details": "Size : 2,3,5 L",
    "category": "pressure",
    "description": "Accelerate your meal preparation with our ultra-safe, high-efficiency pressure cooking systems. Reliable and efficient pressure cooking for quick meal preparation. ISI certified with multiple safety mechanisms.",
    "longDescription": "Designed with an uncompromising focus on safety and speed, this precision-engineered pressure cooker features multiple fail-safes and a robust locking mechanism. Achieve tender, flavor-locked meals up to 70% faster. Our Classic Pressure Cooker combines traditional design with modern safety features. Perfect for families, it cooks meals 70% faster than conventional cooking. Multiple capacity options available to suit your family size.",
    "features": "ISI certified, Safety valve, Induction compatible, Whistle indicator, Durable construction",
    "sizes": [
      "2 Liter",
      "3 Liter",
      "5 Liter"
    ],
    "image": "ss/al cooker classic.png"
  },
  {
    "name": "Aluminum Pressure Cooker (Matki Design)",
    "details": "Size : 2,3,5 L",
    "category": "pressure",
    "description": "Accelerate your meal preparation with our ultra-safe, high-efficiency pressure cooking systems. Traditional matka design with modern safety features. Perfect for authentic Indian cooking.",
    "longDescription": "Designed with an uncompromising focus on safety and speed, this precision-engineered pressure cooker features multiple fail-safes and a robust locking mechanism. Achieve tender, flavor-locked meals up to 70% faster. The unique matka shape distributes heat from all sides, ensuring even cooking. This traditional design combined with modern pressure cooking technology makes it ideal for dal, rice, and meat preparations.",
    "features": "Unique design, Even cooking, Multiple capacities, Traditional shape, Modern safety",
    "sizes": [
      "2 Liter",
      "3 Liter",
      "5 Liter"
    ],
    "image": "ss/al cooker matki.png"
  },
  {
    "name": "Aluminum Pressure Cooker (Elantra Design)",
    "details": "Size : 2,3,5 L",
    "category": "pressure",
    "description": "Accelerate your meal preparation with our ultra-safe, high-efficiency pressure cooking systems. Premium pressure cooker with advanced safety mechanisms including whistle-free options.",
    "longDescription": "Designed with an uncompromising focus on safety and speed, this precision-engineered pressure cooker features multiple fail-safes and a robust locking mechanism. Achieve tender, flavor-locked meals up to 70% faster. The Elantra is our flagship pressure cooker featuring advanced sealing technology and multiple safety layers. Choose from whistle or silent operation modes. Perfect for modern, noise-conscious kitchens.",
    "features": "Whistle-free option, Wider range of sizes, Ergonomic, Advanced safety, Premium quality",
    "sizes": [
      "2 Liter",
      "3 Liter",
      "5 Liter"
    ],
    "image": "ss/al cooker elantra.png"
  },
  {
    "name": "Hard Anodised Pressure Cooker (Classic Design)",
    "details": "Size : 2,3,5 L",
    "category": "pressure",
    "description": "Accelerate your meal preparation with our ultra-safe, high-efficiency pressure cooking systems. Reliable and efficient pressure cooking for quick meal preparation. ISI certified with multiple safety mechanisms.",
    "longDescription": "Designed with an uncompromising focus on safety and speed, this precision-engineered pressure cooker features multiple fail-safes and a robust locking mechanism. Achieve tender, flavor-locked meals up to 70% faster. Our Classic Pressure Cooker combines traditional design with modern safety features. Perfect for families, it cooks meals 70% faster than conventional cooking. Multiple capacity options available to suit your family size.",
    "features": "ISI certified, Safety valve, Induction compatible, Whistle indicator, Durable construction",
    "sizes": [
      "2 Liter",
      "3 Liter",
      "5 Liter"
    ],
    "image": "ss/ha cooker classic.png"
  },
  {
    "name": "Hard Anodised Pressure Cooker (Matki Design)",
    "details": "Size : 2,3,5 L",
    "category": "pressure",
    "description": "Accelerate your meal preparation with our ultra-safe, high-efficiency pressure cooking systems. Traditional matka design with modern safety features. Perfect for authentic Indian cooking.",
    "longDescription": "Designed with an uncompromising focus on safety and speed, this precision-engineered pressure cooker features multiple fail-safes and a robust locking mechanism. Achieve tender, flavor-locked meals up to 70% faster. The unique matka shape distributes heat from all sides, ensuring even cooking. This traditional design combined with modern pressure cooking technology makes it ideal for dal, rice, and meat preparations.",
    "features": "Unique design, Even cooking, Multiple capacities, Traditional shape, Modern safety",
    "sizes": [
      "2 Liter",
      "3 Liter",
      "5 Liter"
    ],
    "image": "ss/ha cooker matki.png"
  },
  {
    "name": "Hard Anodised Pressure Cooker (Elantra Design)",
    "details": "Size : 2,3,5 L",
    "category": "pressure",
    "description": "Accelerate your meal preparation with our ultra-safe, high-efficiency pressure cooking systems. Premium pressure cooker with advanced safety mechanisms including whistle-free options.",
    "longDescription": "Designed with an uncompromising focus on safety and speed, this precision-engineered pressure cooker features multiple fail-safes and a robust locking mechanism. Achieve tender, flavor-locked meals up to 70% faster. The Elantra is our flagship pressure cooker featuring advanced sealing technology and multiple safety layers. Choose from whistle or silent operation modes. Perfect for modern, noise-conscious kitchens.",
    "features": "Whistle-free option, Wider range of sizes, Ergonomic, Advanced safety, Premium quality",
    "sizes": [
      "2 Liter",
      "3 Liter",
      "5 Liter"
    ],
    "image": "ss/ha cooker elantra.png"
  },
  {
    "name": "Steel Triply Pressure Cooker (Classic Design)",
    "details": "Size : 2,3,5 L",
    "category": "pressure",
    "description": "Accelerate your meal preparation with our ultra-safe, high-efficiency pressure cooking systems. Reliable and efficient pressure cooking for quick meal preparation. ISI certified with multiple safety mechanisms.",
    "longDescription": "Designed with an uncompromising focus on safety and speed, this precision-engineered pressure cooker features multiple fail-safes and a robust locking mechanism. Achieve tender, flavor-locked meals up to 70% faster. Our Classic Pressure Cooker combines traditional design with modern safety features. Perfect for families, it cooks meals 70% faster than conventional cooking. Multiple capacity options available to suit your family size.",
    "features": "ISI certified, Safety valve, Induction compatible, Whistle indicator, Durable construction",
    "sizes": [
      "2 Liter",
      "3 Liter",
      "5 Liter"
    ],
    "image": "ss/steel triply cooker classic.png"
  },
  {
    "name": "Steel Sandwich Bottom Pressure Cooker (Matki Design)",
    "details": "Size : 2,3,5,6.5 L",
    "category": "pressure",
    "description": "Accelerate your meal preparation with our ultra-safe, high-efficiency pressure cooking systems. Reliable and efficient pressure cooking for quick meal preparation. ISI certified with multiple safety mechanisms.",
    "longDescription": "Designed with an uncompromising focus on safety and speed, this precision-engineered pressure cooker features multiple fail-safes and a robust locking mechanism. Achieve tender, flavor-locked meals up to 70% faster. Our Classic Pressure Cooker combines traditional design with modern safety features. Perfect for families, it cooks meals 70% faster than conventional cooking. Multiple capacity options available to suit your family size.",
    "features": "ISI certified, Safety valve, Induction compatible, Whistle indicator, Durable construction",
    "sizes": [
      "2 Liter",
      "3 Liter",
      "5 Liter",
      "6.5 Liter"
    ],
    "image": "ss/steel cooker sandwich bottom matki.png"
  },
  {
    "name": "Non-Stick Fry Pan",
    "details": "Width : 20 – 26 cm | Thickness : 2.5 mm",
    "category": "nonstick",
    "description": "Achieve flawless results with our premium, health-conscious ceramic non-stick surface. Health-conscious cooking with premium non-stick ceramic coating. Use minimal oil or no oil at all.",
    "longDescription": "At the heart of modern health-conscious cooking is our advanced PTFE-free ceramic coating. It provides an exceptionally smooth, durable surface that requires almost no oil, letting the natural flavors of your ingredients take center stage. Our ceramic non-stick coating is PTFE-free and safe for the whole family. The smooth surface prevents food from sticking while allowing proper heat distribution. Perfect for eggs, pancakes, and delicate preparations.",
    "features": "Reduced oil usage, Easy cleanup, Ceramic topped, PTFE-free, Health-conscious",
    "sizes": [
      "20 cm",
      "22 cm",
      "24 cm",
      "26 cm"
    ],
    "image": "ss/nonstick frypan.png"
  },
  {
    "name": "Non-Stick Dosa Tawa",
    "details": "Width : 25 – 30 cm | Thickness : 2.5 mm",
    "category": "nonstick",
    "description": "Achieve flawless results with our premium, health-conscious ceramic non-stick surface. Make delicious dosas with minimal oil and hassle-free cooking. Professional non-stick coating.",
    "longDescription": "At the heart of modern health-conscious cooking is our advanced PTFE-free ceramic coating. It provides an exceptionally smooth, durable surface that requires almost no oil, letting the natural flavors of your ingredients take center stage. The smooth non-stick surface allows you to make crispy dosas with minimal oil. The large surface area accommodates bigger dosas. Easy flipping and serving with the 30cm option.",
    "features": "Smooth surface, Temperature indicators, Non-toxic, Large cooking area, Easy cleaning",
    "sizes": [
      "25 cm",
      "26 cm",
      "28 cm",
      "30 cm"
    ],
    "image": "ss/nonstick dosapan.png"
  },
  {
    "name": "Non-Stick Deep Kadhai",
    "details": "Width : 22 – 28 cm | Thickness : 2.5 mm",
    "category": "nonstick",
    "description": "Achieve flawless results with our premium, health-conscious ceramic non-stick surface. Deep kadhai perfect for curries and deep frying with non-stick advantage. Healthier cooking option.",
    "longDescription": "At the heart of modern health-conscious cooking is our advanced PTFE-free ceramic coating. It provides an exceptionally smooth, durable surface that requires almost no oil, letting the natural flavors of your ingredients take center stage. Deep sides with non-stick coating make this ideal for preparing thick curries, frying with less oil, and stewing. The sloped sides aid in easy stirring and serving.",
    "features": "Deep sides, Even heating, Durable coating, Non-stick advantage, Healthier frying",
    "sizes": [
      "22 cm",
      "24 cm",
      "26 cm",
      "28 cm"
    ],
    "image": "ss/nonstick kadhai.png"
  },
  {
    "name": "Hard Anodised Tope",
    "details": "Width : 10 – 24 cm | Thickness : 3.0 mm",
    "category": "hard",
    "description": "Command your kitchen with extreme durability. Our hard-anodized surface is built for professional rigor. Ultra-durable hard anodised cookware for professional kitchens. Non-reactive and scratch-resistant.",
    "longDescription": "Treated to become four times harder than standard stainless steel, our hard-anodized cookware offers an intensely tough, scratch-resistant, and non-reactive cooking surface. Built to withstand the demands of heavy daily use. Hard anodization creates a dense oxide layer that's 4x harder than steel. Completely non-reactive with acidic foods. Perfect for commercial kitchens and serious home cooks.",
    "features": "Non-reactive, Scratch-resistant, Long-lasting, Lightweight, Professional grade",
    "sizes": [
      "10 cm",
      "12 cm",
      "14 cm",
      "16 cm",
      "18 cm",
      "20 cm",
      "22 cm",
      "24 cm"
    ],
    "image": "ss/ha tope.png"
  },
  {
    "name": "Hard Anodised Spartan",
    "details": "Width : 9 - 12 inch | Thickness : 3.0 mm",
    "category": "hard",
    "description": "Command your kitchen with extreme durability. Our hard-anodized surface is built for professional rigor. Ultra-durable hard anodised cookware for professional kitchens. Non-reactive and scratch-resistant.",
    "longDescription": "Treated to become four times harder than standard stainless steel, our hard-anodized cookware offers an intensely tough, scratch-resistant, and non-reactive cooking surface. Built to withstand the demands of heavy daily use. Hard anodization creates a dense oxide layer that's 4x harder than steel. Completely non-reactive with acidic foods. Perfect for commercial kitchens and serious home cooks.",
    "features": "Non-reactive, Scratch-resistant, Long-lasting, Lightweight, Professional grade",
    "sizes": [
      "9 inch",
      "10 inch",
      "11 inch",
      "12 inch"
    ],
    "image": "ss/ha spartan.png"
  },
  {
    "name": "Hard Anodised Lip Saucepan",
    "details": "Width : 9 - 12 inch | Thickness : 3.0 mm",
    "category": "hard",
    "description": "Command your kitchen with extreme durability. Our hard-anodized surface is built for professional rigor. Ultra-durable hard anodised cookware for professional kitchens. Non-reactive and scratch-resistant.",
    "longDescription": "Treated to become four times harder than standard stainless steel, our hard-anodized cookware offers an intensely tough, scratch-resistant, and non-reactive cooking surface. Built to withstand the demands of heavy daily use. Hard anodization creates a dense oxide layer that's 4x harder than steel. Completely non-reactive with acidic foods. Perfect for commercial kitchens and serious home cooks.",
    "features": "Non-reactive, Scratch-resistant, Long-lasting, Lightweight, Professional grade",
    "sizes": [
      "9 inch",
      "10 inch",
      "11 inch",
      "12 inch"
    ],
    "image": "ss/ha lip saucepan.png"
  },
  {
    "name": "Hard Anodised Deep Kadhai",
    "details": "Size : 11 - 15 | Thickness : 3.0 mm",
    "category": "hard",
    "description": "Command your kitchen with extreme durability. Our hard-anodized surface is built for professional rigor. Ultra-durable hard anodised cookware for professional kitchens. Non-reactive and scratch-resistant.",
    "longDescription": "Treated to become four times harder than standard stainless steel, our hard-anodized cookware offers an intensely tough, scratch-resistant, and non-reactive cooking surface. Built to withstand the demands of heavy daily use. Hard anodization creates a dense oxide layer that's 4x harder than steel. Completely non-reactive with acidic foods. Perfect for commercial kitchens and serious home cooks.",
    "features": "Non-reactive, Scratch-resistant, Long-lasting, Lightweight, Professional grade",
    "sizes": [
      "11 inch",
      "12 inch",
      "13 inch",
      "14 inch",
      "15 inch"
    ],
    "image": "ss/ha kadhai.png"
  },
  {
    "name": "Hard Anodised Tasra",
    "details": "Width : 11 - 15| Thickness : 3.0 mm",
    "category": "hard",
    "description": "Command your kitchen with extreme durability. Our hard-anodized surface is built for professional rigor. Ultra-durable hard anodised cookware for professional kitchens. Non-reactive and scratch-resistant.",
    "longDescription": "Treated to become four times harder than standard stainless steel, our hard-anodized cookware offers an intensely tough, scratch-resistant, and non-reactive cooking surface. Built to withstand the demands of heavy daily use. Hard anodization creates a dense oxide layer that's 4x harder than steel. Completely non-reactive with acidic foods. Perfect for commercial kitchens and serious home cooks.",
    "features": "Non-reactive, Scratch-resistant, Long-lasting, Lightweight, Professional grade",
    "sizes": [
      "11",
      "12",
      "13",
      "14",
      "15"
    ],
    "image": "ss/ha tasra.png"
  },
  {
    "name": "Hard Anodised Handi",
    "details": "Size : 2.5 - 4.5 L | Thickness : 3.0 mm",
    "category": "hard",
    "description": "Command your kitchen with extreme durability. Our hard-anodized surface is built for professional rigor. Heavy-duty handi for traditional and modern cooking methods. Excellent for stewing and slow cooking.",
    "longDescription": "Treated to become four times harder than standard stainless steel, our hard-anodized cookware offers an intensely tough, scratch-resistant, and non-reactive cooking surface. Built to withstand the demands of heavy daily use. The Hard Anodised Handi combines traditional design with modern durability. Perfect for slow-cooked curries, biryanis, and traditional preparations. The robust construction ensures years of reliable cooking.",
    "features": "Robust construction, Heat retention, Great for stewing, Non-reactive, Traditional design",
    "sizes": [
      "2.5 L",
      "3.5 L",
      "4.5 L"
    ],
    "image": "ss/ha handi.png"
  },
  {
    "name": "Hard Anodised Deep Fryer Pan",
    "details": "Width : 10 - 12 | Thickness : 3.0 mm",
    "category": "hard",
    "description": "Command your kitchen with extreme durability. Our hard-anodized surface is built for professional rigor. Ultra-durable hard anodised cookware for professional kitchens. Non-reactive and scratch-resistant.",
    "longDescription": "Treated to become four times harder than standard stainless steel, our hard-anodized cookware offers an intensely tough, scratch-resistant, and non-reactive cooking surface. Built to withstand the demands of heavy daily use. Hard anodization creates a dense oxide layer that's 4x harder than steel. Completely non-reactive with acidic foods. Perfect for commercial kitchens and serious home cooks.",
    "features": "Non-reactive, Scratch-resistant, Long-lasting, Lightweight, Professional grade",
    "sizes": [
      "10 inch",
      "11 inch",
      "12 inch"
    ],
    "image": "ss/ha fryerpan.png"
  },
  {
    "name": "Hard Anodised Taper Fryer Pan",
    "details": "Width : 10 - 12 | Thickness : 3.0 mm",
    "category": "hard",
    "description": "Command your kitchen with extreme durability. Our hard-anodized surface is built for professional rigor. Ultra-durable hard anodised cookware for professional kitchens. Non-reactive and scratch-resistant.",
    "longDescription": "Treated to become four times harder than standard stainless steel, our hard-anodized cookware offers an intensely tough, scratch-resistant, and non-reactive cooking surface. Built to withstand the demands of heavy daily use. Hard anodization creates a dense oxide layer that's 4x harder than steel. Completely non-reactive with acidic foods. Perfect for commercial kitchens and serious home cooks.",
    "features": "Non-reactive, Scratch-resistant, Long-lasting, Lightweight, Professional grade",
    "sizes": [
      "10 inch",
      "11 inch",
      "12 inch"
    ],
    "image": "ss/ha taper fryerpan.png"
  },
  {
    "name": "Hard Anodised Tadka Pan",
    "details": "Size : 1 - 2 | Thickness : 3.0 mm",
    "category": "hard",
    "description": "Command your kitchen with extreme durability. Our hard-anodized surface is built for professional rigor. Ultra-durable hard anodised cookware for professional kitchens. Non-reactive and scratch-resistant.",
    "longDescription": "Treated to become four times harder than standard stainless steel, our hard-anodized cookware offers an intensely tough, scratch-resistant, and non-reactive cooking surface. Built to withstand the demands of heavy daily use. Hard anodization creates a dense oxide layer that's 4x harder than steel. Completely non-reactive with acidic foods. Perfect for commercial kitchens and serious home cooks.",
    "features": "Non-reactive, Scratch-resistant, Long-lasting, Lightweight, Professional grade",
    "sizes": [
      "11 inch",
      "12 inch",
      "13 inch",
      "14 inch",
      "15 inch"
    ],
    "image": "ss/ha tadkapan.png"
  },
  {
    "name": "Hard Anodised Roti Tawa",
    "details": "Width : 9 – 12 inch | Thickness : 4 mm",
    "category": "hard",
    "description": "Command your kitchen with extreme durability. Our hard-anodized surface is built for professional rigor. Professional-grade tawa for perfect rotis and flatbreads. Even surface and superior heat distribution.",
    "longDescription": "Treated to become four times harder than standard stainless steel, our hard-anodized cookware offers an intensely tough, scratch-resistant, and non-reactive cooking surface. Built to withstand the demands of heavy daily use. The thick hard-anodised surface provides even heat distribution for perfectly cooked rotis every single time. The non-reactive coating ensures safety with any dough type.",
    "features": "Even surface, Non-stick properties, Premium material, Professional-grade, Durable finish",
    "sizes": [
      "9 inch",
      "10 inch",
      "11 inch",
      "12 inch"
    ],
    "image": "ss/ha rotitawa.png"
  },
  {
    "name": "Hard Anodised Dosa Tawa",
    "details": "Width : 10 – 12 inch | Thickness : 4 mm",
    "category": "hard",
    "description": "Command your kitchen with extreme durability. Our hard-anodized surface is built for professional rigor. Professional-grade tawa for perfect rotis and flatbreads. Even surface and superior heat distribution.",
    "longDescription": "Treated to become four times harder than standard stainless steel, our hard-anodized cookware offers an intensely tough, scratch-resistant, and non-reactive cooking surface. Built to withstand the demands of heavy daily use. The thick hard-anodised surface provides even heat distribution for perfectly cooked rotis every single time. The non-reactive coating ensures safety with any dough type.",
    "features": "Even surface, Non-stick properties, Premium material, Professional-grade, Durable finish",
    "sizes": [
      "10 inch",
      "11 inch",
      "12 inch"
    ],
    "image": "ss/ha dosatawa.png"
  },
  {
    "name": "Hard Anodised Stew Pan",
    "details": "Width : 9 - 15 inch | Thickness : 3.0 mm",
    "category": "hard",
    "description": "Command your kitchen with extreme durability. Our hard-anodized surface is built for professional rigor. Ultra-durable hard anodised cookware for professional kitchens. Non-reactive and scratch-resistant.",
    "longDescription": "Treated to become four times harder than standard stainless steel, our hard-anodized cookware offers an intensely tough, scratch-resistant, and non-reactive cooking surface. Built to withstand the demands of heavy daily use. Hard anodization creates a dense oxide layer that's 4x harder than steel. Completely non-reactive with acidic foods. Perfect for commercial kitchens and serious home cooks.",
    "features": "Non-reactive, Scratch-resistant, Long-lasting, Lightweight, Professional grade",
    "sizes": [
      "9 inch",
      "10 inch",
      "11 inch",
      "12 inch",
      "13 inch",
      "14 inch",
      "15 inch"
    ],
    "image": "ss/ha stewpan.png"
  },
  {
    "name": "Mirror Polish Deep Kadhai",
    "details": "Size : 1 – 5 | Thickness : 2.6 mm",
    "category": "mirror",
    "description": "Elevate your kitchen aesthetic with a brilliantly polished, corrosion-resistant mirror finish. Sleek mirror-polished finish with excellent cooking performance. Corrosion-resistant and elegant.",
    "longDescription": "A true statement of luxury. The stunning mirror-polished exterior captures ambient light, adding a touch of elegance to any stove or dining table, while offering robust defense against corrosion and wear. The stunning mirror-polished exterior makes this a statement piece in your kitchen. The glossy finish not only looks beautiful but also resists corrosion. Cooking performance matches its aesthetic appeal.",
    "features": "Shiny aesthetic, Corrosion-resistant, High-quality steel, Mirror finish, Elegant design",
    "sizes": [
      "1",
      "2",
      "3",
      "4",
      "5"
    ],
    "image": "ss/mirror kadhai.png"
  },
  {
    "name": "Mirror Polish Bon Ton Kadhai",
    "details": "Size : 1 – 5 | Thickness : 2.6 mm",
    "category": "mirror",
    "description": "Elevate your kitchen aesthetic with a brilliantly polished, corrosion-resistant mirror finish. Sleek mirror-polished finish with excellent cooking performance. Corrosion-resistant and elegant.",
    "longDescription": "A true statement of luxury. The stunning mirror-polished exterior captures ambient light, adding a touch of elegance to any stove or dining table, while offering robust defense against corrosion and wear. The stunning mirror-polished exterior makes this a statement piece in your kitchen. The glossy finish not only looks beautiful but also resists corrosion. Cooking performance matches its aesthetic appeal.",
    "features": "Shiny aesthetic, Corrosion-resistant, High-quality steel, Mirror finish, Elegant design",
    "sizes": [
      "1",
      "2",
      "3",
      "4",
      "5"
    ],
    "image": "ss/mirror bonton.png"
  },
  {
    "name": "Mirror Polish Tasla",
    "details": "Size : 1 – 5 | Thickness : 2.6 mm",
    "category": "mirror",
    "description": "Elevate your kitchen aesthetic with a brilliantly polished, corrosion-resistant mirror finish. Beautiful mirror-polished tasla for elegant table-to-stove cooking. Perfect for serving too.",
    "longDescription": "A true statement of luxury. The stunning mirror-polished exterior captures ambient light, adding a touch of elegance to any stove or dining table, while offering robust defense against corrosion and wear. Cook on the stove and serve directly from this beautiful mirror-polished tasla. The elegant design makes it perfect for entertaining. Corrosion-resistant coating ensures longevity.",
    "features": "Premium finish, Even heating, Versatile sizes, Mirror polish, Multi-functional",
    "sizes": [
      "1",
      "2",
      "3",
      "4",
      "5"
    ],
    "image": "ss/mirror tasla.png"
  },
  {
    "name": "Mirror Polish Saucepan (Patti)",
    "details": "Width : 9 – 12 inch | Thickness : 2.6 mm",
    "category": "mirror",
    "description": "Elevate your kitchen aesthetic with a brilliantly polished, corrosion-resistant mirror finish. Refined mirror-polished saucepan for precise cooking. Professional appearance with spillproof lid.",
    "longDescription": "A true statement of luxury. The stunning mirror-polished exterior captures ambient light, adding a touch of elegance to any stove or dining table, while offering robust defense against corrosion and wear. This elegant saucepan features a precision spout for accurate pouring and a spillproof lid. The mirror-polished surface combines beauty with functionality for the discerning cook.",
    "features": "Professional appearance, Temperature control, Spillproof lid, Elegant design, Precision spout",
    "sizes": [
      "9 inch",
      "10 inch",
      "11 inch",
      "12 inch"
    ],
    "image": "ss/mirror patti.png"
  },
  {
    "name": "Mirror Polish Saucepan (Lip)",
    "details": "Width : 9 – 12 inch | Thickness : 2.6 mm",
    "category": "mirror",
    "description": "Elevate your kitchen aesthetic with a brilliantly polished, corrosion-resistant mirror finish. Refined mirror-polished saucepan for precise cooking. Professional appearance with spillproof lid.",
    "longDescription": "A true statement of luxury. The stunning mirror-polished exterior captures ambient light, adding a touch of elegance to any stove or dining table, while offering robust defense against corrosion and wear. This elegant saucepan features a precision spout for accurate pouring and a spillproof lid. The mirror-polished surface combines beauty with functionality for the discerning cook.",
    "features": "Professional appearance, Temperature control, Spillproof lid, Elegant design, Precision spout",
    "sizes": [
      "9 inch",
      "10 inch",
      "11 inch",
      "12 inch"
    ],
    "image": "ss/mirror lip.png"
  },
  {
    "name": " Mirror Polish Roti Tawa",
    "details": "Width : 9 – 12 inch | Thickness : 4 mm",
    "category": "mirror",
    "description": "Elevate your kitchen aesthetic with a brilliantly polished, corrosion-resistant mirror finish. Professional-grade tawa for perfect rotis and flatbreads. Even surface and superior heat distribution.",
    "longDescription": "A true statement of luxury. The stunning mirror-polished exterior captures ambient light, adding a touch of elegance to any stove or dining table, while offering robust defense against corrosion and wear. The thick surface provides even heat distribution for perfectly cooked rotis every single time. The non-reactive coating ensures safety with any dough type.",
    "features": "Even surface, Non-stick properties, Premium material, Professional-grade, Durable finish",
    "sizes": [
      "9 inch",
      "10 inch",
      "11 inch",
      "12 inch"
    ],
    "image": "ss/mirror tawa.png"
  },
  {
    "name": "Mirror Polish Urli",
    "details": "Size : 1 x 5 | Thickness : 2.6 mm",
    "category": "mirror",
    "description": "Elevate your kitchen aesthetic with a brilliantly polished, corrosion-resistant mirror finish. Professional-grade tawa for perfect rotis and flatbreads. Even surface and superior heat distribution.",
    "longDescription": "A true statement of luxury. The stunning mirror-polished exterior captures ambient light, adding a touch of elegance to any stove or dining table, while offering robust defense against corrosion and wear. The thick surface provides even heat distribution for perfectly cooked rotis every single time. The non-reactive coating ensures safety with any dough type.",
    "features": "Even surface, Non-stick properties, Premium material, Professional-grade, Durable finish",
    "sizes": [
      "9 inch",
      "10 inch",
      "11 inch",
      "12 inch"
    ],
    "image": "ss/mirror urli.png"
  },
  {
    "name": "Mirror Polish Tope",
    "details": "Size : 7,10,19 | Thickness : 2.6 mm",
    "category": "mirror",
    "description": "Elevate your kitchen aesthetic with a brilliantly polished, corrosion-resistant mirror finish. Professional-grade tope with mirror polish finish. Even surface and superior heat distribution.",
    "longDescription": "A true statement of luxury. The stunning mirror-polished exterior captures ambient light, adding a touch of elegance to any stove or dining table, while offering robust defense against corrosion and wear. The thick surface provides even heat distribution for perfectly cooked rotis every single time. The non-reactive coating ensures safety with any dough type.",
    "features": "Even surface, Non-stick properties, Premium material, Professional-grade, Durable finish",
    "sizes": [
      "7 x 9",
      "10 x 18",
      "19 x 24"
    ],
    "image": "ss/mirror tope.png"
  },
  {
    "name": "Mirror Polish Fry Pan",
    "details": "Width : 9 – 12 inch | Thickness : 2.6 mm",
    "category": "mirror",
    "description": "Elevate your kitchen aesthetic with a brilliantly polished, corrosion-resistant mirror finish. Refined mirror-polished fry pan for precise cooking. Professional appearance with spillproof lid.",
    "longDescription": "A true statement of luxury. The stunning mirror-polished exterior captures ambient light, adding a touch of elegance to any stove or dining table, while offering robust defense against corrosion and wear. This elegant fry pan features a precision spout for accurate pouring and a spillproof lid. The mirror-polished surface combines beauty with functionality for the discerning cook.",
    "features": "Professional appearance, Temperature control, Spillproof lid, Elegant design, Precision spout",
    "sizes": [
      "9 inch",
      "10 inch",
      "11 inch",
      "12 inch"
    ],
    "image": "ss/mirror frypan.png"
  },
  {
    "name": "Mirror Polish Stew Pan",
    "details": "Size : 1 – 5 | Thickness : 2.6 mm",
    "category": "mirror",
    "description": "Elevate your kitchen aesthetic with a brilliantly polished, corrosion-resistant mirror finish. Beautiful mirror-polished stew pan for elegant table-to-stove cooking. Perfect for serving too.",
    "longDescription": "A true statement of luxury. The stunning mirror-polished exterior captures ambient light, adding a touch of elegance to any stove or dining table, while offering robust defense against corrosion and wear. Cook on the stove and serve directly from this beautiful mirror-polished stew pan. The elegant design makes it perfect for entertaining. Corrosion-resistant coating ensures longevity.",
    "features": "Premium finish, Even heating, Versatile sizes, Mirror polish, Multi-functional",
    "sizes": [
      "1",
      "2",
      "3",
      "4",
      "5"
    ],
    "image": "ss/mirror stewpan.png"
  },
  {
    "name": "Mirror Polish Handi",
    "details": "Size : 1 x 3 | Thickness : 2.6 mm",
    "category": "mirror",
    "description": "Elevate your kitchen aesthetic with a brilliantly polished, corrosion-resistant mirror finish. Beautiful mirror-polished handi for elegant table-to-stove cooking. Perfect for serving too.",
    "longDescription": "A true statement of luxury. The stunning mirror-polished exterior captures ambient light, adding a touch of elegance to any stove or dining table, while offering robust defense against corrosion and wear. Cook on the stove and serve directly from this beautiful mirror-polished handi. The elegant design makes it perfect for entertaining. Corrosion-resistant coating ensures longevity.",
    "features": "Premium finish, Even heating, Versatile sizes, Mirror polish, Multi-functional",
    "sizes": [
      "1 x 3"
    ],
    "image": "ss/mirror handi.png"
  },
  {
    "name": "Powder Coated Fry Pan",
    "details": "Size : 10 – 12 inch | Thickness : 2.6 mm",
    "category": "powder",
    "description": "Infuse your kitchen with vibrant color without compromising on professional-grade performance. Modern powder-coated design for contemporary kitchens. Colored finish with thermal bakelite handles.",
    "longDescription": "Featuring a resilient, heat-resistant powder coating, this cookware brings a modern pop of color to your culinary workspace. The aesthetic is perfectly matched by uncompromising durability and thermal efficiency. Add a pop of color to your kitchen with our powder-coated fry pan. The durable coating protects the cookware while looking stylish. Thermal bakelite handles stay cool during cooking.",
    "features": "Colored finish, Thermal bakelite handles, Easy identification, Modern design, Durable coating",
    "sizes": [
      "10 Inch",
      "11 Inch",
      "12 Inch"
    ],
    "image": "ss/powder frypan.png"
  },
  {
    "name": "Powder Coated Saucepan",
    "details": "Size : 9 – 12 inch | Thickness : 2.6 mm",
    "category": "powder",
    "description": "Infuse your kitchen with vibrant color without compromising on professional-grade performance. Modern powder-coated design for contemporary kitchens. Colored finish with thermal bakelite handles.",
    "longDescription": "Featuring a resilient, heat-resistant powder coating, this cookware brings a modern pop of color to your culinary workspace. The aesthetic is perfectly matched by uncompromising durability and thermal efficiency. Add a pop of color to your kitchen with our powder-coated fry pan. The durable coating protects the cookware while looking stylish. Thermal bakelite handles stay cool during cooking.",
    "features": "Colored finish, Thermal bakelite handles, Easy identification, Modern design, Durable coating",
    "sizes": [
      "9 Inch",
      "10 Inch",
      "11 Inch",
      "12 Inch"
    ],
    "image": "ss/powder saucepan.png"
  },
  {
    "name": "Powder Coated Stew Pan",
    "details": "Size : 1 x 5 | Thickness : 2 mm",
    "category": "powder",
    "description": "Infuse your kitchen with vibrant color without compromising on professional-grade performance. Modern powder-coated design for contemporary kitchens. Colored finish with thermal bakelite handles.",
    "longDescription": "Featuring a resilient, heat-resistant powder coating, this cookware brings a modern pop of color to your culinary workspace. The aesthetic is perfectly matched by uncompromising durability and thermal efficiency. Add a pop of color to your kitchen with our powder-coated fry pan. The durable coating protects the cookware while looking stylish. Thermal bakelite handles stay cool during cooking.",
    "features": "Colored finish, Thermal bakelite handles, Easy identification, Modern design, Durable coating",
    "sizes": [
      "1 x 5"
    ],
    "image": "ss/powder stewpan.png"
  },
  {
    "name": "Powder Coated Deep Kadhai",
    "details": "Size : 1 x 5 | Thickness : 2.6 mm",
    "category": "powder",
    "description": "Infuse your kitchen with vibrant color without compromising on professional-grade performance. Modern powder-coated design for contemporary kitchens. Colored finish with thermal bakelite handles.",
    "longDescription": "Featuring a resilient, heat-resistant powder coating, this cookware brings a modern pop of color to your culinary workspace. The aesthetic is perfectly matched by uncompromising durability and thermal efficiency. Add a pop of color to your kitchen with our powder-coated fry pan. The durable coating protects the cookware while looking stylish. Thermal bakelite handles stay cool during cooking.",
    "features": "Colored finish, Thermal bakelite handles, Easy identification, Modern design, Durable coating",
    "sizes": [
      "1 x 5"
    ],
    "image": "ss/powder deep kadhai.png"
  },
  {
    "name": "Powder Coated Urli",
    "details": "Size : 1 - 5 | Thickness : 2.6 mm",
    "category": "powder",
    "description": "Infuse your kitchen with vibrant color without compromising on professional-grade performance. Modern powder-coated design for contemporary kitchens. Colored finish with thermal bakelite handles.",
    "longDescription": "Featuring a resilient, heat-resistant powder coating, this cookware brings a modern pop of color to your culinary workspace. The aesthetic is perfectly matched by uncompromising durability and thermal efficiency. Add a pop of color to your kitchen with our powder-coated fry pan. The durable coating protects the cookware while looking stylish. Thermal bakelite handles stay cool during cooking.",
    "features": "Colored finish, Thermal bakelite handles, Easy identification, Modern design, Durable coating",
    "sizes": [
      "1",
      "2",
      "3",
      "4",
      "5"
    ],
    "image": "ss/powder urli.png"
  },
  {
    "name": "Powder Coated Tope",
    "details": "Size : 10 - 18 & 19 - 24 | Thickness : 2.6 mm",
    "category": "powder",
    "description": "Infuse your kitchen with vibrant color without compromising on professional-grade performance. Modern powder-coated design for contemporary kitchens. Colored finish with thermal bakelite handles.",
    "longDescription": "Featuring a resilient, heat-resistant powder coating, this cookware brings a modern pop of color to your culinary workspace. The aesthetic is perfectly matched by uncompromising durability and thermal efficiency. Add a pop of color to your kitchen with our powder-coated fry pan. The durable coating protects the cookware while looking stylish. Thermal bakelite handles stay cool during cooking.",
    "features": "Colored finish, Thermal bakelite handles, Easy identification, Modern design, Durable coating",
    "sizes": [
      "10",
      "11",
      "12",
      "13",
      "14",
      "15",
      "16",
      "17",
      "18",
      "19",
      "20",
      "21",
      "22",
      "23",
      "24"
    ],
    "image": "ss/powder tope.png"
  },
  {
    "name": "Powder Coated Handi",
    "details": "Size :1 – 3 | Thickness : 2.6 mm",
    "category": "powder",
    "description": "Infuse your kitchen with vibrant color without compromising on professional-grade performance. Stylish powder-coated handi with practical functionality. Multiple vibrant colors available.",
    "longDescription": "Featuring a resilient, heat-resistant powder coating, this cookware brings a modern pop of color to your culinary workspace. The aesthetic is perfectly matched by uncompromising durability and thermal efficiency. Combine style with substance with our colorful powder-coated handi. Perfect for meal prep and storage. The heat-resistant exterior ensures safe handling even during cooking.",
    "features": "Multiple colors, Heat-resistant exterior, Durable coating, Stylish design, Practical size",
    "sizes": [
      "1",
      "2",
      "3"
    ],
    "image": "ss/powder handi.png"
  },
  {
    "name": "Sandwich Bottom Fry Pan",
    "details": "Size : 10 - 15",
    "category": "sandwich",
    "description": "Master diverse recipes with our thick sandwich bottom design, maximizing heat retention and stability. Premium sandwich bottom cookware with superior heat distribution and non-stick properties. Perfect for everyday cooking.",
    "longDescription": "The premium sandwich-bottom core encapsulates exceptional heat-conducting materials, ensuring your food cooks uniformly without hot spots. Its substantial heft anchors the cookware securely, making it an indispensable tool for every recipe. Our Sandwich Bottom Fry Pan features a three-layer sandwich bottom construction that provides exceptional heat distribution and retention. The non-stick coating ensures effortless cooking and easy cleaning. Induction compatible and built for long-lasting durability.",
    "features": "Sandwich bottom construction, Superior heat distribution, Non-stick coating, Induction compatible, Durable finish",
    "sizes": [
      "10 cm",
      "12 cm",
      "14 cm"
    ],
    "image": "ss/sandwich frypan.png"
  },
  {
    "name": "Sandwich Bottom Saucepan",
    "details": "Size : 10 - 15",
    "category": "sandwich",
    "description": "Master diverse recipes with our thick sandwich bottom design, maximizing heat retention and stability. Versatile sandwich bottom saucepan ideal for cooking sauces, soups, and gravies with precision temperature control.",
    "longDescription": "The premium sandwich-bottom core encapsulates exceptional heat-conducting materials, ensuring your food cooks uniformly without hot spots. Its substantial heft anchors the cookware securely, making it an indispensable tool for every recipe. Designed for everyday kitchen needs, this sandwich bottom saucepan delivers consistent heating performance. The even heat distribution prevents hotspots and ensures perfectly cooked dishes every time. Features sturdy handles and a precision pouring spout.",
    "features": "Sandwich bottom, Even heating, Precision spout, Sturdy handles, Non-reactive interior",
    "sizes": [
      "10 cm",
      "12 cm",
      "14 cm"
    ],
    "image": "ss/sandwich saucepan.png"
  },
  {
    "name": "Sandwich Bottom Kadhai",
    "details": "Size : 11 - 16",
    "category": "sandwich",
    "description": "Master diverse recipes with our thick sandwich bottom design, maximizing heat retention and stability. Large capacity sandwich bottom kadai perfect for making traditional dishes and bulk cooking preparations.",
    "longDescription": "The premium sandwich-bottom core encapsulates exceptional heat-conducting materials, ensuring your food cooks uniformly without hot spots. Its substantial heft anchors the cookware securely, making it an indispensable tool for every recipe. Experience superior cooking performance with our sandwich bottom kadai. The expanded base design ensures maximum surface area for even cooking. Ideal for curries, stews, and deep-fried preparations. The high walls provide safety and convenience during cooking.",
    "features": "Sandwich bottom, Large capacity, High walls, Heat resistant handles, Perfect for curries",
    "sizes": [
      "24 cm",
      "26 cm",
      "28 cm",
      "30 cm",
      "32 cm"
    ],
    "image": "ss/sandwich kadhai.png"
  },
  {
    "name": "Sandwich Bottom Casserole",
    "details": "Size : 1 - 5",
    "category": "sandwich",
    "description": "Master diverse recipes with our thick sandwich bottom design, maximizing heat retention and stability. Large capacity sandwich bottom casserole perfect for making traditional dishes and bulk cooking preparations.",
    "longDescription": "The premium sandwich-bottom core encapsulates exceptional heat-conducting materials, ensuring your food cooks uniformly without hot spots. Its substantial heft anchors the cookware securely, making it an indispensable tool for every recipe. Experience superior cooking performance with our sandwich bottom casserole. The expanded base design ensures maximum surface area for even cooking. Ideal for curries, stews, and deep-fried preparations. The high walls provide safety and convenience during cooking.",
    "features": "Sandwich bottom, Large capacity, High walls, Heat resistant handles, Perfect for curries",
    "sizes": [
      "1",
      "2",
      "3",
      "4",
      "5"
    ],
    "image": "ss/sandwich casserole.png"
  },
  {
    "name": "Sandwich Bottom Tope",
    "details": "Size : 10 - 18",
    "category": "sandwich",
    "description": "Master diverse recipes with our thick sandwich bottom design, maximizing heat retention and stability. Large capacity sandwich bottom tope perfect for making traditional dishes and bulk cooking preparations.",
    "longDescription": "The premium sandwich-bottom core encapsulates exceptional heat-conducting materials, ensuring your food cooks uniformly without hot spots. Its substantial heft anchors the cookware securely, making it an indispensable tool for every recipe. Experience superior cooking performance with our sandwich bottom tope. The expanded base design ensures maximum surface area for even cooking. Ideal for curries, stews, and deep-fried preparations. The high walls provide safety and convenience during cooking.",
    "features": "Sandwich bottom, Large capacity, High walls, Heat resistant handles, Perfect for curries",
    "sizes": [
      "10 cm",
      "12 cm",
      "14 cm",
      "16 cm",
      "18 cm"
    ],
    "image": "ss/sandwich tope.png"
  }
];;

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
  
  window.open('contact.html?' + params.toString(), '_blank');
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
