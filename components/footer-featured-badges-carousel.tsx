import type { CSSProperties } from "react"

export type FeaturedBadgeDefinition = {
  href: string
  imageSrc: string
  alt: string
  width?: number
  height?: number
  title?: string
  anchorTitle?: string
  rel?: string
  anchorClassName?: string
  anchorStyle?: CSSProperties
  imageClassName?: string
  imageStyle?: CSSProperties
  imageLoading?: "lazy" | "eager"
}

const featuredBadgeDefinitions: FeaturedBadgeDefinition[] = [
  {
    href: "https://buildvoyage.com/products/webleads?ref=badge",
    imageSrc: "https://buildvoyage.com/images/featured_badge.png",
    alt: "Featured on BuildVoyage",
    width: 200,
    rel: "noopener noreferrer",
  },
  {
    href: "https://wired.business",
    imageSrc: "https://wired.business/badge0-light.svg",
    alt: "Featured on Wired Business",
    width: 200,
    height: 54,
    rel: "noopener noreferrer",
  },
  {
    href: "https://twelve.tools",
    imageSrc: "https://twelve.tools/badge0-white.svg",
    alt: "Featured on Twelve Tools",
    width: 200,
    height: 54,
    rel: "noopener noreferrer",
  },
  {
    href: "https://startupfa.me/s/webleads?utm_source=webleads.site",
    imageSrc: "https://startupfa.me/badges/featured-badge.webp",
    alt: "WebLeads - Featured on Startup Fame",
    width: 171,
    height: 54,
    rel: "noopener noreferrer",
  },
  {
    href: "https://web-review.com",
    imageSrc: "https://web-review.com/badge.png",
    alt: "Featured on Web Review",
    width: 200,
    height: 54,
    rel: "noopener noreferrer dofollow",
  },
  {
    href: "http://saasbison.com",
    imageSrc: "http://saasbison.com/badge.png",
    alt: "Featured on SaaSBison",
    width: 200,
    height: 54,
    rel: "noopener noreferrer dofollow",
  },
  {
    href: "https://rankinpublic.xyz/products/webleads.site",
    imageSrc: "https://rankinpublic.xyz/api/badges/badge-featured.png?site=webleads.site",
    alt: "Featured on RankInPublic",
    title: "Featured on RankInPublic",
    width: 200,
    height: 80,
    rel: "noopener noreferrer",
  },
  {
    href: "https://ufind.best/products/webleads?utm_source=ufind.best",
    imageSrc: "https://ufind.best/badges/ufind-best-badge-light.svg",
    alt: "Featured on ufind.best",
    width: 150,
    rel: "noopener",
  },
  {
    href: "https://sumodir.com",
    imageSrc: "https://sumodir.com/badge.png",
    alt: "Featured on SumoDir",
    width: 200,
    height: 54,
    rel: "noopener noreferrer dofollow",
  },
  {
    href: "https://findly.tools/webleads?utm_source=webleads",
    imageSrc: "https://findly.tools/badges/findly-tools-badge-light.svg",
    alt: "Featured on Findly.tools",
    width: 175,
    height: 55,
    rel: "noopener noreferrer",
  },
  {
    href: "https://fazier.com/launches/webleads.site",
    imageSrc:
      "https://fazier.com/api/v1//public/badges/launch_badges.svg?badge_type=featured&theme=light",
    alt: "Fazier badge",
    width: 250,
    rel: "noopener noreferrer",
  },
  {
    href: "https://launch-list.org/product/webleads",
    imageSrc: "https://launch-list.org/badges/svg/launch_list_badge_live.svg",
    alt: "Launch List Badge",
    rel: "noopener noreferrer",
    anchorStyle: { display: "block", width: "fit-content" },
    anchorClassName: "shrink-0 px-3",
    imageStyle: { height: "50px" },
    imageClassName: "w-auto max-w-full object-contain",
  },
  {
    href: "https://turbo0.com/item/webleads",
    imageSrc: "https://img.turbo0.com/badge-listed-light.svg",
    alt: "Listed on Turbo0",
    rel: "noopener noreferrer",
    imageStyle: { height: "54px", width: "auto" },
    imageClassName: "max-w-full object-contain",
  },
  {
    href: "https://toolfio.com",
    imageSrc: "https://toolfio.com/toolfio-light-badge.png",
    alt: "Featured on Toolfio",
    width: 200,
    height: 54,
    rel: "noopener noreferrer dofollow",
  },
  {
    href: "https://neeed.directory/products/webleads?utm_source=webleads",
    imageSrc: "https://neeed.directory/badges/neeed-badge-light.svg",
    alt: "Featured on neeed.directory",
    width: 139,
    rel: "noopener",
  },
  {
    href: "https://auraplusplus.com/projects/webleads-business-data-platform",
    imageSrc: "https://auraplusplus.com/images/badges/featured-on-light.svg",
    alt: "Featured on Aura++",
    width: 265,
    height: 58,
    rel: "noopener",
  },
  {
    href: "https://open-launch.com/projects/webleads",
    imageSrc:
      "https://open-launch.com/api/badge/8ac5ef02-dd99-49d6-afce-8f6956ff392b/featured-light.svg",
    alt: "Featured on Open-Launch",
    width: 200,
    height: 50,
    rel: "noopener",
  },
  {
    href: "https://www.showmysites.com",
    imageSrc: "https://www.showmysites.com/static/backlink/blue_border.webp",
    alt: "ShowMySites Badge",
    width: 200,
    height: 60,
    rel: "noopener noreferrer",
  },
  {
    href: "https://deeplaunch.io",
    imageSrc: "https://deeplaunch.io/badge/badge_light.svg",
    alt: "Featured on DeepLaunch.io",
    width: 200,
    height: 54,
    rel: "noopener noreferrer",
  },
  {
    href: "https://newtool.site/item/webleads",
    imageSrc: "https://newtool.site/badges/newtool-light.svg",
    alt: "Featured on NewTool.site",
    rel: "noopener noreferrer",
    imageStyle: { height: "54px", width: "auto" },
    imageClassName: "max-w-full object-contain",
  },
  {
    href: "https://uno.directory",
    imageSrc: "https://uno.directory/uno-directory.svg",
    alt: "Listed on Uno Directory",
    width: 120,
    height: 30,
    rel: "noopener",
  },
  {
    href: "https://toolfame.com/item/webleads",
    imageSrc: "https://toolfame.com/badge-light.svg",
    alt: "Featured on toolfame.com",
    rel: "noopener noreferrer",
    imageStyle: { height: "54px", width: "auto" },
    imageClassName: "max-w-full object-contain",
  },
  {
    href: "https://mylaunchstash.com",
    imageSrc: "https://mylaunchstash.com/assets/images/badge.png",
    alt: "My Launch Stash",
    height: 54,
    rel: "noopener noreferrer",
    imageStyle: { height: "54px", width: "auto" },
    imageClassName: "max-w-full object-contain",
  },
  {
    href: "https://besttoolvault.com",
    imageSrc: "https://besttoolvault.com/assets/images/badge.png",
    alt: "Best Tool Vault",
    height: 54,
    rel: "noopener noreferrer",
    imageStyle: { height: "54px", width: "auto" },
    imageClassName: "max-w-full object-contain",
  },
  {
    href: "https://dang.ai/",
    imageSrc:
      "https://cdn.prod.website-files.com/63d8afd87da01fb58ea3fbcb/6487e2868c6c8f93b4828827_dang-badge.png",
    alt: "Dang.ai",
    width: 150,
    height: 54,
    rel: "noopener noreferrer",
    imageStyle: { width: "150px", height: "54px" },
    imageClassName: "object-contain",
  },
  {
    href: "https://favtool.ai",
    imageSrc: "https://favtool.ai/badge/light.png",
    alt: "Featured on FavTool.ai",
    width: 200,
    height: 60,
    rel: "noopener noreferrer",
    anchorTitle: "Featured on FavTool.ai",
  },
  {
    href: "https://gets.tools",
    imageSrc: "https://gets.tools/badge/badge_light.svg",
    alt: "Featured on Gets.Tools",
    width: 200,
    height: 54,
    rel: "noopener noreferrer",
  },
  {
    href: "https://firstlook.tools",
    imageSrc: "https://firstlook.tools/badge/badge_light.svg",
    alt: "Featured on First Look",
    width: 200,
    height: 54,
    rel: "noopener noreferrer",
  },
  {
    href: "https://smollaunch.com",
    imageSrc: "https://smollaunch.com/badges/featured.svg",
    alt: "Featured on Smol Launch",
    width: 250,
    height: 60,
    rel: "noopener",
    imageLoading: "lazy",
  },
  {
    href: "https://submitmysaas.com",
    imageSrc: "https://submitmysaas.com/featured-badge.png",
    alt: "Featured on SubmitMySaas",
    rel: "noopener noreferrer",
    imageStyle: { height: "54px", width: "auto" },
    imageClassName: "max-w-full object-contain",
  },
  {
    href: "https://dofollow.tools",
    imageSrc: "https://dofollow.tools/badge/badge_light.svg",
    alt: "Featured on Dofollow.Tools",
    width: 200,
    height: 54,
    rel: "noopener noreferrer",
  },
  {
    href: "https://startupbenchmarks.com",
    imageSrc: "https://startupbenchmarks.com/assets/images/badge.png",
    alt: "Startup Benchmarks",
    height: 54,
    rel: "noopener noreferrer",
    imageStyle: { height: "54px", width: "auto" },
    imageClassName: "max-w-full object-contain",
  },
  {
    href: "https://tinytoolhub.com",
    imageSrc: "https://tinytoolhub.com/assets/images/badge.png",
    alt: "Tiny Tool Hub",
    height: 54,
    rel: "noopener noreferrer",
    imageStyle: { height: "54px", width: "auto" },
    imageClassName: "max-w-full object-contain",
  },
  {
    href: "https://productlistdir.com",
    imageSrc: "https://productlistdir.com/assets/images/badge.png",
    alt: "Product List Dir",
    height: 54,
    rel: "noopener noreferrer",
    imageStyle: { height: "54px", width: "auto" },
    imageClassName: "max-w-full object-contain",
  },
  {
    href: "https://mystarttools.com",
    imageSrc: "https://mystarttools.com/assets/images/badge.png",
    alt: "My Start Tools",
    height: 54,
    rel: "noopener noreferrer",
    imageStyle: { height: "54px", width: "auto" },
    imageClassName: "max-w-full object-contain",
  },
  {
    href: "https://launchscroll.com",
    imageSrc: "https://launchscroll.com/assets/images/badge.png",
    alt: "Launch Scroll",
    height: 54,
    rel: "noopener noreferrer",
    imageStyle: { height: "54px", width: "auto" },
    imageClassName: "max-w-full object-contain",
  },
  {
    href: "https://milliondothomepage.com",
    imageSrc: "https://milliondothomepage.com/assets/images/badge.png",
    alt: "Million Dot Homepage",
    height: 54,
    rel: "noopener noreferrer",
    imageStyle: { height: "54px", width: "auto" },
    imageClassName: "max-w-full object-contain",
  },
  {
    href: "https://launchclash.com",
    imageSrc: "https://launchclash.com/static/images/badge.png",
    alt: "LaunchClash",
    height: 54,
    rel: "noopener noreferrer",
    imageStyle: { height: "54px", width: "auto" },
    imageClassName: "max-w-full object-contain",
  },
  {
    href: "https://shinylaunch.com",
    imageSrc: "https://shinylaunch.com/static/images/badge.png",
    alt: "ShinyLaunch",
    height: 54,
    rel: "noopener noreferrer",
    imageStyle: { height: "54px", width: "auto" },
    imageClassName: "max-w-full object-contain",
  },
  {
    href: "https://appsytools.com",
    imageSrc: "https://appsytools.com/assets/images/badge.png",
    alt: "Appsy Tools",
    height: 54,
    rel: "noopener noreferrer",
    imageStyle: { height: "54px", width: "auto" },
    imageClassName: "max-w-full object-contain",
  },
  {
    href: "https://ashlist.com",
    imageSrc: "https://ashlist.com/assets/images/badge.png",
    alt: "Ash List",
    height: 54,
    rel: "noopener noreferrer",
    imageStyle: { height: "54px", width: "auto" },
    imageClassName: "max-w-full object-contain",
  },
  {
    href: "https://productwing.com",
    imageSrc: "https://productwing.com/assets/images/badge.png",
    alt: "Product Wing",
    height: 54,
    rel: "noopener noreferrer",
    imageStyle: { height: "54px", width: "auto" },
    imageClassName: "max-w-full object-contain",
  },
  {
    href: "https://saasfield.com",
    imageSrc: "https://saasfield.com/assets/images/badge.png",
    alt: "SaaS Field",
    height: 54,
    rel: "noopener noreferrer",
    imageStyle: { height: "54px", width: "auto" },
    imageClassName: "max-w-full object-contain",
  },
  {
    href: "https://saashubdirectory.com",
    imageSrc: "https://saashubdirectory.com/assets/images/badge.png",
    alt: "SaaS Hub Directory",
    height: 54,
    rel: "noopener noreferrer",
    imageStyle: { height: "54px", width: "auto" },
    imageClassName: "max-w-full object-contain",
  },
]

