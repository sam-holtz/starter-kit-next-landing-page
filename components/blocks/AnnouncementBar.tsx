import { ContentData } from '@gocontento/client'

export default function AnnouncementBar({ block }: { block: ContentData }) {
  return (
    <div className="bg-gradient-to-r from-emerald-600 to-emerald-700 px-4 py-3 text-center">
      <div
        dangerouslySetInnerHTML={{ __html: block.fields.announcement.text }}
        className="prose prose-invert mx-auto max-w-none text-center text-sm font-medium text-white"
      />
    </div>
  )
}
