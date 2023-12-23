import Image from "next/image";
import imageSrcSerenityAttachment from "../public/screenshots/serenity-attachment.png";
import imageSrcSerenityComments2 from "../public/screenshots/serenity-comments2.png";
import imageSrcSerenityEditing from "../public/screenshots/serenity-editing.png";
import imageSrcSerenityFolders from "../public/screenshots/serenity-folders.png";
import imageSrcSerenityPermission from "../public/screenshots/serenity-permissions.png";
import imageSrcSerenitySharing2 from "../public/screenshots/serenity-sharing2.png";
import { DisplayHeading } from "./DisplayHeading";
import { FeatureDetail } from "./blocks/FeatureDetail";

export const Features: React.FC = () => {
  return (
    <>
      <DisplayHeading tag="h1" className="text-center mt-16">
        Features
      </DisplayHeading>

      <FeatureDetail
        header="Rich editor features"
        text="Formatting, tables, check-lists, code, special characters etc."
      >
        <Image
          className="-mt-8 max-w-2xl"
          src={imageSrcSerenityEditing}
          alt="Screenshot demonstrating editing features in Serenity"
        />
      </FeatureDetail>

      <FeatureDetail
        header="Folders & subfolders"
        text="Organize your team's content leveraging a nested folder structure."
        imagePosition="left"
      >
        <Image
          className="-mt-8 max-w-2xl"
          src={imageSrcSerenityFolders}
          alt="Screenshot demonstrating folders and subfolders"
        />
      </FeatureDetail>

      <FeatureDetail
        header="Attachments"
        text="Allow to upload any kind of file to a page. Images are displayed inline."
      >
        <Image
          className="-mt-8 max-w-2xl"
          src={imageSrcSerenityAttachment}
          alt="Screenshot demonstrating an attachment upload"
        />
      </FeatureDetail>

      <FeatureDetail
        header="Permissions"
        text="Decide who can invite members and edit, comment or view content within your workspace."
        imagePosition="left"
      >
        <Image
          className="-mt-8 max-w-2xl"
          src={imageSrcSerenityPermission}
          alt="Screenshot showing the member settings"
        />
      </FeatureDetail>

      <FeatureDetail
        header="Comments & replies"
        text="Discuss and collaborate on a page with comments and replies."
      >
        <Image
          className="-mt-8 max-w-2xl"
          src={imageSrcSerenityComments2}
          alt="Screenshot demonstrating comments in Serenity"
        />
      </FeatureDetail>

      <FeatureDetail
        header="Sharing with external people"
        text="Share documents with people outside your team. You can even decide if they can edit, comment or just view."
        imagePosition="left"
      >
        <Image
          className="-mt-8 max-w-2xl"
          src={imageSrcSerenitySharing2}
          alt="Screenshot demonstrating sharing a page"
        />
      </FeatureDetail>
    </>
  );
};
