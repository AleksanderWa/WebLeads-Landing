import Image from "next/image"

export function DataSources() {
  return (
    <section className="py-16 px-4 bg-brand-light">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-brand-primary mb-4">Our Data Sources</h2>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          We gather high-quality leads from trusted business directories, with more sources coming soon to expand your
          reach.
        </p>

        {/* Google Maps (Active) */}
        <div className="mb-12">
          <div className="bg-white p-6 rounded-xl shadow-lg inline-flex items-center justify-center">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Google_Maps_Logo_2020-wJkjy7sUom10fXL2xtRF3ckWly5ngU.svg"
              alt="Google Maps logo"
              width={280}
              height={280}
              className="object-contain"
              priority
            />
          </div>
        </div>



        <h3 className="text-2xl font-semibold text-brand-secondary mb-6">Coming Soon</h3>

        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {/* LinkedIn (Coming Soon) */}
          <div className="relative">
            <div
              className="bg-gray-100 p-4 rounded-lg opacity-40 grayscale flex items-center justify-center"
              style={{ width: 120, height: 120 }}
            >
              <Image
                src="LinkedIn_logo.png"
                alt="LinkedIn logo"
                width={120}
                height={120}
                className="object-contain"
              />
            </div>
            <span className="absolute -top-2 -right-2 bg-brand-accent text-brand-secondary text-xs font-bold px-2 py-1 rounded-full transform rotate-12 shadow-sm">
              Coming soon
            </span>
          </div>

          {/* Yelp (Coming Soon) */}
          <div className="relative">
            <div
              className="bg-gray-100 p-4 rounded-lg opacity-40 grayscale flex items-center justify-center"
              style={{ width: 140, height: 70 }}
            >
              <Image
                src="/Yelp_logo.png"
                alt="Yelp logo"
                width={140}
                height={70}
                className="object-contain"
              />
            </div>
            <span className="absolute -top-2 -right-2 bg-brand-accent text-brand-secondary text-xs font-bold px-2 py-1 rounded-full transform rotate-12 shadow-sm">
              Coming soon
            </span>
          </div>

          {/* Yellow Pages (Coming Soon) */}
          <div className="relative">
            <div
              className="bg-gray-100 p-4 rounded-lg opacity-40 grayscale flex items-center justify-center"
              style={{ width: 140, height: 50 }}
            >
              <Image
                src="/Yellow_Pages.png"
                alt="Yellow Pages logo"
                width={140}
                height={50}
                className="object-contain"
              />
            </div>
            <span className="absolute -top-2 -right-2 bg-brand-accent text-brand-secondary text-xs font-bold px-2 py-1 rounded-full transform rotate-12 shadow-sm">
              Coming soon
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
