import { Facebook, Instagram, YoutubeIcon } from "./FooterIcons";

export const SocialIcons = () => {
  return (
    <ul className="no-bullets footer__social">
      <li>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.instagram.com/rockrock.tv/"
          title="fabcolors on Instagram"
        >
          <Instagram />
          <span className="icon__fallback-text">Instagram</span>
        </a>
      </li>
      <li>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.facebook.com/profile.php?id=100071067505591"
          title="fabcolors on Facebook"
        >
          <Facebook />
          <span className="icon__fallback-text">Facebook</span>
        </a>
      </li>
      <li>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.youtube.com/channel/UCC8fwrzbvJX-uW8dBmt04NQ"
          title="fabcolors on YouTube"
        >
          <YoutubeIcon />
          <span className="icon__fallback-text">YouTube</span>
        </a>
      </li>
      {/* <li>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://twitter.com/fabcolors9"
          title="fabcolors on Twitter"
        >
          <Twitter />
          <span className="icon__fallback-text">Twitter</span>
        </a>
      </li> */}
    </ul>
  );
};
