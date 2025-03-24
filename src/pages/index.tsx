import Layout from "@theme/Layout";
import { FaApple, FaWindows } from "react-icons/fa";

import Translate from "@docusaurus/Translate";
import Carousel from "../components/Carousel";

const langs = [
  { code: "en", name: "English" },
  { code: "zh-Hans", name: "中文简体" },
];

export default function Home(): JSX.Element {
  const groupImages = ["img/app/1.png", "img/app/2.png", "img/app/3.png"];

  const downloadWin = () => {
    window.open(
      "https://github.com/mortise-and-tenon/JointSearch/releases/download/v0.1.0/JointSearch_0.1.0_x64-setup.exe",
      "_blank"
    );
  };

  const downloadMac = () => {
    window.open(
      "https://github.com/mortise-and-tenon/JointSearch/releases/download/v0.1.0/JointSearch_0.1.0_aarch64.dmg",
      "_blank"
    );
  };

  return (
    <Layout
      title="ElasticSearch Client"
      description="Be the best Elasticsearch client."
    >
      <div className="h-screen flex flex-col justify-between">
      <main className="p-4 md:pt-32">
        <div className="mx-2 md:mx-20 px-3 first">
          <div className="grid grid-rows-1">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="flex flex-col justify-center items-start">
                <h2 className="text-2xl md:text-6xl font-bold mb-5 leading-snug">
                  <Translate description="first-title-part1">
                    Be the best Elasticsearch client
                  </Translate>
                </h2>
                <p className="mb-8 mr-10">
                  <Translate description="first-desc">
                    As a client for Elasticsearch, Jointsearch aims not only to
                    provide functions such as the management and search of
                    Elasticsearch, but also to simultaneously offer API-related
                    guidelines on the client side to assist users in their
                    learning.
                  </Translate>
                </p>
                <div className="flex space-x-2">
                  <button
                    className="flex items-center space-x-2 border px-4 py-2 rounded-3xl transition duration-300 ease-in-out hover:text-white hover:bg-[#fa65b1]"
                    onClick={downloadWin}
                  >
                    <FaWindows size={32} />
                    <span>
                      <Translate description="win down btn">Download</Translate>
                    </span>
                    <span>
                      <Translate description="version">v0.1.0</Translate>
                    </span>
                  </button>
                  <button
                    className="flex items-center space-x-2 border  px-4 py-2 rounded-3xl transition duration-300 ease-in-out hover:text-white hover:bg-[#fa65b1]"
                    onClick={downloadMac}
                  >
                    <FaApple size={32} />
                    <span>
                      <Translate description="mac down btn">Download</Translate>
                    </span>
                    <span>
                      <Translate description="version">v0.1.0</Translate>
                      <Translate description="unverify desc">
                        (Unverified)
                      </Translate>
                    </span>
                  </button>
                </div>
                <img
                  src="img/app/4.png"
                  alt="group chat"
                  className="pt-4 md:hidden"
                />
              </div>
              <div className="hidden md:block">
                <Carousel images={groupImages} />
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className="bg-gray-100 px-4 md:px-32 pt-6">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="pb-4 ml-4 md:ml-0">
            <a
              href="/"
              className="flex items-center space-x-2 no-underline hover:no-underline"
            >
              <img src="img/icon.png" className="w-8 h-8" alt="logo" />
              <h2 className="text-lg font-bold">
                <Translate description="app">JointSearch</Translate>
              </h2>
            </a>
          </div>
          <div className="grid grid-cols-2 ml-4 mb-4 md:ml-0 md:mb-0">
            <div>
              <span className="border-b border-gray-300 pb-4 text-lg font-medium">
                <Translate description="footer-resource">Resources</Translate>
              </span>
              <ul className="mt-8 space-y-2 text-gray-500">
                <li>
                  <a
                    href="https://github.com/mortise-and-tenon/JointSearch/releases"
                    target="_blank"
                  >
                    <Translate description="footer-download">
                      Download
                    </Translate>
                  </a>
                </li>
                <li>
                  <Translate description="footer-help">Help Center</Translate>
                </li>
              </ul>
            </div>
            <div>
              <span className="border-b border-gray-300 pb-4 text-lg font-medium">
                <Translate description="footer-about">About Us</Translate>
              </span>
              <ul className="mt-8 space-y-2 text-gray-500">
                <li>
                  <a
                    href="https://github.com/mortise-and-tenon/JointSearch"
                    target="_blank"
                  >
                    <Translate description="footer-terms">GitHub</Translate>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <span className="flex leading-5 text-gray-500 pb-8 pt-4 ml-4 md:pt-8 border-t border-gray-200">
          © {new Date().getFullYear()}{" "}
          <Translate description="copyright">
            Mortnon. All Rights Reserved.
          </Translate>
        </span>
      </footer>
      </div>
    </Layout>
  );
}
