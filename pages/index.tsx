import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Digitalesque</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main>
        <section className="px-6 py-16 md:px-44">
          <h1 className="max-w-[20ch] mt-[40vh] text-3xl font-travels font-black tracking-wide md:text-7xl md:leading-none">
            The Digital <br /> Transformation Agency
          </h1>
        </section>

        <section className="px-4 md:px-36">
          <div className="border-t-2 border-black"></div>
          <div className="mt-6 min-h-[80vh] bg-black flex items-end">
            <div className="px-6 py-14 md:px-8 md:py-24">
              <p className="max-w-[40ch] text-xl text-white font-travels font-bold tracking-wide md:text-3xl">
                Our MISSION is to offer bespoke, trusted advanced digital
                solutions to the challenges of individuals, businesses, and
                governments in Africa by transforming systems.
              </p>
            </div>
          </div>
        </section>

        <section className="px-6 pt-32 pb-14 md:px-44">
          <h3 className="text-2xl font-travels font-extrabold tracking-wide md:text-4xl md:leading-tight">
            Our blueprint for digital transformation below gives an overview of
            the sequence, checklist, and guides at all levels of the
            organization through the journey ensuring that no area of the
            strategy is left unattended during the period of change:
          </h3>
        </section>

        <section className="px-6 grid grid-cols-1 gap-x-24 pb-16 md:grid-cols-2 md:px-36">
          <div className="px-2 py-6 border-t-2 border-black md:px-8">
            <h2 className="mb-4 text-2xl font-travels font-extrabold tracking-wide md:text-4xl">
              Technology
            </h2>
            <p className="md:text-lg">
              Digital transformation involves using digital technologies to
              remake a process to become more efficient or effective. The idea
              is to use technology not just to replicate an existing service in
              a digital form, but to use technology to transform that service
              into something significantly better.
            </p>
          </div>

          <div className="px-2 py-6 border-t-2 border-black md:px-8">
            <h2 className="mb-4 text-2xl font-travels font-extrabold tracking-wide md:text-4xl">
              Data
            </h2>
            <p className="md:text-lg">
              Big Data is at the heart of digital transformation because it
              brings all the points together in one place for a more
              comprehensive and holistic view of the entire organization&#39;s
              ecosystem. Big data has to enable both the digitization and
              automation of operations which improves efficiency, spur
              innovation, and leads to new business models.
            </p>
          </div>

          <div className="px-2 py-6 border-t-2 border-black md:px-8">
            <h2 className="mb-4 text-2xl font-travels font-extrabold tracking-wide md:text-4xl">
              Process
            </h2>
            <p className="md:text-lg">
              Digital transformation requires an end-to-end mindset, a
              rethinking of ways to meet customer needs, seamless connection of
              work activities, and the ability to manage across silos going
              forward. Process orientation is a natural fit with these needs
              necessitating radical process (re)engineering.
            </p>
          </div>

          <div className="px-2 py-6 border-t-2 border-black md:px-8">
            <h2 className="mb-4 text-2xl font-travels font-extrabold tracking-wide md:text-4xl">
              Culture
            </h2>
            <p className="md:text-lg">
              The core driver of digital transformation is a digital culture
              because it empowers people to deliver results faster by increasing
              adoption, creating the right organizational alignment needed for
              the strategy to thrive dramatically reducing the gap between
              strategy and execution.
            </p>
          </div>
        </section>

        <section>
          <div className="px-6 py-10 md:px-44">
            <h3 className="text-xl font-travels font-bold tracking-wide md:text-3xl">
              Our Capabilities
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3">
            <div className="bg-black min-h-[55vh] flex items-end text-white md:min-h-[80vh]">
              <div className="w-full p-6 flex justify-between items-center md:px-10 md:py-12">
                <p className="text-2xl font-travels font-extrabold">
                  Digital Advisory
                </p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                  className="w-8 h-8 transition-all "
                >
                  <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z"></path>
                </svg>
              </div>
            </div>

            <div className="bg-black min-h-[55vh] flex items-end text-white md:min-h-[80vh]">
              <div className="w-full p-6 flex justify-between items-center md:px-10 md:py-12">
                <p className="text-2xl font-travels font-extrabold">
                  Data Science Consulting
                </p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                  className="w-8 h-8 transition-all "
                >
                  <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z"></path>
                </svg>
              </div>
            </div>

            <div className="bg-black min-h-[55vh] flex items-end text-white md:min-h-[80vh]">
              <div className="w-full p-6 flex justify-between items-center md:px-10 md:py-12">
                <p className="text-2xl font-travels font-extrabold">
                  Digital Culture Advisory
                </p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                  className="w-8 h-8 transition-all "
                >
                  <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z"></path>
                </svg>
              </div>
            </div>
          </div>

          <div className="px-6 py-10 text-right md:px-44 md">
            <a href="" className="text-lg underline md:text-xl">
              All Capabilites
            </a>
          </div>
        </section>

        <section className="px-6 pt-32 pb-14 md:px-44">
          <h3 className="max-w-[40ch] text-2xl font-travels font-extrabold tracking-wide md:text-4xl md:leading-tight">
            We have worked closely and successfully with government departments
            and major companies, and pride ourselves on meeting and exceeding
            our client’s high expectations. Here, you can find a selection of
            the many client organisations we already work closely alongside:
          </h3>
        </section>

        <section className="px-6 pb-32 md:px-36">
          <div className="mb-6 border-t-2 border-black"></div>
          <div className="md:pl-12 md:ml-auto md:w-1/2">
            <div className="px-2 py-6">
              <h4 className="text-xl font-travels font-extrabold tracking-wide md:text-3xl">
                The Central Bank of Nigeria
              </h4>
              <p className="md:text-lg">
                Set-up of the eNaira New Media Infrastructure. Built
                eNaira.gov.ng and the Web App.
              </p>
            </div>

            <div className="px-2 py-6 border-t-2 border-black">
              <h4 className="text-xl font-travels font-extrabold tracking-wide md:text-3xl">
                Titan Trust Bank
              </h4>
              <p className="md:text-lg">
                Web portal Development and Brand Identity
              </p>
            </div>

            <div className="px-2 py-6 border-t-2 border-black">
              <h4 className="text-xl font-travels font-extrabold tracking-wide md:text-3xl">
                The Securities and Exchange Commission (SEC)
              </h4>
              <p className="md:text-lg">
                Website Redesign and Administrative Portals Development
                (Ongoing)
              </p>
            </div>

            <div className="px-2 py-6 border-t-2 border-black">
              <h4 className="text-xl font-travels font-extrabold tracking-wide md:text-3xl">
                The Infrastructural Corporation (InfraCo)
              </h4>
              <p className="md:text-lg">
                Brand Identity, ICT Infrastructure and Website Development{" "}
              </p>
            </div>

            <div className="text-right">
              <a href="" className="text-lg underline md:text-xl">
                See More
              </a>
            </div>
          </div>
        </section>

        <section>
          <div className="px-6 py-10 md:px-44">
            <h3 className="text-xl font-travels font-bold tracking-wide md:text-3xl">
              Our Insights
            </h3>
          </div>

          <div className="grid grid-cols-1 md:gap-1 md:grid-cols-4">
            <div className="bg-black min-h-[50vh] flex items-end text-white">
              <div className="p-6 md:p-8">
                <a href="" className="group hover:text-gray-400">
                  <p className="mb-3 text-xl font-travels font-extrabold tracking-wide md:text-3xl group-hover:underline">
                    Tuning into Africa’s digital transformation
                  </p>
                  <span className="text-sm">LEARN MORE</span>
                </a>
              </div>
            </div>

            <div className="bg-black min-h-[50vh] flex items-end text-white">
              <div className="p-6 md:p-8">
                <a href="" className="group hover:text-gray-400">
                  <p className="mb-3 text-xl font-travels font-extrabold tracking-wide md:text-3xl group-hover:underline">
                    Digital transformation in Africa: three lessons from
                    India&#39;s experience
                  </p>
                  <span className="text-sm">LEARN MORE</span>
                </a>
              </div>
            </div>

            <div className="bg-black min-h-[50vh] flex items-end text-white">
              <div className="p-6 md:p-8">
                <a href="" className="group hover:text-gray-400">
                  <p className="mb-3 text-xl font-travels font-extrabold tracking-wide md:text-3xl group-hover:underline">
                    The promises and perils of Africa’s digital revolution
                  </p>
                  <span className="text-sm">LEARN MORE</span>
                </a>
              </div>
            </div>

            <div className="bg-black min-h-[50vh] flex items-end text-white md:min-h-[70vh]">
              <div className="p-6 md:p-8">
                <a href="" className="group hover:text-gray-400">
                  <p className="mb-3 text-xl font-travels font-extrabold tracking-wide md:text-3xl group-hover:underline">
                    Improving Africa’s digital and innovation ecosystems: five
                    ways forward
                  </p>
                  <span className="text-sm">LEARN MORE</span>
                </a>
              </div>
            </div>
          </div>

          <div className="px-6 py-10 text-right md:px-44 md">
            <a href="" className="text-lg underline md:text-xl">
              More Insights
            </a>
          </div>
        </section>

        <section className="px-6 pt-32 pb-14 md:px-44">
          <h3 className="max-w-[40ch] text-2xl font-travels font-extrabold tracking-wide md:text-3xl md:leading-tight">
            If you’re interested in working with us and want to find out more
            about the results we’ve achieved, we’d love to hear from you
          </h3>
        </section>

        <section className="px-4 pb-16 md:px-36">
          <div className="border-t-2 border-black"></div>
          <div className="mt-6 w-2/3 ml-auto px-2 py-8 md:w-2/5 md:p-8">
            <h4 className="max-w-[40ch] text-xl font-travels font-bold tracking-wide md:text-2xl">
              Can we do business?
            </h4>
            <a
              href=""
              className="text-lg underline md:text-xl hover:text-gray-500"
            >
              Click this link to give us a shout.
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
