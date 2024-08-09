import { AiComponentProps } from "../base/ai-component-props";
import Button from "../base/Button";
import LinkButton from "../base/LinkButton";
import Image from "next/image";

export default function CtaWithAppScreenshot({
  theme
}: AiComponentProps) {
  return (
    <div>
      <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
        <div
          className={`relative isolate overflow-hidden ${
            theme === "gradient"
              ? "bg-gradient-to-br from-ai-secondary to-[#9089fc40]"
              : theme === "dark"
                ? "bg-ai-card-dark"
                : theme === "neo-brutal"
                  ? "bg-ai-background-regular border-2 border-ai-title-regular shadow-neo-brutal-lg-start"
                  : "bg-ai-card-regular"
          } px-6 pt-16 sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0`}
        >
          <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
            <h2
              className={`text-3xl font-bold tracking-tight ${
                theme === "dark"
                  ? "text-ai-title-dark"
                  : "text-ai-title-regular"
              } sm:text-4xl`}
            >
              Drive your way to success. 1
              <br />
              Rent a car easily and quickly. 2
            </h2>
            <p
              className={`mx-auto mt-6 max-w-xl text-lg leading-8 ${
                theme === "dark"
                  ? "text-ai-subtext-dark"
                  : "text-ai-subtext-regular"
              }`}
            >
              Experience seamless and convenient car rentals with just a few clicks. Perfect for business travel or weekend getaways. 3
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
             <Button theme={theme} href="#">
                Book now 4
              </Button>
              <LinkButton theme={theme} href="#">
                Explore options 5
              </LinkButton>
            </div>
          </div>
          <div className="relative mt-16 h-80 lg:mt-8">
            <Image
              className="absolute left-0 top-0 w-[57rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10"
              src="/img/sections/cta-sections/dark-project-app-screenshot.png"
              alt="App screenshot"
              width={1910}
              height={1080}
            />
          </div>
        </div>
      </div>
    </div>
  );
}