import { AiComponentProps } from "../base/ai-component-props";
import ThemeOverlay from "../base/theme-overlay";
import Button from "../base/Button";
import LinkButton from "../base/LinkButton";
import Image from "next/image";

export default function HeroSplitWithScreenshot({
  theme
}: AiComponentProps) {
  return (
    <div className={`relative isolate overflow-hidden`}>
      <div className="lg:grid grid-cols-2">
        <div className="px-6 pb-24 pt-10 sm:pb-32 lg:px-8 lg:py-40">
          <div className="mx-auto max-w-2xl lg:max-w-xl lg:flex-shrink-0 lg:pt-8">
            <h1
              className={`mt-10 text-4xl font-bold tracking-tight ${
                theme === "dark"
                  ? "text-ai-title-dark"
                  : "text-ai-title-regular"
              } sm:text-6xl`}
            >
              Discover the Easiest Way to Rent a Car 1
            </h1>
            <p
              className={`mt-6 text-lg leading-8 ${
                theme === "dark"
                  ? "text-ai-subtext-dark"
                  : "text-ai-subtext-regular"
              }`}
            >
              Say goodbye to the hassles of traditional car rentals. Our platform offers a seamless experience, making your journey smoother and more enjoyable, all at the click of a button. 2
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              <Button theme={theme} href="#">
                Book Now 3
              </Button>
              <LinkButton theme={theme} href="#">
                Why Choose Us 4
              </LinkButton>
            </div>
          </div>
        </div>
        <div
          className={`${
            theme === "neo-brutal" ? "bg-ai-secondary/[.3]" : ""
          } px-6 pb-24 pt-10 sm:pb-32 lg:px-8 lg:py-40`}
        >
          <div
            className={`mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mr-0 lg:mt-0 lg:max-w-none lg:flex-none xl:ml-32 ${
              theme === "neo-brutal" ? "shadow-neo-brutal" : ""
            }`}
          >
            <div className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
              <div
                className={`-m-2 rounded-xl p-2 lg:-m-4 lg:rounded-2xl lg:p-4`}
              >
                <Image
                  src="/img/sections/hero-sections/project-app-screenshot.png"
                  alt="App screenshot"
                  width={2432}
                  height={1442}
                  className="w-[76rem] rounded-md shadow-2xl ring-1 ring-gray-900/10"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <ThemeOverlay theme={theme} />
    </div>
  );
}
