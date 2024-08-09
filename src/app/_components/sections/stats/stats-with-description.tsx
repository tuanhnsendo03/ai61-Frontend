import { AiComponentProps } from "../base/ai-component-props";
import ThemeOverlay from "../base/theme-overlay";

const stats = [
  { label: "Transactions every 24 hours", value: "44 million" },
  { label: "Assets under holding", value: "$119 trillion" },
  { label: "New users annually", value: "46,000" },
];

export default function StatsWithDescription({theme}: AiComponentProps) {
  return (
    <div>
      <div className="relative isolate py-32">
        <div
          className={`mx-auto max-w-7xl px-6 lg:px-8 ${
            theme === "neo-brutal"
              ? "bg-ai-secondary/[.15] border-2 border-ai-title-regular shadow-neo-brutal-xl-end rounded-xl py-8 lg:py-20"
              : ""
          }`}
        >
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
            <h2
              className={`text-3xl font-bold tracking-tight ${
                theme === "dark"
                  ? "text-ai-title-dark"
                  : "text-ai-title-regular"
              } sm:text-4xl`}
            >
              Your Trustworthy Car Rental Service 1
            </h2>
            <div className="mt-6 flex flex-col gap-x-8 gap-y-20 lg:flex-row">
              <div className="lg:w-full lg:max-w-2xl lg:flex-auto">
                <p
                  className={`text-xl leading-8 ${
                    theme === "dark"
                      ? "text-ai-subtext-dark"
                      : "text-ai-subtext-regular"
                  }`}
                >
                  We provide reliable and affordable car rental services, ensuring customer satisfaction and safety. Our commitment is to help you reach your destination comfortably and on time. 3
                </p>
                <p
                  className={`mt-10 max-w-xl text-base leading-7 ${
                    theme === "dark"
                      ? "text-ai-subtext-dark"
                      : "text-ai-subtext-regular"
                  }`}
                >
                  Since our inception, we've been recognized for our top-notch service and dependability. Join thousands of satisfied customers who choose us for their car rental needs. 2
                </p>
              </div>
              <div className="lg:flex lg:flex-auto lg:justify-center">
                <dl className="w-64 space-y-8 xl:w-80">
                  {stats.map((stat) => (
                    <div
                      key={stat.label}
                      className="flex flex-col-reverse gap-y-4"
                    >
                      <dt
                        className={`text-base leading-7 ${
                          theme === "dark"
                            ? "text-ai-subtext-dark"
                            : "text-ai-subtext-regular"
                        }`}
                      >
                        {stat.label}
                      </dt>
                      <dd
                        className={`text-5xl font-semibold tracking-tight ${
                          theme === "dark"
                            ? "text-ai-title-dark"
                            : "text-ai-title-regular"
                        }`}
                      >
                        {stat.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>
        </div>
        <ThemeOverlay theme={theme} />
      </div>
    </div>
  );
}
