import Image from "next/image"

export function DataSources() {
  return (
    <section className="py-16 px-4 bg-brand-light">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-brand-primary mb-4">
          Powered by Google Maps
        </h2>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          We pull fresh leads from the world&apos;s largest business directory — 200M+ listings across 195+ countries.
        </p>

        {/* Google Maps (Active) */}
        <div className="mb-12">
          <div className="bg-white p-6 rounded-xl shadow-lg inline-flex items-center justify-center">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Google_Maps_Logo_2020-wJkjy7sUom10fXL2xtRF3ckWly5ngU.svg"
              alt="Google Maps Business Data"
              width={280}
              height={280}
              className="object-contain"
              priority
            />
          </div>
        </div>

        <p className="text-sm text-gray-400 mt-6">More data sources coming soon.</p>
      </div>
    </section>
  )
}
