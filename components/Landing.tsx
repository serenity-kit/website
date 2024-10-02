import Image from "next/image";
import imageSrcLanding from "../public/landing2.png";
import imageSrcSerenityComments from "../public/screenshots/serenity-comments.png";
import imageSrcSerenityDesktop from "../public/screenshots/serenity-desktop.png";
import imageSrcSerenityLogin from "../public/screenshots/serenity-login.png";
import imageSrcSerenitySharing from "../public/screenshots/serenity-sharing.png";
import SubscribeForm from "./SuscribeForm";
import { BlockWrapper } from "./blocks/BlockWrapper";
import { Example } from "./blocks/Example";
import { FeatureDetail } from "./blocks/FeatureDetail";
import { FeatureList } from "./blocks/FeatureList";
import { Hero } from "./blocks/Hero";
import { CTAArea } from "./composites/CTAArea";

const callToActionId = "call-to-action";

export const Landing = () => {
  return (
    <>
      <Hero
        header="End-to-end encrypted workspaces"
        text="Empower seamless teamwork in real-time without compromising on security and privacy."
        cta={{
          text: "Sign up for Early Access",
          onClick: () => {
            const element = document.getElementById(callToActionId);
            element?.scrollIntoView({ behavior: "smooth" });
          },
        }}
      >
        <Image
          src={imageSrcLanding}
          width={512}
          height={512}
          alt="A beautiful illustration of a lock"
        />
      </Hero>

      <Example
        header="Collaborate in real-time with ease"
        text="Intuitive rich-text editing with no conflict management needed while syncing in real-time."
      >
        <Image
          src={imageSrcSerenityDesktop}
          alt="Screenshot of Serenity in a Web browser"
        />
      </Example>

      <FeatureList
        header="Unprecedented Combination of Features"
        features={[
          {
            header: "Real-time collaboration",
            text: "No conflict management needed while syncing in real-time. Serenity is built for collaboration from the ground up.",
            iconName: "arrow-up-down-line",
          },
          {
            header: "Performance & Offline support",
            text: "Fast and responsive on the web. The native apps are even faster and documents are available offline.",
            iconName: "speed-up-fill",
          },
          {
            header: "Multi-platform",
            text: "Available on all platforms to be where you are. Serenity is available on Web, iOS, macOS & Windows. Android and Linux coming soon.",
            iconName: "device-line",
          },
          {
            header: "Seamless editing",
            text: "Rich-text editing including attachments, images, tables, code blocks and more. All in one place and even supporting Markdown for the power users.",
            iconName: "pencil-line",
          },
          {
            header: "Permissions",
            text: "Decide who can edit, comment or view within your workspace. You can even share documents with people outside your team.",
            iconName: "settings",
          },
          {
            header: "Security & Privacy",
            text: "Collaborate with your team without compromising on security and privacy. No one except you and your team can access your data.",
            iconName: "shield-line",
          },
        ]}
      />

      <FeatureDetail
        header="Simple sign in with email & password"
        text="No complex setup or configuration. Due modern cryptography you can enjoy the benefits from extraordinary security without sacrificing UX."
        // link={{ text: "blub", href: "https://google.com", external: true }}
      >
        <Image
          className="-mt-8 max-w-2xl"
          src={imageSrcSerenityLogin}
          alt="Screenshot of the Serenity Login screen"
        />
      </FeatureDetail>

      <FeatureDetail
        header="Sharing with external people"
        text="Share documents with people outside your team. You can even decide if they can edit, comment or just view."
        imagePosition="left"
      >
        <Image
          className="-mt-8 max-w-2xl"
          src={imageSrcSerenitySharing}
          alt="Screenshot demonstrating sharing a page"
        />
      </FeatureDetail>

      <FeatureDetail
        header="Comments"
        text="Discuss and collaborate on a page with comments and replies."
      >
        <Image
          className="-mt-8 max-w-2xl"
          src={imageSrcSerenityComments}
          alt="Screenshot demonstrating comments in Serenity"
        />
      </FeatureDetail>

      {/* <Comparison
        header="The problem Serenity is solving"
        text="Secure password based client-server authentication without the server ever obtaining knowledge of the password."
        comparisonData={[
          { title: "Serenity", points: ["point 1", "point 2", "point 3"] },
          { title: "others", points: ["other point 1", "other point 2"] },
        ]}
      /> */}

      <div className="max-w-3xl mx-auto">
        <Example
          header="Open Source"
          text={
            <>
              Serenity is fully Open Source. While there are many benefits to
              it, we believe it's essential for end-to-end encrypted software to
              verifiable. Checkout to the{" "}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/serenity-kit/Serenity"
                className="text-text-primary dark:text-dark-text-primary underline underline-offset-[0.2rem]"
              >
                Serenity codebase on Github
              </a>
            </>
          }
        ></Example>
      </div>

      <BlockWrapper>
        <CTAArea id={callToActionId} header="Sign up for Early Access" text="">
          <SubscribeForm convertkitFormId="1781726" />
        </CTAArea>
      </BlockWrapper>
    </>
  );
};
