import { BlockData } from '@gocontento/client'
import Button from './Button'

export default function CTA({ block }: { block: BlockData }) {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-4xl">
        <div className="overflow-hidden rounded-3xl border border-slate-200/80 bg-gradient-to-br from-slate-50 to-white px-8 py-16 shadow-soft md:px-16 md:py-24">
          <div className="prose mx-auto max-w-none text-center">
            <h2 className="mt-0 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl lg:text-5xl">
              {block.fields.title.text}
            </h2>
            <p className="text-lg text-slate-600">{block.fields.text.text}</p>
            {block.fields.button.blocks.length > 0 && (
              <div className="mt-8 flex justify-center">
                {block.fields.button.blocks.map((button: BlockData) => (
                  <Button key={button.fields.button_text.text} button={button} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
