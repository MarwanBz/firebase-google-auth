import Head from "next/head";
import RootLayout from "../../src/components/RootLayout";


const About = () => {
  return (
    <>
    <RootLayout>

      <Head>
        <title>About | Marwan Baz</title>

        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.15/dist/tailwind.min.css"
        />
      </Head>
      <div className="bg-black text-white py-10 px-4">
        <h1 className="text-3xl font-bold mb-4">
          <span className="bg-gradient-to-r from-yellow-400 to-red-500 text-transparent bg-clip-text">
            Marwan Baz
          </span>
        </h1>
        <p className="text-lg mb-4">
          Hey there, I'm a web developer based in [insert location here]. I
          created this blog using Next.js and styled it using Tailwind CSS. I'm
          passionate about building fast, responsive, and accessible websites
          and applications, and I'm always looking to learn new things and
          improve my skills.
        </p>
        <p className="text-lg mb-4">
          When I'm not coding, you can usually find me playing video games,
          hiking, or reading. I'm also a big fan of [insert favorite food, TV
          show, or hobby here].
        </p>
        <p className="text-lg">
          Thanks for stopping by, and feel free to reach out to me if you have
          any questions or just want to chat!
        </p>
      </div>
    </RootLayout>
    </>
  );
};

export default About;
