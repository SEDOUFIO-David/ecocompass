/**
 * Design: système éditorial EcoCompass — marque vectorielle autonome, fiable sur tout hébergeur et lisible à petite taille.
 */
export default function BrandMark({ className = "" }: { className?: string }) {
  return <svg className={`brand-mark ${className}`} viewBox="0 0 48 48" role="img" aria-label="Symbole EcoCompass"><circle cx="24" cy="24" r="20" fill="currentColor" opacity=".12" /><path d="M24 6.5 30.2 17.8 41.5 24l-11.3 6.2L24 41.5l-6.2-11.3L6.5 24l11.3-6.2L24 6.5Z" fill="currentColor" /><path d="M24 14.5v19M14.5 24h19" stroke="#FAFAF7" strokeWidth="2" strokeLinecap="round" /><path d="M27.7 20.3c5.3-3.5 9.6-2.2 9.6-2.2s.3 4.6-4.1 8.3c-3.6 3-7.3 2-8.9 1.2.1-1.8.7-4.7 3.4-7.3Z" fill="#B87938" stroke="#FAFAF7" strokeWidth="1.3" strokeLinejoin="round" /></svg>;
}
