import type { TerminalData } from "~/types";

const terminal: TerminalData[] = [
  {
    id: "about",
    title: "about",
    type: "folder",
    children: [
      {
        id: "about-bio",
        title: "bio.txt",
        type: "file",
        content: (
          <div className="py-1">
            <div>
            Un apasionado desarrollador de software y por el desarrollo web. 
            Me desenvuelvo como Full Stack ya que manejo de igual manera el 
            Frontend y el Backend. Originario de la Ciudad de México. Disfruto 
            convirtiendo problemas complejos en diseños simples, bellos e intuitivos.
            </div>
          </div>
        )
      },
      {
        id: "about-interests",
        title: "interests.txt",
        type: "file",
        content: "Software Developer / Computer Engineer / Full Stack Developer"
      },
      {
        id: "about-who-cares",
        title: "who-cares.txt",
        type: "file",
        content: "Me encuentro en proceso de titulación de la carrera de Ingeniería en Computación de la Facultad de Ingeniería de la UNAM."
      },
      {
        id: "about-contact",
        title: "contact.txt",
        type: "file",
        content: (
          <ul className="list-disc ml-6">
            <li>
              Email:{" "}
              <a
                className="text-blue-300"
                href="mailto:alanfmorag@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                alanfmorag@gmail.com
              </a>
            </li>
            <li>
              Github:{" "}
              <a
                className="text-blue-300"
                href="https://github.com/alanmgg"
                target="_blank"
                rel="noreferrer"
              >
                @alanmgg
              </a>
            </li>
            <li>
              Linkedin:{" "}
              <a
                className="text-blue-300"
                href="https://www.linkedin.com/in/alanmgg"
                target="_blank"
                rel="noreferrer"
              >
                alanmgg
              </a>
            </li>
            <li>
              Personal Website:{" "}
              <a
                className="text-blue-300"
                href="https://alanmg.me/"
                target="_blank"
                rel="noreferrer"
              >
                https://alanmg.me/
              </a>
            </li>
          </ul>
        )
      }
    ]
  },
  {
    id: "about-dream",
    title: "my-dream.cpp",
    type: "file",
    content: (
      <div className="py-1">
        <div>
          <span className="text-yellow-400">while</span>(
          <span className="text-blue-400">sleeping</span>) <span>{"{"}</span>
        </div>
        <div>
          <span className="text-blue-400 ml-9">money</span>
          <span className="text-yellow-400">++</span>;
        </div>
        <div>
          <span>{"}"}</span>
        </div>
      </div>
    )
  }
];

export default terminal;
