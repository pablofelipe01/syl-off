'use client'

import React, { Fragment, useEffect, useState } from 'react'
import Link from 'next/link'

import { Settings } from '../../../../payload/payload-types'
import { useAuth } from '../../../_providers/Auth'

export const LogoutPage: React.FC<{
  settings: Settings
}> = props => {
  const { settings } = props
  const { productsPage } = settings || {}
  const { logout } = useAuth()
  const [success, setSuccess] = useState('')
  const [error, setError] = useState('')

  useEffect(() => {
    const performLogout = async () => {
      try {
        await logout()
        setSuccess('Sesión cerrada exitosamente.')
      } catch (_) {
        setError('Ya has cerrado la sesión.')
      }
    }

    performLogout()
  }, [logout])

  return (
    <Fragment>
      {(error || success) && (
        <div>
          <h1>{error || success}</h1>
          <p>
            {'¿Qué te gustaría hacer a continuación?'}
            {typeof productsPage === 'object' && productsPage?.slug && (
              <Fragment>
                {' '}
                <Link href={`/${productsPage.slug}`}>Click aquí</Link>
                {` para volver a los inmuebles.`}
              </Fragment>
            )}
            {` Para volver a iniciar sesión, `}
            <Link href="/login">lick aquí</Link>
            {'.'}
          </p>
        </div>
      )}
    </Fragment>
  )
}
