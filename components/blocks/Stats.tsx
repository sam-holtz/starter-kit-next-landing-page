import { BlockData } from '@gocontento/client'

export default function Stats({ block }: { block: BlockData }) {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-6xl">
        {block.fields.title.text && (
          <h2 className="mb-12 text-center text-lg font-medium text-slate-600">
            {block.fields.title.text}
          </h2>
        )}
        <div className="grid gap-8 rounded-2xl border border-slate-200/80 bg-white px-8 py-12 shadow-sm md:grid-cols-3 md:gap-12">
          {block.fields.stat_blocks.blocks.map(
            (statBlock: BlockData, index: number) => (
              <div
                className="flex flex-col items-center gap-3 text-center"
                key={`stat-block-${index}`}
              >
                <p className="text-sm font-medium text-slate-500">
                  {statBlock.fields.subtitle.text}
                </p>
                <p className="text-4xl font-bold text-emerald-600 md:text-5xl">
                  {statBlock.fields.stat.text}
                </p>
              </div>
            ),
          )}
        </div>
      </div>
    </section>
  )
}
