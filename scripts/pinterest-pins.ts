// Vertical 1000×1500 Pinterest pins (2:3, the ratio Pinterest shows largest)
// from each recipe's cover photo: photo on top, category, title and the site
// below. Writes public/img/pins/<slug>.jpg, which the bulk-upload CSV links to.
//   npx tsx scripts/pinterest-pins.ts [slug]
// Fonts: Playfair Display Bold and Manrope (SemiBold, ExtraBold) must be
// installed system-wide — librsvg renders the text with whatever fontconfig finds.
import sharp from "sharp";
import { SEED_RECIPES } from "../lib/data";
const CAT: Record<string,string> = { breakfast:"ЗАВТРАК", soup:"СУП", main:"ОСНОВНОЕ БЛЮДО", salad:"САЛАТ", dessert:"ДЕСЕРТ", baking:"ВЫПЕЧКА", snack:"ЗАКУСКА", drink:"НАПИТОК" };
const esc=(s:string)=>s.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");
function wrap(t:string, max:number){ const w=t.replace(/(^|\s)(\S{1,2})\s/g,"$1$2\u00a0").split(" "); const lines:string[]=[]; let cur=""; for(const x of w){ if((cur+" "+x).trim().length>max){ lines.push(cur.trim()); cur=x;} else cur+=" "+x;} if(cur.trim()) lines.push(cur.trim()); return lines; }
const only=process.argv[2];
(async()=>{
for (const r of SEED_RECIPES) {
  if (only && r.slug!==only) continue;
  const title=r.title.ru;
  let size=74, lines=wrap(title,22);
  if (lines.length>3){ size=60; lines=wrap(title,28); }
  if (lines.length>4){ size=52; lines=wrap(title,32); }
  const lh=size*1.18, top=1040+ (lines.length<=2?40:0);
  const titleSvg=lines.map((l,i)=>`<text x="500" y="${top+70+i*lh}" text-anchor="middle" font-family="Playfair Display" font-weight="700" font-size="${size}" fill="#2f3d26">${esc(l)}</text>`).join("");
  const bw=CAT[r.category].length*21+90;
  const meta=`${r.minutes} мин · ${r.calories} ккал · рецепт с фото`;
  const svg=`<svg xmlns="http://www.w3.org/2000/svg" width="1000" height="1500">
   <rect y="960" width="1000" height="540" fill="#f6f0e4"/>
   <rect x="${500-bw/2}" y="925" width="${bw}" height="70" rx="35" fill="#c1552e"/>
   <text x="500" y="972" text-anchor="middle" font-family="Manrope" font-weight="800" font-size="28" letter-spacing="2" fill="#ffffff">${CAT[r.category]}</text>
   ${titleSvg}
   <text x="500" y="1395" text-anchor="middle" font-family="Manrope" font-weight="600" font-size="32" fill="#6b6f5c">${esc(meta)}</text>
   <text x="500" y="1455" text-anchor="middle" font-family="Manrope" font-weight="800" font-size="34" letter-spacing="1" fill="#c1552e">recepto.org</text>
  </svg>`;
  const photo=await sharp(`public/img/recipes/${r.slug}/cover.webp`).resize(1000,960,{fit:"cover",position:"attention"}).toBuffer();
  await sharp({create:{width:1000,height:1500,channels:3,background:"#f6f0e4"}}).composite([{input:photo,top:0,left:0},{input:Buffer.from(svg),top:0,left:0}]).jpeg({quality:82,mozjpeg:true}).toFile(`public/img/pins/${r.slug}.jpg`);
}
console.log("done");
})();
