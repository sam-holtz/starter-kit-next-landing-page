import { BlockData } from '@gocontento/client'
import Image from 'next/image'
import Link from 'next/link'

export default function Logos({ block }: { block: BlockData }) {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {block.fields.subtitle.text && (
          <h3 className="mb-12 text-center text-lg font-medium text-slate-600">
            {block.fields.subtitle.text}
          </h3>
        )}
        <div className="grid grid-cols-2 gap-8 md:grid-cols-3 md:gap-12 lg:grid-cols-6">
          {block.fields.logos.blocks.map((logoBlock: BlockData, index: number) => (
            <Link
              href={logoBlock.fields.url.text}
              key={`logo-block-${index}`}
              className="flex items-center justify-center grayscale transition-all hover:grayscale-0"
            >
              <Image
                src={logoBlock.fields.logo.assets[0].asset.url}
                alt={logoBlock.fields.logo.assets[0].asset.description}
                className="h-12 w-auto object-contain"
                width={120}
                height={50}
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
