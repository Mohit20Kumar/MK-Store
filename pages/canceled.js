import React from 'react'
import Link from 'next/link'

const canceled = () => {
  return (
    <>
    <div className="success-wrapper">
    <div className="success">
    <h3>OOPS, The payment was cancelled!</h3>
    <Link href="/">
    <button type="button" width="300px" className="btn">
      Continue Shopping
    </button>
  </Link>
  </div>
    </div>
    </>
  )
}

export default canceled