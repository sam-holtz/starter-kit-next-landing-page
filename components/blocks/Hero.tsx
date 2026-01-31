import { BlockData } from '@gocontento/client'
import Image from 'next/image'
import Button from './Button'

export default function Hero({ block }: { block: BlockData }) {
  return (
    <section className="relative overflow-hidden py-16 md:py-24 lg:py-32">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-slate-50 via-white to-emerald-50/30" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="prose prose-lg max-w-none">
            <h1 className="text-balance text-4xl font-bold tracking-tight text-slate-900 md:text-5xl lg:text-6xl">
              {block.fields.title.text}
            </h1>
            <div
              dangerouslySetInnerHTML={{ __html: block.fields.text.text }}
              className="mt-6 text-lg text-slate-600 lg:max-w-xl"
            />
            {block.fields.button.blocks.length > 0 && (
              <div className="mt-8 flex flex-wrap gap-4">
                {block.fields.button.blocks.map((button: BlockData) => (
                  <Button key={button.fields.button_text.text} button={button} />
                ))}
              </div>
            )}
          </div>
          {block.fields.image.assets.length > 0 && (
            <div className="relative">
              <div className="overflow-hidden rounded-2xl shadow-soft ring-1 ring-slate-200/60">
                <Image
                  src={block.fields.image.assets[0].asset.url}
                  alt={block.fields.image.assets[0].asset.description}
                  className="h-full w-full object-cover"
                  width={750}
                  height={600}
                  priority
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
