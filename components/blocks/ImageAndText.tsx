import { BlockData } from '@gocontento/client'
import Image from 'next/image'
import Button from './Button'

export default function ImageAndText({ block }: { block: BlockData }) {
  if (
    block.fields.image_side.selected_option.value === 'left' ||
    block.fields.image_side.selected_option.value === 'right'
  ) {
    return <HorizontalImageAndText block={block} />
  }
  if (block.fields.image_side.selected_option.value === 'bottom') {
    return <VerticalImageAndText block={block} />
  }
}

function HorizontalImageAndText({ block }: { block: BlockData }) {
  const image =
    block.fields.image.assets.length > 0 ? (
      <div className="overflow-hidden rounded-2xl shadow-soft ring-1 ring-slate-200/60">
        <Image
          src={block.fields.image.assets[0].asset.url}
          alt={block.fields.image.assets[0].asset.description}
          className="h-full w-full object-cover"
          width={600}
          height={400}
        />
      </div>
    ) : null
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
          {block.fields.image_side.selected_option.value === 'left' && image}
          <div className="prose max-w-none">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
              {block.fields.title.text}
            </h2>
            <div
              dangerouslySetInnerHTML={{ __html: block.fields.text.text }}
              className="mt-6 text-lg text-slate-600"
            />
            {block.fields.buttons.blocks.length > 0 && (
              <div className="mt-8 flex flex-wrap gap-4">
                {block.fields.buttons.blocks.map((button: BlockData) => (
                  <Button
                    key={button.fields.button_text.text}
                    button={button}
                  />
                ))}
              </div>
            )}
          </div>
          {block.fields.image_side.selected_option.value === 'right' && image}
        </div>
      </div>
    </section>
  )
}

function VerticalImageAndText({ block }: { block: BlockData }) {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-12 text-center">
          <div className="prose max-w-none">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl lg:text-5xl">
              {block.fields.title.text}
            </h2>
            <div
              dangerouslySetInnerHTML={{ __html: block.fields.text.text }}
              className="mt-6 text-lg text-slate-600"
            />
            {block.fields.buttons.blocks.length > 0 && (
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                {block.fields.buttons.blocks.map((button: BlockData) => (
                  <Button
                    key={button.fields.button_text.text}
                    button={button}
                  />
                ))}
              </div>
            )}
          </div>
          {block.fields.image.assets.length > 0 && (
            <div className="w-full overflow-hidden rounded-2xl shadow-soft ring-1 ring-slate-200/60">
              <Image
                src={block.fields.image.assets[0].asset.url}
                alt={block.fields.image.assets[0].asset.description}
                className="h-full w-full object-cover"
                width={750}
                height={500}
              />
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
