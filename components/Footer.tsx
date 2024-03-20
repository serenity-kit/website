import cn from "clsx";
import Image from "next/image";
import type { ReactElement } from "react";
import imageSrcViennaBusinessAgency from "../public/wirtschaftsagentur.jpg";

export function Footer(): ReactElement {
  const styles = {
    wrapper:
      "grid grid-cols-1 sm:grid-cols-footer-sm lg:grid-cols-footer-lg max-sm:gap-8 w-full max-w-[48rem]" +
      " my-0 mx-auto max-sm:text-center text-text-tertiary dark:text-dark-text-tertiary",
    linkWrapper: "flex flex-col gap-2",
    link: "text-text-primary dark:text-dark-text-primary underline underline-offset-[0.2rem]",
  };
  return (
    <footer className="bg-surface-primary dark:bg-dark-surface-primary border-t border-surface-border dark:border-dark-surface-border nx-pb-[env(safe-area-inset-bottom)] print:nx-bg-transparent">
      <div
        className={cn(
          "nx-mx-auto nx-flex nx-max-w-[90rem] nx-justify-center nx-py-12 nx-text-gray-600 dark:nx-text-gray-400 md:nx-justify-start",
          "nx-pl-[max(env(safe-area-inset-left),1.5rem)] nx-pr-[max(env(safe-area-inset-right),1.5rem)]"
        )}
      >
        <div className={styles.wrapper}>
          <div className="w-full sm:w-52 flex flex-col max-sm:items-center text-sm">
            <a
              href="https://wirtschaftsagentur.at/"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-24"
            >
              <Image
                src={imageSrcViennaBusinessAgency}
                alt="Vienna Business Agency Logo"
              />
            </a>
            <p className="mt-3 text-sm">
              Funded through grants by
              <br />
              <a
                href="https://wirtschaftsagentur.at/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Vienna Business Agency
              </a>
              <br />.
            </p>
          </div>
          <div className={styles.linkWrapper}>
            <h6>Resources</h6>
            <a className={styles.link} href="/docs">
              Documentation
            </a>
            <a className={styles.link} href="/blog">
              Blog
            </a>
            <a
              className={styles.link}
              href="https://github.com/serenity-kit/Serenity/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
          </div>
          <div className={styles.linkWrapper}>
            <h6>Company</h6>
            <a className={styles.link} href="/open-source">
              Open Source
            </a>
            <a className={styles.link} href="/privacy-policy">
              Privacy Policy
            </a>
            <a className={styles.link} href="/terms-of-service">
              Terms of Service
            </a>
            <a className={styles.link} href="/imprint">
              Imprint
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
