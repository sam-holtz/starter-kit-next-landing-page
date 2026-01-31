import { ContentLinks } from '@/types/types'
import { BlockData } from '@gocontento/client'
import Image from 'next/image'

export default function Testimonials({ block }: { block: BlockData }) {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="prose mb-12 text-center">
          <h2 className="mt-0 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl lg:text-5xl">
            {block.fields.title.text}
          </h2>
          {block.fields.text.text && (
            <p className="text-lg text-slate-600">{block.fields.text.text}</p>
          )}
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {block.fields.testimonials.content_links.length > 0 &&
            block.fields.testimonials.content_links.map(
              (item: ContentLinks) => (
                <Testimonial
                  item={item}
                  key={item.content_link.fields.author.text}
                />
              ),
            )}
        </div>
      </div>
    </section>
  )
}

function Testimonial({ item }: { item: ContentLinks }) {
  return (
    <div className="card-modern">
      <div className="flex items-center gap-4">
        <Image
          src={item.content_link.fields.image.assets[0].asset.url}
          alt={item.content_link.fields.image.assets[0].asset.description}
          className="h-14 w-14 rounded-full object-cover ring-2 ring-slate-100"
          width={56}
          height={56}
        />
        <div>
          <h3 className="font-semibold text-slate-900">
            {item.content_link.fields.author.text}
          </h3>
          <p className="text-sm text-slate-500">
            {item.content_link.fields.role.text}
          </p>
        </div>
      </div>
      <blockquote className="mt-6 text-slate-600">
        &ldquo;{item.content_link.fields.quote.text}&rdquo;
      </blockquote>
    </div>
  )
}
