import { BlockData } from '@gocontento/client'

export default function ContactForm({ block }: { block: BlockData }) {
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
        <form className="space-y-6 rounded-2xl border border-slate-200/80 bg-white p-8 shadow-sm">
          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <label
                className="mb-2 block text-sm font-semibold text-slate-700"
                htmlFor="contact-full-name"
              >
                Full Name
              </label>
              <input
                className="input-modern"
                id="contact-full-name"
                type="text"
                placeholder="Your name"
              />
            </div>
            <div>
              <label
                className="mb-2 block text-sm font-semibold text-slate-700"
                htmlFor="contact-email"
              >
                Email
              </label>
              <input
                className="input-modern"
                id="contact-email"
                type="email"
                placeholder="you@example.com"
              />
            </div>
          </div>
          <div>
            <label
              className="mb-2 block text-sm font-semibold text-slate-700"
              htmlFor="contact-message"
            >
              Message
            </label>
            <textarea
              className="input-modern min-h-[180px] resize-y"
              id="contact-message"
              placeholder="Your message..."
            />
          </div>
          <button type="button" className="btn-primary w-full sm:w-auto">
            Send Message
          </button>
        </form>
      </div>
    </section>
  )
}
