import { BlockData, ContentData } from '@gocontento/client'
import Link from 'next/link'

const EMAIL = 'samholtz1205@gmail.com'
const GITHUB_URL = 'https://github.com/sam-holtz'

export default function Footer({ footerNav }: { footerNav: ContentData }) {
  return (
    <footer className="border-t border-slate-200 bg-slate-50/80">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <FooterNav footerNav={footerNav} />
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
            <a
              href={`mailto:${EMAIL}`}
              className="text-sm font-medium text-slate-600 transition-colors hover:text-emerald-600"
            >
              {EMAIL}
            </a>
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-slate-600 transition-colors hover:text-emerald-600"
            >
              GitHub
            </a>
          </div>
        </div>
        <div className="mt-8 border-t border-slate-200 pt-8">
          <p className="text-center text-sm text-slate-500">
            &copy; {new Date().getFullYear()} Sam Holtz. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

function FooterNav({ footerNav }: { footerNav: ContentData }) {
  return (
    <div className="flex flex-wrap gap-6">
      {footerNav.fields.nav_links.blocks &&
        footerNav.fields.nav_links.blocks.map((link: BlockData) => (
          <Link
            href={link.fields.link_url.text}
            className="text-sm font-medium text-slate-600 transition-colors hover:text-emerald-600"
            target={link.fields.open_in_new_tab.is_on ? '_blank' : ''}
            key={link.fields.link_text.text}
          >
            {link.fields.link_text.text}
          </Link>
        ))}
    </div>
  )
}
