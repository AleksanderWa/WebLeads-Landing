"use client";

import { useState } from "react";
import { usePostHog } from "posthog-js/react";
import {
  ArrowRight,
  Database,
  Download,
  Globe,
  Shield,
  Star,
  Zap,
} from "lucide-react";

type Row = {
  name: string;
  address: string;
  phone: string;
  website: string;
  decisionMakers: string;
  roleEmails: string;
  otherEmails: string;
  facebook: string;
  instagram: string;
  tiktok: string;
  youtube: string;
  yelp: string;
  twitter: string;
  linkedin: string;
  pinterest: string;
  other: string;
  reviews: number;
  rating: number;
  missingSignals: string;
  lgbtqFriendly: string;
  mainIndustry: string;
};

const SAMPLE_ROWS: Row[] = [
  { name: "1DIGITAL AGENCY", address: "20 N 3rd St #301, Philadelphia, PA 19106", phone: "+1 215-809-1567", website: "1digitalagency.com", decisionMakers: "Dan Kogan (ceo) dan@1digitalagency.com, Colette Nichols (coo) cnichols@1digitalagency.com, Michael Prusich (senior director) michael@1digitalagency.com", roleEmails: "info@1digitalagency.com, sales@1digitalagency.com", otherEmails: "rfp@1digitalagency.com", facebook: "facebook.com/1digitalagency", instagram: "instagram.com/1digitalagency/", tiktok: "", youtube: "youtube.com/c/1digitalagency", yelp: "", twitter: "x.com/1digitalagency", linkedin: "linkedin.com/company/1digitalagency-com", pinterest: "", other: "", reviews: 85, rating: 5.0, missingSignals: "meta_pixel, google_ads, tiktok_pixel, +1 more", lgbtqFriendly: "No", mainIndustry: "Marketing agency" },
  { name: "1MDE", address: "2929 Arch St Suite 1700, Philadelphia, PA 19104", phone: "+1 215-330-6484", website: "1mde.com", decisionMakers: "James Hurt (ceo), John Stock (marketing director), Ann Child (brand manager)", roleEmails: "info@1mde.com", otherEmails: "", facebook: "facebook.com/1mdeusa", instagram: "", tiktok: "", youtube: "", yelp: "", twitter: "", linkedin: "linkedin.com/company/1mde", pinterest: "", other: "", reviews: 19, rating: 5.0, missingSignals: "", lgbtqFriendly: "No", mainIndustry: "Marketing agency" },
  { name: "215 Marketing", address: "1516 N 5th St # 309, Philadelphia, PA 19122", phone: "+1 267-319-1191", website: "calendly.com/jon215/meeting-w-jon-vogel", decisionMakers: "Jon Vogel (Co Owner), Garrett Gillin (Co Owner), Mark Siracusa (Operations Director)", roleEmails: "", otherEmails: "", facebook: "", instagram: "", tiktok: "", youtube: "", yelp: "", twitter: "", linkedin: "", pinterest: "", other: "", reviews: 53, rating: 5.0, missingSignals: "", lgbtqFriendly: "No", mainIndustry: "Marketing agency" },
  { name: "624 Agency", address: "1639 N Hancock St Suite 304, Philadelphia, PA 19122", phone: "", website: "624agency.com", decisionMakers: "Lauren Moreno (principal) lmoreno@624agency.com, Logan Beck (director) lbeck@624agency.com, Brayden Tinney (social media manager) btinney@624agency.com, Morgan Ryan (coordinator) mryan@624agency.com", roleEmails: "hello@624agency.com", otherEmails: "", facebook: "facebook.com/squarespace", instagram: "instagram.com/624agency/", tiktok: "", youtube: "", yelp: "", twitter: "twitter.com/squarespace", linkedin: "", pinterest: "", other: "", reviews: 0, rating: 0.0, missingSignals: "", lgbtqFriendly: "No", mainIndustry: "Marketing agency" },
  { name: "Armor", address: "123 S Broad St Suite 2435, Philadelphia, PA 19109", phone: "", website: "armor.studio", decisionMakers: "Mike Bodenberger (partner) mbodenberger@armor.studio, Mike Bray (partner) mbray@armor.studio, Dan Hughes (partner) dhughes@armor.studio, Chris Reif (partner) creif@armor.studio", roleEmails: "hello@armor.studio", otherEmails: "", facebook: "", instagram: "instagram.com/armor__studio/", tiktok: "", youtube: "", yelp: "", twitter: "", linkedin: "linkedin.com/company/armor-studio", pinterest: "", other: "", reviews: 0, rating: 0.0, missingSignals: "meta_pixel, google_ads, tiktok_pixel, +1 more", lgbtqFriendly: "No", mainIndustry: "Marketing agency" },
  { name: "AYS Sports Marketing Inc", address: "441 N 5th St # 203, Philadelphia, PA 19123", phone: "+1 215-925-7875", website: "aysworld.com", decisionMakers: "Penny Lerner (ceo) penny@aysworld.com, Judi Lerner (president) judi@aysworld.com, Brian Hester (vice president) brian@aysworld.com, Morgan Bernstein (operations manager) morgan.bernstein@aysworld.com", roleEmails: "info@aysworld.com", otherEmails: "", facebook: "", instagram: "instagram.com/ayssports/", tiktok: "", youtube: "", yelp: "", twitter: "", linkedin: "linkedin.com/company/ays", pinterest: "", other: "", reviews: 3, rating: 4.0, missingSignals: "meta_pixel, google_ads, tiktok_pixel, +1 more", lgbtqFriendly: "No", mainIndustry: "Marketing agency" },
  { name: "BCC Interactive", address: "744 South St Suite #969, Philadelphia, PA 19147", phone: "+1 610-590-9957", website: "bccinteractive.com", decisionMakers: "Cory Young (ceo) cory@bccinteractive.com, Michelle Khan (coo) michelle@bccinteractive.com, Angelina Kaliada (marketing manager) angelina@bccinteractive.com", roleEmails: "", otherEmails: "", facebook: "facebook.com/bccinteractive", instagram: "instagram.com/bccinteractive/", tiktok: "", youtube: "youtube.com/channel/UCUo-gnEkyiW2z9lylpl17Gw", yelp: "yelp.com/biz/bcc-interactive-philadelphia", twitter: "twitter.com/bccinteractive1", linkedin: "linkedin.com/in/stevesilvasy", pinterest: "", other: "", reviews: 14, rating: 5.0, missingSignals: "meta_pixel, google_ads, tiktok_pixel, +1 more", lgbtqFriendly: "Yes", mainIndustry: "Marketing agency" },
  { name: "BLOOM Digital Marketing", address: "1820 Fitzwater St First Floor, Philadelphia, PA 19146", phone: "+1 857-242-6080", website: "inbloomdigitalmarketing.com", decisionMakers: "Ana Cvetkovic (ceo) ana@inbloomdigitalmarketing.com, Erika Ferrin (marketing manager)", roleEmails: "", otherEmails: "", facebook: "facebook.com/inbloomdigitalmarketing", instagram: "", tiktok: "", youtube: "", yelp: "", twitter: "", linkedin: "linkedin.com/company/bloom-digital-marketing-inc", pinterest: "", other: "", reviews: 0, rating: 0.0, missingSignals: "", lgbtqFriendly: "No", mainIndustry: "Marketing agency" },
  { name: "Bow Tie Social", address: "2424 E York St Unit 301-F, Philadelphia, PA 19125", phone: "+1 215-436-8441", website: "bowtie.social", decisionMakers: "Stephen Cassano (ceo) stephen@bowtie.social, Mae Sweetland (social media manager) mae@bowtie.social, Brooke Richie (manager) brooke@bowtie.social, Devin O'Connell (lead) devin@bowtie.social", roleEmails: "", otherEmails: "", facebook: "", instagram: "instagram.com/bowtie_social/", tiktok: "", youtube: "", yelp: "", twitter: "", linkedin: "linkedin.com/company/bow-tie-social", pinterest: "", other: "", reviews: 5, rating: 5.0, missingSignals: "google_ads, tiktok_pixel, linkedin_insight", lgbtqFriendly: "Yes", mainIndustry: "Marketing agency" },
  { name: "Brolik", address: "990 Spring Garden St Suite 402, Philadelphia, PA 19123", phone: "+1 267-774-2557", website: "brolik.com", decisionMakers: "Jason Brewer (ceo), Jessie Wood (founder), Matthew Sommer (cso), Andrew Faulkner (marketing manager), Nick Capperella (marketing manager)", roleEmails: "info@brolik.com", otherEmails: "", facebook: "facebook.com/brolikagency", instagram: "instagram.com/webrolik/", tiktok: "", youtube: "", yelp: "", twitter: "twitter.com/brolik", linkedin: "linkedin.com/in/jessiewould", pinterest: "", other: "", reviews: 46, rating: 4.9, missingSignals: "", lgbtqFriendly: "No", mainIndustry: "Marketing agency" },
  { name: "Calcium+Company", address: "601 Walnut St Suite 1075, Philadelphia, PA 19106", phone: "+1 215-238-8500", website: "calciumco.com", decisionMakers: "Judy Capano (ceo) judy.capano@calciumco.com, Greg Lewis (president) greg.lewis@calciumco.com, Don Feiler (cto) don.feiler@calciumco.com, Bruno Brasileiro (cco) bruno.brasileiro@calciumco.com", roleEmails: "", otherEmails: "", facebook: "", instagram: "instagram.com/calciumandcompany/", tiktok: "", youtube: "", yelp: "", twitter: "", linkedin: "linkedin.com/company/calcium-company", pinterest: "", other: "", reviews: 0, rating: 0.0, missingSignals: "", lgbtqFriendly: "No", mainIndustry: "Marketing agency" },
  { name: "Clarity Quest Marketing", address: "1635 Market St #1600, Philadelphia, PA 19103", phone: "+1 877-887-7611", website: "clarityqst.com", decisionMakers: "Lauren Maxam (manager)", roleEmails: "information@clarityqst.com", otherEmails: "", facebook: "facebook.com/clarityquestmarketing", instagram: "instagram.com/clarityquest/", tiktok: "", youtube: "youtube.com/user/clarityqst", yelp: "", twitter: "twitter.com/cqmarketing", linkedin: "linkedin.com/company/clarity-quest-marketing", pinterest: "pinterest.com/clarityquest/", other: "", reviews: 0, rating: 0.0, missingSignals: "", lgbtqFriendly: "No", mainIndustry: "Marketing agency" },
  { name: "Clearbridge Branding Agency", address: "2400 Market St No. 200, Philadelphia, PA 19103", phone: "+1 215-701-3941", website: "clearbridgebranding.com", decisionMakers: "Sophia McDonough (founder) smcdonough@clearbridgebranding.com, Kevin Pustizzi (president) kpustizzi@clearbridgebranding.com, Rebecca Kowalewicz (vp) rkowalewicz@clearbridgebranding.com, Mars Weinberg (coordinator) mweinberg@clearbridgebranding.com", roleEmails: "", otherEmails: "", facebook: "facebook.com/clearbridgebrandingagency", instagram: "instagram.com/clearbridgebrandingagency/", tiktok: "", youtube: "", yelp: "", twitter: "", linkedin: "linkedin.com/company/clearbridgebranding", pinterest: "", other: "", reviews: 0, rating: 0.0, missingSignals: "meta_pixel, google_ads, tiktok_pixel, +1 more", lgbtqFriendly: "No", mainIndustry: "Marketing agency" },
  { name: "Connection Model", address: "2319 Gaul St, Philadelphia, PA 19125", phone: "+1 206-400-7724", website: "connectionmodel.com", decisionMakers: "David Carpenter (president), Rick Shamberg (owner)", roleEmails: "inquiry@connectionmodel.com, alisteteam@connectionmodel.com", otherEmails: "", facebook: "facebook.com/connectionmodel", instagram: "", tiktok: "", youtube: "", yelp: "", twitter: "twitter.com/connectionmodel", linkedin: "", pinterest: "", other: "", reviews: 0, rating: 0.0, missingSignals: "meta_pixel, google_ads, tiktok_pixel, +1 more", lgbtqFriendly: "No", mainIndustry: "Marketing agency" },
  { name: "Devoe Digital", address: "510 S 5th St Suite 3, Philadelphia, PA 19147", phone: "+1 754-300-4562", website: "devoedigital.com", decisionMakers: "Nicholas Devoe (owner), Anthony Cairone (partner), William Devoe (manager), Frederick Devoe (manager)", roleEmails: "", otherEmails: "", facebook: "facebook.com/devoedigital", instagram: "instagram.com/devoedigital/", tiktok: "", youtube: "youtube.com/channel/UCGjBYScj1S-P1Ccy0ioup4A", yelp: "", twitter: "", linkedin: "", pinterest: "", other: "", reviews: 0, rating: 0.0, missingSignals: "", lgbtqFriendly: "No", mainIndustry: "Marketing agency" },
  { name: "DMi Partners", address: "1 S Broad St 11th floor, Philadelphia, PA 19107", phone: "+1 215-279-9800", website: "dmipartners.com", decisionMakers: "Patrick Mckenna (ceo), Kristina Nolan (president), Zach Labenberg (chief growth officer), Amy Delphia (partner), Carrie Abel (partner)", roleEmails: "info@dmipartners.com", otherEmails: "", facebook: "facebook.com/dmipartners", instagram: "instagram.com/dmi_partners/", tiktok: "", youtube: "", yelp: "", twitter: "twitter.com/dmi_partners", linkedin: "linkedin.com/in/amanda-armstrong-b0384b44", pinterest: "", other: "", reviews: 7, rating: 4.4, missingSignals: "meta_pixel, google_ads, tiktok_pixel, +1 more", lgbtqFriendly: "No", mainIndustry: "Marketing agency" },
  { name: "Finch Brands", address: "123 S Broad St #2150, Philadelphia, PA 19109", phone: "+1 215-413-2686", website: "finchbrands.com", decisionMakers: "Daniel Erlbaum (chief executive officer), Bill Gullan (president), Lauren Collier (chief experience officer), Tammy Mann (creative director)", roleEmails: "info@finchbrands.com", otherEmails: "", facebook: "facebook.com/finchbrands", instagram: "instagram.com/finchbrands/", tiktok: "", youtube: "", yelp: "", twitter: "twitter.com/finchbrands", linkedin: "linkedin.com/in/tammy-mann", pinterest: "", other: "", reviews: 1, rating: 5.0, missingSignals: "", lgbtqFriendly: "No", mainIndustry: "Marketing agency" },
  { name: "Group Two Advertising", address: "1617 John F Kennedy Blvd #510, Philadelphia, PA 19103", phone: "+1 215-561-2200", website: "grouptwo.com", decisionMakers: "Daniel Gerson (chief operations officer), Brenna Ryan (partner), David Whaite (vice president), Katie Kolakowski (director)", roleEmails: "info@grouptwo.com", otherEmails: "", facebook: "facebook.com/grouptwoadvertising", instagram: "instagram.com/grouptwoadvertising/", tiktok: "", youtube: "youtube.com/user/GroupTwoAdvertising", yelp: "", twitter: "", linkedin: "linkedin.com/company/group-two-advertising", pinterest: "", other: "", reviews: 16, rating: 5.0, missingSignals: "", lgbtqFriendly: "No", mainIndustry: "Marketing agency" },
  { name: "Helm Creative Studio", address: "1600 N 5th St, Philadelphia, PA 19122", phone: "+1 215-253-8530", website: "helmcreativestudio.com", decisionMakers: "Ashlee Hollis (founder), Sara Norcott (campaign director), Diana Guerrero (graphic designer & project manager)", roleEmails: "hello@helmcreativestudio.com", otherEmails: "", facebook: "", instagram: "instagram.com/helmcreativestudio/", tiktok: "", youtube: "youtube.com/channel/UC4Ff3oFfS4nTRgakCi5RSgQ", yelp: "", twitter: "", linkedin: "linkedin.com/company/helm-creative-studio", pinterest: "", other: "", reviews: 28, rating: 5.0, missingSignals: "meta_pixel, google_ads, tiktok_pixel, +1 more", lgbtqFriendly: "No", mainIndustry: "Marketing agency" },
  { name: "Mako Direct Marketing", address: "124 Chestnut St Suite 7, Philadelphia, PA 19106", phone: "+1 484-693-0818", website: "makodirectmarketing.com", decisionMakers: "Angela Daisy (chief executive officer), Pete Delago (vice president), Sharon Foulke (vice president)", roleEmails: "", otherEmails: "", facebook: "", instagram: "", tiktok: "", youtube: "youtube.com/channel/UCf0XgbsnUS4tZ9hmy-iGtZQ", yelp: "", twitter: "", linkedin: "linkedin.com/company/makodirectmarketing", pinterest: "", other: "", reviews: 0, rating: 0.0, missingSignals: "meta_pixel, google_ads, tiktok_pixel, +1 more", lgbtqFriendly: "No", mainIndustry: "Marketing agency" },
  { name: "MetaSense Digital Marketing", address: "3675 Market St #200, Philadelphia, PA 19104", phone: "+1 856-215-4010", website: "metasensemarketing.com", decisionMakers: "Dhwani Modi (partner) dmodi@metasensemarketing.com", roleEmails: "support@metasensemarketing.com, info@metasensemarketing.com", otherEmails: "", facebook: "facebook.com/metasensemarketing", instagram: "instagram.com/metasensemarketing/", tiktok: "", youtube: "youtube.com/channel/UCebB4OKHeeC99A_hrgYmcmg", yelp: "", twitter: "twitter.com/metasense", linkedin: "linkedin.com/company/metasense", pinterest: "", other: "", reviews: 1, rating: 5.0, missingSignals: "", lgbtqFriendly: "Yes", mainIndustry: "Marketing agency" },
  { name: "Octo Design Group", address: "836 South St 3rd floor, Philadelphia, PA 19147", phone: "+1 215-940-8280", website: "octodesign.com", decisionMakers: "Samantha Srolis (PMP) samantha@octodesign.com", roleEmails: "info@octodesign.com", otherEmails: "", facebook: "", instagram: "instagram.com/octodesigngroup/", tiktok: "", youtube: "", yelp: "", twitter: "", linkedin: "linkedin.com/company/octo-design-group", pinterest: "", other: "", reviews: 0, rating: 0.0, missingSignals: "", lgbtqFriendly: "No", mainIndustry: "Marketing agency" },
  { name: "Old City Media", address: "2200 Arch St UNIT 202, Philadelphia, PA 19103", phone: "+1 267-939-0503", website: "oldcitymedia.com", decisionMakers: "Ray Sheehan (founder)", roleEmails: "info@oldcitymedia.com", otherEmails: "", facebook: "facebook.com/oldcitymediahq", instagram: "instagram.com/old_city_media/", tiktok: "", youtube: "", yelp: "", twitter: "", linkedin: "linkedin.com/in/geoffhazelwood", pinterest: "", other: "", reviews: 136, rating: 5.0, missingSignals: "meta_pixel, google_ads, tiktok_pixel", lgbtqFriendly: "No", mainIndustry: "Marketing agency" },
  { name: "Penn Creative", address: "4335 Pine St, Philadelphia, PA 19104", phone: "+1 215-550-1435", website: "penn-creative.com", decisionMakers: "Jenny Strauss (owner) jenny@penn-creative.com, Sierra Skidmore (owner) sierra@penn-creative.com, Meg Gryziec (senior project manager) meg@penn-creative.com, Karyn Pless (marketing account manager) karyn@penn-creative.com", roleEmails: "info@penn-creative.com", otherEmails: "", facebook: "facebook.com/penncreativephilly", instagram: "instagram.com/penn_creative/", tiktok: "", youtube: "", yelp: "", twitter: "twitter.com/penn_creative", linkedin: "linkedin.com/in/karyn-pless-5287006", pinterest: "", other: "", reviews: 5, rating: 5.0, missingSignals: "meta_pixel, google_ads, tiktok_pixel, +1 more", lgbtqFriendly: "No", mainIndustry: "Marketing agency" },
  { name: "Simple Marketing Now LLC", address: "7354 Ridge Ave, Philadelphia, PA 19128", phone: "+1 973-283-2424", website: "simplemarketingnow.com", decisionMakers: "Christine B. Whittemore (president) cbwhittemore@simplemarketingnow.com, Sarah B. Johnson (managing director), Sarah Kelly (managing director)", roleEmails: "info@simplemarketingnow.com", otherEmails: "", facebook: "facebook.com/simplemarketingnow", instagram: "", tiktok: "", youtube: "", yelp: "", twitter: "twitter.com/cbwhittemore", linkedin: "linkedin.com/company/simple-marketing-now", pinterest: "pinterest.com/cbwhittemore/", other: "", reviews: 0, rating: 0.0, missingSignals: "", lgbtqFriendly: "No", mainIndustry: "Marketing agency" },
  { name: "Splat, Inc.", address: "2118 South St, Philadelphia, PA 19146", phone: "+1 215-546-0177", website: "splatworld.tv", decisionMakers: "David Hitt (founder) david@splatworld.tv", roleEmails: "info@splatworld.tv", otherEmails: "", facebook: "facebook.com/splatworld", instagram: "instagram.com/splatdigital/", tiktok: "", youtube: "", yelp: "", twitter: "twitter.com/daaveey", linkedin: "linkedin.com/in/brian-mishico", pinterest: "", other: "", reviews: 29, rating: 4.7, missingSignals: "", lgbtqFriendly: "Yes", mainIndustry: "Marketing agency" },
  { name: "SWELL", address: "100 S Juniper St 3rd Floor, Philadelphia, PA 19107", phone: "+1 215-422-3477", website: "swellstart.com", decisionMakers: "Staci Katz (partner) staci@swellstart.com, Greg O'Loughlin (partner) greg@swellstart.com, Sam Walker (jr. art director) sam@swellstart.com", roleEmails: "pr@swellstart.com", otherEmails: "", facebook: "facebook.com/swellphl", instagram: "instagram.com/swellphl/", tiktok: "", youtube: "", yelp: "", twitter: "", linkedin: "linkedin.com/company/2338545", pinterest: "", other: "", reviews: 2, rating: 4.5, missingSignals: "meta_pixel, google_ads, tiktok_pixel, +1 more", lgbtqFriendly: "No", mainIndustry: "Marketing agency" },
  { name: "Trellist Marketing and Technology", address: "4747 S Broad St Suite 233, Philadelphia, PA 19112", phone: "+1 302-778-1300", website: "trellist.com", decisionMakers: "Jie Yang (ceo), David Atadan (ceo), Maria Gunther (chief executive officer), Melanie Schilling (chief financial officer), Lou Burtell (partner)", roleEmails: "info@trellist.com", otherEmails: "", facebook: "facebook.com/trellist", instagram: "", tiktok: "", youtube: "youtube.com/channel/UCKsQr1gBRV8yKaxDMvf7Knw", yelp: "", twitter: "twitter.com/trellist", linkedin: "linkedin.com/in/mariagunther", pinterest: "", other: "", reviews: 0, rating: 0.0, missingSignals: "", lgbtqFriendly: "No", mainIndustry: "Marketing agency" },
  { name: "WebFX", address: "325 Chestnut St Unit 800, Philadelphia, PA 19106", phone: "+1 215-392-2875", website: "webfx.com", decisionMakers: "David Miller (president), Bill Craig (president), Heather Brown (director), Hamida Bapoo (project manager)", roleEmails: "sales@webfx.com", otherEmails: "", facebook: "facebook.com/webfxinc", instagram: "instagram.com/webfx/", tiktok: "", youtube: "youtube.com/channel/UCQPrlLwp_cv1fCupqSK66jg", yelp: "", twitter: "x.com/webfx", linkedin: "linkedin.com/company/webfxinc", pinterest: "", other: "", reviews: 7, rating: 4.4, missingSignals: "google_ads, tiktok_pixel", lgbtqFriendly: "No", mainIndustry: "Marketing agency" },
  { name: "Bennie Frank Marketing", address: "2929 Arch St, Philadelphia, PA 19104", phone: "+1 484-250-9436", website: "benniefrankmarketing.com", decisionMakers: "Bennie Frank (partner)", roleEmails: "", otherEmails: "", facebook: "", instagram: "instagram.com/benniefrankmktg/", tiktok: "", youtube: "", yelp: "", twitter: "", linkedin: "linkedin.com/in/brian-honicky", pinterest: "", other: "", reviews: 0, rating: 0.0, missingSignals: "google_ads, tiktok_pixel, linkedin_insight", lgbtqFriendly: "No", mainIndustry: "Marketing agency" },
  { name: "Growth Marketing", address: "1611 E Eyre St, Philadelphia, PA 19125", phone: "+1 908-256-4822", website: "growthmarketingonline.com", decisionMakers: "Rishabh Dev (owner)", roleEmails: "", otherEmails: "", facebook: "", instagram: "", tiktok: "", youtube: "", yelp: "", twitter: "", linkedin: "", pinterest: "", other: "", reviews: 2, rating: 5.0, missingSignals: "", lgbtqFriendly: "No", mainIndustry: "Marketing agency" },
  { name: "pharosIQ", address: "1818 Market St 37th floor, Philadelphia, PA 19103", phone: "+1 215-587-8800", website: "pharosiq.com", decisionMakers: "Lauren Tanaka (vp), Vanessa Parker (it security director), John Mitchell (marketing manager)", roleEmails: "", otherEmails: "", facebook: "", instagram: "", tiktok: "", youtube: "", yelp: "", twitter: "", linkedin: "linkedin.com/company/pharosiq", pinterest: "", other: "", reviews: 17, rating: 3.1, missingSignals: "", lgbtqFriendly: "No", mainIndustry: "Marketing agency" },
  { name: "Units - Franchise Marketing Agency", address: "1516 N 5th St # 309, Philadelphia, PA 19122", phone: "+1 217-656-1717", website: "units.marketing", decisionMakers: "Jon Vogel (founder), Garrett Gillin (founder), Jeffrey Thies (partner), Mark Siracusa (operations director), Mikayla Yoshida (marketing director)", roleEmails: "", otherEmails: "", facebook: "facebook.com/units.marketing", instagram: "instagram.com/units.franchise.agency/", tiktok: "", youtube: "", yelp: "", twitter: "", linkedin: "linkedin.com/company/unitsmarketing", pinterest: "", other: "", reviews: 24, rating: 5.0, missingSignals: "meta_pixel, google_ads, tiktok_pixel, +1 more", lgbtqFriendly: "No", mainIndustry: "Marketing agency" },
];

