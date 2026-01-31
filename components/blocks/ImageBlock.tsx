import { BlockData } from '@gocontento/client'
import Image from 'next/image'

export default function ImageBlock({ block }: { block: BlockData }) {
  return block.fields.image.assets.length > 0 ? (
    <section className="py-16 md:py-24">
      <div className="overflow-hidden rounded-2xl shadow-soft ring-1 ring-slate-200/60">
        <Image
          src={block.fields.image.assets[0].asset.url}
          alt={block.fields.image.assets[0].asset.description}
          className="h-full w-full object-cover"
          width={1200}
          height={600}
        />
      </div>
    </section>
  ) : null
}
