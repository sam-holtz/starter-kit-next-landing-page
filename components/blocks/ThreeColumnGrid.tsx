import { BlockData } from '@gocontento/client'
import Link from 'next/link'

export default function ThreeColumnGrid({ block }: { block: BlockData }) {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="prose mb-12 max-w-none">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
            {block.fields.title.text}
          </h2>
          {block.fields.text.text && (
            <p className="mt-4 text-lg text-slate-600">{block.fields.text.text}</p>
          )}
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {block.fields.content.blocks.map((card: BlockData) => (
            <div key={card.fields.title.text} className="card-modern flex flex-col">
              <h3 className="text-xl font-semibold text-slate-900">
                {card.fields.title.text}
              </h3>
              <p className="mt-3 flex-1 text-slate-600">
                {card.fields.text.text}
              </p>
              {card.fields.button.blocks.length > 0 && (
                <Link
                  href={card.fields.button.blocks[0].fields.button_url.text}
                  className="not-prose mt-6 inline-flex font-semibold text-emerald-600 transition-colors hover:text-emerald-700"
                  target={
                    card.fields.button.blocks[0].fields.open_in_new_tab.is_on
                      ? '_blank'
                      : ''
                  }
                >
                  {card.fields.button.blocks[0].fields.button_text.text}
                  <span className="ml-1">→</span>
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
