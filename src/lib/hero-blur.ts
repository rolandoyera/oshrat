/**
 * Inline blur placeholders for the full-screen heroes. Paints an instant low-res
 * preview on first load instead of blank/black while the sharp image decodes —
 * next/image fades the real image in over it. Keyed by the image `src`.
 *
 * Regenerate if a hero source changes:
 *   sharp(file).resize(20).webp({ quality: 40 }).toBuffer()
 *   → "data:image/webp;base64," + buf.toString("base64")
 */
export const HERO_BLUR: Record<string, string> = {
  "/about/Sarvian-Design-Group.jpg":
    "data:image/webp;base64,UklGRoIAAABXRUJQVlA4IHYAAADwAwCdASoUAA0APu1iqU2ppaOiMAgBMB2JYwCdAB0+F8Dv8Mz0Lm6gAPz+hEuYW3rLbDwgzEF6dsxWLlBoWEc2mQuSShrtx17bEg9vG2Bkt5bIsi8M2TvS89xJAtqXvpZ/vPJR5fw5L3Gb0Ii1JKYQlErw4AAA",
  "/projects/sdg-bedroom-remodel-armoire-7.jpg":
    "data:image/webp;base64,UklGRloAAABXRUJQVlA4IE4AAABQAwCdASoUAAsAPu1iqU2ppaOiMAgBMB2JZwAAHIO9YROogAD9IZystzSWH96D/c0mRxfvDjzw2RwSTMMtKw4TOjzEnrg3EnI1eP+AAAA=",
  "/about/sarvian-design-group-oshrat-rothschild-16x9.jpg":
    "data:image/webp;base64,UklGRnAAAABXRUJQVlA4IGQAAADwAwCdASoUAAsAPu1kqU2ppaOiMAgBMB2JZQC7ABIQvqUFIrvfsM8AAOjpRcMjJVJy36szzofchR4aJy/Q1156IavWyiO/ZP0cy+GCxDMyp8QSrNIwzCf8/zM+UIYSWR7sx0AA",
  "/assets/aventura-interior-design-5.jpg":
    "data:image/webp;base64,UklGRpIAAABXRUJQVlA4IIYAAAAwBACdASoUAA0APu1iqU2ppaOiMAgBMB2JZQCdMoADFOXUrLvfUT6vZYAA/ZyxEdFGPNexLawoHuueJL2tnIeavS/ZVwDntfPcAHB1EnihpUD+WEscvhVcv2HjKX5kqayAp+4IntaPBeEMTVRRrn/Rnhywjowc1pxD8vUcAR6qRfJ7sPVMAA==",
};
