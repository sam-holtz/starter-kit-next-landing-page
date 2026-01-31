'use client'

import { BlockData, ContentData } from '@gocontento/client'
import Logo from '@/images/Logo'
import Link from 'next/link'
import { Disclosure } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { usePathname } from 'next/navigation'
import { classNames } from '@/utils/ClassNames'

export default function Header({ mainNav }: { mainNav: ContentData }) {
  const pathName = usePathname()

  return (
    <Disclosure as="nav" className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur-md">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-20 items-center justify-between">
              <div className="flex flex-shrink-0 items-center">
                <Link
                  href="/"
                  className="inline-block w-[100px] transition-opacity hover:opacity-90 lg:w-[120px]"
                >
                  <Logo className="h-auto w-full" />
                </Link>
              </div>
              <div>
                <div className="hidden md:ml-6 md:flex md:items-center md:gap-8">
                  {mainNav.fields.nav_links.blocks.map((item: BlockData) => {
                    if (item.fields.button.is_on) {
                      return (
                        <Disclosure.Button
                          key={item.fields.link_text.text}
                          as={Link}
                          href={item.fields.link_url.text}
                          className="inline-flex items-center rounded-lg bg-emerald-600 px-5 py-2.5 font-semibold text-white shadow-sm transition-all duration-200 hover:bg-emerald-700 hover:shadow-md"
                          target={
                            item.fields.open_in_new_tab.is_on ? '_blank' : ''
                          }
                        >
                          {item.fields.link_text.text}
                        </Disclosure.Button>
                      )
                    } else {
                      return (
                        <Disclosure.Button
                          key={item.fields.link_text.text}
                          as={Link}
                          href={item.fields.link_url.text}
                          className={classNames(
                            pathName.startsWith(item.fields.link_url.text)
                              ? 'text-emerald-600'
                              : 'text-slate-600 hover:text-slate-900',
                            'text-sm font-semibold transition-colors',
                          )}
                          target={
                            item.fields.open_in_new_tab.is_on ? '_blank' : ''
                          }
                        >
                          {item.fields.link_text.text}
                        </Disclosure.Button>
                      )
                    }
                  })}
                </div>
                <div className="-ml-2 mr-2 flex items-center md:hidden">
                  <Disclosure.Button className="inline-flex items-center justify-center rounded-lg p-2 text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-900">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
              </div>
            </div>
          </div>
          <Disclosure.Panel className="absolute left-0 right-0 z-50 border-b border-slate-200 bg-white md:hidden">
            <div className="space-y-1 px-4 pb-6 pt-2">
              {mainNav.fields.nav_links.blocks.map((item: BlockData) => {
                if (item.fields.button.is_on) {
                  return (
                    <Disclosure.Button
                      key={item.fields.link_text.text}
                      as={Link}
                      href={item.fields.link_url.text}
                      className="block rounded-lg bg-emerald-600 px-6 py-3 text-center font-semibold text-white"
                      target={item.fields.open_in_new_tab.is_on ? '_blank' : ''}
                    >
                      {item.fields.link_text.text}
                    </Disclosure.Button>
                  )
                } else {
                  return (
                    <Disclosure.Button
                      key={item.fields.link_text.text}
                      as={Link}
                      href={item.fields.link_url.text}
                      className={classNames(
                        pathName.startsWith(item.fields.link_url.text)
                          ? 'text-emerald-600'
                          : 'text-slate-600',
                        'block rounded-lg px-6 py-3 font-semibold',
                      )}
                      target={item.fields.open_in_new_tab.is_on ? '_blank' : ''}
                    >
                      {item.fields.link_text.text}
                    </Disclosure.Button>
                  )
                }
              })}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
