import Image from "next/image";

export default function Home() {
  return (
    <main>
      <header className= "header"> Portfolio</header>
      <nav className="nav">
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/projects">Projects</a>
          </li>
          <li>
            <a href="/resume">Resume</a>
          </li>
        </ul>
      </nav>
      </main>
     );
}