const footerBadgesEdgeMaskStyle = {
  maskImage:
    "linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)",
  WebkitMaskImage:
    "linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)",
} as const

function FeaturedBadgeLink(props: {
  badgeDefinition: FeaturedBadgeDefinition
  tabIndex?: number
}) {
  const { badgeDefinition, tabIndex } = props
  const defaultAnchorClassName = "flex shrink-0 items-center justify-center px-3"
  const defaultImageClassName = "h-auto max-h-[64px] w-auto max-w-full object-contain"

  return (
    <a
      href={badgeDefinition.href}
      target="_blank"
      rel={badgeDefinition.rel ?? "noopener noreferrer"}
      tabIndex={tabIndex}
      title={badgeDefinition.anchorTitle}
      style={badgeDefinition.anchorStyle}
      className={badgeDefinition.anchorClassName ?? defaultAnchorClassName}
    >
      <img
        src={badgeDefinition.imageSrc}
        alt={badgeDefinition.alt}
        title={badgeDefinition.title}
        loading={badgeDefinition.imageLoading}
        {...(badgeDefinition.width !== undefined ? { width: badgeDefinition.width } : {})}
        {...(badgeDefinition.height !== undefined ? { height: badgeDefinition.height } : {})}
        style={badgeDefinition.imageStyle}
        className={badgeDefinition.imageClassName ?? defaultImageClassName}
      />
    </a>
  )
}

