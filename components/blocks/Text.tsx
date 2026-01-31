import { BlockData } from '@gocontento/client'
import Button from './Button'

export default function Text({ block }: { block: BlockData }) {
  return (
    <section className="py-16 md:py-24">
      <div className="prose mx-auto max-w-3xl">
        <div
          dangerouslySetInnerHTML={{ __html: block.fields.text.text }}
          className="text-lg text-slate-600"
        />
        {block.fields.button.blocks.length > 0 && (
          <div className="mt-8 flex flex-wrap gap-4">
            {block.fields.button.blocks.map((button: BlockData) => (
              <Button key={button.fields.button_text.text} button={button} />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
