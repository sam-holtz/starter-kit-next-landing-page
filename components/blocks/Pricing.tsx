import { BlockData, FieldData } from '@gocontento/client'
import Link from 'next/link'
import { CheckIcon } from '@heroicons/react/24/solid'

export default function Pricing({ block }: { block: BlockData }) {
  return (
    <section className="space-y-16 py-16 md:py-24">
      <div className="prose mx-auto max-w-none text-center">
        <h2 className="mt-0 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl lg:text-5xl">
          {block.fields.title.text}
        </h2>
        {block.fields.text.text && (
          <p className="text-lg text-slate-600">{block.fields.text.text}</p>
        )}
      </div>
      <div className="grid gap-8 lg:grid-cols-3 lg:gap-6">
        {block.fields.pricing_blocks.blocks.map((price_block: BlockData) => (
          <div
            key={price_block.fields.subtitle.text}
            className="card-modern flex flex-col"
          >
            <h3 className="text-center text-lg font-semibold text-slate-900">
              {price_block.fields.subtitle.text}
            </h3>
            <div className="mt-4 text-center text-4xl font-bold text-emerald-600 lg:text-5xl">
              {price_block.fields.price.text}
            </div>
            <p className="mt-4 text-center text-slate-600">
              {price_block.fields.text.text}
            </p>
            <ul className="mt-8 space-y-4">
              {price_block.fields.list.list.map((item: FieldData) => (
                <li key={item.text} className="flex items-start gap-3">
                  <CheckIcon className="h-5 w-5 shrink-0 text-emerald-600" />
                  <span className="text-slate-600">{item.text}</span>
                </li>
              ))}
            </ul>
            <Link
              href={price_block.fields.button.blocks[0].fields.button_url.text}
              className="btn-primary mt-auto w-full text-center"
              target={
                price_block.fields.button.blocks[0].fields.open_in_new_tab.is_on
                  ? '_blank'
                  : ''
              }
            >
              {price_block.fields.button.blocks[0].fields.button_text.text}
            </Link>
          </div>
        ))}
      </div>
    </section>
  )
}
