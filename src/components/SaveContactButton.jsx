import { Download } from "lucide-react";
import { profile } from "../data/profile";

export default function SaveContactButton({ className = "" }) {
  return (
    <a className={className} href={profile.contact.vcfUrl} download aria-label={profile.buttons.save} title={profile.buttons.save}>
      <Download size={17} />
      <span>{profile.buttons.saveShort}</span>
    </a>
  );
}
