import React from "react";

function About() {
  return (
    <div className="py-16 px-10 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-6 text-gray-700 sm:px-10 lg:px-20">
        {/* On mobile + tablet → stacked, on desktop → side by side */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-16">
          {/* Left Image */}
          <div className="flex justify-center lg:justify-start mb-8 lg:mb-0 lg:w-5/12">
            <img
              src="https://cdn.dribbble.com/users/1162077/screenshots/3848914/programmer.gif"
              alt="Developer Illustration"
              className="rounded-2xl shadow-xl w-72 sm:w-80 md:w-[28rem] lg:w-[32rem] hover:scale-105 transition duration-300"
            />
          </div>

          {/* Right Content */}
          <div className="text-center lg:text-left lg:w-7/12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
              Hi, I'm <span className="text-orange-700">Shivkant Pal</span> 👋
            </h2>
            <p className="mt-4 text-lg leading-relaxed">
              A <span className="font-semibold">Full-Stack Developer</span>{" "}
              passionate about building modern, scalable web apps using{" "}
              <span className="font-semibold text-gray-900">React</span>,{" "}
              <span className="font-semibold text-gray-900">Node.js</span>,{" "}
              <span className="font-semibold text-gray-900">MongoDB</span> &{" "}
              <span className="font-semibold text-gray-900">Tailwind CSS</span>.
            </p>
            <p className="mt-3 text-lg leading-relaxed">
              I enjoy solving real-world problems, contributing to open-source,
              and constantly exploring new technologies.
            </p>

            {/* Skills */}
            <div className="mt-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                🚀 Skills
              </h3>
              <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                {[
                  "React & Next.js",
                  "Node.js & Express",
                  "MongoDB & SQL",
                  "Tailwind CSS",
                  "Git & GitHub",
                  "REST APIs",
                ].map((skill, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-gray-200 rounded-full text-sm hover:bg-orange-100 hover:scale-105 transition duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* GitHub CTA */}
            <div className="mt-8">
              <a
                href="https://github.com/shivkantx"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 text-white bg-orange-700 rounded-lg shadow-md hover:bg-orange-800 transition"
              >
                Visit My GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