export function FooterFeaturedBadgesCarousel() {
  return (
    <div className="w-full max-w-[720px] min-w-0 origin-center scale-[0.82] sm:origin-right sm:scale-[0.86]">
      <div
        className="relative w-full overflow-hidden motion-reduce:overflow-visible motion-reduce:[mask-image:none] motion-reduce:[-webkit-mask-image:none]"
        style={footerBadgesEdgeMaskStyle}
      >
        <div
          className="flex w-max motion-reduce:w-full motion-reduce:flex-wrap motion-reduce:justify-center motion-reduce:gap-y-2 animate-footer-badges-marquee motion-reduce:animate-none"
          style={{ willChange: "transform" }}
        >
          <div className="flex shrink-0 items-center gap-2 pr-8 sm:gap-3 sm:pr-10">
            {featuredBadgeDefinitions.map((badgeDefinition) => (
              <FeaturedBadgeLink key={badgeDefinition.href} badgeDefinition={badgeDefinition} />
            ))}
          </div>
          <div className="flex shrink-0 items-center gap-2 pr-8 sm:gap-3 sm:pr-10 motion-reduce:hidden" aria-hidden>
            {featuredBadgeDefinitions.map((badgeDefinition) => (
              <FeaturedBadgeLink
                key={`dup-${badgeDefinition.href}`}
                badgeDefinition={badgeDefinition}
                tabIndex={-1}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
