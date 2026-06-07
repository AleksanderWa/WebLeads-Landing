"use client";

import { useEffect, useMemo, useState } from "react";
import {
  ArrowRight,
  Copy,
  Database,
  Download,
  Globe,
  Shield,
  Star,
  Zap,
} from "lucide-react";

type Row = {
  biz: string;
  cat: string;
  addr: string;
  phone: string;
  email: string;
  dm: string;
  dmRole: string;
  dmEmail: string;
  rating: number;
  reviews: number;
  site: string;
  conf: number;
};

const SAMPLE_ROWS: Row[] = [
  { biz: "Westlake Family Dental", cat: "Dentist", addr: "3201 Bee Cave Rd, Austin, TX 78746", phone: "+1 (512) 555-0182", email: "hello@westlakefamilydental.com", dm: "Dr. Marcus Lee", dmRole: "Owner", dmEmail: "marcus@westlakefamilydental.com", rating: 4.9, reviews: 412, site: "westlakefamilydental.com", conf: 100 },
  { biz: "Round Rock Smiles", cat: "Dentist", addr: "1100 N IH-35, Round Rock, TX 78664", phone: "+1 (512) 555-0214", email: "office@roundrocksmiles.com", dm: "Sarah Chen", dmRole: "Practice Manager", dmEmail: "sarah@roundrocksmiles.com", rating: 4.8, reviews: 287, site: "roundrocksmiles.com", conf: 100 },
  { biz: "Hill Country Dental Co.", cat: "Dentist", addr: "4521 Far West Blvd, Austin, TX 78731", phone: "+1 (512) 555-0367", email: "contact@hillcountrydental.co", dm: "Dr. Priya Shah", dmRole: "Founder", dmEmail: "priya@hillcountrydental.co", rating: 4.7, reviews: 198, site: "hillcountrydental.co", conf: 96 },
  { biz: "South Congress Dental", cat: "Dentist", addr: "2104 S Congress Ave, Austin, TX 78704", phone: "+1 (512) 555-0498", email: "admin@southcongressdental.com", dm: "Jorge Ruiz", dmRole: "Owner", dmEmail: "jorge@southcongressdental.com", rating: 4.9, reviews: 521, site: "southcongressdental.com", conf: 100 },
  { biz: "Cedar Park Modern Dentistry", cat: "Dentist", addr: "1335 E Whitestone Blvd, Cedar Park, TX", phone: "+1 (512) 555-0631", email: "hi@cedarparkmd.com", dm: "Dr. Aria Patel", dmRole: "Director", dmEmail: "aria@cedarparkmd.com", rating: 4.8, reviews: 344, site: "cedarparkmd.com", conf: 92 },
  { biz: "Lakeway Smiles Studio", cat: "Dentist", addr: "900 RR 620 S, Lakeway, TX 78734", phone: "+1 (512) 555-0712", email: "team@lakewaysmiles.com", dm: "Becky Owens", dmRole: "Office Manager", dmEmail: "becky@lakewaysmiles.com", rating: 4.6, reviews: 156, site: "lakewaysmiles.com", conf: 100 },
  { biz: "Pflugerville Family Dental", cat: "Dentist", addr: "1000 W Pflugerville Pkwy, Pflugerville, TX", phone: "+1 (512) 555-0844", email: "office@pflugervillefamilydental.com", dm: "Dr. Henrik Olsen", dmRole: "Founder", dmEmail: "henrik@pflugervillefamilydental.com", rating: 4.7, reviews: 261, site: "pflugervillefamilydental.com", conf: 88 },
  { biz: "Barton Springs Dental", cat: "Dentist", addr: "2110 S Lamar Blvd, Austin, TX 78704", phone: "+1 (512) 555-0935", email: "hello@bartonspringsdental.com", dm: "Dr. Maya Cruz", dmRole: "Owner", dmEmail: "maya@bartonspringsdental.com", rating: 4.9, reviews: 478, site: "bartonspringsdental.com", conf: 100 },
  { biz: "Domain Dental Group", cat: "Dentist", addr: "11410 Century Oaks Ter, Austin, TX 78758", phone: "+1 (512) 555-1027", email: "info@domaindentalgroup.com", dm: "Tomás Vega", dmRole: "Practice Manager", dmEmail: "tomas@domaindentalgroup.com", rating: 4.5, reviews: 134, site: "domaindentalgroup.com", conf: 84 },
  { biz: "Mueller Modern Dentistry", cat: "Dentist", addr: "4434 Berkman Dr, Austin, TX 78723", phone: "+1 (512) 555-1158", email: "team@muellermd.com", dm: "Dr. Naomi Park", dmRole: "Director", dmEmail: "naomi@muellermd.com", rating: 4.8, reviews: 392, site: "muellermd.com", conf: 100 },
  { biz: "Bee Cave Dental Arts", cat: "Dentist", addr: "12815 Shops Pkwy, Bee Cave, TX 78738", phone: "+1 (512) 555-1269", email: "hello@beecavedentalarts.com", dm: "Dr. Rashid Khan", dmRole: "Owner", dmEmail: "rashid@beecavedentalarts.com", rating: 4.7, reviews: 215, site: "beecavedentalarts.com", conf: 95 },
  { biz: "East Austin Dental", cat: "Dentist", addr: "2300 E 7th St, Austin, TX 78702", phone: "+1 (512) 555-1374", email: "office@eastaustindental.com", dm: "Lina Park", dmRole: "Founder", dmEmail: "lina@eastaustindental.com", rating: 4.9, reviews: 503, site: "eastaustindental.com", conf: 100 },
];

