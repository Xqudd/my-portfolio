"use client";
import Image from "next/image";
import styles from "./IndentedList.module.css";
import CodeBlock from "./CodeBlock.js";
import Script from "next/script";

export default function Home() {
  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundImage: "url('/background.jpg')",
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center", // centers content vertically on first load
        alignItems: "center",
      }}
    >
      {/* Hero Section */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "4rem 1rem",
        }}
      >
        
      </div>

      {/* Main Content */}
      <main
        className="flex flex-col gap-8 items-center bg-white py-10 px-4 sm:px-12"
        style={{
          maxWidth: "900px",
          margin: "2rem auto",
          borderRadius: "12px",
          boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
        }}
      >
        <h2
          style={{
            color: "black",
            textAlign: "center",
            textShadow: "0 0 8px white, 0 0 16px white",
            fontSize: "2rem",
            fontWeight: "bold",
          }}
        >
          Anden's
        </h2>
        <h1 className="animated-text text-3xl sm:text-4xl font-bold text-center">
          Eportfolio
        </h1>

        {/* Quick Skills Snapshot */}
        <section className="max-w-3xl text-center">
          <h2 className="text-xl font-semibold mb-2">Skills Snapshot</h2>
          <p className="text-gray-700">
            Python • Java • JavaScript • C • Scratch • Robotics • Arduino (Elegoo Uno R3) •
            Web Development • Breadboarding • Circuit Design • Game Development
          </p>
        </section>

        {/* About Me Section */}
        <details className="max-w-3xl w-full">
          <summary className="cursor-pointer font-semibold text-lg">
            About Me
          </summary>
          <p className="mt-2">
            I am a student at UCF pursuing a degree in Computer Science. I’m passionate about
            problem-solving, building real-world projects, and always eager to learn new
            technologies.
          </p>
        </details>

        {/* Technical Skills Section */}
        <details className="max-w-3xl w-full">
          <summary className="cursor-pointer font-semibold text-lg">
            Technical Skills
          </summary>
          <ul className={styles.indentedList}>
            <li>
              <strong>Python:</strong> Robotics projects, breadboards, distance-sensing glasses,
              LED matrix animations, Weather systems made for implementation to a sprinkler system
              <details> <summary>Weather System Program</summary>

              <iframe
      src="/terminal.html"
      style={{
        width: '100%',
        height:'600px',
      }}
    />



              </details>
            </li>
            <li>
              <strong>Java programming:</strong> Learned through AP Computer Science, practiced with object-oriented projects.
            </li>
            <li>
              <strong>JavaScript programming:</strong> Game development (MakeCode Arcade), and interactive web pages.
              <details>
                <summary>Game example</summary> 
                <div className="relative w-[300px] sm:w-[500px] h-[600px] mt-2">
                  <iframe
                    className="absolute inset-0 w-full h-full rounded-lg shadow-lg"
                    src="https://arcade.makecode.com/---run?id=S69962-65495-67851-29785"
                    allowFullScreen
                    sandbox="allow-popups allow-forms allow-scripts allow-same-origin"
                    frameBorder="0"
                  ></iframe>
                </div>
              </details>
            </li>
            <li>
              <strong>C programming:</strong> Coursework experience as well as miscellenous personal projects.
            </li>
            <li>
              <strong>C++ programming:</strong> Use of C++ through unity game development
              <details><summary>I plan to add a unity game to itch.io eventualy</summary>
              see if games have been added yet
              <a
            className="rounded-full border border-black/10 dark:border-white/20 hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] font-medium text-base h-12 px-5 flex items-center justify-center transition-colors"
            href="https://xqudd.itch.io"
            target="_blank"
            rel="noopener noreferrer"
          >
            More on Itch.io
          </a>
              </details>
            </li>
            <li>
              <strong>Html: </strong> Projects like the website you are on right now
              <details>
               <summary>Cool html thing</summary>
                      <iframe
                        src="/skills.html"
                        style={{
                          width: "100%",
                          height: "600px",
                          border: "1px solid #ccc",
                          borderRadius: "8px",
                        }}
                        ></iframe>

              </details>
            </li>
            <li>
              <strong>Scratch:</strong> How I first started coded years and years ago
              <details>
                <summary>Scratch game embed, because the more games in an Eportfolio the better</summary>
                <p className="text-sm mb-2">
                  W/Space to jump, arrows/WASD to move
                </p>
                <iframe
                  src="https://scratch.mit.edu/projects/1213549385/embed"
                  width="485"
                  height="402"
                  frameBorder="0"
                  allowFullScreen
                  className="rounded-lg shadow-lg mx-auto"
                ></iframe>
              </details>
            </li>
          </ul>
        </details>

        {/* Projects Section */}
        <details className="max-w-3xl w-full">
          <summary className="cursor-pointer font-semibold text-lg">
             Projects
          </summary>
          <ul className={styles.indentedList}>
            <li>
              <strong>Custom TENS unit:</strong> Custom electronics project using an Elegoo Uno R3,
              transistors, diodes, potentiometers, and a PWM signal for muscle stimulation.
            </li>
            <li>
              <strong>Distance-Sensing Glasses:</strong> Python + microcontroller + buzzer to warn
              when approaching objects.
            </li>
            <li>
              <strong>LED Matrix Animations:</strong> Custom messages & graphics on LED boards.
              <details>
                <summary>Images</summary>
                <div className="flex flex-wrap gap-4 mt-2">
                  <Image
                    src="/MoneyLed.jpg"
                    alt="Money LED"
                    width={200}
                    height={100}
                  />
                  <Image
                    src="/StarLed.jpg"
                    alt="Star LED"
                    width={200}
                    height={100}
                  />
                </div>
                <details>
                  <summary>Related Code</summary>
                  <CodeBlock language="python" />
                </details>
              </details>
            </li>
            <li>
              <strong>Custom Electric GoKart:</strong> 3D modeling and some 3D printing for scale models, metal working for the actual thing, wiring, motor controller programming
            </li>
          </ul>
        </details>

        {/* Fun Facts Section */}
        

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-8">
          <a
            className="rounded-full border border-transparent bg-foreground text-background hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-base h-12 px-5 flex items-center justify-center gap-2 transition-colors"
            href="https://youtu.be/dQw4w9WgXcQ?si=MzcZrxyicFOg53ny"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel Logo"
              width={20}
              height={20}
            />
            What does this button do?
          </a>

          <a
            className="rounded-full border border-black/10 dark:border-white/20 hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] font-medium text-base h-12 px-5 flex items-center justify-center transition-colors"
            href="https://xqudd.itch.io"
            target="_blank"
            rel="noopener noreferrer"
          >
            More on Itch.io
          </a>
          
        </div>
       
  <p>
    Connect : 
    <a href="mailto:anden.herman@gmail.com">Email</a> |
    <a href="https://github.com/Xqudd">GitHub</a> |
    <a href="https://www.linkedin.com/in/anden-herman/">LinkedIn</a>
  </p>
      </main>
    </div>
  );
}
