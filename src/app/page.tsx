"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import gsap from "gsap";
//test
export default function HomePage() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
  const canvas = canvasRef.current!;
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(45, window.innerWidth / 450, 0.1, 100);

  // Start with camera centered
  const canvasHeight = 450;
  camera.position.set(0, 0, 3.6);

  // Lights
  const light1 = new THREE.DirectionalLight(0xffffff, 0.7);
  light1.position.set(4, 4, 4);
  scene.add(light1);
  scene.add(new THREE.AmbientLight(0xffffff, 0.5));

  // Icosahedron
  const geo = new THREE.IcosahedronGeometry(1, 3);
  const pos = geo.attributes.position;
  const base = new Float32Array(pos.array);
  const mat = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.2, metalness: 0.8 });
  const mesh = new THREE.Mesh(geo, mat);
  scene.add(mesh);

  const wire = new THREE.LineSegments(
    new THREE.WireframeGeometry(geo),
    new THREE.LineBasicMaterial({ color: 0xffffff, opacity: 0.08, transparent: true })
  );
  scene.add(wire);

  // Particles
  const pGeo = new THREE.BufferGeometry();
  const pCount = 900;
  const arr = new Float32Array(pCount * 3);
  for (let i = 0; i < pCount; i++) {
    arr[i * 3] = (Math.random() * 2 - 1) * 6;
    arr[i * 3 + 1] = (Math.random() * 2 - 1) * 6;
    arr[i * 3 + 2] = (Math.random() * 2 - 1) * 6;
  }
  pGeo.setAttribute("position", new THREE.BufferAttribute(arr, 3));
  scene.add(new THREE.Points(pGeo, new THREE.PointsMaterial({ size: 0.02, opacity: 0.5, transparent: true })));

  // Resize function
  const canvasWrap = canvasRef.current!.parentElement!;

const resize = () => {
  const w = canvasWrap.clientWidth;
  const h = canvasWrap.clientHeight;
  renderer.setSize(w, h);
  camera.aspect = w / h;
  camera.updateProjectionMatrix();
};
resize();
window.addEventListener("resize", resize);


  // Animate
  let t = 0;
  const clock = new THREE.Clock();

  const animate = () => {
    t += clock.getDelta() * 0.7;

    for (let i = 0; i < pos.count; i++) {
      const ix = i * 3;
      const x = base[ix], y = base[ix + 1], z = base[ix + 2];
      const n = Math.sin(x * 3 + t) * 0.1 + Math.cos(y * 3 + t) * 0.1;
      pos.array[ix] = x + n * 0.3;
      pos.array[ix + 1] = y + n * 0.3;
      pos.array[ix + 2] = z + n * 0.3;
    }
    pos.needsUpdate = true;

    mesh.rotation.y += 0.006;
    wire.rotation.copy(mesh.rotation);
    mat.color.setHSL(0.65 + Math.sin(t * 0.5) * 0.03, 0.7, 0.6);

    renderer.render(scene, camera);
    requestAnimationFrame(animate);
  };
  animate();

  // Mouse parallax
  const onMouseMove = (e: MouseEvent) => {
    const nx = (e.clientX / window.innerWidth - 0.5) * 2;
    const ny = (e.clientY / canvasHeight - 0.5) * 2;
    gsap.to(camera.position, {
      x: nx * 0.7,
      y: -ny * 0.4, // small vertical movement, keeps object centered
      duration: 0.6,
      ease: "power2.out",
    });
  };
  window.addEventListener("mousemove", onMouseMove);

  return () => {
    window.removeEventListener("resize", resize);
    window.removeEventListener("mousemove", onMouseMove);
  };
}, []);


  return (
    <div style={styles.page}>
      <section style={styles.hero}>
        <div id="about" className="fade" style={styles.heroText}>
          <h1 style={styles.h1}>Anden Herman</h1>
          <ul style={{ paddingLeft: 0, marginTop: 12, lineHeight: "1.7" }}>
            {[
              "2 years of experience teaching game development at Code Ninjas",
              "Strong in Unity, C#, gameplay programming, and interactive systems",
              "Fast-learning, creative, always building tools and prototypes"
            ].map((text) => (
              <li key={text} style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 6, opacity: 0.85 }}>
                <div style={{ width: 8, height: 8, borderRadius: "50%", background: "linear-gradient(90deg,#7b61ff,#00e0a1)", boxShadow: "0 0 10px #7b61ff" }} />
                {text}
              </li>
            ))}
          </ul>

          <div id="skills" style={styles.skills}>
            {["Unity", "C#", "C", "Python", "Java", "HTML/CSS/JS", "Game Design"].map(s => (
              <div key={s} style={styles.chip}>{s}</div>
            ))}
          </div>

          <div style={{ marginTop: 20, display: "flex", gap: 12 }}>
            <a href="https://github.com/" target="_blank" style={styles.social}>GitHub</a>
            <a href="https://www.linkedin.com/" target="_blank" style={styles.social}>LinkedIn</a>
            <a href="/resume.pdf" download style={styles.social}>Resume</a>
          </div>
        </div>

        <div className="fade" style={styles.canvasWrap}>
          <canvas ref={canvasRef} style={{ width: "100%", height: "100%" }} />
        </div>
      </section>


      {/* ---------------- CONTACT ---------------- */}
      <section id="contact" className="fade" style={styles.cardSection}>
        <h2 style={styles.h2}>Contact</h2>
        <p style={styles.sub}>Interested in working together? Send a message below.</p>

        {/* REAL Email Integration (Formspree) */}
        <form
          action="https://formspree.io/f/xpwvlvwv"
          method="POST"
          style={styles.form}
        >
          <input name="name" placeholder="Name" required style={styles.input} />
          <input name="email" type="email" placeholder="Email" required style={styles.input} />
          <textarea name="message" placeholder="Message" rows={4} required style={styles.textarea}></textarea>
          <button style={styles.button}>Send Message</button>
        </form>
      </section>
    </div>
  );
}

