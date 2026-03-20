export type FeaturedBadgeDefinition = {
  href: string
  imageSrc: string
  alt: string
  width: number
  height?: number
  title?: string
  rel?: string
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
  return (
    <a
      href={badgeDefinition.href}
      target="_blank"
      rel={badgeDefinition.rel ?? "noopener noreferrer"}
      tabIndex={tabIndex}
      className="flex shrink-0 items-center justify-center px-3"
    >
      <img
        src={badgeDefinition.imageSrc}
        alt={badgeDefinition.alt}
        title={badgeDefinition.title}
        width={badgeDefinition.width}
        height={badgeDefinition.height}
        className="h-auto max-h-[64px] w-auto max-w-full object-contain"
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
