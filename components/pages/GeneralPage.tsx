'use client'

import { ContentData } from '@gocontento/client/lib/types'
import { useLivePreview } from '@gocontento/next'
import BlockMatcher from '../BlockMatcher'

export default function GeneralPage({
  initialContent,
}: {
  initialContent: ContentData
}) {
  const { content } = useLivePreview({ content: initialContent })

  return (
    <div className="min-h-screen">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <BlockMatcher blocks={content.fields.content.blocks} />
      </div>
    </div>
  )
}
