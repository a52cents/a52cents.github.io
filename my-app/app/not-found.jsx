import Link from 'next/link'
import React from 'react'

const notFound = () => {
  return (
    <div>
        Sorry the page you are looking does not exist.
        <Link href={"/"}>Return home !</Link>

    </div>
  )
}

export default notFound