type Col = { k: keyof Row; l: string; w: string; mono?: boolean };

const COLS: Col[] = [
  { k: "name", l: "Name", w: "min-w-[180px]" },
  { k: "address", l: "Address", w: "min-w-[240px]" },
  { k: "phone", l: "Phone", w: "min-w-[130px]" },
  { k: "website", l: "Website", w: "min-w-[160px]", mono: true },
  { k: "decisionMakers", l: "Decision Makers & Emails", w: "min-w-[300px]" },
  { k: "roleEmails", l: "Role Emails", w: "min-w-[200px]", mono: true },
  { k: "facebook", l: "Facebook", w: "min-w-[160px]", mono: true },
  { k: "instagram", l: "Instagram", w: "min-w-[160px]", mono: true },
  { k: "linkedin", l: "LinkedIn", w: "min-w-[180px]", mono: true },
  { k: "twitter", l: "Twitter / X", w: "min-w-[140px]", mono: true },
  { k: "reviews", l: "Reviews", w: "min-w-[70px]" },
  { k: "rating", l: "★", w: "min-w-[50px]" },
  { k: "missingSignals", l: "Missing Marketing Signals", w: "min-w-[220px]" },
  { k: "lgbtqFriendly", l: "LGBTQ Friendly", w: "min-w-[110px]" },
  { k: "mainIndustry", l: "Main Industry", w: "min-w-[130px]" },
];

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.14em] text-brand-primary mb-3">
      <span className="w-5 h-px bg-brand-primary/50" />
      {children}
    </div>
  );
}

