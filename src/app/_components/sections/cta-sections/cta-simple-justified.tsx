import { AiComponentProps } from "../base/ai-component-props";
import ThemeOverlay from "../base/theme-overlay";
import Button from "../base/Button";
import LinkButton from "../base/LinkButton";

export default function CtaSimpleJustified({
  theme
}: AiComponentProps) {
  return (
    <div>
      <div className="relative isolate">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:flex lg:items-center lg:justify-between lg:px-8">
          <h2
            className={`text-3xl font-bold tracking-tight ${
              theme === "dark" ? "text-ai-title-dark" : "text-ai-title-regular"
            } sm:text-4xl`}
          >
            Find Your Perfect Ride 1
            <br />
            Start your hassle-free car rental today. 2
          </h2>
          <div className="mt-10 flex items-center gap-x-6 lg:mt-0 lg:flex-shrink-0">
             <Button theme={theme} href="#">
              Book Now 3
            </Button>
            <LinkButton theme={theme} href="#">
              See Our Fleet 4
            </LinkButton>
          </div>
        </div>
        <ThemeOverlay theme={theme} />
      </div>
    </div>
  );
}
