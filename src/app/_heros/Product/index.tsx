import React, { Fragment } from 'react'

import { Category, Product } from '../../../payload/payload-types'
import { Gutter } from '../../_components/Gutter'
import { Media } from '../../_components/Media'
import { Price } from '../../_components/Price'

import classes from './index.module.scss'

export const ProductHero: React.FC<{
  product: Product
}> = ({ product }) => {
  const { title, categories, meta: { image: metaImage, description } = {} } = product

  return (
    <Gutter className={classes.productHero}>
      <div className={classes.mediaWrapper}>
        {!metaImage && <div className={classes.placeholder}>No image</div>}
        {metaImage && typeof metaImage !== 'string' && (
          <Media imgClassName={classes.image} resource={metaImage} fill />
        )}
      </div>

      <div className={classes.details}>
        <h3 className={classes.title}>{title}</h3>

        <div className={classes.categoryWrapper}>
          <div className={classes.categories}>
            {categories?.map((category, index) => {
              const { title: categoryTitle } = category as Category

              const titleToUse = categoryTitle || 'Generic'
              const isLast = index === categories.length - 1

              return (
                <p key={index} className={classes.category}>
                  {titleToUse} {!isLast && <Fragment>, &nbsp;</Fragment>}
                  <span className={classes.separator}>|</span>
                </p>
              )
            })}
          </div>
          <p className={classes.stock}> In stock</p>
        </div>

        <Price product={product} button={false} />

        <div className={classes.description}>
          <h6>Descripción</h6>
          <p>{description}</p>
        </div>
        {/* <a
          href="https://us.onfido.app/l/37e5dfdc-f04a-446e-b56b-87465d8a3377"
          target="_blank"
          rel="noopener noreferrer"
          className={classes.addToCartButton}
        >
          <button className={classes.button}>KYC</button>
        </a>

        <a
          href="https://market-place-sylicon-3-0.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className={classes.addToCartButton}
        >
          <button className={classes.button}>Comprar</button>
        </a> */}
      </div>
    </Gutter>
  )
}
