import { BlockData } from '@gocontento/client'
import Link from 'next/link'

export default function Button({ button }: { button: BlockData }) {
  return (
    <Link
      href={button.fields.button_url.text}
      className="btn-primary not-prose my-7 inline-flex lg:mb-0"
      target={button.fields.open_in_new_tab.is_on ? '_blank' : ''}
    >
      {button.fields.button_text.text}
    </Link>
  )
}
