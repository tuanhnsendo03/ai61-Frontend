import { AiComponentProps } from "../base/ai-component-props";
import ThemeOverlay from "../base/theme-overlay";
import Button from "../base/Button";
import LinkButton from "../base/LinkButton";

export default function CtaSimpleCentered({
  theme
}: AiComponentProps) {
  return (
    <div>
      <div className="relative isolate px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2
            className={`text-3xl font-bold tracking-tight ${
              theme === "dark" ? "text-ai-title-dark" : "text-ai-title-regular"
            } sm:text-4xl`}
          >
            Find Your Perfect Ride. 1
            <br />
            Rent a car with ease. 2
          </h2>
          <p
            className={`mx-auto mt-6 max-w-xl text-lg leading-8 ${
              theme === "dark"
                ? "text-ai-subtext-dark"
                : "text-ai-subtext-regular"
            }`}
          >
            Experience seamless car rentals with top-notch customer service and competitive rates. Explore our wide range of vehicles and book your ride today!
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button theme={theme} href="#">
              Get started
            </Button>
            <LinkButton theme={theme} href="#">
              Learn more
            </LinkButton>
          </div>
        </div>
        <ThemeOverlay theme={theme} />
      </div>
    </div>
  );
}