export function SampleExport() {
  const [downloaded, setDownloaded] = useState(false);
  const posthog = usePostHog();

  const visibleRows = SAMPLE_ROWS.slice(0, 8);
  const blurredRows = SAMPLE_ROWS.slice(8);

  return (
    <section
      id="sample"
      className="bg-white py-20 md:py-28 border-b border-black/[0.05]"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <SectionLabel>See real output</SectionLabel>
          <h2 className="text-[34px] md:text-[44px] font-bold tracking-[-0.02em] leading-[1.05] text-brand-secondary text-balance">
            Don&apos;t take our word for it. <span className="text-brand-primary">Take a sample.</span>
          </h2>
          <p className="mt-4 text-[17px] leading-relaxed text-brand-secondary/70 text-pretty">
            35 of 3,287 marketing agency leads in Philadelphia, PA — exactly what you&apos;ll see in your export. Browse
            it inline, or download the file.
          </p>
        </div>

        <div className="rounded-2xl border border-black/[0.08] bg-white shadow-[0_30px_60px_-30px_rgba(45,49,66,0.25)] overflow-hidden">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 px-5 py-4 border-b border-black/[0.06] bg-gradient-to-b from-[#FBF8F6] to-white">
            <div className="flex items-center gap-3 min-w-0">
              <div className="w-9 h-9 rounded-md bg-brand-primary/10 text-brand-primary flex items-center justify-center shrink-0">
                <Database className="w-[18px] h-[18px]" />
              </div>
              <div className="min-w-0">
                <div className="font-mono text-[13px] font-semibold text-brand-secondary truncate">
                  Philadelphia_marketing_agencies_demo.csv
                </div>
                <div className="text-[12px] text-brand-secondary/60">35 rows · 32 columns · real WebLeads export</div>
              </div>
            </div>
            <div className="flex items-center gap-2 flex-wrap">
              <a
                href="/Philadelphia_marketing_agencies_demo.csv"
                download
                onClick={() => {
                  setDownloaded(true);
                  posthog?.capture("sample_csv_downloaded");
                }}
                className="inline-flex items-center gap-1.5 h-9 px-4 rounded-lg bg-brand-primary text-white text-[13px] font-semibold shadow-sm hover:bg-brand-primary-hover transition"
              >
                <Download className="w-[14px] h-[14px]" />
                {downloaded ? "Downloaded ✓" : "Download CSV"}
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="overflow-auto max-h-[480px]">
              <table className="w-full text-[12.5px]">
                <thead className="sticky top-0 z-10">
                  <tr className="bg-brand-secondary/[0.04] border-b border-black/[0.06]">
                    <th className="text-[10.5px] font-bold uppercase tracking-wider text-brand-secondary/50 px-3 py-2.5 text-left">
                      #
                    </th>
                    {COLS.map((c) => (
                      <th
                        key={c.k}
                        className={`text-[10.5px] font-bold uppercase tracking-wider text-brand-secondary/50 px-3 py-2.5 text-left whitespace-nowrap ${c.w}`}
                      >
                        {c.l}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {visibleRows.map((r, i) => (
                    <tr key={i} className="border-b border-black/[0.04] hover:bg-brand-light/30 transition">
                      <td className="px-3 py-2.5 text-brand-secondary/40 font-mono text-[11px]">
                        {i + 1}
                      </td>
                      {COLS.map((c) => (
                        <td
                          key={c.k}
                          className={`px-3 py-2.5 text-brand-secondary/85 ${
                            c.mono ? "font-mono text-[11.5px]" : ""
                          } whitespace-nowrap`}
                        >
                          {c.k === "rating" ? (
                            <span className="inline-flex items-center gap-1">
                              <Star className="w-[11px] h-[11px] text-brand-accent fill-brand-accent" />
                              {r[c.k]}
                            </span>
                          ) : c.k === "name" ? (
                            <span className="font-semibold text-brand-secondary">{r[c.k]}</span>
                          ) : c.k === "decisionMakers" ? (
                            <span className="max-w-[280px] truncate block" title={r[c.k] as string}>{r[c.k]}</span>
                          ) : (
                            String(r[c.k])
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                  {blurredRows.map((r, i) => (
                    <tr key={`b${i}`} className="border-b border-black/[0.04] select-none">
                      <td className="px-3 py-2.5 text-brand-secondary/30 font-mono text-[11px]">
                        {visibleRows.length + i + 1}
                      </td>
                      {COLS.map((c) => (
                        <td
                          key={c.k}
                          className={`px-3 py-2.5 text-brand-secondary/30 ${
                            c.mono ? "font-mono text-[11.5px]" : ""
                          } whitespace-nowrap`}
                          style={{ filter: "blur(4px)" }}
                        >
                          {c.k === "rating" ? `★ ${r[c.k]}` : String(r[c.k])}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="absolute inset-x-0 bottom-0 pt-20 pb-5 px-5 bg-gradient-to-t from-white via-white/95 to-transparent">
              <div className="max-w-md mx-auto rounded-xl bg-white border border-brand-primary/15 shadow-[0_20px_40px_-20px_rgba(138,48,51,0.3)] p-5 text-center">
                <div className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-brand-primary mb-2">
                  <Zap className="w-3 h-3" /> 3,252 more leads waiting
                </div>
                <div className="text-[15px] font-semibold text-brand-secondary mb-3 text-balance">
                  Run your own search - get the full list.
                </div>
                <a
                  href="https://app.webleads.site/register"
                  className="inline-flex items-center gap-1.5 h-10 px-5 rounded-lg bg-brand-primary text-white text-[13.5px] font-semibold hover:bg-brand-primary-hover transition shadow-sm"
                >
                  Start free <ArrowRight className="w-[14px] h-[14px]" />
                </a>
                <div className="mt-2 text-[11.5px] text-brand-secondary/55">
                  No credit card · 2 free searches · 500 results each
                </div>
              </div>
            </div>
          </div>

          <div className="px-5 py-3 bg-brand-secondary/[0.02] border-t border-black/[0.06] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 text-[12px] text-brand-secondary/65">
            <div className="flex items-center gap-3 flex-wrap">
              <span className="inline-flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> Live SMTP-verified
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Shield className="w-3 h-3" /> Public data only
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Globe className="w-3 h-3" /> Source: Google Maps + websites
              </span>
            </div>
            <div className="font-mono text-[11px] text-brand-secondary/50">
              query: marketing agencies in Philadelphia, PA · 35 / 3,287
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
