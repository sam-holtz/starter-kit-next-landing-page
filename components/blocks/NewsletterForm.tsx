import { BlockData } from '@gocontento/client'

export default function NewsletterForm({ block }: { block: BlockData }) {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-2xl">
        <div className="prose mb-10 text-center">
          <h2 className="mt-0 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
            {block.fields.title.text}
          </h2>
          <div
            dangerouslySetInnerHTML={{ __html: block.fields.text.text }}
            className="text-lg text-slate-600"
          />
        </div>
        <form className="flex flex-col gap-4 rounded-2xl border border-slate-200/80 bg-white p-8 shadow-sm sm:flex-row sm:items-end">
          <div className="flex-1">
            <label className="mb-2 block text-sm font-semibold text-slate-700" htmlFor="full-name">
              Full Name
            </label>
            <input
              className="input-modern"
              id="full-name"
              type="text"
              placeholder="Your name"
            />
          </div>
          <div className="flex-1">
            <label className="mb-2 block text-sm font-semibold text-slate-700" htmlFor="email">
              Email
            </label>
            <input
              className="input-modern"
              id="email"
              type="email"
              placeholder="you@example.com"
            />
          </div>
          <button type="button" className="btn-primary shrink-0">
            Sign Up
          </button>
        </form>
      </div>
    </section>
  )
}