// ---------------- STYLES ----------------
const styles: Record<string, React.CSSProperties> = {
  page: { fontFamily: "Inter, sans-serif", paddingBottom: "60px", background: "#0b1020", color: "white" },
  hero: { marginTop: 0, display: "grid", gridTemplateColumns: "1fr 1fr", width: "92%", maxWidth: 1100, marginInline: "auto", gap: 40 },
  heroText: { marginTop: 30 },
  h1: { fontSize: 44, fontWeight: 800, marginBottom: 12 },
  skills: { display: "flex", flexWrap: "wrap", gap: 10, marginTop: 16 },
  chip: { padding: "8px 12px", borderRadius: 999, background: "rgba(255,255,255,0.08)", fontSize: 14 },
  social: { padding: "8px 14px", background: "rgba(255,255,255,0.08)", borderRadius: 10, fontSize: 14, textDecoration: "none", color: "white" },
  canvasWrap: { height: 450, borderRadius: 18, overflow: "hidden", background: "rgba(255,255,255,0.03)", backdropFilter: "blur(6px)" },
  cardSection: {
    width: "92%",
    maxWidth: 1100,
    margin: "80px auto 0",
    padding: 24,
    background: "rgba(255,255,255,0.03)",
    borderRadius: 18,
  },

  h2: { fontSize: 30, marginBottom: 16 },

  projectGrid: {
    display: "grid",
    gap: 14,
    gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))",
  },

  projectCard: {
    padding: 16,
    borderRadius: 12,
    background: "rgba(255,255,255,0.05)",
    textDecoration: "none",
    color: "white",
  },

  form: { display: "flex", flexDirection: "column", gap: 10 },

  input: {
    padding: 12,
    borderRadius: 10,
    background: "rgba(255,255,255,0.05)",
    border: "none",
    color: "white",
  },

  textarea: {
    padding: 12,
    borderRadius: 10,
    background: "rgba(255,255,255,0.05)",
    border: "none",
    color: "white",
  },

  button: {
    padding: "12px 18px",
    background: "linear-gradient(90deg,#7b61ff,#00e0a1)",
    borderRadius: 12,
    border: "none",
    fontWeight: 700,
    cursor: "pointer",
    fontSize: 16,
  },
};