type Col = { k: keyof Row; l: string; w: string; mono?: boolean };

const COLS: Col[] = [
  { k: "biz", l: "Business", w: "min-w-[180px]" },
  { k: "cat", l: "Category", w: "min-w-[80px]" },
  { k: "addr", l: "Address", w: "min-w-[220px]" },
  { k: "phone", l: "Phone", w: "min-w-[140px]" },
  { k: "email", l: "Business email", w: "min-w-[200px]", mono: true },
  { k: "dm", l: "Decision maker", w: "min-w-[130px]" },
  { k: "dmRole", l: "Role", w: "min-w-[110px]" },
  { k: "dmEmail", l: "DM email", w: "min-w-[200px]", mono: true },
  { k: "rating", l: "★", w: "min-w-[50px]" },
  { k: "reviews", l: "Reviews", w: "min-w-[70px]" },
  { k: "conf", l: "Confidence", w: "min-w-[100px]" },
];

function buildCSV(): string {
  const header = COLS.map((c) => c.l).join(",");
  const rows = SAMPLE_ROWS.map((r) =>
    COLS.map((c) => {
      const v = String(r[c.k] ?? "");
      return /[,"\n]/.test(v) ? `"${v.replace(/"/g, '""')}"` : v;
    }).join(",")
  );
  const footer =
    '\n# Sample export — 12 of 1,287 results for "dentists in Austin, TX"\n# Get your full list at https://webleads.site';
  return [header, ...rows].join("\n") + footer;
}

function buildJSON(generatedAt: string): string {
  return JSON.stringify(
    {
      query: "dentists in Austin, TX",
      total_results: 1287,
      sample_size: SAMPLE_ROWS.length,
      generated_at: generatedAt,
      rows: SAMPLE_ROWS,
    },
    null,
    2
  );
}

function downloadBlob(name: string, content: string, mime: string) {
  const blob = new Blob([content], { type: mime });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = name;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}

function ConfBadge({ v }: { v: number }) {
  const tone = v >= 95 ? "emerald" : v >= 85 ? "amber" : "rose";
  const map: Record<string, string> = {
    emerald: "bg-emerald-50 text-emerald-700 border-emerald-200",
    amber: "bg-amber-50 text-amber-700 border-amber-200",
    rose: "bg-rose-50 text-rose-700 border-rose-200",
  };
  return (
    <span
      className={`inline-flex items-center gap-1 text-[10.5px] font-semibold px-1.5 py-0.5 rounded border ${map[tone]}`}
    >
      <span
        className={`w-1 h-1 rounded-full ${
          tone === "emerald" ? "bg-emerald-600" : tone === "amber" ? "bg-amber-600" : "bg-rose-600"
        }`}
      />
      {v}
    </span>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.14em] text-brand-primary mb-3">
      <span className="w-5 h-px bg-brand-primary/50" />
      {children}
    </div>
  );
}

export function SampleExport() {
  const [tab, setTab] = useState<"csv" | "excel" | "json">("csv");
  const [downloaded, setDownloaded] = useState(false);
  const [copied, setCopied] = useState(false);
  const [generatedAt, setGeneratedAt] = useState<string>("2026-01-01T00:00:00.000Z");

  useEffect(() => {
    setGeneratedAt(new Date().toISOString());
  }, []);

  const csv = useMemo(() => buildCSV(), []);
  const json = useMemo(() => buildJSON(generatedAt), [generatedAt]);

  const onDownload = () => {
    if (tab === "json") downloadBlob("webleads-sample-austin-dentists.json", json, "application/json");
    else downloadBlob("webleads-sample-austin-dentists.csv", csv, "text/csv;charset=utf-8;");
    setDownloaded(true);
  };

  const onCopy = async () => {
    try {
      await navigator.clipboard.writeText(tab === "json" ? json : csv);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {}
  };

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
            Don't take our word for it. <span className="text-brand-primary">Take a sample.</span>
          </h2>
          <p className="mt-4 text-[17px] leading-relaxed text-brand-secondary/70 text-pretty">
            12 of 1,287 dentist leads in Austin, TX — exactly what you'll see in your export. Browse
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
                  webleads-sample-austin-dentists.
                  {tab === "json" ? "json" : tab === "excel" ? "xlsx" : "csv"}
                </div>
                <div className="text-[12px] text-brand-secondary/60">12 rows · 11 columns · 4.2 KB</div>
              </div>
            </div>
            <div className="flex items-center gap-2 flex-wrap">
              <div className="inline-flex p-0.5 rounded-lg bg-brand-secondary/[0.06] text-[12px] font-semibold">
                {(
                  [
                    ["csv", "CSV"],
                    ["excel", "Excel"],
                    ["json", "JSON"],
                  ] as const
                ).map(([k, l]) => (
                  <button
                    key={k}
                    onClick={() => setTab(k)}
                    className={`px-3 py-1.5 rounded-md transition ${
                      tab === k
                        ? "bg-white text-brand-secondary shadow-sm"
                        : "text-brand-secondary/60 hover:text-brand-secondary"
                    }`}
                  >
                    {l}
                  </button>
                ))}
              </div>
              <button
                onClick={onCopy}
                className="inline-flex items-center gap-1.5 h-9 px-3 rounded-lg border border-black/[0.08] text-[12.5px] font-semibold text-brand-secondary hover:bg-brand-secondary/[0.04] transition"
              >
                <Copy className="w-[13px] h-[13px]" /> {copied ? "Copied" : "Copy"}
              </button>
              <button
                onClick={onDownload}
                className="inline-flex items-center gap-1.5 h-9 px-4 rounded-lg bg-brand-primary text-white text-[13px] font-semibold shadow-sm hover:bg-brand-primary-hover transition"
              >
                <Download className="w-[14px] h-[14px]" />
                {downloaded
                  ? "Downloaded ✓"
                  : `Download ${tab === "json" ? "JSON" : tab === "excel" ? "Excel" : "CSV"}`}
              </button>
            </div>
          </div>

          {tab === "json" ? (
            <pre className="bg-[#1A1417] text-[#E8E0D8] text-[12px] font-mono leading-relaxed p-5 overflow-auto max-h-[480px]">
              <code>{json.split("\n").slice(0, 32).join("\n") + "\n  ...\n}"}</code>
            </pre>
          ) : (
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
                            ) : c.k === "conf" ? (
                              <ConfBadge v={r[c.k] as number} />
                            ) : c.k === "biz" ? (
                              <span className="font-semibold text-brand-secondary">{r[c.k]}</span>
                            ) : (
                              r[c.k]
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
                            {c.k === "rating"
                              ? `★ ${r[c.k]}`
                              : c.k === "conf"
                              ? r[c.k]
                              : r[c.k]}
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
                    <Zap className="w-3 h-3" /> 1,275 more leads waiting
                  </div>
                  <div className="text-[15px] font-semibold text-brand-secondary mb-3 text-balance">
                    Run your own search — get the full list in 60 seconds.
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
          )}

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
              query: dentists in Austin, TX · 12 / 1,287
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
