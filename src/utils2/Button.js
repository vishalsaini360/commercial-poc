import React from 'react'
import Link from 'next/link'

export default function Button({href, className, target, children}) {
  return (
    <Link href={href} className={className} target={target}>{children}</Link>
  )
}
