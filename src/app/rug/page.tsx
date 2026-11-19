import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import styles from "./rug.module.css";

export const metadata: Metadata = {
  title: "Antique Persian Sarouk Rug — 11'9\" × 20'",
  description:
    "A monumental hand-knotted antique Persian Sarouk rug in red and blue, offered at $10,000. Private inquiries and viewing requests welcome.",
  openGraph: {
    title: "Antique Persian Sarouk Rug — 11'9\" × 20'",
    description:
      "A monumental hand-knotted antique Persian Sarouk rug, offered at $10,000.",
    images: ["/rug/sarouk-full.jpeg"],
  },
};

const images = [
  { src: "/rug/sarouk-full.jpeg", alt: "Full view of the antique red and blue Persian Sarouk rug" },
  { src: "/rug/sarouk-angle.jpeg", alt: "Angled view showing the scale and border of the Sarouk rug" },
  { src: "/rug/sarouk-detail.jpeg", alt: "Close detail of the hand-knotted floral field" },
  { src: "/rug/sarouk-border.jpeg", alt: "Border and pile detail of the antique Sarouk rug" },
  { src: "/rug/sarouk-label.jpeg", alt: "Studio label identifying the rug as an antique Persian Sarouk" },
];

export default function RugPage() {
  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <Link className={styles.wordmark} href="/">ANDEN HERMAN</Link>
        <a className={styles.headerLink} href="#inquire">Private inquiry</a>
      </header>

      <section className={styles.hero} aria-labelledby="rug-title">
        <div className={styles.heroImage}>
          <Image
            src={images[0].src}
            alt={images[0].alt}
            fill
            priority
            sizes="(max-width: 900px) 100vw, 62vw"
          />
          <span className={styles.imageNote}>Photographed in natural showroom context</span>
        </div>
        <div className={styles.heroCopy}>
          <p className={styles.eyebrow}>Private offering · Inventory R1091</p>
          <h1 id="rug-title">An antique Persian Sarouk of exceptional scale.</h1>
          <p className={styles.lede}>
            A hand-knotted, room-size carpet with a saturated red field, deep blue border,
            and dense floral drawing. Its 20-foot length gives it architectural presence in
            a great room, gallery, library, or formal dining space.
          </p>
          <dl className={styles.facts}>
            <div><dt>Dimensions</dt><dd>{"11'9\" × 20'0\""}</dd></div>
            <div><dt>Origin</dt><dd>Persia · Sarouk</dd></div>
            <div><dt>Construction</dt><dd>Hand-knotted</dd></div>
            <div><dt>Palette</dt><dd>Red · deep blue · earth tones</dd></div>
          </dl>
          <div className={styles.priceRow}>
            <div><span>Asking price</span><strong>$10,000</strong></div>
            <a className={styles.primaryButton} href="#inquire">Request details</a>
          </div>
        </div>
      </section>

      <section className={styles.editorial} aria-label="Rug details">
        <div className={styles.editorialCopy}>
          <p className={styles.eyebrow}>The piece</p>
          <h2>Made to anchor a room.</h2>
          <p>
            The composition is disciplined despite its scale: an all-over floral field is
            held by a broad, dark border. The result reads as collected rather than decorative—
            a substantial textile with the warmth and variation expected of an antique rug.
          </p>
          <p>
            The photographs shown here are of the exact rug offered. Additional close-ups,
            reverse-side photographs, a condition discussion, and viewing arrangements are
            available to qualified interested parties.
          </p>
        </div>
        <div className={styles.detailImage}>
          <Image src={images[2].src} alt={images[2].alt} fill sizes="(max-width: 800px) 100vw, 55vw" />
        </div>
      </section>

      <section className={styles.gallery} aria-labelledby="gallery-title">
        <div className={styles.sectionHead}>
          <p className={styles.eyebrow}>Photographic record</p>
          <h2 id="gallery-title">Scale, color, and detail</h2>
        </div>
        <div className={styles.galleryGrid}>
          {images.slice(1).map((image, index) => (
            <figure key={image.src} className={index === 0 ? styles.galleryWide : undefined}>
              <div className={styles.galleryImage}>
                <Image src={image.src} alt={image.alt} fill sizes="(max-width: 800px) 100vw, 50vw" />
              </div>
              <figcaption>{index === 3 ? "Original studio identification label" : image.alt}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className={styles.inquiry} id="inquire" aria-labelledby="inquiry-title">
        <div className={styles.inquiryIntro}>
          <p className={styles.eyebrow}>Private inquiry</p>
          <h2 id="inquiry-title">Request the full dossier or arrange a viewing.</h2>
          <p>
            Tell us how you would like to evaluate the rug. We can follow up with additional
            photographs, condition information, and logistics. No payment is collected here.
          </p>
        </div>
        <form className={styles.form} action="https://formspree.io/f/xpwvlvwv" method="POST">
          <input type="hidden" name="_subject" value="Antique Sarouk rug inquiry — andenwebsite.com" />
          <input type="hidden" name="rug" value="Antique Persian Sarouk · R1091 · $10,000" />
          <label>
            Name
            <input name="name" autoComplete="name" required />
          </label>
          <div className={styles.formRow}>
            <label>
              Email
              <input name="email" type="email" autoComplete="email" required />
            </label>
            <label>
              Phone <span>(optional)</span>
              <input name="phone" type="tel" autoComplete="tel" />
            </label>
          </div>
          <label>
            I am interested in
            <select name="interest" defaultValue="Full details and condition report">
              <option>Full details and condition report</option>
              <option>Arranging an in-person viewing</option>
              <option>Delivery or shipping options</option>
              <option>Discussing the purchase</option>
            </select>
          </label>
          <label>
            Message <span>(optional)</span>
            <textarea name="message" rows={5} placeholder="Your location, timeline, or any questions" />
          </label>
          <label className={styles.consent}>
            <input type="checkbox" name="consent" required />
            <span>I agree to be contacted about this rug inquiry.</span>
          </label>
          <button type="submit">Send private inquiry</button>
          <p className={styles.formNote}>Your information is used only to respond to this inquiry.</p>
        </form>
      </section>

      <footer className={styles.footer}>
        <p>{"Antique Persian Sarouk · 11'9\" × 20'0\" · R1091"}</p>
        <a href="mailto:Anden.Herman@gmail.com?subject=Antique%20Sarouk%20rug%20inquiry">Email directly</a>
      </footer>
    </main>
  );
}
