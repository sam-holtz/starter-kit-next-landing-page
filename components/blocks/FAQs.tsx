import { ContentLinks } from '@/types/types'
import { classNames } from '@/utils/ClassNames'
import { BlockData } from '@gocontento/client'
import { useState } from 'react'
import { PlusIcon } from '@heroicons/react/16/solid'

export default function FAQs({ block }: { block: BlockData }) {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-3xl">
        <div className="prose mb-12 text-center">
          <h2 className="mt-0 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl lg:text-5xl">
            {block.fields.title.text}
          </h2>
          {block.fields.text?.text && (
            <p className="text-lg text-slate-600">{block.fields.text.text}</p>
          )}
        </div>
        <div className="divide-y divide-slate-200 rounded-2xl border border-slate-200/80 bg-white shadow-sm">
          {block.fields.faqs.content_links[0] &&
            block.fields.faqs.content_links.map((item: ContentLinks) => (
              <FAQ item={item} key={item.content_link.fields.question.text} />
            ))}
        </div>
      </div>
    </section>
  )
}

function FAQ({ item }: { item: ContentLinks }) {
  const [active, setActive] = useState(false)

  return (
    <div className="border-slate-200 first:rounded-t-2xl last:rounded-b-2xl">
      <button
        type="button"
        className="flex w-full cursor-pointer items-center justify-between gap-4 px-6 py-5 text-left transition-colors hover:bg-slate-50/50"
        onClick={() => setActive((prev) => !prev)}
      >
        <h3 className="text-lg font-semibold text-slate-900 lg:text-xl">
          {item.content_link.fields.question.text}
        </h3>
        <PlusIcon
          className={classNames(
            'h-5 w-5 shrink-0 text-slate-400 transition-transform duration-200',
            active && 'rotate-45',
          )}
        />
      </button>
      <div
        className={classNames(
          'px-6 pb-5 text-slate-600',
          active ? 'block' : 'hidden',
        )}
      >
        <div
          className="prose prose-sm max-w-none"
          dangerouslySetInnerHTML={{
            __html: item.content_link.fields.answer.text,
          }}
        />
      </div>
    </div>
  )
}
